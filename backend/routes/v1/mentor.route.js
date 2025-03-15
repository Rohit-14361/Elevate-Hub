const express = require("express");

const mentorController = require("../../controller/mentor.controller");

const asyncHandler = require("../../helper/asyncHandler");

const router = express.Router();

router.get("/:username", asyncHandler(mentorController.getMentorByUserName));

router.get("/", asyncHandler(mentorController.getAllMentors));
module.exports = router;
