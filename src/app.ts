// src/app.ts
const express = require("express");
const app = express();
import routes from "./routes";

app.use(express.json());
app.use("/api", routes);

export default app;
