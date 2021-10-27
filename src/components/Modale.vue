<template>
   <div class="block-modale" v-if="revele">  
<div class="overlay" v-on:click="toggleModale"></div>
<div class="modale card">
<div class="btn-modale btn btn-danger"></div>
<h2> Contenue de la modale </h2>
</template>

<script>
export default {
    name: 'Modale',
    props: ['revele', 'toggleModale']

}
</script>

<style scoped>
.bloc-modale{
    position:fixed;
    top: 0;
    bottom:0;
    left: 0;
    right: 0;
    width:100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

}
.overlay{
    background:rgb(rgb(0, 0, 0), green, blue);
    position:fixed;
    top: 0;
    bottom: 0;
    left:0;
    right: 0;
    
}
.modale{
    background: rgb(rgb(253, 253, 253), green, blue);
    color: rgb(0, 0, 0);
    padding: 50px;
    position:fixed;
    top: 40%;

}
.btn-modale{
    position: absolute;
    top: 10px;
    right: 10px;

}

</style>