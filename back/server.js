
import { apiServer } from "./servers/api.js";
import { websocketServer } from './servers/websocket.js';

const apiPort = 8080;
const wsPort = 9000;

apiServer(apiPort);
websocketServer(wsPort);