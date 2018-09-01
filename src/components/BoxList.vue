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
          {name: "01", status: "1", uuid: "mock"},
          {name: "02", status: "0", uuid: "mock"},
          {name: "03", status: "1", uuid: "mock"},
          {name: "04", status: "0", uuid: "mock"},
          {name: "05", status: "1", uuid: "mock"},
          {name: "06", status: "0", uuid: "mock"},
          {name: "07", status: "0", uuid: "mock"},
          {name: "08", status: "0", uuid: "mock"},
          {name: "09", status: "1", uuid: "mock"},
          {name: "010", status: "0", uuid: "mock"},
          {name: "011", status: "1", uuid: "mock"},
          {name: "012", status: "0", uuid: "mock"},
          {name: "013", status: "0", uuid: "mock"},
          {name: "014", status: "0", uuid: "mock"},
          {name: "015", status: "0", uuid: "mock"},
          {name: "016", status: "0", uuid: "mock"},
          {name: "017", status: "0", uuid: "mock"},
          {name: "018", status: "0", uuid: "mock"},
          {name: "019", status: "0", uuid: "mock"},
          {name: "020", status: "0", uuid: "mock"},
          {name: "021", status: "0", uuid: "mock"},
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
        console.log(data);
        //this.boxs = data;
      });
  },
  components: {
    Box
  }
};
</script>

<style>
.flex-padding {
  padding: 0px;
}
</style>
