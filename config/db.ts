import mongoose, { Connection } from "mongoose";

const Uri = "mongodb://localhost/furniture";

export const DBConnect = () => {
  try {
    const Connect = mongoose.connect(Uri);
    console.log(`You are connected to db`);
  } catch (error) {
    console.log(error);
  }
};
