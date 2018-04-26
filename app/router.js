
module.exports = app => {
  app.get('/', app.controller.app.app.index);
  app.post('/search',app.controller.app.search.search);
  app.get('/(/.+)?', app.controller.app.app.index);
};
