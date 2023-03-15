import mongoose from "mongoose";

const shoesCategorySchema = new mongoose.Schema({
  categoryName: String,
  menShoes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "MenShoesSubCategories",
    },
  ],
  womenShoes: [
    {
      type: mongoose.Schema.Types.ObjectId,
    },
  ],
});

const ShoesCategory = mongoose.model("ShoesCategory", shoesCategorySchema);

export default ShoesCategory;
