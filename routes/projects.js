import express from "express";
const router = express.Router();
import fs from "fs";
//import { v4 as uuidv4 } from "uuid";

router.get("/", (_req, res) => {
    console.log("get all projects api called");
    const projectData = fs.readFileSync("./data/projects.json");
    //const parsedJsonData = JSON.parse(projectData); can I send without parsing?
    return res.status(200).json(parsedJsonData);
});

export default router;