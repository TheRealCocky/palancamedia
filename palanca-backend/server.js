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

const allowedOrigins = [
  'https://palancamedia.vercel.app',
  'https://palancamedia-euclides-baltazars-projects.vercel.app',
  'https://palancamedia-kftiborac-euclides-baltazars-projects.vercel.app',
  'http://localhost:3000'
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

// Criando servidor HTTP com Socket.io
const server = http.createServer(app);
const io = new SocketIo(server, {
  cors: {
    origin: allowedOrigins,
    methods: ['GET', 'POST'],
    credentials: true
  }
});

// MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('✅ Conectado ao MongoDB'))
    .catch((err) => console.error('❌ Erro ao conectar ao MongoDB:', err));

// Rotas
app.use('/api/auth', authRoutes);
app.use('/api/news', newsRoutes);

// Inicialização
const PORT = process.env.PORT || 5001;
server.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
});







