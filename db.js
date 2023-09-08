import { Sequelize } from 'sequelize';
import { environment } from "./environment.js"

export const sequelize = new Sequelize(
   environment.DB.DB_NAME,
   environment.DB.DB_USER,
   environment.DB.DB_PASSWORD,
    {
        host:environment.DB.DB_HOST,
        dialect:environment.DB.DB_DIALECT,
        port:environment.DB.DB_PORT
    });

    export async function syncDB () {
        try {
          await sequelize.sync({ force: false })
        } catch (error) {
          console.log(error)
        }
      }