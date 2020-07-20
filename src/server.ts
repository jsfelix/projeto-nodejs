import 'reflect-metadata';

import express from 'express';
import routes from './routes';

import uploadConfig from './config/upload';

import './database';

const app = express();
const log = console;

app.use(express.json());
app.use('/files', express.static(uploadConfig.directory));
app.use(routes);

app.listen(3333, () => {
  log.info(`[INFO] ${new Date()} 🚀 Server started on port 3333!`);
});
