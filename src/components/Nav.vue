<template>
  <b-navbar fixed="top" type="dark" variant="black">
    <b-navbar-nav>
      <b-nav-item>
        <router-link to="/">Home</router-link>
      </b-nav-item>
            <b-nav-item>
        <router-link to="/api">Episodes</router-link>
      </b-nav-item>
      <b-nav-item>
        <router-link to="/about-us">About-us</router-link>
      </b-nav-item>
      <b-nav-item>
        <router-link to="/contact">Contact</router-link>
      </b-nav-item>
      
      <!-- Navbar dropdowns -->
<!--      <b-nav-item-dropdown text="Lang" right>-->
<!--        <b-dropdown-item href="#">EN</b-dropdown-item>-->
<!--        <b-dropdown-item href="#">ES</b-dropdown-item>-->
<!--        <b-dropdown-item href="#">RU</b-dropdown-item>-->
<!--        <b-dropdown-item href="#">FA</b-dropdown-item>-->
<!--      </b-nav-item-dropdown>-->

<!--      <b-nav-item-dropdown text="User" right>-->
<!--        <b-dropdown-item href="#">Account</b-dropdown-item>-->
<!--        <b-dropdown-item href="#">Settings</b-dropdown-item>-->
<!--      </b-nav-item-dropdown>-->
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
export default {
  name: "Nav",
};
</script>

<style scoped>
</style>