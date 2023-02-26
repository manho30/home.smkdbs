<template>
  <footer class="p-4 bg-white rounded-lg shadow md:px-6 md:py-8">
    <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
      <official/>
    </div>
    <hr class="my-6 border-gray-200 sm:mx-auto lg:my-8" />
    <span class="block text-gray-500 text-base md:text-base lg:text-base xl:text-base 2xl:text-base">
      © {{year_now}} <a href="/it" class="hover:underline"> Department of Information Technology, SMKDBS</a>.
      All Rights Reserved.
    </span>
    <span class="block text-gray-500 text-sm md:text-base lg:text-base xl:text-base 2xl:text-base">
      Designed and developed by <a href="https://manho30.me" class="hover:underline">Man Ho</a>
    </span>
  </footer>
</template>
<script>
import Official from "@/components/official";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'footer',
  components: {Official},
  data() {
    return {
      year_now: 0
    };
  },
  mounted() {
    this.year_now = new Date().getFullYear();
  }
};
</script>