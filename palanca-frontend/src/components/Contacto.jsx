import React from 'react';

function Contacto() {
  const membros = [
    {
      nome: 'Miguel Simão Cristóvão',
      cargo: 'Coordenador Geral / Full Stack Developer',
      email: 'miguel.cristovao@pm.ao',
      telefone: '+244 923 000 001',
    },
    {
      nome: 'Misselo Luís Miliano',
      cargo: 'Back-End Developer / Banco de Dados',
      email: 'misselo.miliano.05@gmail.com',
      telefone: '+244 923 000 002',
    },
    {
      nome: 'Emiliano Dongoche',
      cargo: 'Suporte Técnico / QA',
      email: 'emiliano.dongoche@pm.ao',
      telefone: '+244 923 000 003',
    },
    {
      nome: 'Euclides Baltazar Isaac',
      cargo: 'Desenvolvedor Front-End / API',
      email: 'euclidesbaltazar2002@icloud.com',
      telefone: '+244 945 303 860',
    },
    {
      nome: 'Bernardo Assonga Luís',
      cargo: 'Designer UI/UX ',
      email: 'bernardo.luis@pm.ao',
      telefone: '+244 923 000 005',
    },
    {
      nome: 'Julieta Lopes Sebastião',
      cargo: 'Gestora de Conteúdo',
      email: 'julieta.sebastiao@pm.ao',
      telefone: '+244 923 000 006',
    },
    {
      nome: 'Paulo Lustriano',
      cargo: 'Infraestrutura e Segurança',
      email: 'paulo.lustriano@pm.ao',
      telefone: '+244 923 000 007',
    },
  ];

  return (
    <div className="p-6 max-w-5xl mx-auto text-white">
      <h1 className="text-3xl font-bold mb-6">Contacto</h1>
      <p className="mb-4 text-gray-600 font-bold px-10 py-10 hover:text-gray-700 cursor-pointer shadow-2xl rounded-md">
        Caso tenhas dúvidas, sugestões ou queiras relatar algum problema, podes entrar em contacto com qualquer membro da equipa Conecta Katangoji:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {membros.map((membro, index) => (
          <div key={index} className="bg-gray-800 p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">{membro.nome}</h2>
            <p className="text-sm text-gray-300">{membro.cargo}</p>
            <p className="mt-2 text-sm">
              📧 <a href={`mailto:${membro.email}`} className="text-blue-400 underline">{membro.email}</a>
            </p>
            <p className="text-sm">📞 {membro.telefone}</p>
          </div>
        ))}
      </div>

      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-4">Formulário de Contacto</h2>
        <form className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <input
            type="text"
            placeholder="Nome completo"
            className="p-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Teu e-mail"
            className="p-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            placeholder="Mensagem..."
            rows={5}
            className="md:col-span-2 p-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
          <button
            type="submit"
            className="md:col-span-2 bg-blue-600 hover:bg-blue-700 transition duration-300 p-2 rounded text-white font-semibold"
          >
            Enviar Mensagem
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contacto;
