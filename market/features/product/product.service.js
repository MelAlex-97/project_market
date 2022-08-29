const {
  getProducts,
  createProduct,
  deleteProduct,
  updateProduct,
} = require("./product.model");

const getProductService = () => {
  return getProducts()();
};

const createProductService = (productInfo) => {
  return createProduct()(productInfo);
};

const deleteProductService = (productId) => {
  return deleteProduct()(productId);
};

const updateProductService = async (productId, productInfo) => {
  return updateProduct()(productId, productInfo);
};

module.exports = {
  getProductService,
  deleteProductService,
  updateProductService,
  createProductService,
};
