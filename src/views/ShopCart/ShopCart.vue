<template>
  <div id="cart">
    <!-- 导航 -->
    <nav-bar class="nav">
      <div slot="center">购物车({{ length }})</div>
    </nav-bar>

    <!-- 商品栏 -->
    <scroll class="content" :probeType="2" :pullingUpLoad="true">
      <cart-list></cart-list>
    </scroll>

    <!-- 底部选择按钮 -->
    <check-bottom class="check-bottom" />
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/navbar";
import Scroll from "@/components/common/scroll/betterScroll";

import { mapGetters } from "vuex";

import CartList from "./childComps/cartList";
import CheckBottom from "./childComps/checkBottom";

export default {
  name: "ShopCart",
  data() {
    return {};
  },
  components: {
    CartList,
    NavBar,
    Scroll,
    CheckBottom,
  },
  computed: {
    ...mapGetters({
      length: "cartListLength",
    }),
  },
};
</script>

<style scoped>
#cart {
  position: relative;
  height: 100vh;
}

.content {
  position: absolute;
  top: 44px;
  bottom: calc(60px + 30px);
  overflow: hidden;
  width: 100%;
}

.nav {
  background-color: var(--color-tint);
  color: #fff;
}

.check-bottom {
  position: absolute;
  width: 100%;
  height: 30px;
  bottom: 60px;
}
</style>
