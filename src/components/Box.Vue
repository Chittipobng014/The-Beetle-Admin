<template>
<div>
    <v-card flat tile style="text-align:center; margin: 0px;  width: 18vw;   height: 21vh">
        <div>
            <img style="width: 72px;    " src="https://i.pinimg.com/originals/38/4c/c2/384cc28d937dca11cee9bc4170efc7cb.png" alt="" srcset="">
        </div>
        <v-card-text>
            <div style="font-size: 30px">{{name}}</div>
            <div v-if="status == '0'" style="font-size: 25px;    color: green">Avialable</div>
            <div v-else-if="status == '1'" style="font-size: 25px;    color: red">Not Avialable</div>
        </v-card-text>
    </v-card>
</div>
</template>

<script>
import Vue from 'vue'

export default {
    name: 'box',
    props:{
        name: String,
        status: String,
        uuid: String
    },
    data(){
        return{
            id: this.uuid
        }
    },
    methods: {
        goToNext: function() {
            this.$router.push('renting/' + this.id);
        }
    },
    mounted() {
        
    },
};
</script>
