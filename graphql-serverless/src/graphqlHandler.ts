import { APIGatewayEvent, Context, Callback, Handler } from 'aws-lambda';
import { ApolloServer } from 'apollo-server-lambda';
import { typeDefs } from './graphql/schema';
import { resolvers } from './graphql/resolvers';

// Create Apollo Server instance
const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
});

// Handler for GraphQL requests
export const graphqlHandler = (event: APIGatewayEvent, context: Context, callback: Callback) => {
  return server.createHandler()(event, context, callback);
};

// Handler for GET requests to fetch all users
export const getUsers: Handler = async (event: APIGatewayEvent) => {
  const users = [
    { id: '1', name: 'John Doe' },
    { id: '2', name: 'Jane Smith' },
  ];

  return {
    statusCode: 200,
    body: JSON.stringify(users),
  };
};
