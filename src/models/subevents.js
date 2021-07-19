import mongoose from "mongoose";

const SubEventSchema = new mongoose.Schema({
  mainImage: {
    type: String,
    required: [true],
  },
  userImage: {
    type: String,
    required: [true],
  },
  name: {
    type: String,
    required: [true, "Please add a name"],
    trim: true,
  },
  description: {
    type: String,
    required: [true, "Please add a description"],
    maxlength: [100, "Name can not be more than 100 characters"],
  },
  title: {
    type: String,
    required: [true, "Please add a Title"],
    maxlength: [50, "Title can not be more than 100 characters"],
  },
  date: String,
});

module.exports = mongoose.model("Subevents", SubEventSchema);
