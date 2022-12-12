// add middlewares here related to projects
const projectMod = require('./projects-model')


function logger(req, res, next) {
    // DO YOUR MAGIC
    console.log(`Method: ${req.method}, URL: ${req.url}, ${new Date().toISOString()}`)
    next()
  } 

async function validateUserId(req, res, next) {
    try{
      const user = await projectMod.get(req.params.id)
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
    const {name,description} = req.body
    
    if(!name||!description){
      res.status(400).json({
        message: 'missing required text field'
      })
    }else{
      req.item = req.body
      next()
    }
  }
 


  module.exports = {validateUserId,validatePost,logger};