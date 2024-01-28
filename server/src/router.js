import { Router } from "express";
import path from "path";
import callPythonScript from "./utils/callPythonScript.js";
import db from "./db.js";
import getDateTimeString from "./utils/getDateTimeString.js";
import express from "express";
import { writeFile } from "fs/promises";
import { v4 as uuid } from "uuid";

const router = Router();

router.get("/", async (req, res) => {
  res.send("Hello World!");
});

router.post("/", async (req, res) => {
  res.send("Hello Worl!");
});

router.post(
  "/upload",
  express.raw({ type: "*/*", limit: "1000mb" }),
  async (req, res) => {
    const path = `uploads/${uuid()}.jpg`;
    await writeFile(path, req.body);

    const data = await callPythonScript(["./scripts/face.py", `${path}`]).catch(
      (error) => console.error("Error: " + error)
    );

    const docRef = await db.collection("photos").add({
      img_path: path,
      names: data,
      datetime: getDateTimeString(),
    });

    res.json(docRef.id);
  }
);

export default router;
