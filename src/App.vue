<template>
  <div>
    <component :is="views"></component>
    <v-dialog
          v-model="dialog"
          persistent
          width="300"
          lazy
        >
          <v-card
            color="indigo"
            dark
          >
            <v-card-text>
              Loading...
              <v-progress-linear
                indeterminate
                color="white"
                class="mb-0"
              ></v-progress-linear>
            </v-card-text>
          </v-card>
        </v-dialog>
  </div>
</template>

<script>
import BoxList from "./components/BoxList";
import { mapActions, mapGetters } from "vuex";
import { setTimeout } from 'timers';

export default {
  name: "app",
  data() {
    return {
      views: null,
      dialog: false
    }
  },
  async beforeMount() {
    this.dialog = true
    this.fetchBoxes()
    setTimeout(() => {
      this.dialog = false;
      this.views = 'start'
    }, 3000);
    
  },
  components: {
    start :BoxList
  },
  methods: {
    ...mapActions([
      "setBoxs",
      "fetchBoxes"
    ])
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ons-splitter-side[side="left"][animation="overlay"] {
  border-right: 1px solid #bbb;
}
</style>