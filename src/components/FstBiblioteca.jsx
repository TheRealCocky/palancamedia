import React from 'react';
import {
  FaVideo,
  FaMusic,
  FaBook,
  FaFilePdf,
  FaSlideshare,
  FaFileAlt,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import IconBi from '../imagens/Biblioteca-Online.jpg'; // icon do fundo

function FstMeeting() {
  const categorias = [
    { nome: 'Vídeo', icon: <FaVideo />, rota: '/bibivideos' },
    { nome: 'Áudio', icon: <FaMusic />, rota: '/audio' },
    { nome: 'Livros', icon: <FaBook />, rota: '/livros' },
    { nome: 'PDFs', icon: <FaFilePdf />, rota: '/pdfs' },
    { nome: 'Slides', icon: <FaSlideshare />, rota: '/slides' },
    { nome: 'Documentos', icon: <FaFileAlt />, rota: '/documentos' },
  ];

  return (
    <div
      className="relative min-h-screen flex items-center justify-center p-6 bg-cover bg-center"
      style={{ backgroundImage: `url(${IconBi})` }}
    >
      {/* Overlay escuro para melhorar contraste */}
      <div className="absolute inset-0 bg-black/50 z-0" />

      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl lg:pt-8">
        {categorias.map((item, index) => (
          <Link to={item.rota} key={index}>
            <div
              className="flex items-center justify-center gap-3 
              bg-gray-800/30 backdrop-blur-md border border-white/30 
              text-white py-4 px-6 rounded-xl shadow-lg 
              hover:bg-gray-800/50 transition text-lg font-semibold"
            >
              <span className="text-2xl">{item.icon}</span>
              {item.nome}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default FstMeeting;

