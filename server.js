const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));

require('./src/routes')(app, {});

app.listen(port, () => {
  console.log(`API running on port: ${port}`)
});
