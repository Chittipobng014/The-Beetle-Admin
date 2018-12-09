<template>
  <div style="max-height: 100vh; min-height: 100vh;" id="scroll-target" class="scroll-y">
    <v-layout row wrap>
      <v-flex v-if="menu == 'addnew'" class="flex-padding" v-for="box in unRegisteredBoxes" :key="box.uuid" xs4>
        <box
          style="margin: 5% 5% 5% 5%;"
          :price="box.price"
          :name="box.name"
          :status="box.status"
          :id="box.id"
          :size="box.size"
        ></box>
      </v-flex>
      <v-flex v-if="menu == 'manage'" class="flex-padding" v-for="box in registeredBoxes" :key="box.uuid" xs4>
        <box
          style="margin: 5% 5% 5% 5%;"
          :price="box.price"
          :name="box.name"
          :status="box.status"
          :id="box.id"
          :size="box.size"
        ></box>
      </v-flex>
    </v-layout>
  </div>
</template>
 
<script>
import Box from "./Box";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "boxlist",
  data: () => {
    return {
      boxes: null
    };
  },
  methods: {
    ...mapActions(["setMenu", "setStep", "setData"])
  },
  beforeMount() {
    if (this.menu == "addnew") {
      //this.boxes = this.unRegisteredBoxes;
    } else if (this.menu == "manage") {
      //this.boxes = this.registeredBoxes;
    }
  },
  components: {
    Box
  },
  mounted() {},
  computed: {
    ...mapGetters(["registeredBoxes", "menu", "unRegisteredBoxes"])
  },
  watch: {
    unRegisteredBoxes: function(changed) {
			console.log("​mounted -> changed", changed)
      //this.boxes = changed;
    },
    registeredBoxes: function(changed) {
			console.log("​mounted -> changed", changed)
      //this.boxes = changed;
    }
  }
};
</script>

<style>
.flex-padding {
  padding: 0px;
}
</style>
