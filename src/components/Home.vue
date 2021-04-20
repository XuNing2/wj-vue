<template>
  <div>
    <nav-menu></nav-menu>
    <!-- router -view 将子路由的页面包含在此路由中 -->
    <router-view/>
  </div>
</template>

<script>
    import NavMenu from './common/NavMenu'
    export default {
    name: 'Home',
    components: {NavMenu}
  }
</script>

<style scoped>

</style>
