// Initializes the `user-files` service on path `/user-files`
const { UserFiles } = require('./user-files.class');
const createModel = require('../../models/user-files.model');
const hooks = require('./user-files.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/user-files', new UserFiles(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('user-files');

  service.hooks(hooks);
};
