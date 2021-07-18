import mongoose from "mongoose";
const Schema = mongoose.Schema;
const subcategoriesSchema = mongoose.Schema({
  image: {
    type: String,
    require: true,
  },
  title: {
    type: String,
    require: true,
  },
  
  
});

export default mongoose.model("SubCategrories", subcategoriesSchema);
