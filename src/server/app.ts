import express, { Application, Request, Response, NextFunction } from 'express';
import { Routes } from '@interfaces/routes.interface';
import { environment } from '@env/environment';
import morgan from 'morgan';
import compression from 'compression';
import cors from 'cors';
import helmet from 'helmet';
import { headersMiddleware } from '@middleware/headers.middleware';

const { PORT, HOST } = environment;

const corsOptions = {
  origin: '*',
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
  exposedHeaders: ['auth-token'],
};

export default (routes: Routes) => {
  const app: Application = express();

  //middlewares
  app.use(helmet());
  app.use(morgan('dev'));
  app.use(express.json({ limit: '50mb' }));
  app.use(express.urlencoded({ extended: true }));
  app.use(compression({ filter: () => true }));
  app.use(cors(corsOptions));
  app.use(headersMiddleware);

  //test alive
  app.use('/alive', (_req: Request, res: Response, next: NextFunction) => {
    res.status(200).json({ success: true, response: 'Server online' });
    next();
  });

  //application routes
  app.use('/', routes.allRoutes);

  //404 error
  app.use((err: Error, _req: Request, res: Response, next: NextFunction) => {
    res.status(404).json({
      success: false,
      error: err.message || err || 'Not Found',
      stack: err.stack || null,
    });
    next();
  });

  //500 error
  app.use((err: Error, _req: Request, res: Response, next: NextFunction) => {
    res.status(500).json({
      success: false,
      error: err.message || err || 'Internal Server Error',
      stack: err.stack || null,
    });
    next();
  });

  app.set('port', PORT);
  app.set('host', HOST);

  //load server
  app.listen(PORT, () => {
    console.log('\x1b[35m%s\x1b[0m', '-------> LISTENING AT PORT: ' + PORT + ' <-------');
  });
};
