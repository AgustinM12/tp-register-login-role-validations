import { createUserRegister, deleteUser, findAllUser, findUserById, updateUser } from "../models/user.model.js";

//CTRL CREATE USER
export const ctrlCreateUser = async (req, res) => {
    try {
        const user = await createUserRegister(req.body)

        if (user.status === 409) {
            return res.status(409).json({
                message: user.message
            });
        } else if (user) {
            return res.status(201).json({
                message: "User created successfully"
            });
        }

        // Si no se cumple ninguna de las condiciones anteriores, puede considerarse un error inesperado
        return res.status(500).json("Internal Server Error");

    } catch (error) {
        console.log(error)
        res.status(500).json("Internal Server Error...");
    }
};

//CTRL FIND ALL USERS
export const ctrlFindUsers = async (req, res) => {

    try {
        const users = await findAllUser()

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
export const ctrlUpdateUser = async (req, res) => {
    try {
        const userId = req.params.id

        const updateData = req.body

        const userUpdate = await updateUser(userId, updateData)

        if (userUpdate) {
            return res.status(201).json({
                message: "User updated successfully"
            })
        } else {
            return res.status(404).json({
                message: "User not found"
            })
        }
    } catch (error) {
        console.log(error)
        res.status(500).json("Internal Server Error...")
    }
};

//CTRL DELETE USER
export const ctrlDeleteUser = async (req, res) => {
    try {
        const id = req.params.id

        const userDelete = await deleteUser(id)

        if (userDelete) {
            return res.status(201).json({
                message: "User deleted successfully"
            })
        } else {
            return res.status(404).json({
                message: "User not found"
            })
        }

    } catch (error) {
        console.log(error)
        res.status(500).json("Internal Server Error...")
    }
}