<template>
<div>
    <v-card flat tile v-on:click="goToRenting()" class="h-center" style="text-align:center; margin: 0px;  width: 18vw;   height: 21vh;  background-color: #33c0ca">        
        <v-btn @click="goToRenting()">click</v-btn>
    </v-card>
</div>
</template>

<script>

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
        goToRenting: function() {
            this.$router.push('2/' + this.id);
        }
    },
    mounted() {
        
    },
};
</script>
