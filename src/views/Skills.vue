<template>
  <div class="team">
    <div>
      <v-breadcrumbs :items="items" divider=">"></v-breadcrumbs>
    </div>

    <v-divider></v-divider>

    <v-container class="my-5">
      <p>My favorite work technologies</p>
      <v-layout row wrap>
        <v-flex xs12 sm6 md2 lg2 v-for="skill in skills" :key="skill.name">
          <v-card class="text-xs-center ma-3">
            <v-card-actions class="justify-center">
              <v-img
                max-width="50px"
                :src="require(`@/assets/${skill.avatar}`)"
              ></v-img>
            </v-card-actions>

            <v-card-title class="justify-center">{{ skill.name }}</v-card-title>
            <v-card-text class="text-center">{{ skill.role }}</v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      skills: [
        { name: "React", role: "web", avatar: "React.png" },
        { name: "Angular", role: "web", avatar: "angular.png" },
        { name: "Node", role: "web", avatar: "node.png" },
        { name: "Vue", role: "web", avatar: "vue.png" },
        { name: "Ionic", role: "mobile", avatar: "ionic.png" },
        { name: "Flutter", role: "mobile", avatar: "flutter.png" },
        { name: "Firebase", role: "data base", avatar: "firebase.png" },
        { name: "MySQL", role: "data base", avatar: "mysql.png" },
        { name: "Mongo", role: "data base", avatar: "mongo.png" },
        { name: "Wordpress", role: "cms", avatar: "wordpress.png" },
        { name: "Xd", role: "prototype", avatar: "xd.png" },
        { name: "Figma", role: "prototype", avatar: "figma.png" },
      ],
      items: [
        { text: "Home", disabled: false, href: "breadcrumbs_dashboard" },
        { text: "Skills", disabled: true, href: "breadcrumbs_link_1" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
