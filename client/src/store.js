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
  // where we perform changes to the state.
  mutations: {
    setSongs(state, song) {
      state.allSongs = song
    }
  },

  // commit calls mutations in store
  actions: {
    getMusicByArtist({ commit, dispatch }, artist){
      
      songApi.get(artist)
     // changed to res because axios adds "data" wrap.  didn't want data.data.results.  a good thing to remember...
      .then(res => {
        commit('setSongs', res.data.results)
      })
    }
  }
})
  
  
