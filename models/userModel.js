const mongoose = require("mongoose");
const {Schema, model} = mongoose

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    roles : {
      type : String,
      default : "user",
      enum : ["user", "admin", "theater"]
    }
  },
  {
    timestamps: true,
  }
);


module.exports = model("users", userSchema);