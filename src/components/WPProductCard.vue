<template>
  <div
    class="relative bg-white w-[22.88rem] h-[31rem] overflow-hidden shrink-0 md:self-stretch md:w-auto"
  >
    <img
      class="absolute h-full w-full top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] max-w-full overflow-hidden max-h-full object-cover"
      alt=""
      src="/image@2x.png"
    />
    <div
      class="absolute top-[1rem] right-[-1rem] rounded-341xl bg-whitesmoke flex flex-row p-[0.5rem] items-center justify-center [transform:_rotate(180deg)] [transform-origin:0_0] border-[1px] border-solid border-gray"
    >
      <img class="relative w-[1rem] h-[1rem]" alt="" src="/favorite.svg" />
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent, ref } from "vue";

  export default defineComponent({
    name: "WPProductCard",
  });
</script>
