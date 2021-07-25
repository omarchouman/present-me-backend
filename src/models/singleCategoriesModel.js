import mongoose from "mongoose";

const singlecategoriesSchema = mongoose.Schema({
  imgUrl: {
    type: String,
    require: true,
  },
  title: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  hostImg: {
    type: String,
    require: true,
  },
  hostname: {
    type: String,
    require: true,
  },
  
  date: String,
  
});

export default mongoose.model("SingleCategrories", singlecategoriesSchema);