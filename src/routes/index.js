const create = require('./create');

module.exports = function(app, db) {
  create(app, db);
};
