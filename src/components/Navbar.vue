<template>
   
   <v-card @click.stop="mini = !mini" tile flat >
    
      <v-navigation-drawer app v-model="drawer" class="grey darken-4 sizeBar" :mini-variant.sync="mini" permanent>
        <!-- my avatar --> 
        <v-list-item class="space-avatar" >
          <v-avatar size="35">
            <v-img src="./../../public/avatar.png"></v-img>
          </v-avatar>
          
          <v-list-item-title class="white--text ml-4">Márcio Nitão</v-list-item-title>
         
          <v-btn icon  @click.stop="mini = !mini" class="title white--text">
            <v-icon>chevron_left</v-icon>
          </v-btn>
        </v-list-item>
       
        <v-divider></v-divider>

        <v-list>
          <v-list-item v-for="link in links" :key="link.text" router :to='link.route'>
          
            <v-list-item-action class="space-items">
              <v-icon class="white--text" medium :title="link.text">{{ link.icon }}</v-icon>
            </v-list-item-action>

            <!-- <v-list-item-content>
              <v-list-item-title class="white--text">{{ link.text }}</v-list-item-title>
            </v-list-item-content> -->

          </v-list-item>
        </v-list>

      </v-navigation-drawer>
  </v-card>
</template>

<script>

  export default {
    name: 'Navbar',
   
    data() {
      return {
        drawer: false,
        mini: true,
        links: [
          { icon: 'home', text: 'Home', route: '/home'},
          { icon: 'folder', text: 'My Projects', route: '/myprojects'},
          { icon: 'list', text: 'Skills', route: '/skills'},
          { icon: 'person', text: 'About', route: '/about'},
          { icon: 'email', text: 'Contact', route: '/contact'},
        ]
      }
    },
        
  }
</script>

<style lang="scss" scoped>

  .sizeBar {
    width: 50px !important
  }

  .dashColor {
    color: #212121;
  }

  .space-items {
    padding-top: 15px;
  }
  .space-avatar {
    padding-top: 10px;
  }

</style>