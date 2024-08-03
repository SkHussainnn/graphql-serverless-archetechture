import { APIGatewayEvent, Context, Callback } from 'aws-lambda';
import { ApolloServer } from 'apollo-server-lambda';
import { typeDefs } from './graphql/schema';
import { resolvers } from './graphql/resolvers';

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true, // Enables introspection queries (GraphQL Playground uses this)
  // Playground options have been removed in newer versions
  // To use Playground locally, you can use the `apollo-server` package instead of `apollo-server-lambda`
});

export const graphqlHandler = (event: APIGatewayEvent, context: Context, callback: Callback) => {
  return server.createHandler()(event, context, callback);
};
