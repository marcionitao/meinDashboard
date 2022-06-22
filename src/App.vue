<template>
  <v-app class="grey lighten-5">

    <Navbar/>
    
    <v-content class="maisEspaco">

      <router-view/>
      
    </v-content>

    <!-- <Footer/> -->

  </v-app>
</template>

<script>
import Navbar from './components/Navbar'
// import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    Navbar,
    // Footer
  },
  data () {
    return {
  
      //
    }
  }
}
</script>

<style lang="scss" scoped>

.maisEspaco {
	padding-left: 55px !important
}
	

</style>