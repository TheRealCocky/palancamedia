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

// ✅ Coloque o CORS antes de qualquer rota ou middleware
const corsOptions = {
  origin: [
    'https://palancamedia.vercel.app',
    'https://palancamedia-euclides-baltazars-projects.vercel.app',
    'https://palancamedia-git-main-euclides-baltazars-projects.vercel.app',
    'http://localhost:3000',
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  credentials: true,
};
app.use(cors(corsOptions));
app.options('*', cors(corsOptions)); // ✅ Também aplica no preflight

app.use(express.json());

// MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('✅ Conectado ao MongoDB'))
    .catch((err) => console.error('❌ Erro ao conectar ao MongoDB:', err));

// Rotas
app.use('/api/auth', authRoutes);
app.use('/api/news', newsRoutes);

// Socket.io
const server = http.createServer(app);
const io = new SocketIo(server, {
  cors: corsOptions,
});

// Inicialização
const PORT = process.env.PORT || 5001;
server.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
});







