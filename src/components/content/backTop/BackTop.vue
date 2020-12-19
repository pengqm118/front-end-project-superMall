<template>
  <div class="back-top">
    <img src="@/assets/img/common/top.png" alt="" />
  </div>
</template>

<script>
export default {
  name: "BackTop",
  data() {
    return {};
  },
  components: {},
};
</script>

<style scoped>
.back-top {
  position: absolute;
  right: 10px;
  bottom: 70px;
}

.back-top img {
  width: 40px;
  height: 40px;
}
</style>
