<script>
import Navbar from "@/components/Navbar/Navbar.vue";

export default {
  components: { Navbar }
}
</script>

<template>
  <navbar/>
  <div class="app">
    <router-view></router-view>
  </div>
</template>