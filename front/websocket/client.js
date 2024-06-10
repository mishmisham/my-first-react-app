const websocketClient = new WebSocket('ws://localhost:9000');

websocketClient.onopen = function () {
    console.log('подключился');
};
websocketClient.onmessage = function (message) {
    console.log('Message: %s', message.data);
};

export const websocketSendEcho = (value) => {
    if (typeof window !== 'object') {
        return
    }
    try {
        websocketClient.send(JSON.stringify({action: 'ECHO', data: value.toString()}));
    } catch (err) {
        console.log(err)
    }
}

export const websocketSendPing = () => {
    websocketClient.send(JSON.stringify({action: 'PING'}));
}

export default websocketClient
