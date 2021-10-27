<template>
  <div>
    <b-card bg-variant="dark" text-variant="white" title="Card Title">
      <div>
        <b-container class="text-center">
          <h1>Breaking Bad</h1>
          <br />
          <h5>“Say my name.”</h5></b-container
        >
      </div>
    </b-card>
    <div>
      <b-card
        class="test"
        bg-variant="dark"  
        text-variant="white"
        align="center">
      <b-card-body>
        <b-card-text>
          <div class="introepisode">
<h1 align="center">All bout your favorites episodes!</h1>
<h4 align="center">The additional information for Breaking Bad fans! know everything about your favorite episodes </h4>
          </div>
        </b-card-text>
      </b-card-body>
      </b-card>
    </div>
    <div>
      <h1 align="center">All Episodes</h1>
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
    <b-modal
      v-model="modalShow"
      body-bg-variant="black"
      cancel-title="NOP"
      align="center"
    >
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
.test{
  background: url('/images/breaking-bad.png'); 
  background-repeat: no-repeat;
    background-size: cover; /* Resize the background image to cover the entire container */
  background-position: center; /* Center the image */
  height: 900px;
}
.introepisode{
  box-shadow:  -1em 0 .8em olive;
  justify-content: center;
  align-items: center;
  width: 60%;
  background-color: rgb(43, 42, 42);
  margin: 19%;
  padding-block: 5%;
}

</style>