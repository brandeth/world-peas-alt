<template>
  <div
    class="flex flex-row items-start justify-start gap-[2rem] text-left text-[1.13rem] text-gray font-body-default lg:hidden"
  >
    <a
      class="[text-decoration:none] h-[1.81rem] flex flex-col items-center justify-start text-[inherit]"
    >
      <div class="relative tracking-[-0.01em] leading-[2rem]">Shop</div>
    </a>
    <div class="h-[1.81rem] flex flex-col items-center justify-start">
      <a
        class="[text-decoration:none] relative tracking-[-0.01em] leading-[2rem] text-[inherit]"
        >Newsstand</a
      >
    </div>
    <a
      class="[text-decoration:none] h-[1.81rem] flex flex-col items-center justify-start text-[inherit]"
    >
      <div class="relative tracking-[-0.01em] leading-[2rem]">Who we are</div>
    </a>
    <a
      class="[text-decoration:none] h-[1.81rem] flex flex-col items-center justify-start text-[inherit]"
    >
      <div class="relative tracking-[-0.01em] leading-[2rem]">My profile</div>
    </a>
  </div>
</template>
<script lang="ts">
  import { defineComponent, ref } from "vue";

  export default defineComponent({
    name: "MenuItems",
  });
</script>
