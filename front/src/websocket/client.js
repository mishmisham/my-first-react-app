import { io } from "socket.io-client";

const websocketURL = 'ws://localhost:'+process.env.WS_PORT;

const connectionOptions =  {
    "force new connection" : true,
    "reconnectionAttempts": "Infinity", //avoid having user reconnect manually in order to prevent dead clients after a server restart
    "timeout" : 10000, //before connect_error and connect_timeout are emitted.
    "transports": [
        // "polling",
        "websocket",
        // "webtransport"
    ],
    // withCredentials: true,
    // extraHeaders: {
    //   "my-custom-header": "abcd"
    // }
    // cors: {
    //     origin: websocketURL
    // }
};


const websocketClient =io(websocketURL, connectionOptions);
websocketClient.on('open', e=>{
    console.log('websocket client open');
})
websocketClient.on('message', message=>{
    console.log('Message: %s', message);
})

export const websocketSend = (value) => {
    if (typeof window !== 'object') {
        return
    }
    try {
        websocketClient.emit('message', {action: 'ECHO', data: value});
    } catch (err) {
        console.log(err)
    }
}

export default websocketClient;
