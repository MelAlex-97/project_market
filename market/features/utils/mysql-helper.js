const pool = require("../../mysql/mysqlPools").depotPool;

const transaction = async (func) => {
  const connection = await pool.getConnection();
  try {
    await connection.query("START TRANSACTION");
    const result = await func(connection);
    await connection.query("COMMIT");
    connection.release();
    return result;
  } catch (error) {
    await connection.query("ROLLBACK");
    connection.release();
    throw error;
  }
};

const getSingleResultOrUndefined = (result) => result[0][0];
const getSingleResultOrEmptyObj = (result) => result[0][0] || {};
const getResultOrUndefined = (result) => result[0];
const getResultOrEmptyArray = (result) => result[0] || [];

module.exports = {
  transaction,
  getSingleResultOrUndefined,
  getSingleResultOrEmptyObj,
  getResultOrUndefined,
  getResultOrEmptyArray,
};
