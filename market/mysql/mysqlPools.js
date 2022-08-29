const mysql = require("mysql2/promise");

const depotConfig = {
  database: process.env.MYSQL_HUB_DATABASE,
  password: process.env.MYSQL_HUB_PASSWORD,
  user: process.env.MYSQL_HUB_USER,
  port: process.env.MYSQL_HUB_PORT,
  host: process.env.MYSQL_HUB_HOST,
  connectionLimit: process.env.MYSQL_HUB_CONNECTION_LIMIT,
};

const depotPool = mysql.createPool(depotConfig);

if (!process.env.NODE_ENV === "test") {
  depotPool.getConnection().then((connection) => {
    setInterval(() => {
      depotPool.query("SELECT 1");
    }, 60000);
    connection.release();
    return depotPool;
  });
}

module.exports = {
  depotPool,
};
