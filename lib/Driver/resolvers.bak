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

    driver(root, {id}, {Driver}) {
      return Driver.findOneById(id);
    },
  },
  Mutation: {
    async createDriver(root, {input}, {Driver}) {
      const id = await Driver.insert(input);
      return Driver.findOneById(id);
    },

    async updateDriver(root, {id, input}, {Driver}) {
      await Driver.updateById(id, input);
      return Driver.findOneById(id);
    },

    removeDriver(root, {id}, {Driver}) {
      return Driver.removeById(id);
    },
  },
};

export default resolvers;
