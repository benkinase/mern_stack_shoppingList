<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <table class="table table-striped">
          <thead class="thead-dark">
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Important</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in allItems" :key="item._id">
              <td>{{ item._id }}</td>
              <td>{{ item.name }}</td>
              <td>{{ item.isImportant }}</td>
              <td>
                <router-link
                  :to="{ name: 'edit', params: { id: item._id } }"
                  class="btn btn-success"
                  >Edit</router-link
                >
                <button
                  @click="deleteItem(item._id)"
                  class="btn btn-danger ml-1"
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Items",
  methods: {
    ...mapActions(["fetchItems", "deleteItem"]),
  },
  computed: mapGetters(["allItems"]),
  created() {
    this.fetchItems();
  },
};
</script>

<style></style>
