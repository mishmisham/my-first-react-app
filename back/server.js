
import { apiServer } from "./servers/api.js";
import { websocketServer } from './servers/websocket.js';
import { graphQLServer } from "./servers/graphql.js";

const apiPort = 8080;
const wsPort = 9000;
const qlPort = 4000;

apiServer(apiPort);
websocketServer(wsPort);
graphQLServer(qlPort);