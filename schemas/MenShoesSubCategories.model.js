import mongoose from "mongoose";
import Shoes, { shoesSchema } from "./Shoes.model.js";

const menShoesSubCategoriesSchema = new mongoose.Schema({
  subCategoryName: {
    type: String
  },
  subCategoryProds: [shoesSchema],
});

const MenShoesSubCategories = mongoose.model(
  "MenShoesSubCategories",
  menShoesSubCategoriesSchema
);
export default MenShoesSubCategories;
