import React, { useState, useEffect, useRef } from 'react';
import { Search } from 'lucide-react';
import Video1 from '../videos/video.mp4';

const VideosPertoleo = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedAno, setSelectedAno] = useState('');
    const [videos] = useState([
        {
            id: 1,
            title: "Video 1",
            url: Video1,
            ano: "1º Ano",
            descricao: "Este vídeo aborda conceitos básicos de matemática para o 1º ano."
        },
        {
            id: 2,
            title: "Video 2",
            url: "video-url-2.mp4",
            ano: "2º Ano",
            descricao: "Uma introdução à leitura e interpretação de textos."
        },
        {
            id: 3,
            title: "Video 3",
            url: "video-url-3.mp4",
            ano: "3º Ano",
            descricao: "Aprenda os fundamentos da ciência natural neste vídeo."
        },
        {
            id: 4,
            title: "Video 4",
            url: "video-url-4.mp4",
            ano: "4º Ano",
            descricao: "Exploração de figuras geométricas com exemplos visuais."
        },
        {
            id: 5,
            title: "Video 5",
            url: "video-url-5.mp4",
            ano: "5º Ano",
            descricao: "História de Angola com foco nos acontecimentos importantes."
        },
        {
            id: 6,
            title: "Outro vídeo especial",
            url: "video-url-6.mp4",
            ano: "2º Ano",
            descricao: "Vídeo bônus com exercícios interativos de português."
        },
        {
            id: 7,
            title: "Matemática 3",
            url: "video-url-7.mp4",
            ano: "3º Ano",
            descricao: "Operações matemáticas do dia a dia explicadas de forma divertida."
        }
    ]);

    const filteredVideos = videos.filter(video => {
        const matchesSearch = video.title.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesAno = selectedAno ? video.ano === selectedAno : true;
        return matchesSearch && matchesAno;
    });

    return (
        <div className="container mx-auto p-4 mt-[100px] sm:mt-[80px]">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-4">
                <h1 className="text-2xl font-bold text-center md:text-left">
                    Biblioteca de Vídeos
                </h1>

                <div className="flex flex-col sm:flex-row items-stretch gap-2 w-full md:w-auto">
                    {/* Search Input com ícone */}
                    <div className="relative w-full sm:w-64">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                            type="search"
                            placeholder="Pesquisar"
                            className="w-full pl-10 pr-4 py-2 rounded-md border border-blue-400 bg-white"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>

                    {/* Select do Ano */}
                    <select
                        className="w-full sm:w-auto px-4 py-2 rounded-md border border-blue-400 bg-white"
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

            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredVideos.length > 0 ? (
                    filteredVideos.map((video) => (
                        <div key={video.id} className="bg-gray-100 p-4 rounded-lg shadow-md flex flex-col justify-between h-full">
                            <div>
                                <h2 className="text-xl font-semibold">{video.title}</h2>
                                <p className="text-sm text-gray-500 mb-2">{video.ano}</p>

                                {/* Lazy load do vídeo */}
                                <LazyVideo url={video.url} />
                            </div>
                            <p className="text-sm text-gray-600 mt-2">{video.descricao}</p>
                        </div>
                    ))
                ) : (
                    <p className="text-center text-gray-500 col-span-full">Nenhum vídeo encontrado.</p>
                )}
            </div>
        </div>
    );
};



const LazyVideo = ({ url }) => {
    const containerRef = useRef(null);
    const [shouldLoad, setShouldLoad] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries, obs) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setShouldLoad(true);
                        obs.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.3 }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={containerRef}
            className="w-full h-40 md:h-60 lg:h-72 bg-black rounded-md overflow-hidden flex items-center justify-center"
        >
            {shouldLoad ? (
                <video
                    className="w-full h-full object-contain"
                    controls
                >
                    <source src={url} type="video/mp4" />
                    Seu navegador não suporta a tag de vídeo.
                </video>
            ) : (
                <span className="text-white text-sm">Carregando vídeo...</span>
            )}
        </div>
    );
};



export default VideosPertoleo;
