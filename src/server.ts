import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import errorHandler from './middleware/errorHandler';
import MediaItems from './controller/mediaItems.controller';

const createServer = (): express.Application => {
  const app = express();
  // parse application/x-www-form-urlencoded
  app.use(bodyParser.urlencoded({ extended: false }))
  // parse application/json
  app.use(bodyParser.json())
  app.use(cors());

  //Health Check
  app.use('/health', (_req, res) => {
    res.send('UP');
  });

  // errorhandler middleware
  app.use(errorHandler);

  app.use('/media-items', MediaItems)

  return app;
};

export { createServer };
