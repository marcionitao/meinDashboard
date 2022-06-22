<template>
  <div class="home grey lighten-5">
    <div>
      <v-breadcrumbs :items="items" divider=">"></v-breadcrumbs>
    </div>

    <v-divider></v-divider>

    <v-card class=" grey lighten-5 maisEspaco" flat>
      <v-card-actions class="justify-center">
        <v-img max-width="260px" src="./../../public/web.png"></v-img>
      </v-card-actions>

      <v-card-title class="justify-center display-1 maisEspaco"
        >Hi, I'm Marcio, web developer.</v-card-title
      >
      <v-card-text class="text-center">Node / React / Next / Vue </v-card-text>

      <v-card-actions class="justify-center maisEspaco">
        <v-btn icon pa-1 href="https://twitter.com/marcionitao" target="_blank">
          <v-img
            src="../../public/iconfinder_24-twitter_tweet_4202000.png"
            max-width="20px"
          ></v-img>
        </v-btn>

        <v-btn
          icon
          pa-1
          href="https://www.linkedin.com/in/marcionitao"
          target="_blank"
        >
          <v-img
            src="../../public/iconfinder_56-linkedin_4202085.png"
            max-width="20px"
          ></v-img>
        </v-btn>

        <v-btn icon pa-1 href="https://github.com/marcionitao" target="_blank">
          <v-img
            src="../../public/iconfinder_71-github_4202098.png"
            max-width="20px"
          ></v-img>
        </v-btn>

        <v-btn icon pa-1 router to="/contact">
          <v-img src="../../public/email.png" max-width="20px"></v-img>
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [{ text: "Home", disabled: true, href: "breadcrumbs_dashboard" }],
    };
  },
};
</script>

<style lang="scss" scoped>
.maisEspaco {
  padding-top: 25px !important;
}

.alinha {
  text-align: center;
}
</style>
