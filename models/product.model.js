import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  productID: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  price: { type: Number, required: true },
  featured: { type: Boolean, default: false },
  rating: { type: Number },
  createdAt: { type: Date, required: true, default: Date.now },
  company: { type: String, required: true },
});

const Product = mongoose.model("ProductRablo", productSchema);

export default Product;
