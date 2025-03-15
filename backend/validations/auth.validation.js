const Joi = require("joi");

const signUpValidation = Joi.object().keys({
  name: Joi.string().required().trim(),
  email: Joi.string().required().trim(),
  password: Joi.string().required().min(8).max(12),
  role: Joi.string().valid("mentor", "student").required(),
});

const loginValidation = Joi.object().keys({
  email: Joi.string().required().trim(),
  password: Joi.string().required(),
});

module.exports = { signUpValidation, loginValidation };
