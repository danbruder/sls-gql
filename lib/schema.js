const typeDefs = [
  `
  scalar ObjID
  type Query {
    _placeholder: Int
  }
  type Mutation {
    _placeholder: Int
  }
`,
];

export default typeDefs;

typeDefs.push(require('./Hello/schema.graphql'));
typeDefs.push(require('./Driver/schema.graphql'));
