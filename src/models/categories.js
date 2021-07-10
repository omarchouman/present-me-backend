import mongoose from "mongoose";

const categoriesSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    image: String
})

var Category = mongoose.model('Category', categoriesSchema);

export default Category;