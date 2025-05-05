import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

// Função de registro
export const registrar = async (req, res) => {
  const { nome, email, senha } = req.body;

  try {
    const usuarioExistente = await User.findOne({ email });
    if (usuarioExistente) {
      return res.status(400).json({ msg: 'O email já está em uso.' });
    }

    const salt = await bcrypt.genSalt(10);
    const senhaCriptografada = await bcrypt.hash(senha, salt);

    const novoUsuario = new User({
      nome,
      email,
      senha: senhaCriptografada
    });

    await novoUsuario.save();

    res.status(201).json({ msg: 'Usuário registrado com sucesso!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Erro ao registrar usuário.' });
  }
};

// Função de login
export const login = async (req, res) => {
  const { email, senha } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: 'Usuário não encontrado!' });
    }

    const senhaValida = await bcrypt.compare(senha, user.senha);
    if (!senhaValida) {
      return res.status(400).json({ msg: 'Senha incorreta!' });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token, nome: user.nome }); // Retorna o token e o nome
  } catch (error) {
    console.error('Erro no login:', error);
    res.status(500).json({ msg: 'Erro interno do servidor.' });
  }
};




