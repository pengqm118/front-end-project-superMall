<template>
  <div id="App">
    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
import MainTabBar from "./components/content/MainTabBar";

export default {
  name: "App",
  data() {
    return {};
  },
  components: {
    MainTabBar,
  },
};
</script>

<style scoped>
@import "./assets/css/base.css";
</style>
