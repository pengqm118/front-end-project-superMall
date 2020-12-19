<template>
  <div>
    <p>我是分类组件内容</p>
    <toast />
  </div>
</template>

<script>
import Toast from "@/components/common/toast/toast";

export default {
  name: "Sort",
  data() {
    return {};
  },
  components: {
    Toast,
  },
};
</script>

<style scoped>
</style>
