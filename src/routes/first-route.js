module.exports = function(app, db) {
  app.post('/foo', (req, res) => {
      // You'll create your note here.
      res.send('bar')
    });
};
