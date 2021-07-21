import mongoose from "mongoose";

const categoriesSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true],
    },
    image: {
        type: String,
        required: [true],
    }
})

var Category = mongoose.model('Category', categoriesSchema);

export default Category;