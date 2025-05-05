import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import http from 'http';
import { Server as SocketIo } from 'socket.io';

import authRoutes from './routes/authRoutes.js';
import newsRoutes from './routes/newsRoutes.js';

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors({
  origin: [
    'https://palancamedia-kftiborac-euclides-baltazars-projects.vercel.app',  // Front-end em produção
    'https://palancamedia.vercel.app', // Domínio adicional
    'http://localhost:3000' // Front-end local (se você estiver testando localmente)
  ],
  methods: ['GET', 'POST'],
  credentials: true,
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
app.use('/api/auth', authRoutes);
app.use('/api/news', newsRoutes);

// Inicialização
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
});





