<template>
  <div>
    <h1>Breaking Bad</h1>
    <div>
      <b-container class="text-center">
        <!-- Butto that trigger the events that get the beer list-->
        <b-btn @click="getApi()">All episodes </b-btn>
      </b-container>
    </div>
    <!-- Loop over beers -->

    <b-container class="text-center bv-example-row">
      <b-row>
        <div v-for="(api, index) in apis" :key="index">
          <!-- Dependency Injection of single beer inside the card component -->

          <b-col cols="3" class="m-1">
            <ApiTest
              :ApiTitle="api.title"
              :description="api.air_date"
              :season="api.season"
              :episodes="api.episode"
              :buttonTitle="'More Information'"
              :id="api.id"
              @selectedId="handleSelectedId"
            />
          </b-col>
        </div>
      </b-row>
    </b-container>
    <b-modal v-model="modalShow">{{selectedfilm}}</b-modal>
  </div>
</template>

<script>
import ApiTest from "../components/ApiTest.vue";
import axios from "axios";
export default {
  name: "api",
  components: {
    ApiTest,
  },
  data() {
    return {
      apis: [],
      modalShow: false,
      selectedfilm: null,
    };
  },

  methods: {
    handleEvent(message) {
      console.log("Recu", message);
    },
    async getApi() {
      console.log("called");

      // Get the answer from the server (Punk Api) and stock it in result
      const result = await axios.get(
        "https://www.breakingbadapi.com/api/episodes"
      );
      // Stock the result in dynamic variable that connect HTML and JS
      //this.apis = result.data;

      console.log(result);

      this.apis = result.data;
    },
    handleSelectedId(id) {
      this.selectedfilm = null;
      this.selectedfilm = this.apis.find((api) => api.id === id);
      this.modalShow = true;
    },
  },
};
</script>

 
<style>
</style>