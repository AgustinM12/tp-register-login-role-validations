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
        defaultValue: ROLES.USER,
    },
}, {
    timestamps: true
});

//CREATE USER IN DB
export async function createUserRegister(user) {
    const hashedPass = await hashPass(user.password)

    return await User.create({ ...user, password: hashedPass })
}