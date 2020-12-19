<template>
  <div class="shop">
    <div class="shop-logo">
      <img :src="detailShopMsg.shopLogo" alt="" />
      <p class="shop-name">{{ detailShopMsg.name }}</p>
    </div>
    <div class="shop-comments">
      <div class="shop-sell">
        <div class="shop-sell-left">
          <p>{{ detailShopMsg.cSells | fixedSumSellNum }}</p>
          <p>总销量</p>
        </div>
        <div>
          <p>{{ detailShopMsg.cGoods }}</p>
          <p>全部宝贝</p>
        </div>
      </div>
      <div class="shop-score">
        <ul class="shop-score-item">
          <li v-for="(item, index) in detailShopMsg.score" :key="index">
            <span>{{ item.name }}</span
            >&ensp;
            <span
              class="score"
              :class="[item.isBetter ? 'active' : 'deactive']"
              >{{ item.score }}</span
            >&ensp;
            <span :class="[item.isBetter ? 'active_bg' : 'deactive_bg']">{{
              item.isBetter ? "高" : "低"
            }}</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="enter-shop">
      <p>进店逛逛</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailShopDesc",
  props: {
    detailShopMsg: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {};
  },
  components: {},
  filters: {
    fixedSumSellNum(item) {
      if (item < 10000) {
        return item;
      }
      return (item / 10000).toFixed(1) + "万";
    },
  },
};
</script>

<style scoped>
li {
  list-style: none;
}

.shop-logo {
  display: flex;
  height: 50px;
  width: 100vw;
  align-items: center;
}
.shop-logo img {
  width: 40px;
  height: 40px;
  margin-left: 15px;
  border-radius: 50%;
  border: 1px solid rgb(187, 183, 183);
  vertical-align: center;
}

.shop-logo .shop-name {
  margin-left: 10px;
}

.shop-comments {
  width: 100vw;
  font-size: 14px;
  display: flex;
}

.shop-comments .shop-sell {
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  flex: 1;
  border-right: 1px solid rgb(0, 0, 0, 0.4);
}

.shop-comments .shop-score {
  flex: 1;
}

.shop-comments .shop-score .shop-score-item {
  padding-left: 30px;
}

.shop-comments .shop-score .score {
  display: inline-block;
  width: 30px;
  margin: 1px 0;
}

.active {
  color: var(--color-high-text);
}

.deactive {
  color: green;
}

.active_bg {
  color: white;
  background-color: rgb(240, 68, 68);
}

.deactive_bg {
  color: white;
  background-color: rgba(0, 128, 0, 0.8);
}

.enter-shop {
  width: 100px;
  height: 30px;
  line-height: 30px;
  font-size: 16px;
  margin: 10px auto;
  text-align: center;
  background-color: #f2f2f2;
  border-radius: 10px;
}
</style>
