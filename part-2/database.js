const client = require('./db/client')

function listGuests(callback){
  return client.query(`
    SELECT * FROM guests
  `, callback)
}

module.exports = {
  listGuests
}
