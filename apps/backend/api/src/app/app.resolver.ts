import { GraphQLScalarType } from 'graphql';
import GraphQLJSON from 'graphql-type-json';
import { Kind } from 'graphql/language';

export const resolverMap = {
  Date: new GraphQLScalarType({
    name: 'Date',
    description: 'Date custom scalar type',
    parseValue(value: string) {
      return new Date(value); // value from the client
    },
    serialize(value: Date) {
      return value.toISOString(); // value sent to the client
    },
    parseLiteral(ast) {
      if (ast.kind === Kind.STRING) {
        return new Date(ast.value); // ast value is always in string format
      }
      return null;
    }
  }),
  JSON: GraphQLJSON
};
