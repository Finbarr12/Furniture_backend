import { Router } from "express";
import { SignInadmin, SignUpAdmin } from "../Controller/AdminController";
import { Allproducts, CreateProducts } from "../Controller/ProductController";
import ViewImage from "../config/Multer";
import { Mailer } from "../Controller/Mailer";

const router = Router();

router.post("/adminsignup", SignUpAdmin);
router.post("/adminsignin", SignInadmin);
router.post("/createproduct", ViewImage, CreateProducts);
router.get("/allproducts", Allproducts);
router.post("/mailer", Mailer);

export default router;
