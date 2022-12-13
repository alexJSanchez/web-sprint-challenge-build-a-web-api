// Write your "actions" router here!
const express = require('express')
const {validateUserId} = require('./actions-middlware')
const router = express.Router()
const ActionsMod = require('./actions-model')

router.use((req, res, next) => {
    console.log('Time: ', Date.now())
    next()
  })

router.get('/', async (req,res) =>{
 const actions = await ActionsMod.get()
 res.json(actions)
})

router.get('/:id', validateUserId, (req,res) =>{
   res.json(req.user)
 })

module.exports = router;