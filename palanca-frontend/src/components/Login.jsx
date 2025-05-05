import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [loading, setLoading] = useState(false);
  const [mostrarSenha, setMostrarSenha] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMensagem(''); // Limpar mensagem anterior ao tentar login

    try {
      const response = await axios.post('https://palanca-api.onrender.com/api/auth/login', {
        email,
        senha,
      }, { withCredentials: true }); // Necessário para enviar cookies de autenticação

      console.log(response.data); // Para visualizar o retorno da API

      if (response.data.token) {
        localStorage.setItem('authToken', response.data.token);
        localStorage.setItem('nome', response.data.nome);

        window.dispatchEvent(new Event("authChanged"));
        setMensagem('Login bem-sucedido!');
        setTimeout(() => {
          navigate('/');
        }, 1000); // Redireciona após 1 segundo
      } else {
        setMensagem('Erro: Token não retornado.');
      }
    } catch (error) {
      console.error('Erro ao fazer login', error);
      setMensagem(error.response?.data?.msg || 'Erro ao fazer login.'); // Mensagem de erro padrão
    } finally {
      setLoading(false);
    }
  };

  return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg w-96">
          <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
          <form onSubmit={handleLogin} className="space-y-4">
            <input
                type="email"
                placeholder="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
                autoComplete="email"
                required
            />
            <div className="relative">
              <input
                  type={mostrarSenha ? 'text' : 'password'}
                  placeholder="Senha"
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md pr-10"
                  autoComplete="current-password"
                  required
              />
              <button
                  type="button"
                  onClick={() => setMostrarSenha(!mostrarSenha)}
                  className="absolute right-2 top-3 text-gray-500 hover:text-gray-700"
                  tabIndex={-1}
              >
                {mostrarSenha ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            <button
                type="submit"
                className={`w-full p-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition ${loading ? 'cursor-wait opacity-50' : ''}`}
                disabled={loading || !email || !senha} // Desabilitar o botão se campos estiverem vazios
            >
              {loading ? 'Carregando...' : 'Entrar'}
            </button>
          </form>

          {mensagem && <p className="mt-4 text-center text-red-500">{mensagem}</p>}

          <div className="mt-4 text-center">
            <p>Não tem uma conta? <a href="/registo" className="text-blue-500 hover:underline">Criar conta</a></p>
          </div>
        </div>
      </div>
  );
}

export default Login;
