const ApiError = require("../helper/apiError");
const serviceModel = require("../models/service.model");
const serviceService = require("../services/service.service");

const httpStatus = require("../utils/httpStatus");

const createService = async (req, res, next) => {
  try {
    const mentorId = req.user._id;
    const { name, description, duration, price } = req.body;
    const service = await serviceService.createService(
      mentorId,
      name,
      description,
      duration,
      price
    );
    return res.status(200).json({
      success: true,
      message: "Service created successfully",
      service,
    });
  } catch (err) {
    console.log(err);
    return next(new ApiError(httpStatus.badRequest)).json({
      message: "Error while create Service",
    });
  }
};

const updateService = async (req, res, next) => {
  try {
    const serviceId = req.params.serviceId;
    if (!serviceId) {
      return res.status(400).json({
        message: "Service id is required",
      });
    }
    const mentorId = req.user._id; //payload se fetch kr rhe ho
    const { name, description, duration, price, active } = req.body;
    const updateService = await serviceService.updateService(
      serviceId,
      mentorId,
      { name, description, duration, price, active },
      { new: true }
    );
    return res.status(200).json({
      success: true,
      message: "Service updated successfully",
      service: updateService,
    });
  } catch (err) {
    console.log(err);
    return next(new ApiError(httpStatus.badRequest)).json({
      success: false,
      message: "Error while update Service",
    });
  }
};

const getServiceByMentor = async (req, res) => {
  try {
    const mentorId = req.user._id;
    const service = await serviceService.getServiceByMentor(mentorId);
    if (!service || service.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No Service found for this mentor",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Mentor fetched successfully",
      service,
    });
  } catch (err) {
    console.log(err);
  }
};

const getServiceById = async (req, res) => {
  try {
    const serviceId = req.params.serviceId;
    if (!serviceId) {
      return res.status.json({
        success: false,
        message: "Invalid service id",
      });
    }
    const service = await serviceService.getServiceById(serviceId);
    return res.status(200).json({
      success: true,
      message: "Serivce fetched successfully",
      service,
    });
  } catch (err) {
    console.log(err);
  }
};
module.exports = {
  createService,
  updateService,
  getServiceById,
  getServiceByMentor,
};
