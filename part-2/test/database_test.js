const expect = require('chai').expect
const client = require('../db/client')
const db = require('../database')

describe('database queries', () => {

  describe('listGuests', () => {
    it('should return an array of objects of guests', done => {
      db.listGuests((error, guests) => {
        if(error) return done(error)
        expect(guests.rows.length).to.eql(20)
        expect(guests.rows[0]).to.have.all.keys('ID', 'Guest Name', 'Email')
        done()
      })
    })
  })

})
