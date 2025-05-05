import jwt from 'jsonwebtoken';

const auth = (req, res, next) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');

    if (!token) {
        return res.status(401).json({ msg: 'Acesso negado. Token não fornecido.' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; // Armazena os dados do usuário no request
        next(); // Segue para o próximo middleware ou controller
    } catch (err) {
        res.status(400).json({ msg: 'Token inválido.' });
    }
};

export default auth;
