import { Router } from 'express';
import accountRoutes from './account.routes.js';

const router = Router();

router.use('/account', accountRoutes);

export default router;
