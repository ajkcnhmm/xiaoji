<template>
  <div id="app">
    <!-- <Login></Login> -->
    <!-- <Order></Order> -->
    <router-view></router-view>
  </div>
</template>

<script>
// import Login from './pages/Login'
// import Order from "./pages/Order";

export default {
  components: {
    // Login
    // Order
  }
};
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
}
#app{
  height: 100%;
}
ui,li,ol{
  list-style: none;
}
</style>
