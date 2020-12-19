<template>
  <div id="tabControl">
    <div class="tab-control">
      <span
        v-for="(item, index) in title"
        :key="index"
        class="tab-control-item"
        :class="{ active: currentIndex === index }"
        @click="activeIndex(index)"
      >
        <span>{{ item }}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props: {
    title: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  components: {},
  methods: {
    activeIndex(index) {
      this.currentIndex = index;

      // 传递索引到Home父组件
      this.$emit("indexCommit", this.currentIndex);
    },
  },
};
</script>

<style scoped>
.tab-control {
  display: flex;
  justify-content: space-between;
  height: 44px;
  line-height: 44px;
  font-size: 14px;
  background-color: #eee;
}
.tab-control-item {
  flex: 1;
  text-align: center;
}
.active {
  color: hotpink;
}
.active span {
  border-bottom: 2px solid hotpink;
  padding: 5px;
}
</style>
