const userModel = require("../models/user.model");

const ApiError = require("../helper/apiError");

const httpStatus = require("../utils/httpStatus");

const createUser = async (data) => {
  return await userModel.create(data);
};

const loginUserWithEmailAndPassword = async (email, password) => {
  const user = await userModel.findOne({ email }).select("+password");

  if (!user || !(await user.isPasswordMatch(password))) {
    throw new ApiError(httpStatus.UNAUTHORIZED, "Invalid email or password");
  }
  return user;
};

module.exports = {
  createUser,
  loginUserWithEmailAndPassword,
};
