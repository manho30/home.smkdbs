<template>
  <footer class="p-4 bg-white rounded-lg shadow md:px-6 md:py-8">
    <div class="sm:flex sm:items-center sm:justify-between">
      <a href="/" class="flex items-center mb-4 sm:mb-0">
        <img src="../assets/kpm.png" class="h-8 mr-3" alt="KPM Logo" />
        <span class="self-center text-2xl font-extrabold whitespace-nowrap">SMK DATO BIJAYA SETIA</span>
      </a>
    </div>
    <hr class="my-6 border-gray-200 sm:mx-auto lg:my-8" />
    <span class="block text-gray-500 text-base md:text-base lg:text-base xl:text-base 2xl:text-base">
      © {{year_now}} <a href="/it" class="hover:underline"> Department of Information Technology, SMKDBS</a>.
      All Rights Reserved.
    </span>
    <span class="block text-gray-500 ext-base md:text-base lg:text-base xl:text-base 2xl:text-base">
      Designed and developed by <a href="https://manho30.me" class="hover:underline">Man Ho</a>
    </span>
  </footer>
</template>
<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'footer',
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