const jwt = require("jsonwebtoken");

const { getUserById } = require("../services/user.service");

const httpStatus = require("../utils/httpStatus");

const ApiError = require("../helper/apiError");

const protect = async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }
  if (!token) {
    return next(
      new ApiError(
        httpStatus.unauthorized,
        "You are not logged in! Please logged in first"
      )
    );
  }

  try {
    const decoded = await jwt.verify(token, "accessToken");
    const currentUser = await getUserById(decoded._id);
    if (!currentUser) {
      return next(
        new ApiError(
          httpStatus.unauthorized,
          "The user  token is no longer exists"
        )
      );
    }
    req.user = currentUser;
    next();
  } catch (err) {
    console.log(err);
    return next(new ApiError(httpStatus.unauthorized, "You are not allowed"));
  }
};

const restrictTo = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(
        new ApiError(
          httpStatus.forbidden,
          "You do not have permission to perform this action"
        )
      );
    }
  };
};

module.exports = {
  protect,
  restrictTo,
};
