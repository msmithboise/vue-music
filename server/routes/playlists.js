let router = require('express').Router()
let Playlists = require('../models/playlist')

//routes.. get post put delete...
router.get('/', (req, res, next) => {
    Playlists.find({})
    .then(playlists => res.send(playlists))
    .catch(next)
})



module.exports = router