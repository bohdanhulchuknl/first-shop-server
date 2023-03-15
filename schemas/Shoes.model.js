import mongoose from "mongoose";

export const shoesSchema = new mongoose.Schema({
    sku: String,
    name: {
      type: String,
      unique: true
    },
    price: Number,
    category: String,
    vendor: String,
    model: String,
    description: String,
    gallery: [String],
    color: String,
    weight: String,
    country: String,
    sizes: [{ size: String, amount: String }],
});

const Shoes = mongoose.model("Shoes", shoesSchema);

export default Shoes;
