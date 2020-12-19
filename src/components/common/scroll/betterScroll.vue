<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BetterScroll from "better-scroll";

export default {
  name: "betterScroll",
  props: {
    probeType: {
      type: Number,
      default() {
        return 0;
      },
    },
    pullingUpLoad: {
      type: Boolean,
      default() {
        return false;
      },
    },
  },
  data() {
    return {
      bscroll: null,
    };
  },
  components: {},
  methods: {
    //回到顶部
    scrollTo(x, y, time = 300) {
      this.bscroll.scrollTo(x, y, time);
    },

    //刷新函数
    refreshScrollHeight() {
      this.bscroll.refresh();
    },

    //加载更多
    finishPullingUp() {
      this.bscroll.finishPullUp();
    },
  },
  mounted() {
    // console.log(this.$refs.wrapper);
    this.bscroll = new BetterScroll(this.$refs.wrapper, {
      click: true,
      probeType: this.probeType,
      pullUpLoad: this.pullingUpLoad,
    });

    // console.log(this.bscroll);

    //回到顶部小功能
    this.bscroll.on("scroll", (position) => {
      this.$emit("contentScroll", position);
      // console.log(position);
    });

    //上拉加载更多
    this.bscroll.on("pullingUp", () => {
      this.$emit("loadMore");
    });
  },
};
</script>

<style scoped>
</style>
