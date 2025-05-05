import React from 'react';
import palancaIMG from '../imagens/palanca.png';
const Myself = () => {
  const nome = localStorage.getItem('nome') || 'Usuário';

  const user = {
    name: nome,
    age: 23,
    profession: "Desenvolvedor Full Stack",
    location: "Lisboa, Portugal",
    description: "Desenvolvedor web focado em tecnologias como React, Node.js, MongoDB e Tailwind CSS.",
    hobbies: ["Programar", "Estudar novas tecnologias", "Jogar jogos de estratégia", "Ler livros de ficção científica"],
    socialLinks: {
      facebook: "https://facebook.com/euclides",
      twitter: "https://twitter.com/euclides",
      linkedin: "https://linkedin.com/in/euclides",
    },
    profilePicture:palancaIMG,
  };

  return (
    <main className="mt-24 px-4 md:px-8 lg:px-16">
      <section className="bg-white shadow-xl rounded-2xl p-8 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Lado esquerdo: Informações do usuário */}
        <div className="text-center md:text-left">
          <div className="flex justify-center md:justify-start mb-6">
            <div className="relative w-32 h-32 rounded-full border-4 border-blue-600 overflow-hidden">
              <img src={user.profilePicture} alt="Foto de perfil" className="w-full h-full object-cover lazyload" />
            </div>
          </div>

          <h1 className="text-3xl font-bold text-blue-600 mb-2">{user.name}</h1>
          <p className="text-gray-600 mb-4">Idade: {user.age}</p>
          <p className="text-gray-600 mb-4">Profissão: {user.profession}</p>
          <p className="text-gray-600 mb-4">Localização: {user.location}</p>
          <p className="text-gray-800">{user.description}</p>
        </div>

        {/* Lado direito: Hobbies e Redes sociais */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Hobbies</h2>
          <ul className="list-disc list-inside space-y-1 text-gray-700 mb-6">
            {user.hobbies.map((hobby, index) => (
              <li key={index} className="flex items-start">
                <span className="mr-2 text-blue-600">•</span>
                {hobby}
              </li>
            ))}
          </ul>

          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Redes Sociais</h2>
          <div className="flex space-x-4">
            <a href={user.socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
              Facebook
            </a>
            <a href={user.socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
              Twitter
            </a>
            <a href={user.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      <div className="flex justify-center mt-8">
        <button className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700">
          Editar Perfil
        </button>
      </div>
    </main>
  );
};

export default Myself;
