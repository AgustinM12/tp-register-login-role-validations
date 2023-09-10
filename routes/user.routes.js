import { Router } from "express";
import { validation } from "../middlewares/validations.js";
import { createUserSchema, loginUserSchema } from "../validators/user.validationSchema.js"
import { ctrlCreateUser, ctrlFindOneUser, ctrlFindUsers } from "../controllers/user.controller.js";

const userRoutes = Router()

userRoutes.post("/register", createUserSchema, validation, ctrlCreateUser)

userRoutes.get("/find", ctrlFindUsers)

userRoutes.get("/find/:id", ctrlFindOneUser)


export { userRoutes };