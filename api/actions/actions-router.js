// Write your "actions" router here!
const express = require('express')
const router = express.Router()

router.use((req, res, next) => {
    console.log('Time: ', Date.now())
    next()
  })

module.exports = router;