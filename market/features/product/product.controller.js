const {
  getProductService,
  createProductService,
  deleteProductService,
  updateProductService,
} = require("./product.service");

const { successStatusCode } = require("../constantStatusCode");

module.exports = {
  getProducts: async (req, res) => {
    const data = await getProductService();
    return res.status(successStatusCode).json(data);
  },

  createProduct: async (req, res) => {
    const { ...productInfo } = req.body;
    const data = await createProductService(productInfo);
    return res.status(successStatusCode).json({ productId: data.insertId });
  },

  deleteProduct: async (req, res) => {
    const productId = req.params.id;
    await deleteProductService({ productId });
    return res.status(successStatusCode).json({ productId });
  },

  updateProduct: async (req, res) => {
    await updateProductService(req.params.id, req.body);
    return res.status(successStatusCode).json({ productId: req.params.id });
  },
};
