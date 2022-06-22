import db from "@/fb";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    projects: [],
  },
  getters: {
    getProjects: (state) => {
      return state.projects;
    },
  },
  mutations: {
    getProjects: (state) => {
      let projects = [];

      db.collection("projects").onSnapshot((response) => {
        projects = [];

        const changes = response.docChanges();

        changes.forEach((change) => {
          if (change.type === "added") {
            projects.push({
              ...change.doc.data(),
              id: change.doc.id,
            });
          }
        });
        state.projects = projects;
      });
    },
  },
  actions: {
    getProjects: (context) => {
      context.commit("getProjects");
    },
  },
});
