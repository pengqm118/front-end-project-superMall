<template>
  <div>
    <button @click="addOne">+1</button>
    x{{ cartItem.num }}
    <button @click="decOne" :disabled="cartItem.num === 0">-1</button>
  </div>
</template>

<script>
export default {
  name: "GoodsAddNumber",
  props: {
    cartItem: {
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
  methods: {
    addOne() {
      this.$store.dispatch("addOneMore", this.cartItem);
    },
    decOne() {
      this.$store.dispatch("decOne", this.cartItem);
    },
  },
  //   watch: {
  //     cartItem() {
  //       if (cartItem.num <= 0) {
  //         this.$refs.btnDec.disabled = true;
  //       }
  //     },
  //   },
};
</script>

<style scoped>
</style>
