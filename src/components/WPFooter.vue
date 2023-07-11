<template>
  <div
    class="self-stretch flex flex-col pt-[0rem] px-[6.5rem] pb-[3rem] items-start justify-start text-left text-[1.13rem] text-gray font-body-default"
  >
    <WPFooterContainer />
  </div>
</template>
<script lang="ts">
  import { defineComponent, ref } from "vue";
  import WPFooterContainer from "./WPFooterContainer.vue";

  export default defineComponent({
    name: "WPFooter",
    components: { WPFooterContainer },
  });
</script>
