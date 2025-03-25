// 1:08 today
const { config } = require("dotenv");
const cloudinary = require("cloudinary").v2;
const userService = require("../services/user.service");
const httpStatus = require("../utils/httpStatus");

cloudinary.config(config.cloudinary);

const uploadPhoto = async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: "No file uploaded" });
  }
  try {
    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: "user_photo",
      user_filename: true,
    });

    const updateUser = await userService.updateUserPhoto(
      req.user.id,
      result.secure_url
    );
    if (!updateUser) {
      return res.status(400).json({
        message: "User not found",
      });
    }
    return res.status(200).json({
      success: true,
      message: "Photo updated successfully",
      photoUrl: updateUser.photoUrl,
    });
  } catch (err) {
    console.log(err);
  }
};

const getUser = async (req, res, next) => {
  const userId = req.user._id;
  const user = await userService.getUserById(userId);
  if (!user) {
    return next(new ApiError(httpStatus.notFound, "User not found"));
  }
  return res.status(httpStatus.ok).json({
    success: true,
    user,
  });
};

// update user

const updateUserProfile = async (req, res, next) => {
  const userId = req.user._id;
  const profileData = req.body;

  const updatedUser = await userService.updateUser(userId, profileData);

  if (!updateUser) {
    return next(new ApiError(http.notFound, "User not found"));
  }

  return res.status(httpStatus.ok).json({
    success: true,
    message: "User Profile updated successfully",
    user: updatedUser,
  });
};

module.exports = {
  getUser,
  updateUserProfile,
  uploadPhoto,
};
