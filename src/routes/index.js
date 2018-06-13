const firstRoute = require('./first-route');
const secondRoute = require('./second-route');

module.exports = function(app, db) {
  firstRoute(app, db);
  secondRoute(app, db);
  // so on, so forth
};
