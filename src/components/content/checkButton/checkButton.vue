<template>
  <div class="checkImg">
    <!-- <img src="@/assets/img/cart/yes.svg" alt="" /> -->
    <div class="checkBox" :class="{ active: isCheck }"></div>
  </div>
</template>

<script>
export default {
  name: "CheckButton",
  props: {
    isCheck: Boolean,
    default() {
      return false;
    },
  },
  data() {
    return {};
  },
  components: {},
};
</script>

<style scoped>
/* .checkImg {
  width: 25px;
} */

.checkBox {
  display: flex;
  align-items: center;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: 1px solid rgba(109, 105, 105, 0.4);
}

/* .checkBox, */
.active {
  width: 10px;
  height: 10px;
  border-style: none; /*这个属性可以消除border属性*/
  background: rgba(255, 0, 0, 0.4) url(~@/assets/img/cart/yes.svg) 0 0/90%
    no-repeat;
}
</style>
