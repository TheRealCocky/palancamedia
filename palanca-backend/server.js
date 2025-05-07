import dotenv from 'dotenv'; // 🔥 Carregando primeiro para garantir acesso às variáveis de ambiente
dotenv.config(); // ✅ Lendo variáveis do .env antes de carregar outras dependências

import express from 'express';
import mongoose from 'mongoose';
import http from 'http';
import { Server as SocketIo } from 'socket.io';
import cors from 'cors';
import authRoutes from './routes/authRoutes.js';
import newsRoutes from './routes/newsRoutes.js';

const app = express();

// 🔗 CORS atualizado para permitir conexões do Vercel e Render
const allowedOrigins = [
  'http://localhost:3000',
  'http://localhost:5173',
  'https://palanca-api.onrender.com',
  'https://palancamedia-frontend.vercel.app' // ✅ Atualizado para refletir o frontend correto
];

// CORS middleware com resposta ao preflight (OPTIONS) request
app.use(cors({
  origin: allowedOrigins,
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"], // Permitir os métodos necessários
  allowedHeaders: "Origin, X-Requested-With, Content-Type, Accept, Authorization"
}));

// Resposta ao método OPTIONS para garantir que a requisição de preflight funcione
app.options('*', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*'); // Permite todas as origens ou define para localhost específico
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  res.send(); // Responde à requisição de preflight
});

app.use(express.json());

// 🔗 Conexão com MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('✅ Conectado ao MongoDB'))
    .catch((err) => console.error('❌ Erro ao conectar ao MongoDB:', err));

// 🔗 Rota raiz
app.get('/', (req, res) => {
  res.send('Servidor está rodando 🚀');
});

// 🔗 Rotas de autenticação e notícias
app.use('/api/auth', authRoutes);
app.use('/api/news', newsRoutes);

// 🔗 Configuração do WebSocket (Socket.io)
const server = http.createServer(app);
const io = new SocketIo(server, {
  cors: { origin: allowedOrigins, credentials: true },
});

io.on('connection', (socket) => {
  console.log('🟢 Cliente conectado via WebSocket');

  socket.on('disconnect', () => {
    console.log('🔴 Cliente desconectado');
  });
});

// 🔗 Inicialização do servidor
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
});
