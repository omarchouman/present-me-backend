import app from "../app";

import {
  createSub,
  updateSub,
  deleteSub,
  getElementid,
} from "../controllers/SubEvents.js";

app.post("subevent/:id", createSub);

app.patch("subevent/:id", getElementid, updateSub);

app.delete("subevent/:id", getElementid, deleteSub);







// import app from "../app";
// import {
//   getSubevent,
//   getSubevents,
//   createSubevent,
//   updateSubevent,
//   deleteSubevent,
// } from "../controllers/SubEvents";

// app.get("/subevent", getSubevents);

// app.get("/subevent/get/:id", getSubevent);

// app.post("/subevent/create", createSubevent);

// app.put("/subevent/update/:id", updateSubevent);

// app.delete("/subevent/delete/:id", deleteSubevent);
