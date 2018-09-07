<template>
    <v-app class="fullscreen fontcolor">
        <v-layout row wrap class="background-img"> 
            <v-flex xs4 style="padding: 0px; padding-top: 0px; padding-left: 0px;  border-shadow: 0px">
                <div style="max-height: 100vh;  min-height: 100vh;   border: 0px" id="scroll-target">
                    <v-card class="sidebar">  
                        <div class="sidebarheader">
                            <div style="margin-top: 4%">
                                <img class="sidebar-logo" src="../assets/Logo/logo.png">
                            </div>
                            <div class="sidebar-text">
                                SMART MOBILE LOCKER
                            </div>
                        </div>
                        <div class="sidebartitle center">Instruction</div>
                        <div class="content-container">
                            <div class="sidebarcontent sidebarcontentText">
                              <transition name="slide-y-transition">
                                <div v-if="currentPage == 'menu'" >
                                  <div class="inActive">1. Select Menu</div>
                                </div>
                              </transition>
                              <transition name="fade">  
                                <div v-if="currentPage == 'box'" ref="boxview" >
                                  <div class="inActive" id="0" ref="1">1. Select a Beetle box</div>
                                  <div id="1" ref="2">2. Comfirm renting</div>
                                  <div id="2" ref="3">3. Face Recognition</div>
                                  <div id="3" ref="4">4. Set passcode</div>
                                  <div id="4" ref="5">5. Confirm passcode</div>
                                  <div id="5" ref="6">6. Success</div>
                                  <div style="position: absolute;    bottom: 0;   width: 85%">
                                    <v-btn v-on:click="backToMenu" style=" width: 100%; height: 6vh; background-color: #3B5998; margin: 8% 0% 8% 0%; font-size: 100%; color: #FFFFFF;" class="menu-btn">Back to menu</v-btn>
                                  </div>
                                </div>             
                              </transition>                                             
                            </div>
                        </div>                            
                    </v-card>
                </div>
            </v-flex>
            <v-flex xs8 style="padding: 0px;   padding-left: 0px;  padding-top: 0px">
                <div class="navbar">
                  <v-layout row wrap>
                    <v-flex xs2>
                      <div style="min-height: 14vh; max-height: 14vh;" class="h-center">
                        <img src="../assets/beetle.png" alt="" class="navBeetle">
                      </div>
                    </v-flex>
                    <v-flex xs10>
                      <div class="h-center" style="min-height: 14vh; max-height: 14vh; padding: 4% 4% 4% 0%;">
                        <div v-if="currentPage == 'menu'" class="navHeader h-center">
                          Welcome
                        </div>
                        <div v-if="currentPage == 'box'" class="navHeader h-center">
                          Select a Beetle box
                        </div>
                      </div>
                    </v-flex>
                  </v-layout>                  
                </div>
                <div class="content">
                  <transition name="scale-transition">
                    <router-view></router-view>
                  </transition>
                </div>                    
            </v-flex>
        </v-layout> 
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
    </v-app>
</template>

<script>
import BoxList from "./BoxList";
import OutlineLabel from "./OutlineLabel";
import { async } from 'q';
import { setTimeout } from 'timers';

export default {
  name: "mainpage",
  components: {
    BoxList,
    OutlineLabel
  },
  data() {
    return {
      dialog: false
    };
  },
  computed: {
    currentPage: function() {
      var page = this.$route.path.split("/")[1];
      return page;
    },
  },
  watch: {
    $route: async function(to, from) {
      let boxview = await this.$store.state.boxview
            
      let menu = await this.$store.state.menu
      
      if (boxview != this.$store.state.boxview || menu != this.$store.state.menu) {
        boxview = this.$store.state.boxview
        menu = this.$store.state.menu
      }
      if (boxview == true) {
        var div = await this.$refs.boxview.children;
        var stepStr = to.path.split("/")[2];
        var step = parseInt(stepStr);
        var previusStepStr = from.path.split("/")[2];
        var previusStep = parseInt(previusStepStr);
        if (!previusStep) {
          
        } else {
          div[step - 1].classList.add("inActive");
          div[previusStep - 1].classList.remove("inActive");
        }        
      } else if (menu == true) {

      }
    },
  },
  methods: {
    logging: function() {
     
    },
    backToMenu: function(){
      this.$router.go(-1)
    }
  },
  async beforeMount() {
    this.dialog = true;
    setTimeout(() => {
      this.dialog = false
    }, 3200);
  }
};
</script>

<style scoped>
@media only screen and (max-width: 1366.4px) {
  .sidebar-text {
    font-size: 200%;
  }

  .sidebartitle {
    min-height: 10vh;
    max-height: 10vh;
    justify-content: center;
    align-items: center;
    display: flex;
    font-size: 330%;
    color: #ffffff;
  }

  .sidebarcontentText {
    font-size: 200%;
  }

  .navHeader {
    background-color: #ffffff;
    min-height: 9vh;
    max-height: 9vh;
    max-width: 100%;
    min-width: 100%;
    border-radius: 5px;
    font-size: 270%;
  }
}

@media only screen and (max-width: 1024px) {
  .sidebar-text {
    font-size: 150%;
  }

  .sidebartitle {
    min-height: 10vh;
    max-height: 10vh;
    justify-content: center;
    align-items: center;
    display: flex;
    font-size: 250%;
    color: #ffffff;
  }

  .sidebarcontentText {
    font-size: 150%;
  }

  .navHeader {
    background-color: #ffffff;
    min-height: 9vh;
    max-height: 9vh;
    max-width: 100%;
    min-width: 100%;
    border-radius: 5px;
    font-size: 220%;
    color: #3b5998;
  }
}

.fullscreen {
  min-height: 100vh;
  max-height: 100vh;
}

.sidebar-logo {
  height: 12vh;
  width: 8vw;
}

.background-img {
  background-color: #e8e8e8;
}

.sidebarheader {
  min-height: 14vh;
  max-height: 14vh;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
}

.sidebar {
  max-height: 99vh;
  min-height: 100vh;
  border: 0px;
  background-color: #3b5998;
}

.navbar {
  min-height: 14vh;
  background-color: #3b5998;
}

.content-container {
  height: 76vh;
  padding: 0% 5% 5% 5%;
}

.sidebarcontent {
  background-color: #eae4e4;
  min-height: 74vh;
  padding: 8% 8% 8% 8%;
  position: relative;
}

.inActive {
  background-color: rgba(251, 246, 46, 0.28);
}

.navBeetle {
  width: 7vw;
  height: 10vh;
}
</style>

<style>
.center {
  text-align: center;
}
 
.content {
  min-height: 86vh;
}

.h-center {
  justify-content: center;
  align-items: center;
  display: flex;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
