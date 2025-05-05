import mongoose from 'mongoose';

const likeSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    newsId: {
        type: String,
        required: true, // Pode ser o ID da notícia como uma string
    },
    likedAt: {
        type: Date,
        default: Date.now,
    },
});

const Like = mongoose.model('Like', likeSchema);

export default Like;
