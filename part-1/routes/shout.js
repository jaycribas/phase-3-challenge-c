const router = require('express').Router()

router.get('/:word', (req, res) => {
  res.setHeader('Content-Type', 'text/plain')
  res.status(200).send(shout(req.params.word))
})

function shout(word){
  return word.toUpperCase() + '!!!'
}

module.exports = router
