<template>
  <Header></Header>
  <router-view :key="$route.fullPath"></router-view>
  <Footer></Footer>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export default {
  components:{
    Header,
    Footer
  }
}
</script>
<style>

</style>
