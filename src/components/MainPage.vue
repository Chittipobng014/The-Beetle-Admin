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
                              <div class="inActive">1. Select Menu</div>
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
                        <div class="navHeader h-center">
                          Welcome
                        </div>
                      </div>
                    </v-flex>
                  </v-layout>                  
                </div>
                <div class="content">
                    <router-view></router-view>
                </div>                    
            </v-flex>
        </v-layout> 
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
      
    };
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
  padding: 8% 8% 0% 8%;
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
</style>
