<template>
  <div class="home">
    <AddItem />
    <Items />
  </div>
</template>

<script>
// @ is an alias to /src

import Items from "@/components/Items.vue";
import AddItem from "@/components/AddItem.vue";

export default {
  name: "Home",

  components: {
    Items,
    AddItem,
  },
};
</script>
