import { createUserRegister, findAllUser, findUserById } from "../models/user.model.js";

//CTRL CREATE USER
export const ctrlCreateUser = async (req, res) => {
    try {
        const user = await createUserRegister(req.body)

        return res.status(201).json({
            message: "User created successfully"
        })
    } catch (error) {
        console.log(error)
        res.status(500).json("Internal Server Error...")
    }
};

//CTRL FIND ALL USERS
export const ctrlFindUsers = async (req, res) => {

    try {
        const users = await findAllUser(req.body)

        return res.status(200).json(users)

    } catch (error) {
        console.log(error)
        res.status(500).json("Internal Server Error...")
    }
};

//CTRL FIND ONE USER
export const ctrlFindOneUser = async (req, res) => {

    try {
        const userId = req.params.id

        const user = await findUserById(userId)

        return res.status(200).json(user)

    } catch (error) {
        console.log(error)
        res.status(500).json("Internal Server Error...")
    }
};

//CTRL UPDATE USER

//CTRL DELETE USER