import { Request, Response } from 'express';
export const getAdmin = (req: Request, res: Response) => {
    res.send('Admin Page')
};
