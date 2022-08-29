const Joi = require("@hapi/joi");

module.exports.createProduct = {
  body: Joi.object({
    productName: Joi.string().alphanum().min(1).max(30).required(),
    productPrice: Joi.number().integer().min(1).max(8),
    productCharacteristict: Joi.object({
      jewelryType: Joi.string().alphanum().min(1).max(50),
      weight: Joi.string().alphanum().min(1).max(20),
      material: Joi.string().alphanum().min(1).max(50),
      brand: Joi.string().alphanum().min(1).max(50),
      size: Joi.string().alphanum().min(1).max(50),
      carType: Joi.string().alphanum().min(1).max(25),
      carBody: Joi.string().alphanum().min(1).max(25),
      engineCapacity: Joi.string().alphanum().min(1).max(25),
      typeMaterial: Joi.string().alphanum().min(1).max(30),
      origin: Joi.string().alphanum().min(1).max(25),
    }),
    userId: Joi.number().integer().min(1).max(4),
    goodsId: Joi.number().integer().min(1).max(4),
    productLocation: Joi.string().alphanum().min(1).max(25).required(),
    productQuantity: Joi.number().integer().min(0),
    productDescription: Joi.string().alphanum().min(1).max(30).required(),
    productCreateDate: Joi.date().required(),
  }),
};

module.exports.deleteProduct = {
  params: Joi.object({
    id: Joi.number().required(),
  }),
};

module.exports.updateProduct = {
  params: Joi.object({
    id: Joi.number().required(),
  }),
  body: Joi.object({
    productName: Joi.string().alphanum().min(1).max(100),
    productPrice: Joi.number(),
    productCharacteristict: Joi.object({
      jewelryType: Joi.string().alphanum().min(1).max(50),
      weight: Joi.string().alphanum().min(1).max(20),
      material: Joi.string().alphanum().min(1).max(50),
      brand: Joi.string().alphanum().min(1).max(50),
      size: Joi.string().alphanum().min(1).max(50),
      carType: Joi.string().alphanum().min(1).max(25),
      carBody: Joi.string().alphanum().min(1).max(25),
      engineCapacity: Joi.string().alphanum().min(1).max(25),
      typeMaterial: Joi.string().alphanum().min(1).max(30),
      origin: Joi.string().alphanum().min(1).max(25),
    }),
    productLocation: Joi.string().alphanum().min(1).max(25),
    productQuantity: Joi.number(),
    productDescription: Joi.string(),
  }),
};
