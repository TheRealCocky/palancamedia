import express from 'express';
import { registrar, login } from '../controllers/authController.js';

const router = express.Router();

// Rota para registro
router.post('/registrar', registrar);

// Rota para login
router.post('/login', login);

export default router;
