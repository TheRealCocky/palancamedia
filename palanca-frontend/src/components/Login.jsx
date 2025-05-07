import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

// 🔗 Define API dinâmica (localhost ou Render)
const API_URL = import.meta.env.VITE_API_URL || "https://palancamedia.onrender.com/api/auth";


function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [loading, setLoading] = useState(false);
  const [mostrarSenha, setMostrarSenha] = useState(false);


  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      navigate('/');
    }
  }, [navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMensagem('');
    try {
      const response = await axios.post(`${API_URL}/login`, { email, senha }, {
        headers: { "Content-Type": "application/json" }
      });

      console.log("✅ Resposta completa da API:", response); // 🔥 Verifica toda a resposta
      console.log("✅ Dados recebidos da API:", response.data); // 🔥 Verifica os dados específicos

      if (!response.data || typeof response.data !== "object") {
        console.error("❌ Dados inválidos recebidos:", response.data);
        setMensagem("⚠️ Erro inesperado no login. Tente novamente.");
        return;
      }


      if (response.data.token && response.data.nome) {
        localStorage.setItem('authToken', response.data.token);
        localStorage.setItem('nome', response.data.nome);

        window.dispatchEvent(new Event("authChanged"));
        setMensagem('✅ Login bem-sucedido!');
        setTimeout(() => navigate('/'), 1000);
      } else {
        setMensagem('⚠️ Erro: Token ou nome não retornados.');
      }
    } catch (error) {
      console.error("❌ Erro na requisição:", error);
      setMensagem(error.response?.data?.msg || '⚠️ Erro ao fazer login.');
    }


    finally {
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
                disabled={loading || !email || !senha}
            >
              {loading ? 'Carregando...' : 'Entrar'}
            </button>
          </form>

          {mensagem && <p className="mt-4 text-center text-red-500">{mensagem}</p>}

          {/* 🔗 Link para criar conta */}
          <p className="mt-4 text-center">
            Não tem uma conta? <a href="/registo" className="text-orange-500 hover:text-orange-700">Crie uma aqui</a>.
          </p>
        </div>
      </div>
  );
}

export default Login;
