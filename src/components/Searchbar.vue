<template>
  <div>
    <p>
      <v-ons-button modifier="quiet" style="margin: 6px 0">
        <img src="../assets/barcode.svg" />
      </v-ons-button>
      <v-ons-search-input
        placeholder="Search something"
        v-model="query"
      ></v-ons-search-input>
    </p>
    <p>Query: {{ query }}</p>
  </div>
</template>
<script>
export default {
  name: "SearchBar",
  data() {
    return {
      query: "",
    };
  },
};
</script>
<style scoped>
</style>