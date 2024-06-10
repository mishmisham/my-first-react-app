import express from 'express';
import cors from 'cors';
import http from 'http';
import { userRouter } from '../apiSrc/router/userRouter.js'

const app = express();

const corsOptions = {
//   origin: 'http://localhost:'+port,
  origin: '*',
  optionsSuccessStatus: 200
}
app.use(express.json());
app.use(cors(corsOptions));
app.use('/api/', userRouter);

export const apiServer = (port) => {
    const server = http.createServer(app);
    server.listen( port, function () {
        console.log("App listening at http://localhost:%s", port)
    });
}
