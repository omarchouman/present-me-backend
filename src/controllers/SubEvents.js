import app from "../app";
import subevents from "../models/subevents";
//@desc Get all subEvents
//@route GET /subevent/get
//@access Public

export const getSubevents = async (req, res) => {
  try {
    const subevent = await subevents.find();
    res.status(200).json({ success: true, data: subevent });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

//@desc Get single subEvents
//@route GET /subevent/get/:id
//@access Public
export const getSubevent = async (req, res) => {
  try {
    const subevent = await subevents.findById(req.params.id);

    res.status(200).json({ success: true, data: subevent });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

//@desc Create new subevent
//@route post /subevent/create/:id
//@access private

export const createSubevent = async (req, res) => {
  try {
    const subevent = await subevents.create(req.body);

    res.status(200).json({ success: true, data: subevent });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
//@desc Update subEvent
//@route put /subevent/put/:id
//@access private

export const updateSubevent = async (req, res) => {
  try {
    const subevent = await subevents.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!subevent) {
      return res.status(400).json({ success: false });
    }
    res.status(200).json({ success: true, data: subevent });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

//@desc  Delete subEvents
//@route delete /subevent/delete/:id
//@access private

export const deleteSubevent = async (req, res) => {
  try {
    const subevent = await subevents.findByIdAndDelete(req.params.id);
    if (!subevent) {
      return res.status(400).json({ message: err.message });
    }
    res.status(200).json({ success: true, data: {} });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export default app;
