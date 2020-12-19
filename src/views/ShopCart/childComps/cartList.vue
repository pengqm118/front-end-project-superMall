<template>
  <div class="cart-list">
    <cart-list-item
      v-for="(item, index) in $store.state.cartList"
      :key="index"
      :itemInfo="item"
    />
  </div>
</template>

<script>
import CartListItem from "./cartListItem";

export default {
  name: "CartList",
  data() {
    return {};
  },
  components: {
    CartListItem,
  },
};
</script>

<style scoped>
/* .cart-list {
  display: felx;
}
 */
</style>
