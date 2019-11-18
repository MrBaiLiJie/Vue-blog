<template>
  <div id="app">
    <div class="container" v-if="$route.meta.keepAlive">
      <Nav/>
      <router-view></router-view>
    </div>
     <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>
import HelloBlog from "./components/HelloBlog";
import Nav from "./components/nav.vue";
export default {
  name: "App",
  data() {
    return {
      
    };
  },
  components: {
    HelloBlog:HelloBlog,
    Nav:Nav
  },

};
</script>

<style>
</style>
