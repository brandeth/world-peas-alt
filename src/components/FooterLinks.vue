<template>
  <div
    class="flex flex-col items-start justify-start gap-[1.5rem] text-left text-[1.13rem] text-gray font-body-default"
  >
    <div class="flex flex-col items-start justify-start gap-[0.38rem]">
      <div class="relative tracking-[-0.01em] leading-[2rem]">{{shop}}</div>
      <div
        class="self-stretch relative rounded-[50%] bg-world-peas-compost-base h-[0.31rem] hidden"
      />
    </div>
    <div class="flex flex-col items-start justify-start gap-[0.38rem]">
      <div class="relative tracking-[-0.01em] leading-[2rem]">{{whoWeAre}}</div>
      <div
        class="self-stretch relative rounded-[50%] bg-world-peas-compost-base h-[0.31rem] hidden"
      />
    </div>
    <div class="flex flex-col items-start justify-start gap-[0.38rem]">
      <div class="relative tracking-[-0.01em] leading-[2rem]">
        {{newsstand}}
      </div>
      <div
        class="self-stretch relative rounded-[50%] bg-world-peas-compost-base h-[0.31rem] hidden"
      />
    </div>
    <div class="flex flex-col items-start justify-start gap-[0.38rem]">
      <div class="relative tracking-[-0.01em] leading-[2rem]">
        {{myProfile}}
      </div>
      <div
        class="self-stretch relative rounded-[50%] bg-world-peas-compost-base h-[0.31rem] hidden"
      />
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent, ref } from "vue";

  export default defineComponent({
    name: "FooterLinks",
    props: {
      shop: { type: String },
      whoWeAre: { type: String },
      newsstand: { type: String },
      myProfile: { type: String },
    },
  });
</script>
