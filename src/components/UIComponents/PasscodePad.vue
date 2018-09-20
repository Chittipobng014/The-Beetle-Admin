<template>
    <div class="container">
        <div class="background">
            <div class="center">
                <v-layout row wrap>
                    <v-flex class="flex-padding circle" v-for="i in 9" :key="i" xs4>
                        <div class="circleNo" @click="addCode(i)">
                            {{i}}
                        </div>
                    </v-flex>
                    <v-flex row class="circle">
                        <div class="circleNo" @click="addCode(0)" >
                            0
                        </div>
                    </v-flex>
                </v-layout>
            </div>
        </div>
    </div>    
</template>

<script>
export default {
  name: "passcodepad",
  data: function() {
    return {
      code: [],
      firstPasscode: "",
      rePasscode: "",
      state: "first"
    };
  },
  methods: {
    addCode: function(num) {
      if (this.state == "first") {
        if (this.code.length == 6) {
          this.firstPasscode = this.passcode;
          this.passcode = "";
          this.code = [];
          this.state = "re";
        } else {
          this.code.push(num);
        }
      } else if (this.state == "re") {
        console.log(this.code);
      }
    }
  },
  watch: {
    passcode: function(change) {
      console.log(change);
    }
  },
  computed: {
    passcode: function() {
      let passcode = "";
      this.code.forEach(i => {
        passcode += i.toString();
      });
      return passcode;
    }
  }
};
</script>

<style scoped>
.container {
  margin-top: 80px;
  padding: 10px;
  background-color: #3b5998;
  min-width: 60%;
  max-width: 60%;
  min-height: 65vh;
  max-height: 65vh;
}

.background {
  background-color: azure;
  min-width: 100%;
  max-width: 100%;
  min-height: 63vh;
  max-height: 65vh;
}

.circleNo {
  border: 0px solid black;
  border-radius: 50%;
  width: 72px;
  height: 72px;
  justify-content: center;
  align-items: center;
  display: flex;
  font-size: 200%;
  margin: 0 auto;
  background-color: #3b5998;
  color: aliceblue;
}

.circle {
  padding: 15px;
}
</style>
