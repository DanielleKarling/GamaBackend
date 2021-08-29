const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const swaggerUI = require("swagger-ui-express");
const swaggerDocs = require("./swagger.json");
const routes = require("./routes");
const app = express();

mongoose.connect(
  "mongodb+srv://backend:FcdvjK8JWKVCwbnp@cluster0.4n6ig.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useCreateIndex: true,
  }
);

const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use("/docs", swaggerUI.serve, swaggerUI.setup(swaggerDocs));
app.use(routes);
app.listen(port, () => {
  console.log("rodando na porta " + port);
});
