
import { apiServer } from "./servers/api.js";
import { websocketServer } from './servers/websocket.js';
import { graphQLServer } from "./servers/graphql.js";

const apiPort = process.env.JSON_API_PORT;
const wsPort = process.env.WEBSOCKET_PORT;
const qlPort = process.env.GRAPHQL_PORT;

apiServer(apiPort);
websocketServer(wsPort);
graphQLServer(qlPort);