const userService = require("../services/auth.service");
const httpStatus = require("../utils/httpStatus");
const tokenService = require("../services/token.service");
const signUp = async (req, res) => {
  try {
    const { name, email, password, username, role } = req.body;
    const user = await userService.createUser({
      name,
      email,
      password,
      role,
      username,
    });
    if (user) {
      return res.status(httpStatus.badRequest).json({
        message: "User already exist",
      });
    }

    user.password = undefined; // remove password from response before send it to the client

    return res.status(httpStatus.created).json({
      message: "User created successfully",
      user,
    });
  } catch (err) {
    console.log(err);
    return res.status(httpStatus.internalServerError).json({
      success: false,
      message: "Internal server Error while signUp",
    });
  }
};

const Login = async (req, res) => {
  try {
  } catch (err) {}
};

module.exports = { signUp, Login };
