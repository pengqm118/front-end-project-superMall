<template>
  <div id="recommend-item">
    <a :href="goodsItem.link">
      <img
        v-lazy="showImg"
        alt=""
        @load="imgLoad"
        @click.prevent="goodsItemClick(goodsItem.iid)"
      />
    </a>
    <div class="goods-info">
      <p>{{ goodsItem.title }}</p>
      <span class="price">{{ goodsItem.price }}</span>
      <span class="star">{{ goodsItem.cfav }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecommendItem",
  props: {
    goodsItem: Object,
    default() {
      return {};
    },
  },
  data() {
    return {};
  },
  methods: {
    //图片加载用于better-scroll的refresh
    imgLoad() {
      this.$bus.$emit("imgLoadDone");
    },
    //路由跳转到详情页
    goodsItemClick(para) {
      this.$router.push("/detail/" + para);
      // console.log(this.goodsItem);
    },
  },
  computed: {
    showImg() {
      return this.goodsItem.image || this.goodsItem.showLarge.img;
    },
  },
  components: {},
};
</script>

<style scoped>
#recommend-item {
  position: relative;
  padding-bottom: 40px;
  width: 48%;
}

#recommend-item:hover {
  cursor: pointer;
}

#recommend-item img {
  width: 100%;
  border-radius: 5%;
}

.goods-info {
  font-size: 0.8rem;
  position: absolute;
  bottom: 7px;
  left: 0;
  right: 0;
  /* margin-top: 5px; */
  text-align: center;
}

.goods-info p {
  padding-top: 10px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.goods-info .price {
  color: var(--color-high-text);
  margin-right: 20px;
}

.goods-info .star {
  position: relative;
}

.goods-info .star::before {
  content: "";
  position: absolute;
  /* bottom: 0; */
  left: -17px;
  bottom: 1px;
  width: 14px;
  height: 14px;
  background: url("../../.././assets/img/common/collect.svg") 0 0/14px 14px;
}
</style>
