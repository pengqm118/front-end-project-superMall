<template>
  <div id="home">
    <nav-bar class="nav-bar">
      <div slot="center">购物街</div>
    </nav-bar>
    <tab-control
      :title="['流行', '精品', '推荐']"
      @indexCommit="indexCommit"
      ref="tabControlCandidate"
      v-show="isTabControlFixed"
      class="fixed"
    />
    <better-scroll
      class="content"
      ref="scroll"
      :probeType="3"
      :pullingUpLoad="true"
      @contentScroll="contentScroll"
      @loadMore="loadMore"
    >
      <home-banner
        :HomeBanners="HomeBanners"
        @swiperImgLoad="swiperImgLoad"
      ></home-banner>
      <home-recommend :homeRecommends="HomeRecommends"></home-recommend>
      <feature-view />
      <tab-control
        :title="['流行', '精品', '推荐']"
        @indexCommit="indexCommit"
        ref="tabControl"
        v-show="!isTabControlFixed"
      />
      <recommend-list :recommendGoods="getHomeGoodsMsg" />
    </better-scroll>
    <back-top @click.native="backTop" v-show="isShow"></back-top>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/navbar";
import TabControl from "@/components/content/tabcontrol/TabControl";
import RecommendList from "@/components/content/recommendItem/RecommendList";
import BetterScroll from "@/components/common/scroll/betterScroll";

import HomeBanner from "./childComps/HomeBanner";
import HomeRecommend from "./childComps/HomeRecommend";
import FeatureView from "./childComps/FeatureView";

import { imgRefreshMixin, backTopMixin } from "@/common/mixin";
import { BACK_POSITION } from "@/common/const";

import { getHomeMultidata, getHomeGoodsData } from "@/network/home";

export default {
  name: "Home",
  data() {
    return {
      HomeBanners: [],
      HomeRecommends: [],
      goods: {
        pop: { list: [], page: 0 },
        new: { list: [], page: 0 },
        sell: { list: [], page: 0 },
      },
      showStatus: "pop",
      isShow: false,
      isTabControlFixed: false,
      tabControloffsetTop: 0, //轮播图加载完第一张图后便将其offsetTop值存储下来，不然fixed属性的top值会修改这个值
      saveY: 0, //保存离开时的位置
    };
  },
  mixins: [imgRefreshMixin, backTopMixin],
  components: {
    NavBar,
    HomeBanner,
    HomeRecommend,
    FeatureView,
    TabControl,
    RecommendList,
    BetterScroll,
  },
  methods: {
    /**
     * 事件请求
     */
    indexCommit(index) {
      switch (index) {
        case 0:
          this.showStatus = "pop";
          break;
        case 1:
          this.showStatus = "new";
          break;
        case 2:
          this.showStatus = "sell";
          break;
      }
      this.$refs.tabControlCandidate.currentIndex = index;
      this.$refs.tabControl.currentIndex = index;
    },

    contentScroll(pos) {
      //回到顶部backTop显示与隐藏
      this.isShow = -pos.y > BACK_POSITION;

      //根据滚动距离判断tabbar是否fixed
      this.isTabControlFixed = -pos.y >= this.tabControloffsetTop;
    },

    //上拉加载更多小功能
    loadMore() {
      this.getHomeGoodsData(this.showStatus);
    },

    // tab-control吸顶效果
    swiperImgLoad() {
      this.tabControloffsetTop = this.$refs.tabControl.$el.offsetTop; //$el获取元素
    },
    /**
     * 网络请求数据
     */
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        // console.log(res);
        this.HomeBanners = res.data.banner.list;
        this.HomeRecommends = res.data.recommend.list;
        // console.log(this.HomeBanners.list);
      });
    },
    getHomeGoodsData(type) {
      const page = this.goods[type].page + 1;
      getHomeGoodsData(type, page).then((res) => {
        // console.log(res.data);
        this.goods[type].list.push(...res.data.list);
        this.goods[page] += 1;
        // console.log(page);
        this.$refs.scroll.finishPullingUp();
      });
    },
  },
  computed: {
    getHomeGoodsMsg() {
      return this.goods[this.showStatus].list;
    },
  },
  created() {
    this.getHomeMultidata();

    this.getHomeGoodsData("pop");
    this.getHomeGoodsData("new");
    this.getHomeGoodsData("sell");
  },

  activated() {
    // console.log("Home actived");
    // console.log(this.saveY);
    this.$refs.scroll.scrollTo(0, this.saveY);
    this.$refs.scroll.refreshScrollHeight();
  },
  deactivated() {
    this.saveY = this.$refs.scroll.bscroll.y;
    // console.log(this.$refs.scroll.bscroll.y);

    //取消Home页面刷新
    this.$bus.$off("imgLoadDone", this.imgRefresh);
  },
};
</script>

<style scoped>
#home {
  padding-top: 44px;
  height: 100vh;
  position: relative;
}

.nav-bar {
  background-color: var(--color-tint);
}

.content {
  position: absolute;
  top: 44px;
  height: calc(100% - 94px);
  overflow: hidden;
}

.fixed {
  position: fixed;
  top: 44px;
  left: 0;
  right: 0;
  z-index: 9;
}
</style>
