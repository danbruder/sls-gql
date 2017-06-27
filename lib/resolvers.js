import {GraphQLScalarType} from 'graphql';
import {Kind} from 'graphql/language';
import {merge} from 'lodash';

const resolvers = {};

export default resolvers;

merge(resolvers, require('./Hello/resolvers.js').default);
merge(resolvers, require('./Driver/resolvers.js').default);
