import express from "express";
const router = express.Router();
import fs from "fs";
//import { v4 as uuidv4 } from "uuid";

router.get("/", (_req, res) => {
    console.log("get all projects api called");
    const projectData = fs.readFileSync("./data/projects.json");
    return res.status(200).json(projectData);
});

export default router;