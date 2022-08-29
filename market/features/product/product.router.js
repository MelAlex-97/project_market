const express = require("express");
const app = express();
const productController = require("./product.controller");
const { validator } = require("../validator");
const productValidator = require("./product.validator");

app.get(`/`, productController.getProducts);

app.post(
  `/create`,
  validator.body(productValidator.createProduct.body),
  productController.createProduct
);

app.delete(
  `/delete/:id`,
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
