<template>
<div class="container my-5">
<h1 class=mb-5> Modale en Vue JS </h1>

<modale v-bind:revele="revele" v-bind: toggleModale = toggleModale ></modale>
<div v-on:click="toggleModale" class="btn btn success"> Ouvre la modale</div>
 



</div>
</template>

<script>

import Modale from './Modale.vue';


export default {
  components: { ModalModale },
    name:" Contenu",
    data(){
        return{
            revele: false

        }

    },
    components:{
        'modale':Modale
    },
    methods: {
        toggleModale: function(){
            this.revele= !this.revele
        }

    }
};




</script>


<style>
</style>