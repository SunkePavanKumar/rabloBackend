import express from "express";
import {
  addProduct,
  deleteProduct,
  getAllProducts,
  updateProduct,
  getFeaturedProduct,
  priceRangeProducts,
  ratingHRange,
} from "../controllers/product.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";
const router = express.Router();

router.get("/", (req, res) => {
  res.send("product route is working");
}); // for testing to be removed while moving into production

// authentication middleware
router.post("/addProducts", authMiddleware, addProduct);
router.get("/getProducts", authMiddleware, getAllProducts);
router.patch("/updateProduct/:id", authMiddleware, updateProduct);
router.delete("/deleteProduct/:id", authMiddleware, deleteProduct);
router.get("/featured", authMiddleware, getFeaturedProduct);
// product less than certain value
router.get("/price/:value", authMiddleware, priceRangeProducts);

// products greater than certain value
router.get("/rating/:value", authMiddleware, ratingHRange);

export default router;
