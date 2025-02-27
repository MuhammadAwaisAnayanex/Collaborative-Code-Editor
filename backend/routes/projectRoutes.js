const express = require('express');
const Project = require('../models/Project');
const router = express.Router();

// Create a new project
router.post('/', async (req, res) => {
  const { name } = req.body;
  const project = new Project({ name });
  await project.save();
  res.status(201).json(project);
});

// Get all projects
router.get('/', async (req, res) => {
  const projects = await Project.find();
  res.json(projects);
});

// Update project code
router.put('/:id', async (req, res) => {
  const { code } = req.body;
  const project = await Project.findByIdAndUpdate(req.params.id, { code }, { new: true });
  res.json(project);
});

module.exports = router;