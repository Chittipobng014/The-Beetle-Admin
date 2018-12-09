<template>
  <div class="menu center" style="padding-top: 7%">
    <div>
      <v-btn v-on:click="nextTolist" class="menu-btn">Add more box</v-btn>
    </div>
    <div>
      <v-btn v-on:click="nextToManage" class="menu-btn">Manage</v-btn>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "mainMenu",
  methods: {
    ...mapActions(["setMenu"]),
    nextTolist: function() {
      this.setMenu('addnew')
    },
    nextToManage: function() {
      this.setMenu('manage')
    }
  },
  beforeMount() {}
};
</script>

<style scoped>
.menu {
  height: 100vh;
  background-color: rgb(225, 225, 231)
}
.center {
  text-align: center;
}

#menu {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.menu-btn {
  width: 35vw;
  height: 13vh;
  background-color: #3b5998;
  margin: 8% 0% 8% 0%;
  font-size: 200%;
  color: #ffffff;
}

.application .theme--light.v-btn:not(.v-btn--icon):not(.v-btn--flat),
.theme--light .v-btn:not(.v-btn--icon):not(.v-btn--flat) {
  background-color: #3b5998;
}
</style>
