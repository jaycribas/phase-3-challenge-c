const router = require('express').Router()

router.post('/', (req, res) => {
  let { a, b } = req.body
  if(Array.isArray(a) && Array.isArray(b)){
    let result = merge(a,b)

    res.setHeader('Content-Type', 'application/json')
    res.send({"result": result})
  } else {

    res.status(400).send({
      "error": "Both keys in request body must be of type Array."
    })
  }
})

function merge(array1, array2){
  let merged = []
  do{
    merged.push(array1.shift())
    merged.push(array2.shift())
  } while(array1.length > 0 && array2.length > 0)
  return merged
}

module.exports = router
