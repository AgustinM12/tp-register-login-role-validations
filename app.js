import express from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import path from "path";
import 'dotenv/config'
import { createLogs } from "./helpers/createLogs.js"
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

app.use(morgan("combined", {
  stream: {
    write: (message) => {
      const currentFilePath = new URL(import.meta.url).pathname;
      console.log(currentFilePath);
      const currentDirectory = path.dirname(currentFilePath);
      createLogs(message, currentDirectory, "logs");
    }
  }
}));

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