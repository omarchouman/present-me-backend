import Category from "../models/categories.js";
import app from "../app";
import mongoose from "mongoose";



export const getCategories = async (req, res) => {
    try {
        const categories = await Category.find();
                
        res.status(200).json(categories);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const getCategory = async (req, res, next) => {
    const id = req.params.categoryId;
    await Category.findById(id)
      .exec()
      .then(doc => {
        console.log("From database", doc);
        if (doc) {
          res.status(200).json(doc);
        } else {
          res
            .status(404)
            .json({ message: "No valid entry found for provided ID" });
        }
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({ error: err });
      });
  };
  

export const createCategory = async (req, res) => {
    const newCategory = new Category({
      _id: new mongoose.Types.ObjectId(),
      name: req.body.name,
      image: req.body.image
    });
    await newCategory
      .save()
      .then(result => {
        console.log(result);
        res.status(201).json({
          message: "Created new main category successfully!",
          createdCategory: result
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({
          error: err
        });
      });
};

export const updateCategory = async (req, res) => {
  const { id } = req.params;
  const { name, image } = req.body;
  
  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

  const updatedCategory = { name, image, _id: id };

  await Category.findByIdAndUpdate(id, updatedCategory, { new: true });

  res.json(updatedCategory);
};

export const deleteCategory = async (req, res) => {
    const  id  = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No category with id: ${id}`);

    await Category.findByIdAndRemove(id);

    res.json({ message: "Category deleted successfully."});
};



export default app;