<template>
  <div
    class="self-stretch flex flex-row flex-wrap py-[2rem] px-[6.5rem] items-start justify-between text-left text-[2.5rem] text-gray font-title-default"
  >
    <div class="flex flex-col items-start justify-start">
      <i class="relative tracking-[-0.02em] leading-[3rem] font-light"
        >Farm Fresh</i
      >
      <div class="relative tracking-[-0.02em] leading-[3rem] font-light">
        Email Newsletter
      </div>
    </div>
    <SignupForm1 />
  </div>
</template>
<script lang="ts">
  import { defineComponent, ref } from "vue";
  import SignupForm1 from "./SignupForm1.vue";

  export default defineComponent({
    name: "Signup",
    components: { SignupForm1 },
  });
</script>
