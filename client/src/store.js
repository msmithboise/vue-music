import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from './router';

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
    
  },
  actions: {
  getSongs({commit, dispatch}) {
    songApi.get('')
    .then(res => {
      commit('setSongs', res.data)
      console.log(res.data)
    })
  }
  }
})
