<template>
    <div style="max-height: 91vh; min-height: 91vh;;background-color: rgba(9, 40, 75, 0.3);" id="scroll-target" class="scroll-y">
        <v-card style="border: 0px; background-color: rgba(255, 255, 255, 0.0);">  
            <v-layout row wrap v-scroll:#scroll-target="onScroll">
                <v-flex class="flex-padding"
                    v-for="box in boxs"
                    :key="box"
                    xs4
                >
                    <v-card v-bind:style="{ backgroundColor: box.color }" flat tile style="text-align:center; margin: 0px;">
                        <div>
                            <img style="width: 72px;    " src="https://i.pinimg.com/originals/38/4c/c2/384cc28d937dca11cee9bc4170efc7cb.png" alt="" srcset="">
                        </div>
                        <v-card-text>
                            <div style="font-size: 30px">{{box.name}}</div>
                            <div style="font-size: 25px;    color: green">{{box.status}}</div>
                        </v-card-text>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-card>
    </div> 
</template>

<script>
export default {
  data:  () => {
      return {
           boxs: [
        {   name: '1', status: 'Available', color: '#EE9A49'    },
        {   name: '2', status: 'Available', color: '#EBCEAC'    },
        {   name: '3', status: 'Available', color: '#FCE6C9'    },
        {   name: '4', status: 'Available', color: '#DC8909'    },
        {   name: '5', status: 'Available', color: '#C75D4D'    },
        {   name: '6', status: 'Available', color: '#EE5C42'    },
        {   name: '7', status: 'Available', color: '#EEB4B4'    },
        {   name: '8', status: 'Available', color: '#A6D785'    },
        {   name: '9', status: 'Available', color: '#49E9BD'    },
        {   name: '10', status: 'Available', color: '#9BC4E2'    },
        {   name: '11', status: 'Available', color: '#9FB6CD'    },
        {   name: '12', status: 'Available', color: '#7AA9DD'    },
        {   name: '13', status: 'Available', color: '#C6E2FF'    },
        {   name: '14', status: 'Available', color: '#FF82AB'    },
        {   name: '15', status: 'Available', color: '#DC143C'    },
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
  }
};
</script>

<style>
.flex-padding{
    padding: 0px
}
</style>
