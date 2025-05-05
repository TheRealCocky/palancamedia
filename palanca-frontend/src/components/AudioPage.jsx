import React from 'react';
import {
  FaHardHat, FaBolt, FaCogs, FaFlask, FaLaptopCode,
  FaIndustry, FaLeaf, FaRocket, FaHeartbeat, FaOilCan
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

function AudioPage() {
  const categorias = [
    { nome: 'Eng. Civil', icon: <FaHardHat />, rota: '/audio/eng-civil', gradient: 'from-yellow-400 via-yellow-500 to-yellow-600' },
    { nome: 'Eng. Elétrica', icon: <FaBolt />, rota: '/audio/eng-eletrica', gradient: 'from-purple-500 via-purple-600 to-purple-700' },
    { nome: 'Eng. Mecânica', icon: <FaCogs />, rota: '/audio/eng-mecanica', gradient: 'from-gray-600 via-gray-700 to-gray-800' },
    { nome: 'Eng. Química', icon: <FaFlask />, rota: '/audio/eng-quimica', gradient: 'from-pink-400 via-pink-500 to-pink-600' },
    { nome: 'Eng. Informática', icon: <FaLaptopCode />, rota: '/audio/eng-da-computacao', gradient: 'from-blue-500 via-indigo-600 to-purple-700' },
    { nome: 'Eng. de Produção', icon: <FaIndustry />, rota: '/audio/eng-de-producao', gradient: 'from-green-500 via-emerald-600 to-teal-700' },
    { nome: 'Eng. Ambiental', icon: <FaLeaf />, rota: '/audio/eng-ambiental', gradient: 'from-lime-500 via-green-500 to-emerald-500' },
    { nome: 'Eng. Aeroespacial', icon: <FaRocket />, rota: '/audio/eng-aeroespacial', gradient: 'from-sky-500 via-indigo-500 to-blue-700' },
    { nome: 'Eng. Biomédica', icon: <FaHeartbeat />, rota: '/audio/eng-biomedica', gradient: 'from-rose-400 via-pink-500 to-fuchsia-600' },
    { nome: 'Eng. de Petróleo', icon: <FaOilCan />, rota: '/audio/eng-de-petroleo', gradient: 'from-orange-500 via-amber-600 to-red-600' }
  ];

  return (
    <div className="bg-gray-900 min-h-screen py-10 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto lg:mt-10 mt-5 md:mt-10">
        {categorias.map((categoria) => (
          <Link
            key={categoria.rota}
            to={categoria.rota}
            className={`flex items-center justify-start p-4 rounded-lg shadow-md text-white bg-gradient-to-r ${categoria.gradient} hover:scale-105 transition-transform duration-300`}
          >
            <div className="flex items-center gap-4">
              <div className="text-2xl md:text-3xl">{categoria.icon}</div>
              <span className="text-base md:text-lg font-semibold">{categoria.nome}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default AudioPage;
