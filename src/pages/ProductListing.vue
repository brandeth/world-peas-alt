<template>
  <div
    class="relative bg-whitesmoke w-full overflow-hidden flex flex-col items-start justify-start text-left text-[1.13rem] text-gray font-body-default"
  >
    <div
      class="self-stretch flex flex-row py-[1.5rem] px-[6.5rem] items-center justify-between"
    >
      <BrandLogo />
      <div class="flex flex-row items-center justify-start gap-[3rem]">
        <div
          class="flex flex-row items-start justify-start gap-[2rem] lg:hidden"
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
            <div class="relative tracking-[-0.01em] leading-[2rem]">
              Who we are
            </div>
          </a>
          <a
            class="[text-decoration:none] h-[1.81rem] flex flex-col items-center justify-start text-[inherit]"
          >
            <div class="relative tracking-[-0.01em] leading-[2rem]">
              My profile
            </div>
          </a>
        </div>
        <div
          class="rounded-341xl flex flex-row py-[0.5rem] px-[1.5rem] items-center justify-start gap-[0.5rem] border-[1px] border-solid border-gray"
        >
          <img
            class="relative w-[1.5rem] h-[1.5rem]"
            alt=""
            src="/basket.svg"
          />
          <div class="relative tracking-[-0.01em] leading-[2rem]">Basket</div>
          <div class="relative tracking-[-0.01em] leading-[2rem] hidden">
            //
          </div>
          <div class="hidden flex-row items-start justify-start">
            <div class="relative tracking-[-0.01em] leading-[2rem]">$</div>
            <div class="relative tracking-[-0.01em] leading-[2rem]">0</div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="self-stretch flex flex-col py-[2rem] px-[6.5rem] items-start justify-start"
    >
      <div class="flex flex-row items-start justify-start gap-[0.25rem]">
        <div class="relative tracking-[-0.01em] leading-[2rem] font-medium">
          ←
        </div>
        <div class="relative tracking-[-0.01em] leading-[2rem] font-medium">
          All products
        </div>
      </div>
    </div>
    <div
      class="self-stretch flex flex-row py-[3rem] px-[6.5rem] items-start justify-start gap-[6.5rem]"
    >
      <WPAside />
      <div class="flex-1 flex flex-col items-start justify-start">
        <div
          class="self-stretch flex flex-row items-start justify-start gap-[3rem] md:flex-col"
        >
          <WPProductCard /><ProductDetails />
        </div>
      </div>
    </div>
    <Signup /><WPFooter />
  </div>
</template>
<script lang="ts">
  import { defineComponent, ref } from "vue";
  import BrandLogo from "../components/BrandLogo.vue";
  import WPAside from "../components/WPAside.vue";
  import WPProductCard from "../components/WPProductCard.vue";
  import ProductDetails from "../components/ProductDetails.vue";
  import Signup from "../components/Signup.vue";
  import WPFooter from "../components/WPFooter.vue";

  export default defineComponent({
    name: "ProductListing",
    components: {
      BrandLogo,
      WPAside,
      WPProductCard,
      ProductDetails,
      Signup,
      WPFooter,
    },
  });
</script>
