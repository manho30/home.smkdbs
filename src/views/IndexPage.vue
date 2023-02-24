<template>
  <div class="mt-5"></div>
  <div id="content" class="ml-5 mr-5 bg-white">
    <carouse/>
  </div>
  <div class="mt-10"></div>
  <div id="content" class="ml-5 mr-5 bg-white">
    <contact/>
  </div>
  <div class="mt-10"></div>
  <div id="content" class="ml-5 mr-5 bg-white">
    <annoucements/>
  </div>
</template>
<script>
import Annoucements from "@/components/annoucements";
import Carouse from "@/components/carousel";
import Contact from "@/components/contact";
export default {
  components: {Contact, Annoucements, Carouse},
}
</script>
