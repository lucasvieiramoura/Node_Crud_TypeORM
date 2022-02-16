import "reflect-metadata";
import express from 'express';
import "./database";
import { routes } from "./routes";

const app = express();

app.use(express.json());

app.use(routes);

const port = 3000;

app.listen(port, () => console.log(`Server is Running in Port: ${port} `))