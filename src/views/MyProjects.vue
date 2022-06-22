<template>
  <div class="myprojects">
    <div>
      <v-breadcrumbs :items="items" divider=">"></v-breadcrumbs>
    </div>

    <v-divider></v-divider>

    <v-container class="my-5">
      <!-- barra com opeções -->
      <v-layout row class="mb-4">
        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-btn
              class="ma-1"
              small
              outlined
              color="grey"
              @click="sortBy('title')"
              v-on="on"
            >
              <v-icon left small>folder</v-icon>
              <span class="caption text-lowercase">By Project name</span>
            </v-btn>
          </template>
          <span>Sort projects by project name</span>
        </v-tooltip>

        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-btn
              class="ma-1"
              small
              outlined
              color="grey"
              @click="sortBy('tech')"
              v-on="on"
            >
              <v-icon left small>mouse</v-icon>
              <span class="caption text-lowercase">By Tech</span>
            </v-btn>
          </template>
          <span>Sort projects by tech</span>
        </v-tooltip>

        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-btn
              class="ma-1"
              small
              outlined
              color="grey"
              @click="sortBy('device')"
              v-on="on"
            >
              <v-icon left small>widgets</v-icon>
              <span class="caption text-lowercase">By Device</span>
            </v-btn>
          </template>
          <span>Sort projects by device</span>
        </v-tooltip>
      </v-layout>

      <v-layout justify-center class="mt-4">
        <v-expansion-panels accordion>
          <v-expansion-panel
            v-for="project in this.$store.getters.getProjects"
            :key="project.title"
          >
            <v-layout row wrap :class="`pa-3 project ${project.tech}`">
              <v-expansion-panel-header>
                <v-flex xs12 md6>
                  <div class="caption grey--text">Project Title</div>
                  <div>{{ project.title }}</div>
                </v-flex>

                <v-flex xs6 sm4 md2>
                  <div class="caption grey--text">Device</div>
                  <div>{{ project.device }}</div>
                </v-flex>

                <v-flex xs6 sm4 md2>
                  <div class="caption grey--text">Author</div>
                  <div>{{ project.author }}</div>
                </v-flex>

                <v-flex xs2 sm4 md2>
                  <div class="right">
                    <v-chip
                      small
                      :class="`vchip ${project.tech} white--text caption my-2`"
                      >{{ project.tech }}</v-chip
                    >
                  </div>
                </v-flex>
              </v-expansion-panel-header>

              <v-expansion-panel-content>
                <p class="font-weight-medium">{{ project.description }}</p>

                <v-divider></v-divider>
                More details <a :href="project.url" target="_blank">Here ></a>
              </v-expansion-panel-content>
            </v-layout>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // projects: [],
      items: [
        { text: "Home", disabled: false, href: "/meinprojects" },
        { text: "My Projects", disabled: true, href: "breadcrumbs_dashboard" },
      ],
    };
  },

  methods: {
    sortBy(prop) {
      // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
      this.projects.sort((a, b) => (a[prop] < b[prop] ? -1 : 1));
    },
  },
  // Ao criar tudo, ele faz a qyery para a db list
  created() {
    this.$store.dispatch("getProjects");
  },
};
</script>

<style lang="scss" scoped>
.project.angular {
  border-left: 4px solid #3cd1c2;
}
.project.vue {
  border-left: 4px solid orange;
}
.project.ionic {
  border-left: 4px solid tomato;
}
.project.flutter {
  border-left: 4px solid green;
}
.project.c-sharp {
  border-left: 4px solid blue;
}
.project.java {
  border-left: 4px solid gray;
}
.project.react {
  border-left: 4px solid greenyellow;
}

.vchip.angular {
  background: #3cd1c2;
}
.vchip.vue {
  background: orange;
}
.vchip.ionic {
  background: tomato;
}
.vchip.flutter {
  background: green;
}
.vchip.c-sharp {
  background: blue;
}
.vchip.java {
  background: gray;
}
.vchip.react {
  background: greenyellow;
}
</style>
