import express from 'express';
import { registrar, login } from '../controllers/authController.js';

const router = express.Router();

// Rota para registro de usuário
router.post('/registrar', registrar);

// Rota para login de usuário
router.post('/login', login);

export default router;