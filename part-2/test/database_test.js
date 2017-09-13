const expect = require('chai').expect
const client = require('../db/client')
const db = require('../database')

describe('database queries', () => {

  describe('listGuests', () => {
    it('should return an array of objects of guests', done => {
      db.listGuests((error, guests) => {
        if(error) return done(error)
        expect(guests.rows).to.have.lengthOf(20)
        expect(guests.rows[0]).to.have.all.keys('ID', 'Guest Name', 'Email')
        done()
      })
    })
  })

  describe('listAllUpcomingBookings', () => {
    it('should return all future bookings', done => {
      db.listAllUpcomingBookings((error, bookings) => {
        if(error) return done(error)
        expect(bookings.rows[0]['Room #']).to.equal('3F')
        expect(bookings.rows).to.have.lengthOf(35)
        expect(bookings.rows[0]).to.have.all.keys('Room #', 'Guest Name', 'Check-In', 'Check Out')
        done()
      })
    })
  })

  describe('listRoomsAndAvailability', () => {
    it('should return all 18 rooms and their availability', done => {
      db.listRoomsAndAvailability((error, rooms) => {
        if(error) return done(error)
        expect(rooms.rows).to.have.lengthOf(18)
        expect(rooms.rows[4].Available).to.be.false
        done()
      })
    })
  })
})
