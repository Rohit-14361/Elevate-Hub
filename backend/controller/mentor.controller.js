const ApiError = require("../helper/apiError");
const mentorService = require("../services/mentor.service");
const httpStatus = require("../utils/httpStatus");

const getAllMentors = async (req, res, next) => {
  const mentors = await mentorService.getAllMentors();
  res.status(httpStatus.ok).json({
    success: true,
    mentors,
  });
};

const getMentorByUserName = async (req, res, next) => {
  const { username } = req.params;
  const mentor = await mentorService.getMentorByUserName(username);
  if (!mentor) {
    return next(new ApiError(httpStatus.notFound, "Mentor Not Found"));
  }
  return res.status(httpStatus.ok).json({
    success: true,
    mentor,
  });
};

module.exports = {
  getAllMentors,
  getMentorByUserName,
};
// 57:00 stop
