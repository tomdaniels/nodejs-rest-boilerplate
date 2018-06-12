module.exports = function(app, db) {
  app.post('/foo', (req, res) => {
    console.log(req.body);
    res.send('bar')
    });
};
