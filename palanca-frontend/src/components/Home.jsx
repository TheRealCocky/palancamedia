import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import videoImg from '../imagens/video.png';
import MeetingImg from '../imagens/meeting.webp';
import DashboardImg from '../imagens/Dashboard.png';
import MindsetImg from '../imagens/mindset.jpg';

function Home() {
  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('authToken'));
  const [username, setUsername] = useState(localStorage.getItem('nome') || '');

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('nome');
    setIsLoggedIn(false);
    setUsername('');
    window.dispatchEvent(new Event('authChanged'));
    navigate('/login');
  };

  return (
    <div className="bg-gray-100">
      
      {/* Seção de Introdução */}
      <section className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-[1080px] mx-auto px-4 text-center">
          <h1 className="text-5xl font-extrabold text-gray-800 mb-6 leading-tight">
            Bem-vindo à Plataforma <br />
            <span className="text-indigo-600 ">PalancaMedia</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-xl mx-auto mb-8">
            Uma plataforma educacional feita para unir alunos, professores e conteúdos de forma prática e acessível.
            Explore materiais, compartilhe ideias e aprenda de forma colaborativa.
          </p>
          <div className="flex justify-center">
            <a
              href="#"
              className="bg-indigo-600 text-white px-6 py-3 rounded-full text-sm font-medium shadow hover:bg-indigo-700 transition"
            >
              Começar agora
            </a>
          </div>
        </div>
      </section>

      {/* Seção 2 - Importância dos vídeos */}
      <section className="py-16 bg-white">
        <div className="max-w-[1080px] mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              A importância dos vídeos na nossa biblioteca digital - PalancaMedia
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Os vídeos educativos têm se tornado uma ferramenta essencial no processo de aprendizagem moderna.
              Na biblioteca digital "PalancaMedia", eles oferecem uma forma dinâmica de explorar conceitos,
              revisar matérias e acompanhar aulas práticas, tudo de maneira acessível e envolvente.
            </p>
            <div className="mt-6">
              <Link
                to="/bibivideos"
                className="inline-block bg-indigo-600 text-white px-5 py-2 rounded-full text-sm font-medium shadow hover:bg-indigo-700 transition"
              >
                Ver vídeos
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img 
              src={videoImg} 
              alt="Vídeos na biblioteca"
              loading="lazy"
              className="w-full max-w-sm rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Seção 3 - Reuniões */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-[1080px] mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Reuniões acadêmicas: fortalecendo o diálogo na PalancaMedia
            </h2>
            <p className="text-gray-700 leading-relaxed">
              As meetings (reuniões) no ambiente universitário são momentos essenciais para alinhamento entre estudantes e docentes.
              Elas proporcionam um espaço para trocar ideias, apresentar projetos, resolver dúvidas em grupo e fortalecer o espírito colaborativo.
            </p>
            <div className="mt-6">
              <Link
                to="/primeeting"
                className="inline-block bg-indigo-600 text-white px-5 py-2 rounded-full text-sm font-medium shadow hover:bg-indigo-700 transition"
              >
                Acessar reuniões
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img 
              src={MeetingImg} 
              alt="Reunião acadêmica"
              loading="lazy"
              className="w-full max-w-sm rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Seção de Dashboard */}
      <section className="py-16 bg-white">
        <div className="max-w-[1080px] mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Acompanhe o Desempenho do Estudante no Dashboard
            </h2>
            <p className="text-gray-700 leading-relaxed">
              O Dashboard oferece uma visão completa sobre o desempenho acadêmico dos estudantes, permitindo que eles acompanhem suas notas,
              prazos de entregas e progresso ao longo do semestre.
            </p>
            <div className="mt-6">
              <a
                href="#"
                className="inline-block bg-indigo-600 text-white px-5 py-2 rounded-full text-sm font-medium shadow hover:bg-indigo-700 transition"
              >
                Ver desempenho do estudante
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img 
              src={DashboardImg} 
              alt="Dashboard"
              loading="lazy"
              className="w-full max-w-sm rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Seção de Mindset */}
      <section className="py-16 bg-gradient-to-b from-indigo-100 to-indigo-200">
        <div className="max-w-[1080px] mx-auto px-4 text-center md:text-left flex flex-col md:flex-row items-center md:items-start gap-10">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-extrabold text-gray-800 mb-6">
              Adote um Mindset de Crescimento
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Na PalancaMedia, acreditamos que o aprendizado não é apenas sobre adquirir conhecimento, mas também sobre adotar uma mentalidade de crescimento.
            </p>
            <div className="mt-6">
              <a
                href="/#"
                className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-full text-sm font-medium shadow hover:bg-indigo-700 transition"
              >
                Adotar o Mindset
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <img 
              src={MindsetImg} 
              alt="Mentalidade de Crescimento"
              loading="lazy"
              className="w-full max-w-md rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-6">
        <div className="max-w-[1080px] mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-center md:text-left">
            ©2025 PalancaMedia. Todos os direitos reservados.
          </p>

          <div className="flex space-x-4">
            <Link to="/sobre" className="hover:text-white text-sm transition-colors">Sobre</Link>
            <Link to="/contacto" className="hover:text-white text-sm transition-colors">Contacto</Link>
            <Link to="/politica" className="hover:text-white text-sm transition-colors">Política de Privacidade</Link>
          </div>

          {/* Botão de logout no footer (somente se logado) */}
          {isLoggedIn && (
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-md text-sm transition"
            >
              Terminar Sessão
            </button>
          )}
        </div>
      </footer>
    </div>
  );
}

export default Home;

