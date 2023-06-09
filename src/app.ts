import { config } from "dotenv";
config();

import express from "express";

import routes from "./routes";

import initializeDatabase from "./database";
initializeDatabase();

const app = express();

const PORT = process.env.PORT || 3003;

app.use(express.json());

app.use(routes);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}!`));
