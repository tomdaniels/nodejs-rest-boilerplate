module.exports = function(app, db) {
  app.get('/bar', (req, res) => {
    res.send('foo')
    });
};
