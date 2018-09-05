import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'


Vue.use(Vuex)

let songApi = axios.create({
  baseURL: 'https://itunes.apple.com/search?term=',
  timeout: 3000,
})

let playlistApi = axios.create({
  baseURL: '//localhost:3000/api/songs',
  timeout: 3000
})


export default new Vuex.Store({
  state: {
    allSongs: [],
    playlist: []
  },
  // where we perform changes to the state.
  mutations: {
    setSongs(state, song) {
      state.allSongs = song
    },
    setPlaylist(state, list){
      state.playlist = list
    },
    addToPlaylist(state, song) {
      state.playlist.push(song)
    }
  },

  // commit calls mutations in store

  // actions are responsible for talking to the database
  actions: {
    getMusicByArtist({ commit, dispatch }, artist) {
      songApi.get(artist)
        // changed to res because axios adds "data" wrap.  didn't want data.data.results.  a good thing to remember...
        .then(res => {
          commit('setSongs', res.data.results)
        })
    },
                                //where will you send the data?
    addSongs({ commit, dispatch }, song) {
      let addedSong = {
        artwork: song.artworkUrl100,
        title: song.trackName,
        artist: song.artistName,
        album: song.collectionName,
        preview: song.previewUrl,
      }
      console.log(addedSong)
      playlistApi.post('/', addedSong) // this is where you're sending your board.
        .then(res => {
          commit('addToPlaylist', res.data)
        })
    },

    removeSongs({ commit, dispatch }, playlistId) {
      playlistApi.delete('/' + playlistId)
        .then(res => {
          dispatch('getPlaylist')
        })
    },

    getPlaylist({commit}){
      playlistApi.get('').then(res =>{
        commit('setPlaylist', res.data)
      })
    }
  }
}



)


