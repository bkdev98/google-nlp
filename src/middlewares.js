import bodyParser from 'body-parser';
import compression from 'compression';
import cors from 'cors';

const isProd = process.env.NODE_ENV === 'prod' || 'production';

export default app => {
  if (isProd) {
    app.use(compression());
  }

  app.use(bodyParser.json({ limit: '5mb' }));
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(cors());
}