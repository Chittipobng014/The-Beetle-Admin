<template>
    <div>
        <transition name="fade">
            <router-view></router-view>
        </transition>        
    </div>
</template>

<script>
export default {
    name: 'boxview',
    async beforeMount() {
        await this.$store.commit('boxview', true)        
    },
    async beforeDestroy() {
        await this.$store.commit('boxview', false)
    }
}
</script>
