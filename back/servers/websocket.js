import WebSocket, { WebSocketServer } from 'ws';
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

    const wss = new WebSocketServer({
        port,
        perMessageDeflate: {
        zlibDeflateOptions: {
            chunkSize: 1024,
            memLevel: 7,
            level: 3
        },
        zlibInflateOptions: {
            chunkSize: 10 * 1024
        },
        clientNoContextTakeover: true, // Defaults to negotiated value.
        serverNoContextTakeover: true, // Defaults to negotiated value.
        serverMaxWindowBits: 10, // Defaults to negotiated value.
        concurrencyLimit: 10, // Limits zlib concurrency for perf.
        threshold: 1024 // Size (in bytes) below which messages
        }
    });

    wss.on('connection', onConnect);
    console.log("🚀 WebSocket on ws://localhost:%s", port)
}