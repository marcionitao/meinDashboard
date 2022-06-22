<template>
  <div class="about">
    <div>
      <v-breadcrumbs :items="items" divider=">"></v-breadcrumbs>
    </div>

    <v-divider></v-divider>

    <v-container class="my-5">
      <v-card class="mx-auto" max-width="550" outlined>
        <v-list-item three-line>
          <v-list-item-content>
            <div class="overline mb-4">About me</div>
            <v-list-item-title class="headline mb-1"
              >Welcome to my Portfolio</v-list-item-title
            >
            <v-list-item-subtitle>Hamburg - Germany 🚀</v-list-item-subtitle>
            <v-list-item-content
              >Hi, my name is Marcio and I am Portuguese. I am a developer
              expert in web application development. Till date, I have been
              providing services as a Freelancer for businesses and individuals
              related to tourism, finance and marketing.</v-list-item-content
            >
            <v-list-item-content
              >My aim has always been to develop applications that look
              beautiful and professional, are highly functional, load quickly,
              and are Search Engine optimized.</v-list-item-content
            >
            <v-list-item-subtitle
              >Node / React / Next / Vue</v-list-item-subtitle
            >
          </v-list-item-content>

          <v-list-item-avatar tile size="95" color="white">
            <v-img src="../../public/chef_3.jpg"></v-img>
          </v-list-item-avatar>
        </v-list-item>

        <v-card-actions class="justify-center maisEspaco">
          <v-btn
            icon
            pa-1
            href="https://twitter.com/marcionitao"
            target="_blank"
          >
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

          <v-btn
            icon
            pa-1
            href="https://github.com/marcionitao"
            target="_blank"
          >
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
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { text: "Home", disabled: false, href: "/home" },
        { text: "About", disabled: true, href: "breadcrumbs_link_1" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
