<template>
  <div class="mt-5"></div>
  <div id="content" class="ml-7 mr-7 bg-white">
    <Carouse/>
  </div>
  <div class="mt-10"></div>
  <div id="content" class="ml-7 mr-7 bg-white">
    <Event/>
  </div>
  <div class="mt-10"></div>
  <div id="content" class="ml-7 mr-7 bg-white">
    <Announcements/>
  </div>
  <div class="mt-10">
    <Footer/>
  </div>
</template>
<script>
import Announcements from "@/components/annoucements";
import Carouse from "@/components/carousel";
import Event from "@/components/event";
import Footer from "@/components/footer";
export default {
  components: {Announcements, Carouse, Footer, Event},
}
</script>
