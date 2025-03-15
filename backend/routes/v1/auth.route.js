const express = require("express");

const authController = require("../../controller/auth.controller");

const validate = require("../../middleware/validate");

const asyncHandler = require("../../helper/asyncHandler");

const {
  signUpValidation,
  loginValidation,
} = require("../../validations/auth.validation");

const router = express.Router();

router.post(
  "/signup",
  validate(signUpValidation),
  asyncHandler(authController.signUp)
);

router.post(
  "/login",
  validate(loginValidation),
  asyncHandler(authController.Login)
);

module.exports = router;
