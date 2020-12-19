<template>
  <div>
    <swiper>
      <swiper-item v-for="(item, key) in HomeBanners" :key="key">
        <a :href="item.link">
          <img :src="item.image" alt="" @load="swiperImgLoad" />
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from "@/components/common/swiper/index";

export default {
  name: "HomeBanner",
  props: {
    HomeBanners: {
      type: Array,
      default: [],
    },
  },
  data() {
    return {
      loadStatus: false,
    };
  },
  methods: {
    swiperImgLoad() {
      if (!this.loadStatus) {
        this.$emit("swiperImgLoad");
        this.loadStatus = true;
      }
    },
  },
  components: {
    Swiper,
    SwiperItem,
  },
};
</script>

<style scoped>
</style>
