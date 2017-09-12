const print = require('node-print').pt
const client = require('./db/client')


const command = process.argv[2]
const db = require('./database')

switch (command) {
  case 'guests':
    db.listGuests(function(error, guests){
      if(error)
        console.log(error)
      else{
        print(guests.rows)
        client.end()
      }
    })
    break;
  default:

}
