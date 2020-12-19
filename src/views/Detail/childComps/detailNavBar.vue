<template>
  <div>
    <nav-bar class="detail-nav-bar">
      <div slot="left" class="back-img" @click="backPage">
        <img src="@/assets/img/common/back.svg" alt="" />
      </div>
      <div slot="center" class="nav-bar-title">
        <div
          v-for="(item, index) in navBarTitle"
          :key="index"
          class="title-item"
          @click="titleClick(index)"
          :class="{ active: index === showIndex }"
        >
          <p>{{ item }}</p>
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/navbar";

export default {
  name: "DetailNavBar",
  props: {
    navBarTitle: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      showIndex: 0,
    };
  },
  components: {
    NavBar,
  },
  methods: {
    backPage() {
      this.$router.back();
    },
    titleClick(index) {
      this.showIndex = index;

      this.$emit("titleLink", index);
    },
  },
};
</script>

<style scoped>
.detail-nav-bar {
  background-color: #fff;
  height: 44px;
}

.back-img {
  margin-top: 6px;
  /* height: 10px;
  width: 10px; */
}

.nav-bar-title {
  display: flex;
  justify-content: space-between;
}

.nav-bar-title .title-item {
  flex: 1;
  line-height: 44px;
}

.active {
  color: var(--color-high-text);
}
</style>
