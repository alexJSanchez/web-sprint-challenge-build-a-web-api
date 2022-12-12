// Write your "projects" router here!
const express = require('express')
const router = express.Router()
const ProjectMod = require('./projects-model')

router.use((req, res, next) => {
    console.log('Time: ', Date.now())
    next()
  })
router.get('/', async (req, res) => {
    const users = await ProjectMod.get()
    res.send(users)
  })

module.exports = router;