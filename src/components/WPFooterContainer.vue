<template>
  <div
    class="self-stretch flex flex-col pt-[3rem] px-[0rem] pb-[0rem] items-start justify-start text-left text-[1.13rem] text-gray font-body-default border-t-[1px] border-solid border-gray"
  >
    <FooterItems />
  </div>
</template>
<script lang="ts">
  import { defineComponent, ref } from "vue";
  import FooterItems from "./FooterItems.vue";

  export default defineComponent({
    name: "WPFooterContainer",
    components: { FooterItems },
  });
</script>
