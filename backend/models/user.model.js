const { Schema, model } = require("mongoose");

const bcrypt = require("bcrypt");

const userSchema = new Schema({
  name: {
    type: Schema.Types.String,
    required: true,
    trim: true,
  },
  username: {
    type: Schema.Types.String,
    required: true,
    trim: true,
    unique: true,
  },
  email: {
    type: Schema.Types.String,
    required: true,
    trim: true,
    unique: true,
  },
  password: {
    type: Schema.Types.String,
    required: true,
    trim: true,
    unique: true,
  },
  role: {
    type: Schema.Types.String,
    enum: ["mentor", "student"],
    default: null,
  },
});

userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 8);
  }
  next();
});

userSchema.index({ email: 1 });
// index is for lookup the value and 1 means ascending order

const userModel = model("User", userSchema);

module.exports = userModel;
