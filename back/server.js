
import { apiServer } from "./servers/api.js";
import { websocketServer } from './servers/websocket.js';
import { graphQLServer } from "./servers/graphql.js";

const apiPort = process.env.JSON_API_PORT || 8080;
const wsPort = process.env.WEBSOCKET_PORT || 9000;
const qlPort = process.env.GRAPHQL_PORT || 4000;

apiServer(apiPort);
websocketServer(wsPort);
graphQLServer(qlPort);