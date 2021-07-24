
import subCategoriesModel from "../models/subCategoriesModel.js";
import singleCategoriesModel from "../models/singleCategoriesModel.js";

export const getSub = async (req, res) => {
  try {
    const pic = await singleCategoriesModel.find();
    res.send(pic);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const createSub = (req, res) => {
  singleCategoriesModel
    .create(req.body)
    .then(function (sub) {
      return subCategoriesModel.findOneAndUpdate(
        { _id: req.params.id },
        { $push: { events: sub._id } },
        { new: true }
      );
    })
    .then(function (dbProduct) {
      res.json(dbProduct);
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
  singleCategoriesModel.findByIdAndDelete(req.params.id).exec((err, doc) => {
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
    searchElementById = await singleCategoriesModel.findById(req.params.id);
    if (searchElementById == null) {
      return res.status(404).json({ message: "Cannot find subscriber" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  res.searchElementById = searchElementById;
  next();
};













// import app from "../app";
// import subevents from "../models/subevents";
// //@desc Get all subEvents
// //@route GET /subevent/get
// //@access Public

// export const getSubevents = async (req, res) => {
//   try {
//     const subevent = await subevents.find();
//     res.status(200).json({ success: true, data: subevent });
//   } catch (err) {
//     res.status(400).json({ success: false });
//   }
// };

// //@desc Get single subEvents
// //@route GET /subevent/get/:id
// //@access Public
// export const getSubevent = async (req, res) => {
//   try {
//     const subevent = await subevents.findById(req.params.id);

//     res.status(200).json({ success: true, data: subevent });
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// };

// //@desc Create new subevent
// //@route post /subevent/create/:id
// //@access private

// export const createSubevent = async (req, res) => {
//   try {
//     const subevent = await subevents.create(req.body);

//     res.status(200).json({ success: true, data: subevent });
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// };
// //@desc Update subEvent
// //@route put /subevent/put/:id
// //@access private

// export const updateSubevent = async (req, res) => {
//   try {
//     const subevent = await subevents.findByIdAndUpdate(
//       req.params.id,
//       req.body,
//       { new: true, runValidators: true }
//     );
//     if (!subevent) {
//       return res.status(400).json({ success: false });
//     }
//     res.status(200).json({ success: true, data: subevent });
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// };

// //@desc  Delete subEvents
// //@route delete /subevent/delete/:id
// //@access private

// export const deleteSubevent = async (req, res) => {
//   try {
//     const subevent = await subevents.findByIdAndDelete(req.params.id);
//     if (!subevent) {
//       return res.status(400).json({ message: err.message });
//     }
//     res.status(200).json({ success: true, data: {} });
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// };

// export default app;
