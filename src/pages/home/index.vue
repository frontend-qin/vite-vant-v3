<template>
  <div>
    <div>home</div>
    <van-button type="warning" @click="jumpMine">跳转到mine页面</van-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  setup() {
    const router = useRouter();
    function jumpMine() {
      router.push({
        path: "/mine",
      });
    }
    return {
      jumpMine,
    };
  },
});
</script>

<style scoped>
</style>