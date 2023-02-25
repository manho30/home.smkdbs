<template>
  <nav class="bg-white border-gray-200 px-4 mb-3 lg:px-6 py-2.5">
    <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
      <official/>
      <div class="hidden justify-center items-center w-full lg:flex lg:w-auto lg:order-1">
        <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
          <li>
            <a href="/" class="block py-2 pr-4 pl-3 text-gray-700 rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0" aria-current="page">Home</a>
          </li>
          <li>
            <a href="/content" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0">Content Manage</a>
          </li>
          <li>
            <a href="/analysis" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0">Analysis</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import Official from "@/components/official";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'header-container',
  components: {Official},
  data() {
    return {
      // eslint-disable-next-line vue/no-reserved-keys
      VUE_CURRENT_PAGE_NAME: "SMK DATO' BIJAYA SETIA",
    };
  },
}
</script>