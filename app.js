import express from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import 'dotenv/config'

import { sequelize } from './db.js';

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(helmet({
    contentSecurityPolicy: false
}));
app.use(morgan("dev"));
app.use(express.json());



app.listen(port, async () => {
    try {
      await sequelize.authenticate();
      console.log('Connection established successfully.');
      console.log(`Server on port localhost:${port}`);
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
  });