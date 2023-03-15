import { Router } from "express";

import { createCategory, createMenShoesSubcategory, addNewProduct } from "../controllers/category.controller.js";

const categoryRouter = Router();

categoryRouter.post("/create-category", createCategory);

categoryRouter.post("/create-men-shoes-subcategory", createMenShoesSubcategory)

categoryRouter.post("/add-new-product", addNewProduct)

export default categoryRouter;
