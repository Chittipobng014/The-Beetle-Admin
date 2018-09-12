<template>
    <div style="max-height: 86vh; min-height: 86vh;;background-color: #DBD8D8;" id="scroll-target" class="scroll-y">
        <v-card style="border: 0px; background-color: #DBD8D8;">  
            <v-layout row wrap v-scroll:#scroll-target="onScroll">
                <v-flex class="flex-padding" v-for="box in boxs" :key="box.name" xs4>
                    <box style="margin: 5% 5% 5% 5%;" v-bind:name="box.name" v-bind:status="box.status" v-bind:uuid="box.uuid"></box>
                </v-flex>
            </v-layout>
        </v-card>
    </div> 
</template>

<script>
import Box from "./Box";

export default {
  name: 'boxlist',
  data: () => {
    return {
      boxs: [
          {name: "1", status: "1", uuid: "1"},
          {name: "2", status: "0", uuid: "2"},
          {name: "3", status: "1", uuid: "3"},
          {name: "4", status: "0", uuid: "4"},
          {name: "5", status: "1", uuid: "5"},
          {name: "6", status: "0", uuid: "6"},
          {name: "7", status: "0", uuid: "7"},
          {name: "8", status: "0", uuid: "8"},
          {name: "9", status: "1", uuid: "9"},
          {name: "10", status: "0", uuid: "10"},
          {name: "11", status: "1", uuid: "11"},
          {name: "12", status: "0", uuid: "12"},
          {name: "13", status: "0", uuid: "13"},
          {name: "14", status: "0", uuid: "14"},
          {name: "15", status: "0", uuid: "15"},
          {name: "16", status: "0", uuid: "16"},
          {name: "17", status: "0", uuid: "17"},
          {name: "18", status: "0", uuid: "18"},
          {name: "19", status: "0", uuid: "19"},
          {name: "20", status: "0", uuid: "20"},
          {name: "21", status: "0", uuid: "21"},
      ]
    };
  },
  methods: {
    onScroll(e) {
      this.offsetTop = e.target.scrollTop;
    }
  },
  created() {
    this.axios
      .post("https://beetledump.herokuapp.com/getdevices", {
        user_id: 0
      })
      .then(response => {
        var data = response.data.data;
        //this.boxs = data;
      });
  },
  components: {
    Box
  },
  mounted() {
    
  }
};
</script>

<style>
.flex-padding {
  padding: 0px;
}
</style>
