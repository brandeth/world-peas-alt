<template>
  <div
    class="flex flex-row items-start justify-start gap-[3rem] text-left text-[1.13rem] text-gray font-body-default lg:w-auto lg:[align-self:unset] lg:flex-col md:self-stretch md:w-auto md:flex-col"
  >
    <LogoAndAddress /><FooterLinks
      shop="Shop"
      whoWeAre="Who we are"
      newsstand="Newsstand"
      myProfile="My profile"
    /><FooterLinks
      shop="My basket"
      whoWeAre="My preferences"
      newsstand="Contact us"
      myProfile="Our values"
    /><FooterLinks
      shop="Privacy policy"
      whoWeAre="Site map"
      newsstand="Terms and conditions"
      myProfile="Accessibility"
    />
  </div>
</template>
<script lang="ts">
  import { defineComponent, ref } from "vue";
  import LogoAndAddress from "./LogoAndAddress.vue";
  import FooterLinks from "./FooterLinks.vue";

  export default defineComponent({
    name: "FooterItems",
    components: { LogoAndAddress, FooterLinks },
  });
</script>
