const pool = require("../../mysql/mysqlPools").depotPool;
const {
  getResultOrEmptyArray,
  getSingleResultOrEmptyObj,
} = require("../utils/mysql-helper");

const getUsers = (conn = pool) => () => {
  return conn
    .query(
      `
      SELECT * FROM users
    `
    )
    .then(getResultOrEmptyArray);
};

const createUser = (conn = pool) => ({
  firstName,
  lastName,
  userPhone,
  userCity,
  userTypeAccountId,
  accountRegisteredDate,
  accountExpirationDate,
  accountBalance,
}) => {
  return conn
    .query(
      `INSERT INTO users 
            (first_name, last_name, user_phone, user_city, user_type_account_id, account_registered_date, account_expiration_date, account_balance)
            VALUES(?,?,?,?,?,?,?,?);`,
      [
        firstName,
        lastName,
        userPhone,
        userCity,
        userTypeAccountId,
        accountRegisteredDate,
        accountExpirationDate,
        accountBalance,
      ]
    )
    .then(getResultOrEmptyArray);
};

const deleteUser = (conn = pool) => ({ userId }) => {
  return conn
    .query(
      `UPDATE users
    SET user_deleted = 1
    WHERE user_id = ?`,
      [userId]
    )
    .then(getResultOrEmptyArray);
};

const updateUser = (conn = pool) => (
  userId,
  {
    firstName,
    lastName,
    userPhone,
    userCity,
    userTypeAccountId,
    accountBalance,
  }
) => {
  return conn
    .query(
      `UPDATE users 
                SET first_name = ?, last_name = ?, user_phone = ?, user_city = ?, user_type_account_id = ?,
                 account_balance =?
                WHERE user_id = ?`,
      [
        firstName,
        lastName,
        userPhone,
        userCity,
        userTypeAccountId,
        accountBalance,
        userId,
      ]
    )
    .then(getResultOrEmptyArray);
};

const findUserById = (conn = pool) => (userId) => {
  return conn
    .query(
      `SELECT user_id AS userID, first_name AS firstName, last_name AS lastName, user_phone AS userPhone, 
            user_city AS userCity,  user_type_account_id AS userTypeAccountId, account_registered_date AS accountRegisteredDate, 
            account_expiration_date AS accountExpirationDate, account_balance AS accountBalance
            FROM users
            WHERE user_id = ?`,
      [userId]
    )
    .then(getSingleResultOrEmptyObj);
};

const findUserByParameters = (conn = pool) => (userFilteringParameters) => {
  const filterParameters = Object.values(userFilteringParameters);
  const templateString = Object.keys(userFilteringParameters)
    .map((elem) => `${elem.replace(/[A-Z]/g, (e) => "_" + e.toLowerCase())}=?`)
    .join(" AND ");
  return conn
    .query(`SELECT * FROM users WHERE ${templateString} `, filterParameters)
    .then(getResultOrEmptyArray);
};

const selectCityUser = (conn = pool) => (city) => {
  return conn
    .query(
      `
      SELECT * FROM users where city = ? `,

      [city]
    )
    .then(getResultOrEmptyArray);
};

const getProducts = (conn = pool) => () => {
  return conn
    .query(
      `
                    SELECT *
                    FROM users, products
                    WHERE users.user_id = products.user_id;
    `
    )
    .then(getResultOrEmptyArray);
};

const getProductsWidthType = (conn = pool) => (type) => {
  return conn
    .query(
      `  SELECT *
        FROM users, products
        WHERE users.user_type_account_id = ? AND users.user_id = products.user_id,`[
        type
      ]
    )
    .then(getResultOrEmptyArray);
};

module.exports = {
  getUsers,
  createUser,
  deleteUser,
  updateUser,
  findUserById,
  getProducts,
  getProductsWidthType,
  findUserByParameters,
  selectCityUser,
};
