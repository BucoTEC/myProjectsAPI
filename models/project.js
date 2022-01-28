import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
  title: {
    type: "string",
    required: true,
  },
  desc: {
    type: "string",
    required: true,
  },
  cat: {
    type: "string",
    required: true,
  },
  url: {
    type: "string",
    required: true,
  },
});

const Project = mongoose.model("Project", projectSchema);

export default Project;
