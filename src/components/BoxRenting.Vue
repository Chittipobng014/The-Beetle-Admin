<template>
    <div>
        {{id}}
    </div>
</template>

<script>
export default {
    name: 'boxrenting',
    data() {
        return {
            id: this.$route.params.id
        }
    },
    mounted() {
        console.log(this.id);        
    },
}
</script>
