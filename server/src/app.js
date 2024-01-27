import express from "express";
import router from "./router.js";
import cors from "cors";

const app = express();

const port = 3000;

app.use(cors());
app.use(router);

app.listen(port, "0.0.0.0", () => {
  console.log(`Server listening on port ${port}`);
});
