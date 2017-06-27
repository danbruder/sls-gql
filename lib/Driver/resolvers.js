let drivers = [];

const resolvers = {
  Driver: {
    id(driver) {
      return driver._id;
    },
  },
  Query: {
    drivers(root, {lastCreatedAt, limit}, context) {
      return drivers;
    },

    driver(root, {id}, context) {
      return drivers[0] ? drivers[0] : null;
    },
  },
  Mutation: {
    createDriver(root, {input}, context) {
      let newthing = Object.assign({}, {id: 'feisfsihfd'}, input);
      drivers.push(newthing);
      return newthing;
    },

    updateDriver(root, {id, input}, context) {
      return drivers[0] ? drivers[0] : null;
    },

    removeDriver(root, {id}, context) {
      return drivers[0] ? drivers[0] : null;
    },
  },
};

export default resolvers;
