<template>
  <div class="home">

  <form class="form-inline" @submit.prevent="searchByArtist"  >
        <!--DO NOT MODIFY THE ID OR ONCLICK ATTRIBUTES IN THIS FORM-->
        <div class="form-group">
            <input type="text" class="form-control" name="artist" placeholder="Artist Name" v-model="artist"/>
            <button type="submit" class="btn btn-primary" id="get-music-button">Get Music</button>
           </div>

           <div v-for="song in playlist" :key="song._id">
                
                <img :src="song.artwork">
                <p>{{song.artist}}</p>
                <p>{{song.title}}</p>
                <p>{{song.album}}</p>

               <audio controls :src="song.preview">
             
              </audio>
                
                <button @click="removeSongFromPlaylist(song._id)">Remove From Playlist</button>
                  
           </div>

           <div class="wrapper" v-for="song in searchSongs" :key="song.trackId">  
               <img :src="song.artworkUrl100">
            <div>
             <p>{{song.artistName}}</p>  
             </div>

             <div>
              <p>
                {{song.trackName}}
              </p>
             </div>

            <div>
              <p>{{song.collectionName}}</p>
            </div>

            <div>
              <p> {{song.trackPrice}}</p>
            </div>

             
             
            
             <audio controls>
              <source :src="song.previewUrl" type="audio/mpeg">
              </audio>
              
              <div>
                <button @click="addSongToPlaylist(song)">Add To Playlist</button>

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
  mounted(){
    this.$store.dispatch('getPlaylist')
  },
// dispatch calls actions in the store
  methods: {
    searchByArtist() {
      this.$store.dispatch("getMusicByArtist", this.artist);
    },

    addSongToPlaylist(song) {
      this.$store.dispatch("addSongs", song)
      
    },

    removeSongFromPlaylist(playlistId) {
      this.$store.dispatch("removeSongs", playlistId)
    }
  },
  // watches for what is in the state.
  computed: {
    searchSongs() {
      return this.$store.state.allSongs;
    },

    playlist(){
      return this.$store.state.playlist;
    }


  }
};
</script>


<style>
.wrapper { 
        background: #0000003b;
        box-shadow: 1px 1px 10px #999;
        margin: auto;
        text-align: center;
        position: relative;
        -webkit-border-radius: 5px;
        -moz-border-radius: 5px;
        border-radius: 5px;
        margin-bottom: 20px !important;
        width: 800px;
        padding-top: 10px;
    }

    .artwork{
      height: 20vh;
      width: 20vw;
    }
</style>
