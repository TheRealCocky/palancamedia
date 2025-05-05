import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import http from 'http';
import { Server as SocketIo } from 'socket.io';

import authRoutes from './routes/authRoutes.js';  // Importando as rotas de autenticação
import newsRoutes from './routes/newsRoutes.js';  // Importando outras rotas (se necessário)

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors({
  origin: [
    'https://palancamedia.vercel.app',  // Permitir acesso da primeira URL
    'https://palancamedia-euclides-baltazars-projects.vercel.app',  // Permitir acesso da segunda URL
    'http://localhost:3000',  // Permitir localhost, se você estiver testando localmente
  ],
  methods: ['GET', 'POST'],
  credentials: true,  // Se for necessário para cookies ou autenticação
}));



// Criando servidor HTTP com Socket.io
const server = http.createServer(app);
const io = new SocketIo(server, {
  cors: {
    origin: [
      'https://palancamedia-kftiborac-euclides-baltazars-projects.vercel.app', // Front-end em produção
    ],
    methods: ['GET', 'POST'],
    credentials: true,
  },
});

// MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('✅ Conectado ao MongoDB'))
    .catch((err) => console.error('❌ Erro ao conectar ao MongoDB:', err));

// Rotas
app.use('/api/auth', authRoutes); // Usando as rotas de autenticação
app.use('/api/news', newsRoutes); // Outras rotas, se necessário

// Inicialização
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
});






