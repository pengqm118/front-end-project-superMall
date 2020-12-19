<template>
  <div class="toast" v-if="isShow">
    <div>{{ message }}</div>
  </div>
</template>

<script>
export default {
  name: "Toast",
  data() {
    return {
      message: "坚定、执着、乐观",
      isShow: false,
    };
  },
  components: {},
  methods: {
    show(message, delay = 2000) {
      this.message = message;
      this.isShow = true;

      setTimeout(() => {
        this.message = "";
        this.isShow = false;
      }, delay);
    },
  },
};
</script>

<style scoped>
.toast {
  position: fixed;
  top: 50%;
  left: 50%;
  padding: 4px;
  border-radius: 5px;
  font-weight: bolder;
  color: #fff;
  z-index: 999;
  transform: translate(-50%, -50%);
  background-color: rgba(73, 71, 71, 0.8);
}
</style>
