import { Request, Response, Router } from 'express';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  res.send('returning start of infinite scroll of latest songs');
});

router.post('/', (req: Request, res: Response) => {
  res.send('thanks for creating a new song');
});

router.get('/:id', (req: Request, res: Response) => {
  res.send('here is info about a song ');
});

router.put('/:id', (req: Request, res: Response) => {
  res.send('thansk for editting a song');
});

export default router;
