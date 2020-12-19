<template>
  <div v-if="Object.keys(detailGoodsMsg).length !== 0" class="detail-goods">
    <div class="goods-title">{{ detailGoodsMsg.title }}</div>
    <div class="goods-price">
      <div class="price">{{ detailGoodsMsg.price }}</div>
      <div class="oldPrice">{{ detailGoodsMsg.oldPrice }}</div>
      <div v-if="detailGoodsMsg.discountDesc" class="priceDesc">
        {{ detailGoodsMsg.discountDesc }}
      </div>
    </div>
    <div class="other-info">
      <div>{{ detailGoodsMsg.columns[0] }}</div>
      <div>{{ detailGoodsMsg.columns[1] }}</div>
      <div>
        {{ detailGoodsMsg.services[detailGoodsMsg.services.length - 1].name }}
      </div>
    </div>
    <div class="service">
      <div
        v-for="index in detailGoodsMsg.services.length - 1"
        :key="index"
        class="service-item"
      >
        <img :src="detailGoodsMsg.services[index - 1].icon" alt="" />
        {{ detailGoodsMsg.services[index - 1].name }}
      </div>
    </div>
    <div></div>
  </div>
</template>

<script>
export default {
  name: "DetailGoodsDesc",
  props: {
    detailGoodsMsg: {
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
};
</script>

<style scoped>
.detail-goods {
  font-size: 13px;
}

.goods-title {
  margin-top: 10px;
  font-size: 16px;
  font-weight: bold;
}

.goods-price {
  display: flex;
  height: 40px;
  line-height: 40px;
  padding: 5px 0;
}

.goods-price .price {
  font-size: 18px;
  color: var(--color-high-text);
}

.goods-price .oldPrice {
  padding: 0 4px;
  text-decoration: line-through;
}

.goods-price .priceDesc {
  height: 20px;
  font-size: 12px;
  line-height: 20px;
  border-radius: 5px;
  background-color: var(--color-high-text);
}

.other-info {
  display: flex;
  justify-content: space-around;
  padding: 10px 4px;
}

.other-info div {
  flex: 1;
}

.service {
  display: flex;
  width: 100%;
  height: 50px;
  border-top: 4px solid #ededed;
  line-height: 50px;
  border-bottom: 4px solid #ededed;
}

.service-item {
  flex: 1;
}

.service-item img {
  width: 12px;
  height: 12px;
  vertical-align: center;
}
</style>
