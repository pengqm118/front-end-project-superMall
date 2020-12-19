<template>
  <div class="cart_list_item">
    <check-button
      class="check-button"
      @click.native="checkGoods"
      :isCheck="itemInfo.checked"
    />
    <div class="item_img">
      <img :src="itemInfo.img" alt="" />
    </div>
    <div class="item_info">
      <p class="item_title">{{ itemInfo.title }}</p>
      <p class="item_desc">{{ itemInfo.desc }}</p>
      <span class="item_price">￥{{ itemInfo.price }}</span>
      <span class="item_count">
        <goods-add-number :cartItem="itemInfo" />
      </span>
    </div>
  </div>
  <!-- <li>{{ itemInfo }}</li> -->
</template>

<script>
import CheckButton from "@/components/content/checkButton/checkButton";

import GoodsAddNumber from "@/components/content/goodsAddNumber/goodsAddNumber";

export default {
  name: "CartListItem",
  props: {
    itemInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {};
  },
  components: {
    CheckButton,
    GoodsAddNumber,
  },
  methods: {
    checkGoods() {
      // this.itemInfo.checked = !this.itemInfo.checked;
      this.$store.dispatch("singleGoodsStatus", this.itemInfo);
    },
  },
};
</script>

<style scoped>
.cart_list_item {
  width: 100%;
  height: 5.5rem;
  border-bottom: 0.04rem solid rgba(128, 128, 128, 0.4);
  display: flex;
  padding: 0.4rem;
  padding-left: 0rem;
}

.check-button {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 7px;
}

.item_img {
  width: 3.5rem;
  height: 100%;
}
.item_img img {
  width: 100%;
  height: 100%;
  border-radius: 0.4rem;
}

.item_info {
  flex: 1;
  position: relative;
  width: calc(100% - 3.5rem - 1.2rem - 0.4rem);
  margin-left: 0.4rem;
}
.item_info p {
  display: inline-block;
  width: 100%;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.item_title {
  font-size: 0.75rem;
  padding-bottom: 0.5rem;
}
.item_desc {
  font-size: 0.6rem;
  color: gray;
}
.item_price {
  position: absolute;
  left: 0;
  bottom: 0.4rem;
  font-size: 0.75rem;
  color: orangered;
}
.item_count {
  position: absolute;
  right: 0.4rem;
  bottom: 0.4rem;
  font-size: 0.75rem;
}
</style>
