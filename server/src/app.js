import express from "express";
import router from "./router.js";
import morgan from "morgan";

const app = express();

const port = 80;

app.use(morgan("dev"));
app.use(express.json());
app.use(router);

app.listen(port, "0.0.0.0", () => {
  console.log(`Server listening on port ${port}`);
});
