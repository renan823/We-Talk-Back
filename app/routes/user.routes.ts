import { Router } from 'express';
import User from '../controllers/user.controller';
import UserMiddleware from '../middleware/user.middleware';

const router = Router();

router.post('/new', UserMiddleware, User.create);

export default router;

