const express = require('express');
const server = express();
server.use(express.json())
const ProjectRoute = require('./projects/projects-router')
const {logger} = require('./projects/projects-middleware')

server.use(logger) 

server.use('/api/projects', ProjectRoute)

// Configure your server here
// Build your actions router in /api/actions/actions-router.js
// Build your projects router in /api/projects/projects-router.js
// Do NOT `server.listen()` inside this file!

module.exports = server;
