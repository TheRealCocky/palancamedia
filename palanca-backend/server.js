import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import http from 'http';
import { Server as SocketIo } from 'socket.io';
import authRoutes from './routes/authRoutes.js';
import newsRoutes from './routes/newsRoutes.js';

dotenv.config();

const app = express();

// 🔗 CORS compatível com localhost e Render
const allowedOrigins = [
  'http://localhost:3000',
  'https://palanca-api.onrender.com',
  'https://palancamedia.vercel.app'
];

app.use((req, res, next) => {
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
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

// 🔗 Rotas
app.use('/api/auth', authRoutes);
app.use('/api/news', newsRoutes);

// 🔗 Socket.io
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

// 🔗 Inicialização
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
});









