const express = require('express')
const router = express.Router()

router.get('/:word', (req, res) => {
  res.status(200).send( shout(req.params.word) )
})

function shout(word){
  return word.toUpperCase() + '!!!'
}

module.exports = router
