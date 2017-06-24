'use strict';

if (!global._babelPolyfill) {
  require('babel-polyfill');
}

import {graphql} from 'graphql';
import {makeExecutableSchema} from 'graphql-tools';

const schema = makeExecutableSchema({
  typeDefs: [
    `
    type Query{
      hello: String
    }
  `,
  ],
  resolvers: {
    Query: {
      hello: () => 'world',
    },
  },
});

const handle = (query, variables) =>
  graphql(schema, query, null, {}, variables);

const createResponse = (statusCode, body) => ({
  statusCode: statusCode,
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
  body: JSON.stringify(body),
});

module.exports.hello = (event, context, callback) => {
  // Is thre a way to parse json dirrecrly
  var body = event.body;
  if (!body.query) {
    body = JSON.parse(body);
  }

  handle(body.query, body.variables)
    .then(response => callback(null, createResponse(200, response)))
    .catch(error =>
      callback(
        null,
        createResponse(error.responseStatusCode || 500, {
          message: error.message || 'Internal server error',
        }),
      ),
    );
};
