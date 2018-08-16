<template>
    <div style="max-height: 91vh; min-height: 91vh;;background-color: rgba(9, 40, 75, 0.3);" id="scroll-target" class="scroll-y">
        <v-card style="border: 0px; background-color: rgba(255, 255, 255, 0.0);">  
            <v-layout row wrap v-scroll:#scroll-target="onScroll">
                <v-flex class="flex-padding"
                    v-for="box in boxs"
                    :key="box.name"
                    xs4
                >
                    <box v-bind:name="box.name" v-bind:status="box.status" v-bind:uuid="box.uuid"></box>
                </v-flex>
            </v-layout>
        </v-card>
    </div> 
</template>

<script>
import Box from './Box'

export default {
    
  data:  () => {
      return {
            boxs: [
       
            ],  
    offsetTop: 0,  
    size: "xl",
    items: [
      { text: "Extra small (2px)", value: "xs" },
      { text: "Small (4px)", value: "sm" },
      { text: "Medium (8px)", value: "md" },
      { text: "Large (16px)", value: "lg" },
      { text: "Extra large (24px)", value: "xl" }
    ]
      }
  },
  methods: {
    onScroll(e) {
      this.offsetTop = e.target.scrollTop;            
    }
  },
  created() {
      this.axios.post('https://beetledump.herokuapp.com/getdevices', {
          user_id: 0
      }).then((response) => {
        var data = response.data.data;
        console.log(data)
        this.boxs = data
    })
  },
  components: {
      Box
  }
};
</script>

<style>
.flex-padding{
    padding: 0px
}
</style>
