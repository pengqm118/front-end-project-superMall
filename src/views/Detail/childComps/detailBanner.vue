<template>
  <swiper class="detail-swiper">
    <swiper-item
      v-for="(item, index) in detailBannerImg"
      :key="index"
      class="swiper-item"
    >
      <a :href="item">
        <img :src="item" alt="" @load="bannerImgLoad" />
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "@/components/common/swiper/index";

export default {
  name: "DetailBanner",
  props: {
    detailBannerImg: {
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
    Swiper,
    SwiperItem,
  },
  methods: {
    bannerImgLoad() {
      this.$emit("bannerImgLoadDone");
    },
  },
};
</script>

<style scoped>
.detail-swiper {
  /* position: relative; */
  /* top: 44px; */
  margin-top: 44px;
  height: 250px;
  overflow: hidden;
}
</style>
