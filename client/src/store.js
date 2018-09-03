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
    setSongs(state, data) {
      state.songs = data
    }
  },
  actions: {
    getMusic({commit, dispatch}) {
      var artist = artist.value;
      songApi.get('' + artist)
        .then(res => {
          
          commit('setSongs', res.data)
        })
    }
  }
})
  
  
