import express from 'express';
import 'dotenv/config';
import http from 'http';
import HTTPStatus from 'http-status';

import configMiddleware from './middlewares';
import constants from './constants';
import {processText} from './ml-language';

const app = express();

configMiddleware(app);

app.post('/v1/analyze', async function(req, res) {
  try {
    const {text} = req.body;
    if (!text) {
      throw new Error('No text to analyze');
    }
    const result = await processText(text);
    return res.status(HTTPStatus.OK).json(result);
  } catch (error) {
    return res.status(HTTPStatus.BAD_REQUEST).json(error.message);
  }
});

const server = http.createServer(app);

server.listen(constants.PORT, () => console.log(`${constants.PORT} 🤖`));
