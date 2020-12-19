<template>
  <div id="recommend-list">
    <recommend-item
      v-for="(item, index) in recommendGoods"
      :key="index"
      :goodsItem="item"
    >
    </recommend-item>
  </div>
</template>

<script>
import RecommendItem from "./RecommendItem";

export default {
  name: "RecommendList",
  props: {
    recommendGoods: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {};
  },
  components: {
    RecommendItem,
  },
};
</script>

<style scoped>
#recommend-list {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 4px;
}
</style>
