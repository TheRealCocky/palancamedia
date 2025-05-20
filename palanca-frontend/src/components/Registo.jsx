import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Registo() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mensagem, setMensagem] = useState('');
  const navigate = useNavigate();

  // Pega a URL da API do arquivo .env (variável de ambiente)
  const API_URL = import.meta.env.VITE_API_URL;
  console.log("API URL carregada:", API_URL);

  const handleRegisto = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${API_URL}/registrar`, {
        nome,
        email,
        senha,
      });

      if (response.data.msg === 'Usuário registrado com sucesso!') {
        setMensagem('Conta criada com sucesso!');
        // Redireciona para login após 1.5s
        setTimeout(() => {
          navigate('/login');
        }, 1500);
      } else {
        setMensagem('Erro inesperado ao registrar usuário.');
      }
    } catch (error) {
      console.error('Erro ao criar conta:', error.response || error.message);
      setMensagem(`Erro ao criar conta: ${error.response?.data?.msg || error.message}`);
    }
  };

  return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <form
            onSubmit={handleRegisto}
            className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm"
        >
          <h2 className="text-2xl font-semibold mb-4 text-center">Criar Conta</h2>
          <input
              type="text"
              placeholder="Nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
              className="border p-2 mb-4 w-full rounded"
          />
          <input
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="email"
              className="border p-2 mb-4 w-full rounded"
          />
          <input
              type="password"
              placeholder="Crie uma senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
              autoComplete="new-password"
              className="border p-2 mb-4 w-full rounded"
          />
          <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 text-white p-2 rounded w-full"
          >
            Criar Conta
          </button>
        </form>
        {mensagem && (
            <p
                className={`mt-4 text-center ${
                    mensagem.includes('Erro') ? 'text-red-600' : 'text-green-600'
                }`}
            >
              {mensagem}
            </p>
        )}
      </div>
  );
}

export default Registo;


