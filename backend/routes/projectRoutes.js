const express = require('express');
const router = express.Router();
const { getProjects, createProject } = require('../controllers/projectController').default;

router.get('/', getProjects);         // GET /api/projects
router.post('/', createProject);      // POST /api/projects

module.exports = router;
