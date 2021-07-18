import express from "express";

import {
  getSub,
  createSub,
  updateSub,
  deleteSub,
  getbyidSub,
  getElementid,
} from "../controllers/subcategoriesController.js";
const router = express.Router();

router.get("/:id", getElementid, getbyidSub);

router.get("/", getSub);

router.post("/", createSub);

router.patch("/:id", getElementid, updateSub);

router.delete("/:id", getElementid, deleteSub);

export default router;
