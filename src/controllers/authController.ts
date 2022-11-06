import { Request, Response, Router } from 'express';

const router = Router();

router.get('/me', (req: Request, res: Response) => {
  res.send('returning info about auth user');
});

router.post('/login', (req: Request, res: Response) => {
  res.send('thanks for logging in');
});

router.post('/register', (req: Request, res: Response) => {
  res.send('thanks for registering');
});

export default router;
