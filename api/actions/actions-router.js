// Write your "actions" router here!
const express = require('express')
const {validateUserId, validatePost} = require('./actions-middlware')
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

 router.post('/', validatePost, async (req,res)=>{
   const action =  await ActionsMod.insert(req.item)
   res.json(action)
 })

 router.put('/:id', validateUserId, validatePost, async (req,res) => {
    const actionUpdate = ActionsMod.update(req.params.id,req.body)
  res.json(req.item) 
 })

 router.delete('/:id', validateUserId, async (req,res) => {
 const removedAction = await ActionsMod.remove(req.params.id)
 res.json(removedAction)
 })
module.exports = router;