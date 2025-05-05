import News from '../models/News.js';
import Like from '../models/Like.js';

export const likeNews = async (req, res) => {
    const newsId = req.params.newsId;
    const userId = req.user.id;

    try {
        // Verifica se o usuário já curtiu a notícia
        const existingLike = await Like.findOne({ userId, newsId });
        if (existingLike) {
            return res.status(400).json({ msg: "Você já curtiu esta notícia." });
        }

        // Cria um novo "like"
        const like = new Like({ userId, newsId });
        await like.save();

        // Atualiza o número de "likes" na notícia
        const noticia = await News.findById(newsId);
        if (!noticia) return res.status(404).json({ msg: "Notícia não encontrada." });

        noticia.likes += 1;
        await noticia.save();

        res.json({ msg: "Like registrado com sucesso!" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Erro ao registrar like." });
    }
};

export const getLikes = async (req, res) => {
    const newsId = req.params.newsId;

    try {
        const noticia = await News.findById(newsId);
        if (!noticia) return res.status(404).json({ msg: "Notícia não encontrada." });

        res.json({ likes: noticia.likes });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Erro ao buscar likes." });
    }
};


