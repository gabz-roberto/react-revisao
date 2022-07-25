const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const allowCors = require('./cors');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(allowCors);

const PORT = 3003;

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Servidor executando na porta: ${PORT}`);
  }
});

module.exports = app;