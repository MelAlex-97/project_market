const pool = require("../../mysql/mysqlPools").depotPool;
const { getResultOrEmptyArray } = require("../utils/mysql-helper");

const getProductsByDays = (conn = pool) => (quantityDays) => {
  return conn
    .query(
      `
      SELECT * FROM products WHERE product_create_date > DATE_SUB(NOW(), INTERVAL ? DAY)
    `,
      [quantityDays]
    )
    .then(getResultOrEmptyArray);
};

module.exports = {
  getProductsByDays,
};
