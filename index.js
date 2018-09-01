let express = require('express')
let bp = require('body-parser')
require('./server/db/db-config') // is this the right file path?
let server = express();
let port = 3000

server.use(bp.json())
server.use(bp.urlencoded(({
  extended: true
})))
server.use(express.static(__dirname + '/../www/'))


//ROUTES
let searchRoutes = require('./server/routes/searches')
let playlistRoutes = require('./server/routes/playlists')
let songRoutes = require('./server/routes/songs')


server.use('/api', searchRoutes)
server.use('/api/playlists', playlistRoutes)
server.use('/api/songs' , songRoutes)




//Error Handlers
server.use('/api/*', (err, req, res, next) => {
  res.status(400).send(err)
})
server.use('*', (req, res, next) => {
  res.status(404).send('<h1>404</h1>')
})




server.listen(port, () => {
  console.log('Hellllllloooo', port)
})