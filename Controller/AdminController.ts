import mongoose from "mongoose";
import AdminModel from "../Model/AdminModel";
import { Request, Response } from "express";
import { Iadmin } from "../Interface/interface";

//signupadmin

const SignUpAdmin = (req: Request<{}, {}, Iadmin>, res: Response) => {
  try {
    const { name, password, email, confirmpassword } = req.body;

    const SignAdmin = AdminModel.create({
      name,
      password,
      email,
      confirmpassword,
    });

    return res.status(201).json({
      message: "done",
      data: SignAdmin,
    });
  } catch (error) {
    return res.status(400).json({
      message: "An error occured",
      data: error,
    });
  }
};
