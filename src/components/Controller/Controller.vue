<template>
  <div></div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Controller",
  watch: {
    isBoxFetching: function(state) {
      if (state == false && this.bleScaning == false) {
        this.hideLoading();
      } else if (state == true) {
        this.showLoading();
      }
    },
    menu: function(menu) {
      console.log("​menu", menu);
      if (menu == "mainMenu") {
        this.bleScan();
        this.fetchBoxes();
      }
    },
    unRegisteredBoxes: function(boxes) {
      console.log(boxes);
    }
  },
  computed: { ...mapGetters(["isBoxFetching", "menu", "bleScaning"]) },
  methods: {
    ...mapActions(["fetchBoxes", "hideLoading", "showLoading", "setMenu", "addScannedBoxes"]),
    bleScan: function() {
      return new Promise((resolve, reject) => {
        var boxes = [];
        ble.startScan(
          [],
          (device) => {
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
  beforeMount() {
    this.fetchBoxes();
  }
};
</script>
