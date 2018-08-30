<template>
    <v-app class="fullscreen fontcolor">
        <v-layout row wrap class="background-img"> 
            <v-flex xs4 style="padding: 0px; padding-top: 0px; padding-left: 0px;  border-shadow: 0px">
                <div>                    
                    <div style="min-height: 100vh;   border: 0px" id="scroll-target" class="scroll-y">
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
                                <div class="sidebarcontent"></div>
                            </div>                            
                        </v-card>
                    </div> 
                </div>                    
            </v-flex>
            <v-flex xs8 style="padding: 0px;   padding-left: 0px;  padding-top: 0px">
                <div class="navbar"></div>
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
      links: ["Home", "About Us"]
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
  min-height: 100vh;
  border: 0px;
  background-color: #3b5998;
}

.navbar {
  min-height: 14vh;
  background-color: #3b5998;
}

.content-container {
  padding: 0% 5% 5% 5%;
}

.sidebarcontent {
  background-color: #eae4e4;
  min-height: 74vh;
}
</style>

<style>
.center {
  text-align: center;
}

.content{
    min-height: 86vh;
}
</style>
