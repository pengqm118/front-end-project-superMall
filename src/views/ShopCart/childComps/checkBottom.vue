<template>
  <div class="bottom">
    <!-- 全选项 -->
    <div class="select_all" @click="selectAll">
      <div class="check_box" :class="{ check_img: isCheckAll }"></div>
      <p>全选</p>
    </div>

    <!-- 合计项 -->
    <div class="calculate">合计:Y{{ totalPay }}</div>
    <!-- 去结算 -->
    <div class="go_to_pay">去结算({{ goToPay }})</div>
  </div>
</template>

<script>
export default {
  name: "CheckBottom",
  data() {
    return {};
  },
  components: {},
  methods: {
    selectAll() {
      console.log(this.isCheckAll);
      if (this.isCheckAll) {
        // this.$store.state.cartList.forEach((item) => item.checked === false);
        this.$store.state.cartList.forEach((item) =>
          this.$store.dispatch("isAllSelected", { items: item, status: false })
        );
      } else {
        // this.$store.state.cartList.forEach((item) => item.checked === true);
        this.$store.state.cartList.forEach((item) =>
          this.$store.dispatch("isAllSelected", { items: item, status: true })
        );
      }
    },
  },
  computed: {
    goToPay() {
      return this.$store.state.cartList.filter((item) => item.checked === true)
        .length;
    },
    isCheckAll() {
      if (!this.$store.state.cartList.length) return false;
      return !this.$store.state.cartList.find((item) => item.checked === false);
    },
    totalPay() {
      return this.$store.state.cartList
        .filter((item) => item.checked)
        .reduce((pre, now) => {
          return pre + now.price * now.num;
        }, 0);
    },
  },
};
</script>

<style scoped>
.bottom {
  display: flex;
  align-items: center;
  font-size: 12px;
  background-color: #eee;
}

.select_all {
  display: flex;
  width: 80px;
  height: 100%;
  align-items: center;
}

.check_box {
  width: 15px;
  height: 15px;
  margin: 0 3px 0 7px;
  border-radius: 50%;
  border: 1px solid rgba(31, 30, 30, 0.7);
}

.check_img {
  width: 15px;
  height: 15px;
  border-style: none;
  background: url(~@/assets/img/cart/yes.svg) 0 0/100% no-repeat;
}

.calculate {
  flex: 1;
}

.go_to_pay {
  width: 70px;
  height: 100%;
  font-size: 14px;
  color: #fff;
  line-height: 30px;
  background-color: var(--color-tint);
}
</style>
