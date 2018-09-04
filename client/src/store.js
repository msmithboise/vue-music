import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

let songApi =  axios.create({
  baseURL: 'https://itunes.apple.com/search?term=',
  timeout: 3000,

})



export default new Vuex.Store({
  state: {
    allSongs: [],
    newSong: {},
    playlists: [],
    playlist: {}

  },
  mutations: {
    setSongs(state, song) {
      state.allSongs = song
    }
  },
  actions: {
    getMusicByArtist({ commit, dispatch }, artist){
      
      songApi.get(artist)
     
      .then(res => {
        commit('setSongs', res.data.results)
      })
    }
  }
})
  
  
