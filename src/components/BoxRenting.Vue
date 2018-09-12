<template>
    <div >
        <div class="center">
            <div style="color: #3B5998; font-size: 72px">Box {{id}}</div>
            <div style="font-size: 64px; margin-bottom: 25px">10 Baht/hr</div>
            <div style="font-size: 18px; color: #FF0000; margin-bottom: 35px">Input your to telephone number in case of forgot your box</div>
            <div style="margin-top: 25px; margin-bottom: 10px; margin-left: 20%"><v-text-field
                label="Solo"
                placeholder="Telephone No."
                solo
                style="width: 95%; "
          ></v-text-field></div>
            <div style="margin-bottom: 25px"><v-btn style="width: 330px; height: 100px; background-color: #3B5998; color: #FFFFFF; font-size: 28px">Rent a box</v-btn></div>
            <div><v-btn style="width: 330px; height: 100px; font-size: 28px">Back to box select</v-btn></div>
        </div>
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

<style>
.v-inout__control{
    align-items: center;
}

.v-input__slot {
    width: 80%
}
</style>

