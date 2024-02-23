import productSchemaZod from "../validations/product.validate.js";
import Product from "../models/product.model.js";
import { v4 as uuidv4 } from "uuid";
export async function addProduct(req, res) {
  try {
    await productSchemaZod.parse(req.body); // zod validation for inputs
    const productId = uuidv4();
    req.body.productID = productId;
    const newProduct = new Product(req.body);
    const savedProduct = await newProduct.save();
    res.json({
      message: "Added the product Successfully",
      data: savedProduct,
    });
  } catch (error) {
    res.status("404").send({
      Error: error,
    });
  }
}

export async function getAllProducts(req, res) {
  try {
    const products = await Product.find({}).lean().exec();
    if (products.length === 0) {
      return res.json({
        message: "No Products are Available",
      });
    }
    res.json({
      message: "successfully fetched all the products",
      products,
    });
  } catch (error) {
    res.status("404").send({ error });
  }
}

export async function updateProduct(req, res) {
  try {
    const productID = req.params.id;
    if (!productID) {
      return res.json({
        message: "Please provide the productID as path params",
      });
    }
    let query = { productID: productID };
    let update = req.body;

    const product = await Product.findOneAndUpdate(query, update, { new: true })
      .lean()
      .exec();

    if (product) {
      return res.json({
        message: "Successfully Update the product",
        product,
      });
    }

    res.status("404").json({
      message: "No Products Exist with the ID",
    });
  } catch (error) {
    res.status("404").send({
      error,
    });
  }
}

export async function deleteProduct(req, res) {
  try {
    const productID = req.params.id;
    if (!productID) {
      return res.json({
        message: "Please provide the productID as path params",
      });
    }
    let query = { productID: productID };

    const deletedProduct = await Product.deleteOne(query).lean().exec();
    res.json({
      message: "Successfully deleted the product",
      deletedProduct,
    });
  } catch (error) {
    res.status("404").send({
      error,
    });
  }
}

export async function getFeaturedProduct(req, res) {
  try {
    const featuredProducts = await Product.find({ featured: true })
      .lean()
      .exec();
    if (featuredProducts) {
      return res.json({
        message: "successfully fetched the featured products",
        featuredProducts,
      });
    }

    res.send({
      message: "No featured products are available to display",
    });
  } catch (error) {
    res.status("404").send(error);
  }
}

export async function priceRangeProducts(req, res) {
  try {
    let value = parseFloat(req.params.value);
    if (!value) {
      return res.send({
        message: "Please provide the price as the path params",
      });
    }
    const products = await Product.find({ price: { $lt: value } })
      .lean()
      .exec();
    if (products) {
      return res.json({
        message: `Successfully fetched the products less the value ${value}`,
        products,
      });
    }

    res.json({
      message: "No Products are there less than the given range",
    });
  } catch (error) {
    res.status(404).send({ error });
  }
}

export async function ratingHRange(req, res) {
  try {
    let rating = parseFloat(req.params.value);
    if (!rating) {
      return res.send({
        message: "Please provide the rating as the path params",
      });
    }
    const products = await Product.find({ rating: { $gt: rating } })
      .lean()
      .exec();
    if (products) {
      return res.json({
        message: `Successfully fetched the products greater than the rating ${rating}`,
        products,
      });
    }

    res.json({
      message: "No Products are there less than the given range",
    });
  } catch (error) {
    res.status(404).send({ error });
  }
}
