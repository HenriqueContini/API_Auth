import authRouter from "./authRoute.js";
import userRouter from "./userRoute.js";

const route = (app) => {
  app.use(authRouter);
  app.use(userRouter);

  app.get("/", (req, res) => {
    res.status(200).send("Olá mundo");
  });
};

export default route;
