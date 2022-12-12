const express = require('express');
const server = express();
const ProjectRoute = require('./projects/projects-router')

server.use('/api/projects', ProjectRoute)

// Configure your server here
// Build your actions router in /api/actions/actions-router.js
// Build your projects router in /api/projects/projects-router.js
// Do NOT `server.listen()` inside this file!

module.exports = server;
