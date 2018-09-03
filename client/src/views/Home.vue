<template>
  <div class="home">

  <form class="form-inline" onsubmit="getMusic(event)">
     
        <div class="form-group">
            <input type="text" class="form-control" name="artist" placeholder="Artist Name" />
            <button type="submit" class="btn btn-primary" id="get-music-button">Get Music</button>
        </div>
    </form>
    <div id="songs">


  </div>

</template>

<script>


export default {
  name: 'home',
  data(){
    return{
      artist: ''
    }
  },

  methods: {
  getMusic(){
  this.$store.dispatch('getMusic', this.artist)
            },
  },

  
  computed: {
    
    
  }

};
</script>
