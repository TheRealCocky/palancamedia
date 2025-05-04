// models/News.js
import mongoose from 'mongoose';

const newsSchema = new mongoose.Schema({
    title: String,
    description: String,
    image: String,
    likes: {
        type: Number,
        default: 0,
    },
    likedBy: [String], // user IDs
});

const News = mongoose.model('News', newsSchema);

export default News;
