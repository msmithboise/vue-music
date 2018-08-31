var mongoose = require('mongoose')
var connectionString = 'mongodb://student:student1@ds018558.mlab.com:18558/vue-music'
var connection = mongoose.connection


mongoose.connect(connectionString, { useMongoClient: true })

connection.on('error', err => {
  console.log('ERROR FROM DATABASE: ', err)
})


connection.once('open', () => {
  console.log('Connected to Database')
})
