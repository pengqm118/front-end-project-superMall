<template>
  <div class="tabbar">
    <slot> </slot>
  </div>
</template>

<script>
export default {
  name: "TabBar",
  data() {
    return {};
  },
  components: {},
};
</script>

<style scoped>
.tabbar {
  display: flex;
  position: fixed;
  bottom: 0px;
  left: 0px;
  right: 0px;
  height: 60px;
  justify-content: space-between;
  /* border-top: 4px solid #f0f0; */
  cursor: pointer;
}
</style>
