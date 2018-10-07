<template>
<div>
    <v-card flat tile class="h-center" style="text-align:center; height: 21vh;  background-color: #33c0ca; padding: 5px">   
        <div style="margin-top: 15px; font-size: 25px">{{name}}</div>
        <transition>
          <div @click="next()" style="margin-top: 40px" >
            <img v-if="sta == false" width="64px" src="../assets/plus.png" alt="">
            <img v-if="sta == true" width="64px" src="../assets/minus.png" alt="">
          </div>
        </transition>
    </v-card>
</div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "box",
  props: {
    name: String,
    status: String,
    uuid: String,
    price: Number,
  },
  data() {
    return {
      id: this.uuid,
      sta: false
    };
  },
  methods: {
    ...mapActions(["setMenu", "setStep", "setData", "setSelectedBox"]),
    next: async function() {
      let box = {uuid: "0E84C1D5-4779-BB1A-872A-2390CF7343BB7", name: "Beetle Box No.3", price: "20", status: "0"}
      const allbox = await this.$db
      .collection("boxs")
      .doc("email")
      .get();
      var boxs = allbox.data().boxs;
      console.log(boxs)
      var index = boxs.map(function(element) { return element.uuid; }).indexOf(box.uuid);
      if (index != -1) {
        boxs.splice(index, 1);
        this.sta = false;
        try {
          var boxsRef = await this.$db.collection("boxs").doc("email").update({boxs})
        } catch (error) {
          console.log(error)
        }
      } else {
        boxs.push(box);
        try {
          this.sta = true;
          var boxsRef = await this.$db.collection("boxs").doc("email").update({boxs})
        } catch (error) {
          console.log(error)
        }
      }
    }
  },
  beforeMount() {
    console.log(this.id)
  },
  computed: {
    ...mapGetters(["isMenu", "isStep", "data"])
  }
};
</script>
