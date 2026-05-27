import express from 'express';
import cors from 'cors';
import { authRouter } from './routes/auth.routes.js';
import { tasksRouter } from './routes/tasks.routes.js';
import { settingsRouter } from './routes/settings.routes.js';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/health', (_req, res) => {
  return res.json({ status: 'ok' });
});

app.use('/auth', authRouter);
app.use('/tasks', tasksRouter);
app.use('/settings', settingsRouter);

const PORT = process.env.PORT || 3333;

app.listen(PORT, () => {
  console.log(`API running on http://localhost:${PORT}`);
});