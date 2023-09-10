import express from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import 'dotenv/config'

import { syncDB } from './db.js';
import { environment } from "./environment.js";

import './models/user.model.js'
import { userRoutes } from './routes/user.routes.js'
import { authRoutes } from "./routes/auth.routes.js"

const app = express();
app.use(cors());
app.use(helmet({
  contentSecurityPolicy: false
}));
app.use(morgan("dev"));
app.use(express.json());
app.use(userRoutes, authRoutes)


app.listen(environment.PORT, async () => {
  try {
    syncDB()
    console.log('Connection established successfully.');
    console.log(`Server on port localhost:${environment.PORT}`);
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
});