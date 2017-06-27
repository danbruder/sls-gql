module.exports = function(plop) {
  plop.setGenerator('module', {
    description: 'Generate a graphql type, query, model, and resolver',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of the module?',
        tvalidate: function(value) {
          if (/.+/.test(value)) {
            return true;
          }
          return 'name is required';
        },
      },
    ],
    actions: function(data) {
      var actions = [];

      actions.push({
        type: 'add',
        path: '../../lib/{{properCase name}}/model.js',
        templateFile: 'module/model.hbs',
      });

      return actions;
    },
  });
};
