import React, { useState } from 'react';
import { Search } from 'lucide-react';

const AudiosAero = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedAno, setSelectedAno] = useState('');
    const [audios] = useState([
        {
            id: 1,
            title: "Áudio 1",
            url: "audio1.mp3",
            ano: "1º Ano",
            descricao: "História contada para crianças do 1º ano."
        },
        {
            id: 2,
            title: "Áudio 2",
            url: "audio2.mp3",
            ano: "2º Ano",
            descricao: "Exercício de pronúncia para alunos do 2º ano."
        },
        // Adicione mais áudios conforme necessário
    ]);

    const filteredAudios = audios.filter(audio => {
        const matchesSearch = audio.title.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesAno = selectedAno ? audio.ano === selectedAno : true;
        return matchesSearch && matchesAno;
    });

    return (
        <div className="container mx-auto p-4 mt-[100px] sm:mt-[80px]">
            <div className="flex flex-col  md:flex-row justify-between items-center mb-4 gap-4">
                <h1 className="text-2xl font-bold text-center">Biblioteca de Áudios</h1>

                <div className="flex  flex-col  sm:flex-row items-stretch gap-2 w-full md:w-auto ">
                    <div className="relative w-full md:w-auto">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                            type="search"
                            placeholder="Pesquisar"
                            className="pl-10 pr-4 py-2 rounded-md border border-blue-400 bg-white w-full"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>

                    <select
                        className="px-4 py-2 rounded-md border border-blue-400 bg-white w-full md:w-auto"
                        value={selectedAno}
                        onChange={(e) => setSelectedAno(e.target.value)}
                    >
                        <option value="">Todos os Anos</option>
                        <option value="1º Ano">1º Ano</option>
                        <option value="2º Ano">2º Ano</option>
                        <option value="3º Ano">3º Ano</option>
                        <option value="4º Ano">4º Ano</option>
                        <option value="5º Ano">5º Ano</option>
                    </select>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredAudios.length > 0 ? (
                    filteredAudios.map((audio) => (
                        <div key={audio.id} className="bg-gray-100 p-4 rounded-lg shadow-md flex flex-col justify-between h-full">
                            <div>
                                <h2 className="text-xl font-semibold">{audio.title}</h2>
                                <p className="text-sm text-gray-500 mb-2">{audio.ano}</p>
                                <audio className="w-full" controls>
                                    <source src={audio.url} type="audio/mp3" />
                                    Seu navegador não suporta a tag de áudio.
                                </audio>
                            </div>
                            <p className="text-sm text-gray-600 mt-2">{audio.descricao}</p>
                        </div>
                    ))
                ) : (
                    <p className="text-center text-gray-500 col-span-full">Nenhum áudio encontrado.</p>
                )}
            </div>
        </div>
    );
};

export default AudiosAero;
