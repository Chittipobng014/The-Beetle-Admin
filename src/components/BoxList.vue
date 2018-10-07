<template>
    <div style="max-height: 100vh; min-height: 100vh;;background-color: #DBD8D8;" id="scroll-target" class="scroll-y">
      <v-layout row wrap>
        <v-flex class="flex-padding" v-for="box in getBoxs.boxs" :key="box.uuid" xs3>
          <box style="margin: 5% 5% 5% 5%;" v-bind:price="box.price" v-bind:name="box.name" v-bind:status="box.status" v-bind:uuid="box.uuid"></box>
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
      boxs: null
    };
  },
  methods: {
    ...mapActions(["setMenu", "setStep", "setData"]),

  },
  async beforeMount() {
    console.log(this.getBoxs)
  },
  components: {
    Box
  },
  mounted() {
    
  },
  computed: {
    ...mapGetters(["getBoxs"])
  }
};
</script>

<style>
.flex-padding {
  padding: 0px;
}
</style>
