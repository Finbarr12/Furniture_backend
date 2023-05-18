import mongoose from "mongoose";
import { Iproducts } from "../Interface/interface";

interface Products extends Iproducts, mongoose.Document {}

const ProductSchema = new mongoose.Schema<Iproducts>(
  {
    name: {
      type: String,
      required: true,
    },
    Image: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<Products>("products", ProductSchema);
