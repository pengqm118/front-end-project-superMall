<template>
  <div class="tabbar-item" @click="tabbarItemClick">
    <div v-if="!isActived"><slot name="tabbar-img-deactived"></slot></div>
    <div v-else><slot name="tabbar-img-actived"></slot></div>
    <div :style="textColor"><slot name="tabbar-item-text"></slot></div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    path: String,
    propColor: {
      type: String,
      default: "red",
    },
  },
  data() {
    return {};
  },
  components: {},
  methods: {
    tabbarItemClick() {
      this.$router.push(this.path);
    },
  },
  computed: {
    isActived() {
      return this.$route.path === this.path;
    },
    textColor() {
      return this.isActived ? { color: this.propColor } : {};
    },
  },
};
</script>

<style scoped>
.tabbar-item {
  flex: 1;
  text-align: center;
  background-color: #f6f6f6;
}

.tabbar-item img {
  height: 25px;
  width: 24px;
  margin-top: 4px;
  vertical-align: center;
}
</style>
