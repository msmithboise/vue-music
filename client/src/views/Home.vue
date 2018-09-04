<template>
  <div class="home">

  <form class="form-inline" @submit.prevent="searchByArtist"  >
        <!--DO NOT MODIFY THE ID OR ONCLICK ATTRIBUTES IN THIS FORM-->
        <div class="form-group">
            <input type="text" class="form-control" name="artist" placeholder="Artist Name" v-model="artist"/>
            <button type="submit" class="btn btn-primary" id="get-music-button">Get Music</button>
           </div>

           <div v-for="song in searchSongs">
             <img :src="song.artworkUrl100">
             {{song.artistName}}
             {{song.trackName}}
             {{song.collectionName}}
             {{song.trackPrice}}
             <audio controls>
              <source :src="song.previewUrl" type="audio/mpeg">
              </audio>
              
              <div>
                <button>Add To Playlist</button>
              </div>



           </div>
    </form>
    <div id="songs"></div>


    
            
                

  </div>

</template>

<script>
export default {
  name: "home",
  data() {
    return {
      artist: ""
    };
  },

// dispatch calls actions in the store
  methods: {
    searchByArtist() {
      this.$store.dispatch("getMusicByArtist", this.artist);
    }
  },
  // watches for what is in the state.
  computed: {
    searchSongs() {
      return this.$store.state.allSongs;
    }
  }
};
</script>
