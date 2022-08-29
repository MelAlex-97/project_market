const Joi = require("@hapi/joi");

module.exports.createUser = {
  body: Joi.object({
    firstName: Joi.string().alphanum().min(1).max(25).required(),
    lastName: Joi.string().alphanum().min(1).max(25).required(),
    userPhone: Joi.string()
      .alphanum()
      .max(15)
      .pattern(/^\+?\d{1,3}?[- .]?\(?(?:\d{2,3})\)?[- .]?\d\d\d[- .]?\d\d\d$/),
    userCity: Joi.string().alphanum().min(1).max(25).required(),
    userTypeAccountId: Joi.number().integer().min(1).max(4),
    accountRegisteredDate: Joi.date().required(),
    accountExpirationDate: Joi.date().required(),
    accountBalance: Joi.number().integer().min(0),
  }),
};

module.exports.deleteUser = {
  params: Joi.object({
    id: Joi.number().required(),
  }),
};

module.exports.updateUser = {
  params: Joi.object({
    id: Joi.number().required(),
  }),
  body: Joi.object({
    firstName: Joi.string().alphanum().min(1).max(25).required(),
    lastName: Joi.string().alphanum().min(1).max(25).required(),
    userPhone: Joi.string().alphanum().max(15),
    userCity: Joi.string().required(),
    userTypeAccountId: Joi.number().integer().min(1).max(4),
    accountBalance: Joi.number().integer().min(0),
  }),
};

module.exports.findUserById = {
  params: Joi.object({
    id: Joi.number().required(),
  }),
};

module.exports.findUserByParameters = {
  query: Joi.object({
    userPhone: Joi.number(),
    userCity: Joi.string().alphanum().min(1).max(25),
    firstName: Joi.string().alphanum().min(1).max(25),
    lastName: Joi.string().alphanum().min(1).max(25),
  }).min(1),
};

module.exports.selectCityUser = {
  query: Joi.object({
    userCity: Joi.string().required(),
  }),
};
