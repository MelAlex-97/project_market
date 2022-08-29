const express = require("express");
const app = express();

const user = require("../features/user/user.router");
const product = require("../features/product/product.router");
const admin = require("../features/admin/admin.router");

app.use("/users", user);
app.use("/products", product);
app.use("/admin", admin);

module.exports = app;
