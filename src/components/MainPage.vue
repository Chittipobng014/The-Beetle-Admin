<template>
    <v-app class="fullscreen fontcolor">
        <v-layout row wrap class="background-img"> 
            <v-flex xs4 style="padding: 0px; padding-top: 0px; padding-left: 0px;  border-shadow: 0px">
                <div>                    
                    <div style="max-height: 91.2vh;   border: 0px" id="scroll-target" class="scroll-y">
                        <v-card class="center" style="border: 0px; min-height: 91.2vh;    padding:15px;   background-color:#1874CD	 !important">  
                            <div style="font-size: 20px;    color:  azure">Instruction</div>
                        </v-card>
                    </div> 
                </div>                    
            </v-flex>
            <v-flex xs8 style="padding: 0px;   padding-left: 0px;  padding-top: 0px">
                <div>                    
                    <box-list></box-list>
                </div>                    
            </v-flex>
        </v-layout>
        <v-footer style="height: 9vh;   background-color:#104E8B">
            <v-layout
                justify-center
                row
                wrap
            >
                <v-btn
                    v-for="link in links"
                    :key="link"
                    color="white"
                    flat
                    round
                >
                    {{ link }}
                </v-btn>
            </v-layout>
        </v-footer>
    </v-app>
</template>

<script>
import BoxList from "./BoxList";
import OutlineLabel from "./OutlineLabel";

export default {
  name: "mainpage",
  components: {
    BoxList,
    OutlineLabel
  },
  data() {
    return {
        links: [
        'Home',
        'About Us',       
      ]
    };
  }
};
</script>

<style>
.fullscreen {
  min-height: 100vh;
  max-height: 100vh;
}

.background-img{
    background-color: #E8E8E8
}

</style>
