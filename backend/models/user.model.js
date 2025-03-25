const { Schema, model } = require("mongoose");

const bcrypt = require("bcrypt");

const userSchema = new Schema(
  {
    photoUrl: {
      type: Schema.Types.String,
      default: "",
    },
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
      index: true,
    },
    password: {
      type: Schema.Types.String,
      required: true,
      trim: true,
      unique: true,
    },
    verified: {
      type: Schema.Types.Boolean,
      default: false,
    },
    role: {
      type: Schema.Types.String,
      enum: ["mentor", "student"],
      default: null,
    },
    profile: {
      tags: {
        type: [Schema.Types.String],
        default: [],
      },
      title: {
        type: Schema.Types.String,
        default: "",
      },
      bio: {
        type: Schema.Types.String,
        default: "",
      },
      college: {
        type: Schema.Types.String,
        default: "",
      },
      social: {
        linkdin: {
          type: Schema.Types.String,
          default: "",
        },
        github: {
          type: Schema.Types.String,
          default: "",
        },
        twitter: {
          type: Schema.Types.String,
          default: "",
        },
        facebook: {
          type: Schema.Types.String,
          default: "",
        },
        instagram: {
          type: Schema.Types.String,
          default: "",
        },
      },
    },
  },
  { timestamps: true }
);

userSchema.methods.isPasswordMatch = async function (password) {
  return bcrypt.compare(password, this.password);
};

userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 8);
  }
  next();
});

// userSchema.index({ email: 1 });
// index is for lookup the value and 1 means ascending order

const userModel = model("User", userSchema);

module.exports = userModel;
