<template>
  <div id="app">
    <router-view />
    <m-tabbar></m-tabbar>
  </div>
</template>

<script>
import MTabbar from "com/m-tabbar/m-tabbar";
export default {
  name: "App",
  components: {
    MTabbar
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
