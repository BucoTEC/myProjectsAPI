import express from "express";
import mongoose from "mongoose";
import Project from "./models/project.js";
import dotenv from "dotenv";
import authenticated from "./midlewar/auth.js";
//Config
const app = express();
dotenv.config();

//Middlewar
app.use(express.json());

//Routes

//Unos podataka
app.post("/", authenticated, async (req, res) => {
  try {
    const newProject = await new Project(req.body);
    await newProject.save();
    res.status(200).json(newProject);
  } catch (err) {
    res.send(`Ups there was an error: ${err.message}`);
  }
});

//Pretraga i filtriranje
app.get("/", async (req, res) => {
  const { cat } = req.query;
  try {
    if (cat) {
      const catProjects = await Project.find({ cat });
      res.json(catProjects);
    }

    const allProjects = await Project.find();
    res.status(200).json(allProjects);
  } catch (err) {
    res.send(`Ups there was an error: ${err.message}`);
  }
});

//Conections
const mongoDB = process.env.MONGO_URL;
mongoose
  .connect(mongoDB)
  .then(console.log(`Conection to database is open`))
  .catch((err) => {
    console.log("Ups there was a problem", err);
  });

const port = process.env.PORT || 5000;
app.listen(port, (req, res) => {
  console.log(`Server is operational on port: ${port}`);
});
