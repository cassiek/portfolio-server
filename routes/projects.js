import express from "express";
const router = express.Router();
import fs from "fs";
//import { v4 as uuidv4 } from "uuid";

router.get("/", (_req, res) => {

    //console.log("get all projects api called");
    const projectsData = fs.readFileSync("./data/data.json", "utf8");
    //console.log("read file");
    const parsedJsonData = JSON.parse(projectsData); // parsing converts to JS object? withot this I am sent rich text?
    //console.log("parsed Json")
    return res.status(200).json(parsedJsonData);
    
});

export default router; 