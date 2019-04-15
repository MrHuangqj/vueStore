<template>
  <div id="app">
      <router-view />
    <m-tabbar v-show=showBar></m-tabbar>
  </div>
</template>

<script>
import MTabbar from "com/m-tabbar/m-tabbar";
import Store from "@/store/index";
export default {
  name: "App",
  components: {
    MTabbar
  },
  created() {
    console.log(this.showBar);
  },
  computed: {
    showBar() {
      return Store.state.showBar;
    }
  }
  // activated() {
  //   console.log(Store.state.showBar);
  //   this.showBar = Store.state.showBar;
  // }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
</style>
