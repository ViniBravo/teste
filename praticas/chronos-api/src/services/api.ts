import { Router } from 'express';
import { prisma } from '../lib/prisma.js';
import { authMiddleware, AuthenticatedRequest } from '../middlewares/auth.js';

export const settingsRouter = Router();

settingsRouter.use(authMiddleware);

settingsRouter.get('/', async (req: AuthenticatedRequest, res) => {
  const settings = await prisma.settings.findUnique({
    where: {
      userId: req.userId,
    },
  });

  return res.json(settings);
});

settingsRouter.put('/', async (req: AuthenticatedRequest, res) => {
  const { workTime, shortBreakTime, longBreakTime } = req.body;

  const settings = await prisma.settings.upsert({
    where: {
      userId: req.userId as string,
    },
    create: {
      userId: req.userId as string,
      workTime,
      shortBreakTime,
      longBreakTime,
    },
    update: {
      workTime,
      shortBreakTime,
      longBreakTime,
    },
  });

  return res.json(settings);
});