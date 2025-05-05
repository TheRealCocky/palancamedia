import express from 'express';
import { likeNews, getLikes } from '../controllers/newsController.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.post('/like/:newsId', auth, likeNews);
router.get('/likes/:newsId', getLikes);

export default router;
