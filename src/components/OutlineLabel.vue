<template>
    <div  class="border center" style="background-color:#1867c0 !important ">
        <div class="label" style="color: azure"> 
            {{label}}
        </div>
    </div>
</template>

<script>
export default {
    name: 'outline-label',
    props:{
        label: String
    }
}
</script>

<style>
.border{
    margin-left: 25%;
    margin-right: 25%;
    margin-bottom: 15px;
    border: 2px solid rgba(0,0,0,0.54);
    border-radius: 25px;
    padding: 8px;
}
.center{
    text-align: center
}
.label{
    font-size: 20px
}
</style>
