const print = require('node-print').pt
const client = require('./db/client')

const command = process.argv[2]
const option = process.argv[3]
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
  case 'rooms':
    db.listAllUpcomingBookings(function(error, rooms){
      if(error)
        console.log(error)
      else{
        print(rooms.rows)
        client.end()
      }
    })
    break;
  default:

}
