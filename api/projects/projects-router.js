// Write your "projects" router here!
const express = require('express')
const { validateUserId, validatePost } = require('./projects-middleware')
const router = express.Router()
const ProjectMod = require('./projects-model')

router.use((req, res, next) => {
    console.log('Time: ', Date.now())
    next()
  })
router.get('/', async (req, res,) => {
    const users = await ProjectMod.get()
    res.send(users)
  }) 

router.get('/:id', validateUserId, (req,res) =>{
   res.json(req.user)
})

router.post('/', validatePost, async (req,res) => {
  const post = await ProjectMod.insert(req.item);
  res.json(post)
})


module.exports = router;