import express from "express";
import cors from "cors";
import projectRoutes from "./routes/projects.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5050;

app.use(cors());
app.use(express.json());

app.use(express.static("public/images"));
app.use(express.static("public/resume"));

app.use("/", projectRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});