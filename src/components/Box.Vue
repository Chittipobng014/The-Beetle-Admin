<template>
<div>
    <v-card flat tile class="h-center" style="text-align:center; margin: 0px;  width: 18vw;   height: 21vh;  background-color: #33c0ca">        
        <v-btn @click="next()">click</v-btn>
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
    uuid: String
  },
  data() {
    return {
      id: this.uuid
    };
  },
  methods: {
    ...mapActions(["setMenu", "setStep", "setData"]),
    next: function() {
      this.setMenu("renting");
      this.setStep("2")
    }
  },
  mounted() {},

  computed: {
    ...mapGetters(["isMenu", "isStep", "data"])
  }
};
</script>
