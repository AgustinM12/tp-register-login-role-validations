import { validationResult } from "express-validator";

export const validation = (req, res, next) => {
    const errors = validationResult(req)

    if (errors.notEmpty()) {
        return res.status(400).json(errors)
    }
    next()
};