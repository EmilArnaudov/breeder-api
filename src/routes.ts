import { Request, Response, Router } from 'express';
import authController from './controllers/authController';
import mediaController from './controllers/mediaController';

const router = Router();

router.use('/auth', authController);
router.use('/media', mediaController);

router.use('/*', (req: Request, res: Response) => {
  {
    res.send('ahhhh fuck you');
  }
});

export default router;
