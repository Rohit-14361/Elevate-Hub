const Joi = require("joi");

const createServiceSchema = Joi.object()({
  name: Joi.string().trim().optional(),
  description: Joi.string().trim().optional(),
  duration: Joi.string().optional(),
  price: Joi.string().optional(),
  active: Joi.boolean().optional(),
});

const updateServiceSchema = Joi.object().keys({
  name: Joi.string().required().trim(),
  description: Joi.string().required().trim(),
  duration: Joi.string().required().optional(),
  price: Joi.string().optional(),
  active: Joi.boolean().optional(),
});

module.exports = { createServiceSchema, updateServiceSchema };
