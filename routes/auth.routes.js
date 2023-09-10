import { Router } from "express";
import { validation } from "../middlewares/validations.js";
import { loginUserSchema } from "../validators/user.validationSchema.js"
import { ctrLogin } from "../controllers/auth.controller.js";
import { isLogged } from "../middlewares/logged.js"

export const authRoutes = Router()

authRoutes.post("/login", loginUserSchema, validation, ctrLogin)

authRoutes.get("/authRoute", isLogged, (req, res) => {
    res.json(req.user)
}) 