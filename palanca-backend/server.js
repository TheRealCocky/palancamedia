import dotenv from 'dotenv'; // 🔥 Carregando primeiro para garantir acesso às variáveis de ambiente
dotenv.config(); // ✅ Lendo variáveis do .env antes de carregar outras dependências

import express from 'express';
import mongoose from 'mongoose';
import http from 'http';
import { Server as SocketIo } from 'socket.io';
import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import mongoose from 'mongoose';
import http from 'http';
import { Server as SocketIo } from 'socket.io';
import cors from 'cors';

import authRoutes from './routes/authRoutes.js';
import newsRoutes from './routes/newsRoutes.js';

const app = express();

const allowedOrigins = [
  'http://localhost:5173',
  'http://localhost:3000',
  'https://palanca-api.onrender.com',
  'https://palancamedia-frontend.vercel.app',
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      return callback(null, true);
    }
    return callback(new Error('Origem não permitida pelo CORS'));
  },
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept", "Authorization"]
}));

app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('✅ Conectado ao MongoDB'))
    .catch((err) => console.error('❌ Erro ao conectar ao MongoDB:', err));

app.get('/', (req, res) => {
  res.send('Servidor está rodando 🚀');
});

app.use('/api/auth', authRoutes);
app.use('/api/news', newsRoutes);

const server = http.createServer(app);
const io = new SocketIo(server, {
  cors: {
    origin: allowedOrigins,
    credentials: true,
  },
});

io.on('connection', (socket) => {
  console.log('🟢 Cliente conectado via WebSocket');
  socket.on('disconnect', () => {
    console.log('🔴 Cliente desconectado');
  });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
});

