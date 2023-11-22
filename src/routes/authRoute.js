import { Router } from "express";
import AuthController from "../controllers/authController.js";

const authRouter = Router();

authRouter.route("/auth/signUp").post(AuthController.signUp);

export default authRouter;
