<template>
  <div id="recommend">
    <div
      v-for="(item, index) in homeRecommends"
      :key="index"
      class="home-recommend"
    >
      <a :href="item.link">
        <img :src="item.image" alt="" />
      </a>
      <div>{{ item.title }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeRecommend",
  props: {
    homeRecommends: {
      type: Array,
      default: [],
    },
  },
  data() {
    return {};
  },
  components: {},
};
</script>

<style scoped>
#recommend {
  display: flex;
  justify-content: space-around;
  font-size: 14px;
  padding: 10px 0 5px;
  text-align: center;
  border-bottom: 10px solid #eee;
}

.home-recommend {
  flex: 1;
}

.home-recommend img {
  width: 65px;
}
</style>
