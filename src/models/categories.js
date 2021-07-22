import mongoose from "mongoose";

const categoriesSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true],
    },
    image: {
        type: String,
        required: [true],
    },
    subcategories: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'SubCategrories'
    }
})

var Category = mongoose.model('Category', categoriesSchema);

export default Category;