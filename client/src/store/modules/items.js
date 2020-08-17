import axios from "axios";

const state = {
  items: [
    // { id: 1, title: "tomatos" },
    // { id: 2, title: "tomatos" },
    // { id: 3, title: "tomatos" },
  ],
};

const getters = {
  allItems: (state) => state.items,
};

const actions = {
  async fetchItems({ commit }) {
    const response = await axios.get("/api/items");

    console.log(response.data);
    commit("setitems", response.data);
  },
  //   //add
  async addItem({ commit }, name) {
    const response = await axios.post("/api/items/new", {
      name,
      isImportant: true,
    });
    commit("newitem", response.data);
    console.log(response.data);
  },
  //delete
  async deleteItem({ commit }, id) {
    await axios.delete(`/api/items/delete/${id}`);
    commit("removeitem", id);
  },

  // modify
  async modifyItem({ commit }, id) {
    //await axios.put(`/items/${id}`);
    commit("updateitem", id);
  },
};

const mutations = {
  setitems: (state, items) => (state.items = items),
  newitem: (state, item) => state.items.unshift(item),
  removeitem: (state, id) =>
    (state.items = state.items.filter((item) => item.id !== id)),
};
export default {
  state,
  getters,
  actions,
  mutations,
};
