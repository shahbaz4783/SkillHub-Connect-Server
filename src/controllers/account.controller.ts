import { Request, Response } from 'express';

export const getAccount = (req: Request, res: Response) => {
	res.json('Admin Dashboard');
};
export const getSettings = (req: Request, res: Response) => {
	res.json('Admin Profile Setting');
};
