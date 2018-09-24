<template>
  <router-view></router-view>
</template>

<script>
export default {
  name: "app",
  async beforeMount() {
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ons-splitter-side[side="left"][animation="overlay"] {
  border-right: 1px solid #bbb;
}
</style>