
export const onConnect = (wsClient) => {
    console.log('Новый пользователь');
    wsClient.emit('ipsum');

    wsClient.on('close', function() {
        console.log('Пользователь отключился');
    });

    wsClient.on('message', function(message) {
        console.log('inbox', message);
        try {
            const jsonMessage = message;
            wsClient.emit('message', 'ping')
            switch (jsonMessage.action) {
                case 'ECHO':
                    wsClient.emit('message', jsonMessage.data);
                    break;
                case 'PING':
                    setTimeout(function() {
                        wsClient.emit('message', 'PONG');
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
