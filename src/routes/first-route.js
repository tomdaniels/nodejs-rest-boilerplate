module.exports = function(app, db) {
  app.get('/foo', (req, res) => {
    res.send('bar')
    });
};
