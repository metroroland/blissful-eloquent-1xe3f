<template>
  <div id="app">
    <v-ons-page>
      <Titlebar />
      <Searchbar />
      <img src="require('!!raw-loader!./assets/logo.png')" width="25%" />
      <div style="width: 10vw">
        <span v-html="imgVueLogo" style="color: red !important"></span>
      </div>
      <img :src="imgVuelogo" width="25%" />
      <HelloWorld msg="Hello Vue in CodeSandbox!" />
      <CreditSection />
    </v-ons-page>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import Titlebar from "./components/Titlebar";
import Searchbar from "./components/Searchbar";
import CreditSection from "./components/CreditSection";
import imgVueLogo from "@/assets/barcode.svg";
export default {
  name: "App",
  components: {
    HelloWorld,
    Titlebar,
    Searchbar,
    CreditSection,
  },
  data: function () {
    return {
      imgVueLogo: imgVueLogo,
    };
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
