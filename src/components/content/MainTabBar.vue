<template>
  <div>
    <tab-bar>
      <tab-bar-item path="/home">
        <img
          slot="tabbar-img-deactived"
          src="../../assets/img/tabbar/homepage.svg"
          alt=""
        />
        <img
          slot="tabbar-img-actived"
          src="../../assets/img/tabbar/homepage_actived.svg"
          alt=""
        />
        <div slot="tabbar-item-text">主页</div>
      </tab-bar-item>
      <tab-bar-item path="/sort">
        <img
          slot="tabbar-img-deactived"
          src="../../assets/img/tabbar/sort.svg"
          alt=""
        />
        <img
          slot="tabbar-img-actived"
          src="../../assets/img/tabbar/sort_actived.svg"
          alt=""
        />
        <div slot="tabbar-item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/shopCart">
        <img
          slot="tabbar-img-deactived"
          src="../../assets/img/tabbar/shopcart.svg"
          alt=""
        />
        <img
          slot="tabbar-img-actived"
          src="../../assets/img/tabbar/shopcart_actived.svg"
          alt=""
        />
        <div slot="tabbar-item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile">
        <img
          slot="tabbar-img-deactived"
          src="../../assets/img/tabbar/profile.svg"
          alt=""
        />
        <img
          slot="tabbar-img-actived"
          src="../../assets/img/tabbar/profile_actived.svg"
          alt=""
        />
        <div slot="tabbar-item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from "../common/tabbar/tabBar";
import TabBarItem from "../common/tabbar/tabBarItem";

export default {
  name: "MainTabBar",
  data() {
    return {};
  },
  components: {
    TabBar,
    TabBarItem,
  },
};
</script>

<style scoped>
</style>
