// import WebSocket, { WebSocketServer } from 'ws';
import express from 'express';
import { createServer } from "node:http";
import { Server } from "socket.io";
import { onConnect } from '../websocket/onConnect.js';
/*
    // https://www.npmjs.com/package/ws


    // https mode
    import { createServer } from 'https';
    import { readFileSync } from 'fs';
    import { WebSocketServer } from 'ws';

    const server = createServer({
        cert: readFileSync('/path/to/cert.pem'),
        key: readFileSync('/path/to/key.pem')
    });

    const wss = new WebSocketServer({ server });

*/

export const websocketServer = (port) => {

    const app = express();
    const server = createServer(app, {
        cors: {
          origin: process.env.CLIENT_HOST
        }
    });

    const io = new Server(server, {
        transports: [
            // "polling",
            "websocket",
            // "webtransport"
        ]
    });

    io.on('connection', onConnect);

    server.listen(port);
    
    console.log("🚀 WebSocket on ws://localhost:%s", port);
}

