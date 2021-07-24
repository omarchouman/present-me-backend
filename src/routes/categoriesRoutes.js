import express from "express";

import {
  createSub,
  updateSub,
  deleteSub,
  getbyidSub,
  getElementid,
} from "../controllers/categoriesController.js";
const router = express.Router();

router.get("/:id", getElementid, getbyidSub);

router.post("/", createSub);

router.patch("/:id", getElementid, updateSub);

router.delete("/:id", getElementid, deleteSub);

export default router;
