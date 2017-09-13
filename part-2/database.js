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
      TO_CHAR (check_in, 'YYYY-MM-DD') AS "Check-In",
      TO_CHAR (check_out, 'YYYY-MM-DD') AS "Check Out"
    FROM
      bookings
    JOIN rooms r ON
      r.id = room_id
    JOIN guests g ON
      g.id = guest_id
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
      TO_CHAR (check_in, 'YYYY-MM-DD') AS "Check-In",
      TO_CHAR (check_out, 'YYYY-MM-DD') AS "Check Out"
    FROM
      bookings
    JOIN rooms r ON
      r.id = room_id
    JOIN guests g ON
      g.id = guest_id
    WHERE
      check_in > CURRENT_DATE
    AND
      number = '${roomNumber}'
    ORDER BY
      check_in
  `, callback)
}

function listRoomsAndAvailability(callback){
  return client.query(`
    SELECT
      number AS "Room #",
      capacity AS "Capacity",
      true AS "Available"
    FROM
      rooms
    EXCEPT
        SELECT
          number AS "Room #",
          capacity AS "Capacity",
          true AS "Available"
        FROM
          rooms
        JOIN bookings b ON
          b.room_id = rooms.id
        WHERE
          (CURRENT_DATE BETWEEN check_in AND check_out)
    UNION ALL
      SELECT
        number AS "Room #",
        capacity AS "Capacity",
        false AS "Available"
      FROM
        rooms
      JOIN bookings b ON
        b.room_id = rooms.id
      WHERE
        (CURRENT_DATE BETWEEN check_in AND check_out)
    ORDER BY
      "Room #"
  `, callback)
}

function listAvailableRooms(callback){
  return client.query(`
    SELECT
      number AS "Room #",
      capacity AS "Capacity",
      true AS "Available"
    FROM
      rooms
    EXCEPT
        SELECT
          number AS "Room #",
          capacity AS "Capacity",
          true AS "Available"
        FROM
          rooms
        JOIN bookings b ON
          b.room_id = rooms.id
        WHERE
          (CURRENT_DATE BETWEEN check_in AND check_out)
    ORDER BY
      "Room #"
  `, callback)
}

module.exports = {
  listGuests,
  listAllUpcomingBookings,
  listUpcomingBookingsByRoom,
  listRoomsAndAvailability,
  listAvailableRooms
}
