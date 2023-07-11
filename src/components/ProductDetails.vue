<template>
  <div
    class="flex-1 flex flex-col items-start justify-start gap-[2rem] text-left text-[4rem] text-gray font-title-default md:flex-[unset] md:self-stretch"
  >
    <div
      class="self-stretch flex flex-col items-start justify-start gap-[1rem]"
    >
      <i
        class="self-stretch relative tracking-[-0.02em] leading-[5rem] font-light"
        >Watermelon</i
      >
      <div
        class="self-stretch relative text-[1.13rem] tracking-[-0.01em] leading-[2rem] font-body-default"
      >
        Our San Francisco-grown watermelons are a juicy delight for your taste
        buds. Grown in the heart of the city, these watermelons are bursting
        with flavor and have a crisp texture that is unmatched. Each watermelon
        is carefully hand-picked at the peak of ripeness to ensure maximum
        flavor and freshness. Whether you enjoy them as a refreshing snack on a
        hot day, in a delicious watermelon salad, or as a centerpiece for your
        next summer gathering, these watermelons are sure to impress. With their
        vibrant color and mouthwatering taste, our San Francisco watermelons are
        a must-try for anyone who loves high-quality, locally sourced produce.
      </div>
    </div>
    <div
      class="self-stretch flex flex-row flex-wrap items-center justify-start gap-[1rem] text-[1.13rem] font-body-default"
    >
      <div
        class="flex-1 flex flex-row py-[0rem] pr-[6.5rem] pl-[0rem] items-start justify-start gap-[1.5rem]"
      >
        <div class="flex flex-row items-start justify-start">
          <div class="relative tracking-[-0.01em] leading-[2rem]">$</div>
          <div class="relative tracking-[-0.01em] leading-[2rem] font-semibold">
            3.99
          </div>
          <div class="relative tracking-[-0.01em] leading-[2rem]">/kg</div>
        </div>
        <div
          class="relative box-border w-[0.06rem] h-[2.06rem] border-r-[1px] border-solid border-gray"
        />
        <div class="flex flex-row items-start justify-start gap-[0.5rem]">
          <div class="relative tracking-[-0.01em] leading-[2rem] font-semibold">
            4
          </div>
          <div class="relative tracking-[-0.01em] leading-[2rem]">
            available
          </div>
        </div>
      </div>
      <div
        class="rounded-341xl bg-cadetblue w-[17.06rem] flex flex-row py-[0.5rem] px-[1.5rem] box-border items-center justify-between"
      >
        <div class="relative tracking-[-0.01em] leading-[2rem]">
          Add to cart
        </div>
        <img class="relative w-[1.5rem] h-[1.5rem]" alt="" src="/basket.svg" />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent, ref } from "vue";

  export default defineComponent({
    name: "ProductDetails",
  });
</script>
