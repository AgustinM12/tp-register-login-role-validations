import jwt from "jsonwebtoken"
import { createJWT } from "../helpers/jwt.js"
import { loginByEmailPass } from "../models/user.model.js"
import { environment } from "../environment.js"

export const ctrLogin = async (req, res) => {

    try {
        const registerUser = await loginByEmailPass(req.body)

        if (!registerUser) {
            return res.status(404).json({ message: "User not found" });
        }

        const token = await createJWT({ userId: registerUser.id })

        res.status(200).json(token)

    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
}


// //LOGIN BY EMAIL/PASSWORD
// export async function loginByEmailPass({ email, password }) {

//     try {

//         const registerUser = await User.findOne({
//             where: { email, }
//         })

//         if (!registerUser) {
//             return null
//         }

//         const validPassword = await bcrypt.compare(password, registerUser.password)

//         if (!validPassword) {
//             return null
//         }

//         return registerUser

//     } catch (error) {
//         console.log("Intenal server error", error)
//         throw error
//     }

// };