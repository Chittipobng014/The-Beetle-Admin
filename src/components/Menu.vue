<template>
    <div class="container center content" id="menu">
        <div>
            <v-btn v-on:click="nextTo('/box/1')" class="menu-btn">Rent a box</v-btn>
        </div>
        <div>
            <v-btn class="menu-btn">Open a box</v-btn>
        </div>
    </div>
</template>

<script>
export default {
    name: 'mainMenu',
    methods: {
        nextTo: function(path){
            this.$router.push({
                path: path
            })
        }
    },
    async beforeMount() {
        await this.$store.commit('menu', true) 
    },
    async beforeDestroy() {
        await this.$store.commit('menu', false)
    }
}
</script>

<style scoped>

#menu{
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}

.menu-btn{
    width: 35vw;
    height: 13vh;
    background-color: #3B5998;
    margin: 8% 0% 8% 0%;
    font-size: 200%;
    color: #FFFFFF;
}

.application .theme--light.v-btn:not(.v-btn--icon):not(.v-btn--flat), .theme--light .v-btn:not(.v-btn--icon):not(.v-btn--flat) {
    background-color: #3B5998;
}
</style>
