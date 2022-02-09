import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    jobs: [],
  },
  mutations: {
    GET_ALL_JOBS(state, data) {
      state.jobs = data;
    },
  },
  actions: {
    async getAllJobs({ commit }) {
      await axios.get("https://hire.camp/api/job/list").then((response) => {
        commit("GET_ALL_JOBS", response.data);
        return response;
      });
    },
  },
});
