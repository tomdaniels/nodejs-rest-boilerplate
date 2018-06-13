const express = require('express');

const app = express();
const port = process.env.PORT || 8080;

require('./src/routes')(app, {});

app.listen(port, () => {
  console.log(`API running on port: ${port}`)
});
