const resolvers = {
  Driver: {
    id(driver) {
      return driver.id ? driver.id : '1';
    },
  },
  Query: {
    drivers(root, {lastCreatedAt, limit}, {Driver}) {
      return Driver.all({lastCreatedAt, limit});
    },

    driver(root, {id}, {Driver}) {
      return Driver.findOneById(id);
    },
  },
  Mutation: {
    createDriver(root, {input}, {Driver}) {
      return Driver.insert(input);
    },

    updateDriver(root, {id, input}, {Driver}) {
      return Driver.updateById(id, input);
    },

    removeDriver(root, {id}, {Driver}) {
      return Driver.removeById(id);
    },
  },
};

export default resolvers;
