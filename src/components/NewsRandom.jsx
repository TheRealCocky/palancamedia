// NewsDetails1.js

import React from 'react';
import palancaIMG from '../imagens/palanca.png';

function NewsRandom() {
    return (
        <div className="bg-gray-50 min-h-screen py-16 px-4">
            <div className="max-w-4xl mx-auto">
                <div className="bg-white rounded-lg shadow-lg p-8">
                    <h1 className="text-4xl font-bold text-gray-800 mb-6">
                        Lançamento do novo aplicativo universitário
                    </h1>

                    <img
                        src={palancaIMG}
                        alt="Evento de lançamento"
                        loading={"lazy"}
                        className="w-full h-72 object-cover rounded-lg mb-6"
                    />

                    <p className="text-gray-700 text-lg mb-4">
                        O lançamento foi celebrado com um evento no auditório principal, que contou com a presença de
                        estudantes, professores, membros da reitoria e convidados especiais. A cerimônia marcou o início
                        de uma nova fase digital na universidade.
                    </p>

                    <p className="text-gray-700 text-lg mb-4">
                        Durante o evento, o reitor destacou a importância de investir em tecnologia para melhorar o
                        acesso à informação e facilitar processos internos. “Queremos que nossos estudantes tenham mais
                        autonomia e conectividade”, afirmou.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                        <img
                            src={palancaIMG}
                            alt="Auditório cheio durante o lançamento"
                            className="w-full h-56 object-cover rounded-lg"
                        />
                        <img
                            src={palancaIMG}
                            alt="Apresentação do aplicativo no telão"
                            loading={"lazy"}
                            className="w-full h-56 object-cover rounded-lg"
                        />
                    </div>

                    <p className="text-gray-700 text-lg mb-4">
                        Após os discursos, houve uma demonstração prática do aplicativo, mostrando como os usuários
                        poderão interagir com a plataforma. Estudantes também participaram de um painel para opinar
                        sobre o desenvolvimento e sugerir melhorias.
                    </p>

                    <p className="text-gray-700 text-lg mb-4">
                        A universidade anunciou que outros serviços também passarão por digitalização ao longo do ano,
                        como o sistema de matrícula, biblioteca e suporte ao aluno.
                    </p>

                    <div className="text-sm text-gray-500 mt-8">
                        Publicado em: 20 de Abril de 2025 · Categoria: Inovação & Tecnologia
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewsRandom;
