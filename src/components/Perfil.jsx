import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Perfil() {
  const [nome, setNome] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login'); // Redireciona para login se não houver token
    } else {
      const nomeUsuario = localStorage.getItem('nome');
      if (nomeUsuario) {
        setNome(nomeUsuario);
      }
    }
  }, [navigate]);

  return (
    <div>
      <h1>Bem-vindo, {nome || 'Usuário'}!</h1>
      <p>Este é o seu perfil!</p>
    </div>
  );
}

export default Perfil;

