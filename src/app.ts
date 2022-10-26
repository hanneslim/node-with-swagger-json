import express from "express";
import bodyParser from "body-parser";
import exampleRoutes from "./routes/example-route";
import swaggerUi from "swagger-ui-express";

import * as swaggerDocument from "./swagger.json";

const app = express();

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(bodyParser.json());

app.use(exampleRoutes);

app.listen(3000);
