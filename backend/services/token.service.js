const jwt = require("jsonwebtoken");

//moment---->date,time manipulation,data --parse
const moment = require("moment");

const config = require("../config");

const generateToken = (userId, expires, secret) => {
  const payload = {
    _id: userId,
    iat: moment().unix(),
    exp: expires.unix(),
  };
  return jwt.sign(payload, secret);
};

const generateAuthToken = async (user) => {
  const accessTokenExpires = moment().add(
    config.jwt.accessExpirationMinutes,
    "minutes"
  );
  const accessToken = generateToken(
    user._id,
    accessTokenExpires,
    config.jwt.accessSecret
  );
  return accessToken;
};

const generateVerificationToken = async (userId) => {
  const verificationTokenExpires = moment().add(
    config.jwt.verificationTokenExpiresMinutes,
    "minutes"
  );
  const verificationToken = generateToken(
    userId,
    verificationTokenExpires,
    config.jwt.verificationExpirationMinutes
  );
  return verificationToken;
};

const verifyToken = async (token, secret) => {
  if (secret === "accessToken") {
    return await jwt.verify(token, config.jwt.accessSecret);
  } else if (secret === "verify") {
    return await jwt.verify(token, config.userVerification);
  }
};

module.exports = { generateAuthToken, verifyToken, generateVerificationToken };

// generate Auth Token -access to navigate when you are login from one to another in my web. yeah access dega for authentication.
// iat --issue date
