import jwt from "jsonwebtoken";
import { environments } from '../config/environments.js'

export const createJWT = (payload) => {
  return new Promise((resolve, reject) => {
    jwt.sign(payload, environments.SECRET, (error, token) => {
      if (error) {
        reject("Error at signing token")
      }

      resolve({ token })
    })
  })
};