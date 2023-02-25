<template>
  <div class="grid grid-flow-col gap-2">
    <a href="/">
      <picture class="flex">
        <img src="../assets/kpm.png" alt="" width="48" height="48" loading="eager" class="w-full dark:saturate-[90%] rounded-full w-[48px]">
      </picture>
    </a>
    <div class="flex flex-col justify-center gap-1">
      <div class="grid grid-flow-col items-center justify-start gap-1 dark:text-white">
        <a href="/">
          <h1 class="text-lg text-black font-extrabold leading-5">
            SMK DATO BIJAYA SETIA
          </h1>
        </a>
        <tick/>
      </div>
      <a href="/" class="grid grid-flow-col items-center justify-start gap-0.5 font-medium text-gray-600">
        <verified/>
      </a>
    </div>
  </div>
</template>
<script>
import Tick from "@/components/icon/tick";
import Verified from "@/components/icon/verified";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Official',
  components: {
    Tick,
    Verified
  }
}
</script>