<template lang="html">
  <section class="main-container">
    <navbar class='navbar'></navbar>
    <div class="">
      <sidebar class='sidebar'></sidebar>
      <div class="container">
        <app-main></app-main>
      </div>
    </div>
  </section>
</template>

<script>
import {Navbar,Sidebar,AppMain} from './component'
export default {
  components:{Navbar,Sidebar,AppMain}
}
</script>

<style lang="css">
</style>
