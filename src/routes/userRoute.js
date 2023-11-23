import { Router } from "express";
import UserController from "../controllers/UserController.js";
import tokenMiddleware from "../middlewares/tokenMiddleware.js";

const userRouter = Router();

userRouter
  .route("/user/getUser/:id")
  .get(tokenMiddleware, UserController.getUser);

export default userRouter;
