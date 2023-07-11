<template>
  <div
    class="w-[42.38rem] flex flex-col items-start justify-start gap-[1.5rem] text-left text-[1.13rem] text-gray font-body-default md:self-stretch md:w-auto"
  >
    <img class="relative w-[12rem] h-[2rem]" alt="" src="/brand1.svg" />
    <div class="relative tracking-[-0.01em] leading-[2rem]">
      <p class="m-0">5555 Produce Lane</p>
      <p class="m-0">Gardentown, CA 51512</p>
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent, ref } from "vue";

  export default defineComponent({
    name: "LogoAndAddress",
  });
</script>
