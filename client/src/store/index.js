import Vue from "vue";
import Vuex from "vuex";
import ItemModule from "./modules/items";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    ItemModule,
  },
});
