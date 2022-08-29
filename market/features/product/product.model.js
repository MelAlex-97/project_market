const pool = require("../../mysql/mysqlPools").depotPool;

const { getResultOrEmptyArray } = require("../utils/mysql-helper");

const getProducts = (conn = pool) => () => {
  return conn
    .query(
      `
        SELECT * FROM products
      `
    )
    .then(getResultOrEmptyArray);
};

const createProduct = (conn = pool) => ({
  productName,
  productPrice,
  userId,
  goodsId,
  productLocation,
  productQuantity,
  productDescription,
  productCreateDate,
}) => {
  return conn
    .query(
      `INSERT INTO products (product_name, product_price,goods_id, user_id, product_location, product_quantity, 
        product_description, product_create_date)
        VALUES(?,?,?,?,?,?,?,?);`,
      [
        productName,
        productPrice,
        goodsId,
        userId,
        productLocation,
        productQuantity,
        productDescription,
        productCreateDate,
      ]
    )
    .then(getResultOrEmptyArray);
};

const createProductBuildMaterial = (conn = pool) => (
  insertId,
  { typeMaterial, origin }
) => {
  return conn
    .query(
      `INSERT INTO category_building_materials(product_id, type_material, origin, goods_id)
        VALUES(?,?,?,?);`,
      [insertId, typeMaterial, origin, 3]
    )
    .then(getResultOrEmptyArray);
};

const createProductCar = (conn = pool) => (
  insertId,
  { categoryCarId, carType, carBody, engineCapacity, age, mileage }
) => {
  return conn
    .query(
      `INSERT INTO category_cars(product_id ,category_car_id, goods_id, car_type, car_body, engine_capacity, age, mileage)
        VALUES(?,?,?,?,?,?,?,?);`,
      [
        insertId,
        categoryCarId,
        1,
        carType,
        carBody,
        engineCapacity,
        age,
        mileage,
      ]
    )
    .then(getResultOrEmptyArray);
};

const deleteProduct = (conn = pool) => ({ productId }) => {
  return conn
    .query(
      `
    UPDATE products
    SET product_deleted = 1
    WHERE product_id = ?
  `,
      [productId]
    )
    .then(getResultOrEmptyArray);
};

const updateProduct = (conn = pool) => (
  productId,
  {
    productName,
    productPrice,
    productCharacteristict,
    productLocation,
    productQuantity,
    productDescription,
  }
) => {
  const productCharacteristictKey = Object.keys(productCharacteristict);
  const productCharacteristictValue = Object.values(productCharacteristict);
  const productCharacteristictTemplate = productCharacteristictKey
    .map((elem, elemIndex) => {
      elem = elem.replace(/[A-Z]/g, (e) => "_" + e.toLowerCase());
      return `"$.${elem}", "${productCharacteristictValue[elemIndex]}"`;
    })
    .join(",");
  return conn
    .query(
      `
    UPDATE products 
    SET product_name = ?, product_price = ?, product_characteristict = JSON_SET(product_characteristict, ${productCharacteristictTemplate}), product_location = ?, product_quantity = ?, product_description = ?
    WHERE product_id = ?
`,
      [
        productName,
        productPrice,
        productLocation,
        productQuantity,
        productDescription,
        productId,
      ]
    )
    .then(getResultOrEmptyArray);
};

module.exports = {
  getProducts,
  createProduct,
  createProductBuildMaterial,
  deleteProduct,
  updateProduct,
  createProductCar,
};
