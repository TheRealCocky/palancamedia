import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Registo() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mensagem, setMensagem] = useState('');
  const navigate = useNavigate();  // Hook para navegação

  const handleRegisto = async (e) => {
    e.preventDefault();

    try {
      // Enviando os dados para o servidor
      const response = await axios.post('http://localhost:5000/api/auth/registrar', {
        nome,
        email,
        senha,
      });

      // Se o registro for bem-sucedido
      if (response.data.msg === 'Usuário registrado com sucesso!') {
        setMensagem('Conta criada com sucesso!');
        
        // Redireciona para a página de login
        navigate('/login');  // Aqui estamos redirecionando para a página de login
      }
    } catch (error) {
      console.error('Erro ao criar conta', error.response);
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
          className="border p-2 mb-4 w-full rounded"
        />
        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="email"
          className="border p-2 mb-4 w-full rounded"
        />
        <input
          type="password"
          placeholder="Crie uma senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
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
      {mensagem && <p className="mt-4 text-center text-green-600">{mensagem}</p>}
    </div>
  );
}

export default Registo;

