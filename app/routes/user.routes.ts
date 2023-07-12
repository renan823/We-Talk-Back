import { Router } from 'express';
import User from '../controllers/user.controller';
import auth from '../middleware/auth.middleware';

const router = Router();

router.post('/new', User.create);
router.post('/login', User.login);
router.get('/profile', auth, User.profile)

export default router;

