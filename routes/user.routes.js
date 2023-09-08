import { Router } from "express";
import { createUserSchema, loginUserSchema } from "../validators/user.validationSchema.js"
import { ctrlCreateUser } from "../controllers/user.controller.js";

const userRoutes = Router()

userRoutes.post("/", createUserSchema, ctrlCreateUser)

export { userRoutes };