<template>
  <div id="app">
    <Nav/>
        <router-view></router-view>
    <Foot/>
  </div>
</template>

<script>

import Nav from "./components/Nav";
import Foot from "./components/Foot";



export default {
  name: 'App',
  components: {
    Foot,
    Nav,
  }
}
</script>

<style>

</style>
