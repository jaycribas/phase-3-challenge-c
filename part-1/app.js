const express = require('express')
const app = express()
const shout = require('./routes/shout')

app.use('/api/shout', shout)

app.listen(3000, function(){
  console.log('Listening on port 3000')
})
