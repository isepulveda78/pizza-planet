<template>
  <div id="app">
    <appHeader></appHeader>
    <div class="container">
        <div class="mt-5">
          <router-view></router-view>
        </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
import { dbMenuRef, dbOrdersRef } from './firebase'
export default {
  name: 'app',
  components: {
    appHeader: Header,
    Footer,
  },
  created(){
      this.$store.dispatch('setMenuRef', dbMenuRef)
      this.$store.dispatch('setOrdersRef', dbOrdersRef)
  }
}
</script>
