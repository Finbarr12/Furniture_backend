import dotenv from "dotenv";

dotenv.config();

const EnvironmentVariables = {
  send_in_blue: process.env.send_in_blue,
};

export default EnvironmentVariables;
