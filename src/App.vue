<script setup>

import Navbar  from './components/Navbar.vue';
import Footer  from './components/Footer.vue';
// import TasksPage from './pages/TasksPage.vue';


</script>

<template>
 <div>
  <Navbar/>
  <!-- <TasksPage/> -->
  <router-view/>
  <Footer/>
 </div>
</template>

<style scoped>

</style>
