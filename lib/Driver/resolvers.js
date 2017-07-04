const resolvers = {
  Driver: {
    id(driver) {
      return driver._id;
    },
  },
  Query: {
    drivers(root, {lastCreatedAt, limit}, {Driver}) {
      return Driver.all({lastCreatedAt, limit});
    },

    driver(root, {id}, context) {
      return drivers[0] ? drivers[0] : null;
    },
  },
  Mutation: {
    createDriver(root, {input}, {Driver}) {
      return Driver.insert(input);
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
