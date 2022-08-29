const {
  getUserService,
  createUserService,
  deleteUserService,
  updateUserService,
  findUserService,
  findUserParametersService,
  getUsersProduct,
  getUsersByTypeWidthProduct,
  selectCityUserService,
} = require("./user.service");

const { successStatusCode } = require("../constantStatusCode");

module.exports = {
  getUsers: async (req, res) => {
    const data = await getUserService();
    return res.status(successStatusCode).json(data);
  },
  createUser: async (req, res) => {
    const { ...userInfo } = req.body;
    const data = await createUserService(userInfo);
    return res.status(successStatusCode).json({ userId: data.insertId });
  },
  deleteUser: async (req, res) => {
    await deleteUserService({ userId: req.params.id });
    return res.status(successStatusCode).json({ userId: req.params.id });
  },
  updateUser: async (req, res) => {
    await updateUserService(req.params.id, req.body);
    return res.status(successStatusCode).json({ userId: req.params.id });
  },
  findUserById: async (req, res) => {
    const data = await findUserService(req.params.id);
    return res.status(successStatusCode).json(data);
  },
  findUserByParameters: async (req, res) => {
    const { ...userFilteringParameters } = req.query;
    const data = await findUserParametersService(userFilteringParameters);
    return res.status(successStatusCode).json(data);
  },
  getUsersProduct: async (req, res) => {
    const data = await getUsersProduct();
    return res.status(successStatusCode).json(data);
  },

  getUsersByTypeWidthProduct: async (req, res) => {
    const data = await getUsersByTypeWidthProduct(req.params.type);
    return res.status(successStatusCode).json(data);
  },

  selectCityUser: async (req, res) => {
    const { city } = req.query;
    const data = await selectCityUserService(city);
    return res.status(successStatusCode).json(data);
  },
};
