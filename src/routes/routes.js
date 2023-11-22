import authRouter from "./authRoute.js";

const route = (app) => {
  app.use(authRouter);

  app.get("/", (req, res) => {
    res.status(200).send("Olá mundo");
  });
};

export default route;
