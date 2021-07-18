import Subcategoriess from "../models/subCategoriesModel.js";

export const getSub = async (req, res) => {
  try {
    const pic = await Subcategoriess.find();
    res.send(pic);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const createSub = async (req, res) => {
  const newElement = new Subcategoriess({
    imgUrl: req.body.imgUrl,
    title: req.body.title,
  });
  try {
    const newSlide = await newElement.save();
    res.status(201).json(newSlide);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
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

export const deleteSub = async (req, res) => {
  try {
    await res.searchElementById.remove();
    res.json({ message: "Deleted Subscriber" });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

export const getbyidSub = (req, res) => {
  res.json(res.searchElementById);
};

export const getElementid = async (req, res, next) => {
    let searchElementById;
    try {
      searchElementById = await Subcategoriess.findById(req.params.id);
      if (searchElementById == null) {
        return res.status(404).json({ message: "Cannot find subscriber" });
      }
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
    res.searchElementById = searchElementById;
    next();
  }