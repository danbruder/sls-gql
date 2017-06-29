const models = {};

export const addModelsToContext = context => {
  for (let key in models) {
    let instance = new models[key]();
    context[key] = instance;
  }
  for (let key in models) {
    context[key].addContext({
      ...context,
      [key]: null,
    });
  }
  return context;
};

models.Driver = require('./Driver/model').default;
models.Hello = require('./Hello/model').default;
