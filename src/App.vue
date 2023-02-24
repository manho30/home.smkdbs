<template>
  <div id="app" class="bg-gray-200">
    <header-container></header-container>
    <router-view></router-view>
  </div>
</template>
<script>
import HeaderContainer from "@/components/header";
export default {
  components: {
    HeaderContainer,
  },
  name: 'app'
}
</script>