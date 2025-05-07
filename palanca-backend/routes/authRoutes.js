import express from 'express';
import { registrar, login } from '../controllers/authController.js';

const router = express.Router();

// Rota para registro (POST)
router.post('/registrar', registrar);

// Rota para login (POST)
router.post('/login', login);

export default router;

