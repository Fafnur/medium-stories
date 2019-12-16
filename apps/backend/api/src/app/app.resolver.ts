import { GraphQLScalarType, ValueNode } from 'graphql';
import { Kind } from 'graphql/language';

export const resolverMap = {
  Date: new GraphQLScalarType({
    name: 'Date',
    description: 'Date custom scalar type',
    parseValue(value: number) {
      return new Date(value); // value from the client
    },
    serialize(value: Date) {
      return value.getTime(); // value sent to the client
    },
    parseLiteral(ast) {
      if (ast.kind === Kind.INT) {
        return new Date(ast.value); // ast value is always in string format
      }
      return null;
    }
  })
};
