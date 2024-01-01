import { Router } from 'express';
import accountRoutes from './member.routes.js';

const router = Router();

router.use('/account', accountRoutes);

export default router;
