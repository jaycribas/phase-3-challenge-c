DROP TABLE IF EXISTS rooms;
CREATE TABLE rooms(
  id SERIAL PRIMARY KEY,
  number VARCHAR (2),
  capacity INT
);

DROP TABLE IF EXISTS guests;
CREATE TABLE guests(
  id SERIAL PRIMARY KEY,
  name VARCHAR (70),
  email VARCHAR (50)
);

DROP TABLE IF EXISTS bookings;
CREATE TABLE bookings(
  id SERIAL PRIMARY KEY,
  room_id INT REFERENCES rooms,
  guest_id INT REFERENCES guests,
  check_in DATE,
  check_out DATE
);
