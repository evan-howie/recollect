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

router.get("/count", async (req, res) => {
  const count = await db
    .collection("photos")
    .get()
    .then((snap) => snap.size);
  res.json(count);
});

router.get("/bestFriend/:who", async (req, res) => {
  const { who } = req.params;
  const bestFriend = await db
    .collection("photos")
    .where("names", "array-contains", who)
    .get()
    .then((snap) => {
      const counts = {};
      snap.forEach((doc) => {
        doc.data().names.forEach((name) => {
          if (name !== who) {
            counts[name] = counts[name] ? counts[name] + 1 : 1;
          }
        });
      });
      const max = Math.max(...Object.values(counts));
      return Object.keys(counts).find((key) => counts[key] === max);
    });
  res.json(bestFriend);
});

export default router;
