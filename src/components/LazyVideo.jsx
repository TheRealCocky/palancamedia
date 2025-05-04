import React, { useEffect, useState } from 'react';

function LazyVideo({ video }) {
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                }
            },
            { threshold: 0.25 }
        );

        const videoElement = document.getElementById(video.id);
        observer.observe(videoElement);

        return () => observer.disconnect();
    }, [video.id]);

    return (
        <div id={video.id} className="my-4">
            {isInView ? (
                <video controls width="320" height="240">
                    <source src={video.url} type="video/mp4" />
                    Seu navegador não suporta o elemento de vídeo.
                </video>
            ) : (
                <div>Carregando vídeo...</div>
            )}
        </div>
    );
}

export default LazyVideo;
