// In src/index.js
const express = require("express");

const bodyParser = require("body-parser");
const v1Plantilla_ProductoRouter = require("./v1/routes/plantilla_productoRoutes");
const v1Plantilla_InsumoRouter = require("./v1/routes/plantilla_insumoRoutes");

const { swaggerDocs: V1SwaggerDocs } = require("./v1/swagger");

const cors = require("cors");

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use("/api/v1/plantillas-productos", v1Plantilla_ProductoRouter);
app.use("/api/v1/plantillas-insumos", v1Plantilla_InsumoRouter);

app.listen(PORT, () => {
  console.log(`API is listening on port ${PORT}`);

  V1SwaggerDocs(app, PORT);
});
