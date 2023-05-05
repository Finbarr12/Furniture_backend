import mongoose from "mongoose";
import AdminModel from "../Model/AdminModel";
import { Request, Response } from "express";
import { Iadmin } from "../Interface/interface";
import bcrypt from "bcrypt";

//signupadmin

export const SignUpAdmin = async (
  req: Request<{}, {}, Iadmin>,
  res: Response
) => {
  try {
    const { name, password, email, confirmpassword } = req.body;

    const salt = await bcrypt.genSalt(12);

    const hashedPass = await bcrypt.hash(password, salt);

    const SignAdmin = await AdminModel.create({
      name,
      password: hashedPass,
      email,
      confirmpassword: hashedPass,
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

//signinAdmin

export const SignInadmin = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    if (!email) {
      res.status(400).json({
        message: "Input email",
      });
    }

    const adminInfo = await AdminModel.findOne({ email });

    if (!adminInfo) {
      res.status(400).json({
        message: "Email not found",
      });
    }

    const Checkpass = await bcrypt.compare(password, adminInfo!.password);

    if (!Checkpass) {
      return res.status(404).json({
        message: "User dosen't exist",
      });
    }

    return res.status(200).json({
      status: "success",
      data: adminInfo,
    });
  } catch (error) {
    return res.status(400).json({
      message: "An error occured",
      data: error,
    });
  }
};
