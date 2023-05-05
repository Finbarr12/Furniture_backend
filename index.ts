import express, { Application } from "express";
import { DBConnect } from "./config/db";

const app: Application = express();
const Port = 1112;

app.use(express.json());

DBConnect();

app.listen(Port, () => {
  console.log("Up and running");
});
