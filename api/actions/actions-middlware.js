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
module.exports = {logger, validateUserId}