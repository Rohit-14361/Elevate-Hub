const express = require("express");

const router = express.Router();
const asyncHandler = require("../../helper/asyncHandler");
const validate = require("../../middleware/validate/service.validation.js");
const serviceController = require("../../controller/service.controller");
const {
  createServiceSchema,
  updateServiceSchema,
} = require("../../validations/service.validation.js");
const { getServiceByMentor } = require("../../services/service.service.js");
router.post(
  "/",
  validate(createServiceSchema),
  authMiddleware.protect,
  authMiddleware.restrictTo("mentor"),
  asyncHandler(serviceController.createService)
);

router.post(
  "/:serviceId",
  validate(updateServiceSchema),
  authMiddleware.protect,
  authMiddleware.restrictTo("mentor"),
  asyncHandler(serviceController.updateService)
);
router.get(
  "/",
  authMiddleware.protect,
  authMiddleware.restrictTo("mentor"),
  asyncHandler(serviceController, getServiceByMentor)
);

router.get(
  "/:serviceId",
  authMiddleware.protect,
  authMiddleware.restrictTo("mentor"),
  asyncHandler(serviceController.getServiceById)
);
module.exports = router;
