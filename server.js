import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import http from 'http';
import { Server as SocketIo } from 'socket.io';

import authRoutes from './routes/authRoutes.js';
import newsRoutes from './routes/newsRoutes.js';  // Certifique-se de que esta importação está correta

dotenv.config();

const app = express();

// Configurações
app.use(express.json());
app.use(cors()); // Isso já permite requisições de diferentes origens para as rotas REST, mas é necessário configurar para o Socket.io também.

// Criando o servidor HTTP para integrar com o Socket.io
const server = http.createServer(app);

const io = new SocketIo(server, {
  cors: {
    origin: 'http://localhost:5000',
    methods: ['GET', 'POST'],
  },
});

// Conexão com o MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Conectado ao MongoDB'))
    .catch((err) => console.error('Erro ao conectar ao MongoDB:', err));

// Registrando as rotas
app.use('/api/auth', authRoutes); // Certifique-se de que está chamando corretamente as rotas de autenticação
app.use('/api/news', newsRoutes); // Rota de notícias

// Iniciar o servidor na porta configurada
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});



