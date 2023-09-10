import { environment } from "../environment.js"
import { findUserById } from "../models/user.model.js"
import jwt from "jsonwebtoken"

export const isLogged = async (req, res, next) => {
    const token = req.headers.authorization

    if (!token) {
        return res.sendStatus(404)
    }

    const { user: id } = jwt.verify(token, environment.SECRET)

    const user = await findUserById(id)

    if (!user) {
        return res.sendStatus(403)
    }

    req.user = user
    next()
}