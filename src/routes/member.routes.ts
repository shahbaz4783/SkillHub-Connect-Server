import { Router } from 'express';
import { getAccount, getSettings } from '../controllers/member.controller.js';

const router = Router();

router.get('/dashboard', getAccount);
router.get('/settings', getSettings);

export default router
