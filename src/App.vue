<template>
  <div>      
    <Navbar/>
    <div class="app">
      <router-view>

      </router-view>
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';

  export default {
    components: { Navbar }
}
</script>

<style >
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.app {
  padding: 10px;
}
</style>