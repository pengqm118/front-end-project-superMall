<template>
  <div id="detail">
    <detail-nav-bar
      :navBarTitle="navBarTitle"
      @titleLink="titleLink"
      ref="nav"
    />
    <scroll
      class="content"
      :pullingUpLoad="true"
      ref="scroll"
      @contentScroll="detailScroll"
    >
      <detail-banner
        :detailBannerImg="detailBannerImg"
        @bannerImgLoadDone="bannerImgLoadDone"
      />
      <detail-goods-desc :detailGoodsMsg="detailGoodsMsg" />
      <detail-shop-desc :detailShopMsg="detailShopMsg" />
      <detail-goods-info
        :detailGoodsInfo="detailGoodsInfo"
        @imgLoadDone="imgLoadDone"
      />
      <detail-param-info :paramInfo="detailGoodsParams" ref="param" />
      <detail-comment-info :comment="detailCommentsInfo" ref="comment" />
      <recommend-list :recommendGoods="detailRecommendInfo" ref="recommend" />
    </scroll>
    <detail-bottom-bar @addToCart="addToCart" />
    <back-top @click.native="backTop" v-show="isShow"></back-top>
  </div>
</template>

<script>
import DetailNavBar from "./childComps/detailNavBar";
import DetailBanner from "./childComps/detailBanner";
import DetailGoodsDesc from "./childComps/detailGoodsDesc";
import DetailShopDesc from "./childComps/detailShopDesc";
import DetailGoodsInfo from "./childComps/detailGoodsInfo";
import DetailParamInfo from "./childComps/detailParamInfo";
import DetailCommentInfo from "./childComps/detailCommentInfo";
import DetailBottomBar from "./childComps/detailBottomBar";

import scroll from "@/components/common/scroll/betterScroll";
import RecommendList from "@/components/content/recommendItem/RecommendList.vue";

import { imgRefreshMixin, backTopMixin } from "@/common/mixin";
import { debounce } from "@/common/utils";
import { BACK_POSITION } from "@/common/const";

import {
  getDetailData,
  getRecommendData,
  detailGoods,
  Shop,
  Param,
} from "@/network/detail";

export default {
  name: "Detail",
  data() {
    return {
      navBarTitle: ["商品", "参数", "评论", "推荐"],
      detailBannerImg: [],
      detailGoodsMsg: {},
      detailShopMsg: {},
      detailGoodsInfo: {},
      detailGoodsParams: {},
      detailCommentsInfo: {},
      detailRecommendInfo: [],
      getTitleTopY: [0],
      debounceTitlePos: null,
      currentIndex: 0,
    };
  },
  mixins: [imgRefreshMixin, backTopMixin],
  components: {
    DetailNavBar,
    DetailBanner,
    DetailGoodsDesc,
    DetailShopDesc,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    DetailBottomBar,
    scroll,
    RecommendList,
  },
  methods: {
    //轮播图加载第一张后刷新高度
    bannerImgLoadDone() {
      this.$refs.scroll.refreshScrollHeight();
    },

    //商品详细图加载后刷新高度
    imgLoadDone() {
      //第一种
      // this.$refs.scroll.refreshScrollHeight();

      //第二种
      this.refresh();

      this.debounceTitlePos();
    },

    //点击标题到达对应的位置
    titleLink(index) {
      this.$refs.scroll.scrollTo(0, -this.getTitleTopY[index]);
      // console.log(this.getTitleTopY);
    },

    detailScroll(pos) {
      //1.监听滚动位置显示对应标题
      let length = this.getTitleTopY.length;
      // let currentIndex = 0;
      for (let i = 0; i < length - 1; i++) {
        if (
          this.currentIndex !== i &&
          -pos.y >= this.getTitleTopY[i] &&
          -pos.y < this.getTitleTopY[i + 1]
        ) {
          this.$refs.nav.showIndex = i;
          this.currentIndex = i;
          console.log(i);
        }
      }

      // 2.监听滚动位置判断是否显示backTop图标
      this.isShow = -pos.y > BACK_POSITION;
    },

    //  添加物品到Vuex
    addToCart() {
      const goods = {};
      goods.img = this.detailBannerImg[0];
      goods.title = this.detailGoodsMsg.title;
      goods.price = this.detailGoodsMsg.lowNowPrice;
      goods.desc = this.detailGoodsInfo.desc;
      goods.id = this.$route.params.id;
      this.$store
        .dispatch("addToCart", goods)
        .then((res) => this.$toast.show(res));
    },
  },
  created() {
    getDetailData(this.$route.params.id).then((res) => {
      // console.log(res);
      const goodsData = res.result;

      //轮播图信息
      this.detailBannerImg = goodsData.itemInfo.topImages;

      //2.物品详细信息
      this.detailGoodsMsg = new detailGoods(
        goodsData.itemInfo,
        goodsData.columns,
        goodsData.shopInfo
      );

      //店铺详细信息
      this.detailShopMsg = new Shop(goodsData.shopInfo);

      //评论信息
      this.detailGoodsInfo = goodsData.detailInfo;

      //参数信息
      this.detailGoodsParams = new Param(
        goodsData.itemParams.info,
        goodsData.itemParams.rule
      );

      //评论信息
      if (goodsData.rate.cRate != 0) {
        this.detailCommentsInfo = goodsData.rate.list[0];
      }
    });

    // 3.获取推荐数据
    getRecommendData().then((res) => {
      // console.log(res);
      this.detailRecommendInfo = res.data.list;
    });

    //封装记录标题坐标的debounce函数
    this.debounceTitlePos = debounce(() => {
      this.getTitleTopY = [0];

      this.getTitleTopY.push(this.$refs.param.$el.offsetTop);
      this.getTitleTopY.push(this.$refs.comment.$el.offsetTop);
      this.getTitleTopY.push(this.$refs.recommend.$el.offsetTop);
      this.getTitleTopY.push(Number.MAX_VALUE);
    }, 300);
  },
  destroyed() {
    this.$bus.$off("imgLoadDone", this.imgRefresh);
  },
};
</script>

<style scoped>
#detail {
  position: relative;
  z-index: 9;
  background-color: #fff;
  height: 100vh;
}

.content {
  /* height: calc(100% - 44px -49px); */
  overflow: hidden;
  /* margin-top: 44px; */
  position: absolute;
  top: 0;
  bottom: 49px;
}
</style>
