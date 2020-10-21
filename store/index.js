import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    user: null
  },
  getters: {
    user(state) {
      return state.user;
    }
  },
  mutations: {
    SET_USER(state, data) {
      state.user = data;
    }
  },
  actions: {
    fetchUser({ commit }, user) {
      if (user) {
        commit("SET_USER", {
          id: user.uid,
          displayName: user.displayName,
          email: user.email
        });
      } else {
        commit("SET_USER", null);
      }
    }
  }
});
