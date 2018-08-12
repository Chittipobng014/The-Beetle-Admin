<template>
  <router-view></router-view>
</template>

<script>
import Vtify from './components/Vtify'

export default {
  name: 'app',
  components: {
    Vtify
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ons-splitter-side[side=left][animation=overlay] {
  border-right: 1px solid #BBB;
}
</style>
