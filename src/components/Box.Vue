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
    id: String,
    price: Number,
  },
  data() {
    return {
      sta: false
    };
  },
  methods: {
    ...mapActions(["setMenu", "setStep", "setData", "setSelectedBox"]),
    next: () => {

    }
    
  },
  mounted() {
    console.log(this.id)
  },
  computed: {
    ...mapGetters(["isMenu", "isStep", "data"])
  }
};
</script>
