require("dotenv").config();

const routes = require("./routes");
const express = require("express");
const app = express();
const port = 3000;

app.use(express.json({ limit: "10mb" }));
app.use(routes);

//* Error Handler
app.use((err, req, res, next) => {
  const status = err?.error?.details[0]?.message ? 400 : 500;
  res.status(status);
  res.json({
    error: {
      message: err.message || err.error.details[0].message,
    },
  });
});
// eslint
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`); // eslint-disable-line
});

module.exports = app;
