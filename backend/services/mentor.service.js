const userModel = require("../models/user.model");

const ServiceModel = require("../models/service.model");

const getAllMentor = async () => {
  return await userModel.find({ role: "mentor" });
};

const getMentorById = async (id) => {
  return await userModel.findOne({ _id: id, role: "mentor" });
};

const getMentorByUserName = async (username) => {
  const mentor = await userModel.findOne({ username, role: "mentor" });
  if (!mentor) return null;
  console.log("Mentor found", mentor);
  return mentor;
};

module.exports = {
  getAllMentor,
  getMentorById,
  getMentorByUserName,
};
