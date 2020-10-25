<template>
  <v-ons-toolbar>
    <div class="center">{{ title }}</div>
    <div class="right">
      <v-ons-toolbar-button
        icon="ion-navicon, material: md-menu"
      ></v-ons-toolbar-button>
    </div>
  </v-ons-toolbar>
</template>
<script>
export default {
  name: "Titlebar",
  data() {
    return {
      title: "網上漂書",
    };
  },
};
</script>
<style scoped>
</style>