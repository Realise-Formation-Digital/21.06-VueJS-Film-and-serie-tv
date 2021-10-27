<template>
  <div>
    <b-card bg-variant="dark" text-variant="white" title="Card Title">
      <div>
        <b-container class="text-center"> <h1>Breaking Bad</h1> <br> <h5>“Say my name.”</h5></b-container>
      </div>
    </b-card>
    <div>
      <b-card bg-variant="dark" text text-variant="white" >
        <b-card
          class="text-center"
          overlay
          img-src="images/episode2.jpeg"
          img-alt="Card Image"
          text-variant="black"
          title=" "
          sub-title=""
        >
          <b-card
            bg-variant="dark"
            text-variant="white"
            title="All About Episodes"
          >
            <b-card-text>
              Watch all the additional information about your favorite series
            </b-card-text>
          </b-card>
        </b-card>
      </b-card>
    </div>

    <b-container class="text-center bv-example-row" bg-variant="dark">
      <b-row>
        <!-- Dependency Injection of single beer inside the card component -->

        <b-col v-for="(api, index) in apis" :key="index" sm="12" md="4" lg="3">
          <ApiTest
            :ApiTitle="api.title"
            :description="api.air_date"
            :season="api.season"
            :episodes="api.episode"
            :buttonTitle="'More Information'"
            :id="api.episode_id"
            @selectedId="handleSelectedId"
          />
        </b-col>
      </b-row>
    </b-container>
    <b-modal v-model="modalShow" body-bg-variant="black" cancel-title="NOP" align="center" footer-bg-variant="secondary"
      header-bg-variant="secondary">
      <b-card
        :title="selectedfilm && selectedfilm.title"
        tag="article"
        style="max-width: 20rem"
        class="mb-2"
      >
        <b-card-text>
          Episode: {{ selectedfilm && selectedfilm.episode }}
        </b-card-text>

        <b-card-text>
          Season: {{ selectedfilm && selectedfilm.season }}
        </b-card-text>
        <b-card-text>
          Date: {{ selectedfilm && selectedfilm.air_date }}
        </b-card-text>
        <b-card-text>
          Characters: {{ selectedfilm && selectedfilm.characters }}
        </b-card-text>
      </b-card>
    </b-modal>
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
  mounted() {
    this.getApi();
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
      console.log(id);
      this.selectedfilm = null;
      this.selectedfilm = this.apis.find((api) => api.episode_id === id);
      this.modalShow = true;
    },
  },
};
</script>
<style scoped>
</style>
