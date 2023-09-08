import { createUserRegister } from "../models/user.model.js";

export const ctrlCreateUser = async (req, res) => {
    try {
        const user = await createUserRegister(req.body)
    } catch (error) {
        console.log(error)
        res.status(500).json("Internal Server Error...")
    }
};