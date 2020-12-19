<template>
  <div>
    <div class="commends">
      <div class="goods-desc-before"></div>
      <div class="goods-desc">
        <p>{{ detailGoodsInfo.desc }}</p>
      </div>
      <div class="goods-desc-after"></div>
    </div>

    <div>
      <div v-for="(item, index1) in detailGoodsInfo.detailImage" :key="index1">
        <div>{{ item.key }}</div>
        <div v-for="(imgs, index2) in item.list" :key="index2">
          <img :src="imgs" alt="" @load="imgLoad(index2)" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailGoodsInfo",
  props: {
    detailGoodsInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      imgLength: Number,
    };
  },
  components: {},
  methods: {
    imgLoad(index) {
      //方法一:检测到最后一张图片加载完再发布事件
      // if (++index === this.imgLength) {
      //   this.$emit("imgLoadDone");
      // }

      //方法二:防抖函数
      this.$emit("imgLoadDone");
    },
  },
  watch: {
    detailGoodsInfo() {
      this.imgLength = this.detailGoodsInfo.detailImage[0].list.length;
    },
  },
};
</script>

<style scoped>
.commends {
  position: relative;
  margin-top: 20px;
}

.goods-desc-before {
  width: 100px;
  height: 1px;
  background-color: #333;
}

.goods-desc p {
  padding: 10px 10px;
}

.goods-desc-before::before {
  content: " ";
  position: absolute;
  top: -5px;
  display: block;
  width: 5px;
  height: 5px;
  background-color: black;
}

.goods-desc-after {
  width: 100px;
  height: 1px;
  position: absolute;
  bottom: 0;
  right: 0;
  background-color: #333;
}

.goods-desc-after::after {
  content: " ";
  position: absolute;
  right: 0;
  bottom: 0;
  display: block;
  width: 5px;
  height: 5px;
  background-color: black;
}

img {
  width: 100%;
}
</style>
