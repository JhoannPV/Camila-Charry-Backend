// In src/index.js
const express = require("express");

const bodyParser = require("body-parser");

const { swaggerDocs: V1SwaggerDocs } = require("./v1/swagger");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.listen(PORT, () => {
  console.log(`API is listening on port ${PORT}`);

  V1SwaggerDocs(app, PORT);
});
