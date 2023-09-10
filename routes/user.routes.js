import { Router } from "express";
import { validation } from "../middlewares/validations.js";
import { createUserSchema } from "../validators/user.validationSchema.js"
import { ctrlCreateUser, ctrlFindOneUser, ctrlFindUsers, ctrlUpdateUser, ctrlDeleteUser } from "../controllers/user.controller.js";

const userRoutes = Router()

//CRUD ROUTES
userRoutes.post("/register", createUserSchema, validation, ctrlCreateUser)

userRoutes.get("/", ctrlFindUsers)

userRoutes.get("/:id", ctrlFindOneUser)

userRoutes.put("/:id", ctrlUpdateUser)

userRoutes.delete("/:id", ctrlDeleteUser)

export { userRoutes };