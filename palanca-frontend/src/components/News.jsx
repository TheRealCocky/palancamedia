// News.js

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Importando Link do react-router-dom para navegação
import palancaIMG from '../imagens/palanca.png'; // Imagem fictícia

const noticiasFicticias = [
    {
        id: '1',
        titulo: 'Lançamento do novo aplicativo universitáro "PalancaMedia"',
        conteudo: 'A universidade lançou um novo app para facilitar a comunicação entre estudantes e professores.',
        imagem: palancaIMG,
        link: '/news/1', // Link para página de detalhes
    },
    {
        id: '2',
        titulo: 'XII jornada cientifica do ISPK nos dias 7,8 e 9 de Maio',
        conteudo: 'Uma semana inteira com palestras, oficinas e apresentações culturais para os estudantes.',
        imagem: palancaIMG,
        link: '/news/2',
    },
    {
        id: '3',
        titulo: 'Visita de pesquisa dos estudantes de Eng. de Petróleo ao Cabo Ledo ',
        conteudo: 'Os estudantes aprenderam bastante como é feito a...',
        imagem: palancaIMG,
        link: '/news/3',
    },
    {
        id: '4',
        titulo: 'Visita de pesquisa dos estudantes de Eng. de Petróleo ao Cabo Ledo ',
        conteudo: 'Os estudantes aprenderam bastante como é feito a...',
        imagem: palancaIMG,
        link: '/news/3',
    }
];

function News() {
    const [noticias, setNoticias] = useState(noticiasFicticias); // Usando o array de notícias diretamente

    return (
        <div className="bg-gray-50 min-h-screen py-16 px-4 mt-6">
            <div className="max-w-7xl mx-auto text-center">
                <h1 className="text-4xl font-semibold text-gray-800 mb-10">Notícias da Universidade</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {noticias.map((noticia) => (
                        <div
                            key={noticia.id}
                            className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all hover:scale-105 duration-300"
                        >
                            <img
                                src={noticia.imagem}
                                alt={noticia.titulo}
                                loading={"lazy"}
                                className="w-full h-56 object-cover rounded-t-lg"
                            />
                            <div className="p-6 space-y-4">
                                <h2 className="text-2xl font-semibold text-gray-800 hover:text-indigo-600 transition-colors duration-300">
                                    {noticia.titulo}
                                </h2>
                                <p className="text-gray-600 text-sm">{noticia.conteudo}</p>
                                {/* Link agora usa a URL do objeto noticia.link */}
                                <Link
                                    to={noticia.link}  // Vai para a página definida no array de notícias
                                    className="inline-block text-indigo-600 font-medium hover:underline"
                                >
                                    Leia mais
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default News;
