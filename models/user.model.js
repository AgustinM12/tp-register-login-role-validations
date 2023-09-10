import { DataTypes } from "sequelize";
import { sequelize } from "../db.js";
import { hashPass } from "../helpers/hashPassword.js"
import bcrypt from "bcrypt";

export const ROLES = {
    ADMIN: 'admin',
    USER: 'user'
}

export const User = sequelize.define("User", {
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    role: {
        type: DataTypes.ENUM(ROLES.ADMIN, ROLES.USER),
        // defaultValue: ROLES.USER,
    },
}, {
    timestamps: true
});

//CREATE USER IN DB
export async function createUserRegister(user) {
    try {

        /* const existUsername = await User.findOne({
            where: {
                username: user.username
            }
        });

        const existEmail = await User.findOne({
            where: {
                email: user.email
            }
        });

        if (existUsername) {
            return {
                status: 409,
                message: "Username already registered..."
            };
        }

        if (existEmail) {
            return {
                status: 409,
                message: "Email already registered..."
            };
        } */

        const hashedPass = await hashPass(user.password)

        return await User.create({ ...user, password: hashedPass })

    } catch (error) {
        console.log("Error at create user", error)
    }
};

//FIND ALL USERS IN DB
export async function findAllUser() {
    try {
        return await User.findAll() ?? null

    } catch (error) {
        console.log("Error at find users", error)
    }
};

//FIND ONE USER IN DB
export async function findUserById(id){
    return await User.findByPk(id) ?? null
};

//UP´DATE USER IN DB


//DELETE USER IN DB