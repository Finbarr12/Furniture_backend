import express, { Application } from "express";
import { DBConnect } from "./config/db";
import router from "./router/router";

const app: Application = express();
const Port = 1112;

app.use(express.json());
app.use("/api", router);

DBConnect();

app.listen(Port, () => {
  console.log("Up and running");
});
