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
    songs: [],
    song: {},
    playlists: [],
    playlist: {}

  },
  mutations: {
    setSongs(state, songs) {
      state.songs = songs
    }
  },
  actions: {
    getMusicByArtist({ commit, dispatch }, artist){
      
      songApi.get(artist)
     
      .then(data => {
        commit('setSongs', data.results)
      })
    }
  }
})
  
  
