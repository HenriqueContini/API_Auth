import { Router } from "express";
import AuthController from "../controllers/AuthController.js";

const authRouter = Router();

authRouter.route("/auth/signUp").post(AuthController.signUp);
authRouter.route("/auth/signIn").post(AuthController.signIn);

export default authRouter;
