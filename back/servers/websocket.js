import WebSocket, { WebSocketServer } from 'ws';

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

function onConnect(wsClient) {
    console.log('Новый пользователь');
    wsClient.send('ipsum');

    wsClient.on('close', function() {
        console.log('Пользователь отключился');
    });

    wsClient.on('message', function(message) {
        console.log('inbox', message);
        try {
            const jsonMessage = JSON.parse(message);
            switch (jsonMessage.action) {
                case 'ECHO':
                    wsClient.send(jsonMessage.data);
                    break;
                case 'PING':
                    setTimeout(function() {
                        wsClient.send('PONG');
                    }, 2000);
                    break;
                default:
                    console.log('Неизвестная команда');
                    break;
            }
        } catch (error) {
            console.log('Ошибка', error);
        }
    });
}


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
    console.log(`Websocket server on ${port}`);
}