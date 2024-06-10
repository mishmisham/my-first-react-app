import express from 'express';
import {graphqlHTTP} from 'express-graphql';
import graphql from 'graphql';

const QueryRoot = new graphql.GraphQLObjectType({
    name: 'Query',
    fields: () => ({
        hello: {
            type: graphql.GraphQLString,
            resolve: () => "Hello world!"
        }
    })
})

const schema = new graphql.GraphQLSchema({ query: QueryRoot });

export const graphQLServer = (port) => {
    const app = express();
    app.use('/ql', graphqlHTTP({
        schema: schema,
        graphiql: true,
    }));

    app.listen(port);
    console.log("GraphQL listening at http://localhost:%s/ql/", port)
}
