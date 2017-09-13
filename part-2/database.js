const client = require('./db/client')

function listGuests(callback){
  return client.query(`
    SELECT
      id AS "ID",
      name AS "Guest Name",
      email AS "Email"
    FROM guests
  `, callback)
}

function listAllUpcomingBookings(callback){
  return client.query(`
    SELECT
      number AS "Room #",
      name AS "Guest Name",
      check_in AS "Check-In",
      check_out AS "Check Out"
    FROM
      bookings
    JOIN rooms r ON r.id = room_id
    JOIN guests g ON g.id = guest_id
    WHERE
      check_in > CURRENT_DATE
    ORDER BY
      check_in
  `, callback)
}

function listUpcomingBookingsByRoom(roomNumber, callback){
  return client.query(`
    SELECT
      number AS "Room #",
      name AS "Guest Name",
      check_in AS "Check-In",
      check_out AS "Check Out"
    FROM
      bookings
    JOIN rooms r ON r.id = room_id
    JOIN guests g ON g.id = guest_id
    WHERE
      check_in > CURRENT_DATE
    AND
      number = '${roomNumber}'
    ORDER BY
      check_in
  `, callback)
}


module.exports = {
  listGuests,
  listAllUpcomingBookings,
  listUpcomingBookingsByRoom
}
