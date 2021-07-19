import app from "../app";
import {
  getSubevent,
  getSubevents,
  createSubevent,
  updateSubevent,
  deleteSubevent,
} from "../controllers/SubEvents";

app.get("/subevent", getSubevents);

app.get("/subevent/get/:id", getSubevent);

app.post("/subevent/create", createSubevent);

app.put("/subevent/update/:id", updateSubevent);

app.delete("/subevent/delete/:id", deleteSubevent);
