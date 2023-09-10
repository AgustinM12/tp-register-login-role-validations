import jwt from "jsonwebtoken";
import { environment } from '../environment.js'

export const createJWT = (payload) => {
  return new Promise((resolve, reject) => {
    jwt.sign(payload, environment.SECRET, (error, token) => {
      if (error) {
        reject("Error at signing token")
      }

      resolve({ token })
    })
  })
};