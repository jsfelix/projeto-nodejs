import express from 'express';
import routes from './routes';

const app = express();
const log = console;

app.use(express.json());
app.use(routes);

app.listen(3333, () => {
  log.info(`[INFO] ${new Date()} 🚀 Server started on port 3333!`);
});
