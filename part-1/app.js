const express = require('express')
const app = express()
const shout = require('./routes/shout')
const merge = require('./routes/merge')
const bodyParser = require('body-parser')


app.use(bodyParser.json())
app.use('/api/shout', shout)
app.use('/api/array/merge', merge)


app.listen(3000, function(){
  console.log('Listening on port 3000')
})
