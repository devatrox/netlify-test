import { ApolloServer } from "apollo-server-lambda";
import { resolvers } from "./resolvers";
import typeDefs from "./typeDef";

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

const handler = server.createHandler();

export { handler };
