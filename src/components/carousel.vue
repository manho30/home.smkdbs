<template>
  <div class="flex justify-center bg-gray-100 bg-white">
    <div class="container bg-white sm:px-1 py-1 md:py-6 px-6 lg:py-15 px-15">
      <div class="relative">
        <div class="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
          <div
              v-for="(image, index) in images"
              :key="index"
              :class="{
          'relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none': index === currentIndex,
          'relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none': index !== currentIndex
        }">
            <img :src="image" class="block w-full" alt="slideshow image" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'carousel',
  data() {
    return {
      currentIndex: 0,
      images: []
    }
  },
  created() {
    const context = require.context('@/assets/slideshow', false, /\.(png|jpe?g|svg)$/)
    this.images = context.keys().map(context)
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length
    }, 3000)
  }
}
</script>
