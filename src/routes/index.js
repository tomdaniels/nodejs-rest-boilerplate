const firstRoute = require('./first-route');
module.exports = function(app, db) {
  firstRoute(app, db);
  // Other route groups could go here, in the future
};
