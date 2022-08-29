const { getProductsByDays } = require("./admin.model");

const getProductsByDaysService = async (quantityDays) => {
  return getProductsByDays()(quantityDays);
};

module.exports = { getProductsByDaysService };
