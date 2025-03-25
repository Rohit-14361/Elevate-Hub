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
    const { email, password } = req.body;
    const user = await userService.loginUserWithEmailAndPassword(
      email,
      password
    );
    const token = await tokenService.generateAuthToken(user);
    user.passwor = undefined;
    res.status(httpStatus.ok).json({
      message: "User logged in successfully",
      token,
      user,
    });
  } catch (err) {
    console.log(err);
    return res.status(httpStatus.UNAUTHORIZED).json({
      success: false,
      message: err.message || "Login failed",
    });
  }
};

module.exports = { signUp, Login };
