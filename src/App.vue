<template>
  <div id="app">
    <v-ons-page>
      <Titlebar />
      <Searchbar />
      <img src="./assets/logo.png" width="25%" />
      <HelloWorld msg="Hello Vue in CodeSandbox!" />
      <CreditSection />
    </v-ons-page>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import Titlebar from "./components/Titlebar.vue";
import Searchbar from "./components/Searchbar.vue";
import CreditSection from "./components/CreditSection.vue";
export default {
  name: "App",
  components: {
    HelloWorld,
    Titlebar,
    Searchbar,
    CreditSection,
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
