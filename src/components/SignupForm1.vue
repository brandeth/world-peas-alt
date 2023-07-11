<template>
  <div
    class="flex flex-col items-start justify-start gap-[3rem] max-w-[20.44rem] text-left text-[1.13rem] text-gray font-body-default"
  >
    <div class="self-stretch flex flex-col items-start justify-start">
      <div
        class="rounded-lg box-border w-[20rem] overflow-hidden flex flex-row py-[0.5rem] px-[1.5rem] items-center justify-start border-[1px] border-solid border-gray"
      >
        <div
          class="flex-1 relative tracking-[-0.01em] leading-[2rem] opacity-[0.3]"
        >
          Enter email address...
        </div>
      </div>
    </div>
    <div
      class="self-stretch flex flex-col items-start justify-start gap-[0.5rem]"
    >
      <i class="relative text-[1rem] tracking-[-0.01em] leading-[1.5rem]"
        >Email me about</i
      >
      <div class="flex flex-row items-center justify-start gap-[0.5rem]">
        <div
          class="relative rounded box-border w-[1.5rem] h-[1.5rem] border-[1px] border-solid border-gray"
        />
        <div class="relative tracking-[-0.01em] leading-[2rem]">
          Sales and Promotions
        </div>
      </div>
      <div class="flex flex-row items-center justify-start gap-[0.5rem]">
        <div
          class="relative rounded box-border w-[1.5rem] h-[1.5rem] border-[1px] border-solid border-gray"
        />
        <div class="relative tracking-[-0.01em] leading-[2rem]">Harvests</div>
      </div>
      <div class="flex flex-row items-center justify-start gap-[0.5rem]">
        <div
          class="relative rounded box-border w-[1.5rem] h-[1.5rem] border-[1px] border-solid border-gray"
        />
        <div class="relative tracking-[-0.01em] leading-[2rem]">
          Articles and Recipes
        </div>
      </div>
    </div>
    <div
      class="self-stretch rounded-341xl bg-gray flex flex-row py-[0.5rem] px-[1.5rem] items-center justify-between text-whitesmoke"
    >
      <div class="relative tracking-[-0.01em] leading-[2rem]">Sign me up</div>
      <img class="relative w-[1.5rem] h-[1.5rem]" alt="" src="/envelope.svg" />
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent, ref } from "vue";

  export default defineComponent({
    name: "SignupForm1",
  });
</script>
