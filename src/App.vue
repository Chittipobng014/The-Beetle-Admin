<template>
  <v-app dark>
    <v-layout>
      <v-flex xs12>
        <div class="headbar">
          <v-layout>
            <v-flex xs2>
              <div class="center">
                <v-btn @click="setMenu('mainMenu')">Back</v-btn>
              </div>
            </v-flex>
            <v-flex xs8>
              <div class="center">
                <h1>The Beetle</h1>
              </div>
            </v-flex>
          </v-layout>
        </div>
        <div>
          <transition name="fade">
            <component style="max-height: 90vh; min-height: 90vh" class="" :is="menu"></component>
          </transition>
        </div>
      </v-flex>
    </v-layout>
    <loading-modal :show="loading"></loading-modal>
    <controller></controller>
  </v-app>
</template>

<script>
import BoxList from "./components/BoxList";
import Menu from "./components/Menu";
import loadingModal from "./components/UIComponents/loadingModal";
import Controller from "./components/Controller/Controller";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "app",
  props: {
    ready: Boolean
  },
  data() {
    return {};
  },
  components: {
    addnew: BoxList,
    manage: BoxList,
    mainMenu: Menu,
    loadingModal,
    Controller
  },
  methods: {
    ...mapActions([
      "setMenu",
      "addScannedBoxes",
      "showLoading",
      "hideLoading",
      "setBleState"
    ]),
    bleScan: function() {
      return new Promise((resolve, reject) => {
        var boxes = [];
        ble.startScan(
          [],
          device => {
            this.addScannedBoxes(device);
          },
          function(err) {
            console.log(err);
          }
        );
        // setTimeout(
        //   ble.stopScan,
        //   10000,
        //   async () => {
        //     let beetleBoxes = boxes.filter(e => {
        //       return e.name.startsWith("Beetle");
        //     });
        //     const add = await this.addScannedBoxes(beetleBoxes);
        //     this.setBleState(false);
        //     this.hideLoading();
        //     resolve(true);
        //   },
        //   function() {}
        // );
      });
    }
  },
  computed: {
    ...mapGetters(["loading", "menu", "unRegisteredBoxes"]),
    onReady: function() {
      return this.ready;
    }
  },
  watch: {
    onReady: async function(state) {
      console.log("​state", state);
      if (state == false) {
      } else if (state == true) {
        try {
          //this.showLoading();
          await this.bleScan();
        } catch (error) {
          console.log("​}catch -> error", error);
        }
      }
    }
  }
};
</script>

<style scoped>
.headbar {
  width: 100vw;
  height: 10vh;
  background-color: #3b5998;
  padding-top: 2vh;
}
.h-center {
  justify-content: center;
  align-items: center;
  display: flex;
}
.center {
  text-align: center;
}
</style>

