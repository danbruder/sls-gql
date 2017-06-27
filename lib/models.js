const models = {};

export const addModelsToContext = context => {
  let modelsInstance = {};
  for (let key in models) {
    let instance = new models[key]();
    modelsInstance = {
      ...modelsInstance,
      [key]: instance,
    };

    let clone = Object.assign({}, modelsInstance);
    delete clone[key];
    instance.addModels(clone);
  }

  return Object.assign({}, context, {models: modelsInstance});
};

models.Driver = require('./Driver/model').default;
models.Hello = require('./Hello/model').default;
