// import 'module-alias/register';

import express, { Request, Response, NextFunction } from 'express';

import { getData } from '~/lib/client';

const app = express();

const port = 8000;

const home = (
  request: Request,
  response: Response,
  next: NextFunction
): Response<string> => {
  return response.send(getData());
};

app.get('/', home);

app.listen(port, () => {
  console.log(`app started: http://localhost:${port}`);
});
