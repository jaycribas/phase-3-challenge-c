const print = require('node-print').pt
const client = require('./db/client')

const command = process.argv[2]
const filterOption = process.argv[3]
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

  case 'bookings':
    if(filterOption){
      db.listUpcomingBookingsByRoom(filterOption, function(error, bookings){
        if(error)
          console.log(error)
        else{
          print(bookings.rows)
          client.end()
        }
      })
      break
    }
    db.listAllUpcomingBookings(function(error, bookings){
      if(error)
        console.log(error)
      else{
        print(bookings.rows)
        client.end()
      }
    })
    break;

  case 'rooms':
    if(filterOption){
      db.listAvailableRooms(function(error, rooms){
        if(error)
          console.log(error)
        else{
          print(rooms.rows)
          client.end()
        }
      })
      break;
    }
    db.listRoomsAndAvailability(function(error, rooms){
      if(error)
        console.log(error)
      else{
        print(rooms.rows)
        client.end()
      }
    })
    break;
  default:
    console.log('Invalid command: Try using guests, rooms [room #], or bookings [--available]')
    client.end()
}
