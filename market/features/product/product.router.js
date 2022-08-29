const express = require("express");
const app = express();
const productController = require("./product.controller");
const { validator } = require("../validator");
const productValidator = require("./product.validator");

app.get(`/`, productController.getProducts);

app.post(
  `/`,
  productController.createProduct,
  validator.body(productValidator.createProduct.body)
);

app.post(
  `/car`,
  productController.createProductCar,
  validator.body(productValidator.createProduct.body)
);

app.delete(
  `/:id`,
  validator.params(productValidator.deleteProduct.params),
  productController.deleteProduct
);

app.put(
  `/update/:id`,
  validator.params(productValidator.updateProduct.params),
  validator.body(productValidator.updateProduct.body),
  productController.updateProduct
);

module.exports = app;
