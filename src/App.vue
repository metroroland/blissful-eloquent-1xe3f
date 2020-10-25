<template>
  <div id="app">
    <v-ons-page>
      <Titlebar />
      <img alt="Vue logo" src="./assets/logo.png" width="25%" />
      <HelloWorld msg="Hello Vue in CodeSandbox!" />
    </v-ons-page>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import Titlebar from "./components/Titlebar.vue";
export default {
  name: "App",
  components: {
    HelloWorld,
    Titlebar,
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
