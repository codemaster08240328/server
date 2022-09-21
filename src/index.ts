import http from 'http';
import { createServer } from './server';

const startServer = async () => {
  const app = await createServer();
  const host = process.env.HOST || '0.0.0.0';
  const port = process.env.PORT || '4000';
  
  http.createServer(app).listen({host, port}, () => {
    console.log(`Server is ready at ${host}:${port}`);
  })
}

startServer();