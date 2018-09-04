<template>
  <div class="home">

  <form class="form-inline" @submit.prevent="searchByArtist"  >
        <!--DO NOT MODIFY THE ID OR ONCLICK ATTRIBUTES IN THIS FORM-->
        <div class="form-group">
            <input type="text" class="form-control" name="artist" placeholder="Artist Name" v-model="artist"/>
            <button type="submit" class="btn btn-primary" id="get-music-button">Get Music</button>
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

  methods: {
    searchByArtist() {
      this.$store.dispatch("getMusicByArtist", this.artist);
    }
  },

  computed: {
    searchSongs() {
      return this.$store.state.allSongs;
    }
  }
};
</script>
