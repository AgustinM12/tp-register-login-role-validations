import { body } from "express-validator";

export const createUserSchema = [
        body('username')
          .exists()
          .notEmpty().withMessage("The username can't be empty")
          .isString().withMessage('The username must be string.'),
        body('password')
          .exists()
          .notEmpty().withMessage("The password can't be empty")
          .isStrongPassword({minLength:5, minNumbers:1, minUppercase:1}).withMessage("The passoword must have at least 5 characters, 1 uppercase, and 1 number"),
        body('email')
          .exists()
          .notEmpty().withMessage("The email can't be empty")
          .isEmail().withMessage("Insert a valid email")
      ]
      
      export const loginUserSchema = [
        body('email')
          .exists()
          .notEmpty().withMessage("The email can't be empty")
          .isEmail().withMessage("Insert a valid email"),
        body('password')
          .exists()
          .notEmpty().withMessage("The password can't be empty")
          .isString()
      ]
