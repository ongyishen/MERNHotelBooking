const mongoose = require("mongoose");

const roomSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    maxcount: {
      type: Number,
      required: true,
    },
    phonenumber: {
      type: Number,
      required: true,
    },
    rentperday: {
      type: Number,
      required: true,
    },
    imageurls: [],
    currentbookings: [],
    type: { type: String, required: true },
    description: { type: String, required: true },
  },
  { timestamps: true }
);

const roomModel = mongoose.model("rooms", roomSchema);

module.exports = roomModel;
