<template>
  <div class="tab-control">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  data() {
    return {};
  },
  components: {},
};
</script>

<style scoped>
.tab-control {
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  line-height: 44px;
  text-align: center;
  /* background-color: rgb(68, 198, 202); */
  z-index: 9;
}

.left {
  width: 60px;
}

.center {
  flex: 1;
}

.right {
  width: 60px;
}
</style>
