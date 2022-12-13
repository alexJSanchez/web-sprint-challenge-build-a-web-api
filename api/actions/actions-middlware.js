// add middlewares here related to actions
const ActionMod = require('./actions-model')


function logger(req, res, next) {
    // DO YOUR MAGIC
    console.log(`Method: ${req.method}, URL: ${req.url}, ${new Date().toISOString()}`)
    next()
  } 

async function validateUserId(req, res, next) {
    try{
      const user = await ActionMod.get(req.params.id)
      if(!user){
        res.status(404).json({
           message: "user not found" 
        })
      }else{
        req.user = user;
        next()
      }
    }catch(err){
      res.status(500).json({
        message: 'problem finding user'
      })
    }
    // DO YOUR MAGIC
  }

function validatePost(req, res, next) {
    // DO YOUR MAGIC
    const {project_id,description,notes} = req.body
    if(!project_id||!description||!notes){
      res.status(400).json({
        message: 'missing required text field'
      })
    }else{
      req.item = req.body
      next()
    }
  }

module.exports = {logger, validateUserId, validatePost}