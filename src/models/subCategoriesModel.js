import mongoose from "mongoose";
const Schema = mongoose.Schema;
const subcategoriesSchema = mongoose.Schema({
  image: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  
  
});

export default mongoose.model("SubCategrories", subcategoriesSchema);
