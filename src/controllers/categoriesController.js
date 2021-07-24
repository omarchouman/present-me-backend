import mainCategoriesModel from "../models/mainCategoriesModel.js";

export const getbyidSub = async (req, res) => {
  mainCategoriesModel
    .findOne({ _id: req.params.id })

    .populate({
      path: "reviews",
      populate: {
        path: "events",
      },
    })

    .then(function (dbProduct) {
      res.json(dbProduct);
    })
    .catch(function (err) {
      res.json(err);
    });
};

export const createSub = (req, res) => {
  mainCategoriesModel
    .create(req.body)
    .then(function (mains) {
      res.json(mains);
    })
    .catch(function (err) {
      res.json(err);
    });
};

export const updateSub = async (req, res) => {
  if (req.body.imgUrl != null) {
    res.searchElementById.imgUrl = req.body.imgUrl;
  }
  if (req.body.title != null) {
    res.searchElementById.title = req.body.title;
  }
  try {
    const updatedUrlImage = await res.searchElementById.save();
    res.json(updatedUrlImage);
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};

export const deleteSub = (req, res) => {
  mainCategoriesModel.findByIdAndDelete(req.params.id).exec((err, doc) => {
    if (err) {
      response.status(400).send(err);
    } else {
      res.status(200).json(doc);
    }
  });
};

export const getElementid = async (req, res, next) => {
  let searchElementById;
  try {
    searchElementById = await mainCategoriesModel.findById(req.params.id);
    if (searchElementById == null) {
      return res.status(404).json({ message: "Cannot find subscriber" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  res.searchElementById = searchElementById;
  next();
};
















// import Category from "../models/categories.js";
// import app from "../app";
// import mongoose from "mongoose";



// export const getCategories = async (req, res) => {
//     try {
//         const categories = await Category.find();
                
//         res.status(200).json(categories);
//     } catch (error) {
//         res.status(404).json({ message: error.message });
//     }
// };

// export const getCategory = async (req, res, next) => {
//     const id = req.params.categoryId;
//     await Category.findById(id)
//       .exec()
//       .then(doc => {
//         console.log("From database", doc);
//         if (doc) {
//           res.status(200).json(doc);
//         } else {
//           res
//             .status(404)
//             .json({ message: "No valid entry found for provided ID" });
//         }
//       })
//       .catch(err => {
//         console.log(err);
//         res.status(500).json({ error: err });
//       });
//   };
  

// export const createCategory = async (req, res) => {
//     const newCategory = new Category({
//       title: req.body.title,
//       image: req.body.image
//     });
//     await newCategory
//       .save()
//       .then(result => {
//         console.log(result);
//         res.status(201).json({
//           message: "Created new main category successfully!",
//           createdCategory: result
//         });
//       })
//       .catch(err => {
//         console.log(err);
//         res.status(500).json({
//           error: err
//         });
//       });
// };

// export const updateCategory = async (req, res) => {
//   const { id } = req.params;
//   const { title, image } = req.body;
  
//   if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

//   const updatedCategory = { title, image, _id: id };

//   await Category.findByIdAndUpdate(id, updatedCategory, { new: true });

//   res.json(updatedCategory);
// };

// export const deleteCategory = async (req, res) => {
//     const  id  = req.params.id;

//     if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No category with id: ${id}`);

//     await Category.findByIdAndRemove(id);

//     res.json({ message: "Category deleted successfully."});
// };



// export default app;