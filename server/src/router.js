import { Router } from "express";
import multer from "multer";
import path from "path";
import callPythonScript from "./utils/callPythonScript.js";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // Destination folder
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    ); // Filename
  },
});

export const upload = multer({ storage: storage });

const router = Router();

router.get("/", async (req, res) => {
  res.send("Hello World!");
});

router.post("/upload", upload.single("file"), async (req, res) => {
  if (!req.file) return res.status(400).send("bad input");

  const data = await callPythonScript([
    "./scripts/face.py",
    `${req.file.path}`,
  ]).catch((error) => console.error("Error: " + error));

  res.send(data);
});

export default router;
