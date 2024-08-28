import { Router } from "express";
import { register,login,resetPassword } from "../controllers/user.controller.js";
const userRouter = Router()

userRouter.route("/register").post(register)
userRouter.route("/login").post(login)
userRouter.route("/resetPassword").post(resetPassword)

export default userRouter