import express from "express";
import "dotenv/config";
import cors from "cors";
import connect from "./db.js";
import userRouter from "./routes/user.route.js";
import productRouter from "./routes/product.route.js";
const app = express();
app.use(cors());
app.use(express.json()); // to accept the json data.

// connect to the database
connect();
app.use("/api/v1/user", userRouter);
app.use("/api/v1/products", productRouter);
const PORT = process.env.PORT || 8000;
app.listen(PORT, (err) => {
  if (err) throw err;
  console.log(`App is listening ro the port ${PORT}`);
});
