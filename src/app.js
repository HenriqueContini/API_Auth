import express from "express";
import route from "./routes/routes.js";

const app = express();
app.use(express.json());

route(app);

export default app;
