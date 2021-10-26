<template>
  <b-card
    :title="ApiTitle"
    :img-src="img"
    tag="article"
    style="max-width: 20rem"
    class="mb-2"
  >
    <b-card-text v-if="description"> {{ description }}</b-card-text>
    <b-card-text v-if="season"> {{ season }} </b-card-text>
    <b-card-text v-if="episodes"> {{ episodes }} </b-card-text>
    <b-card-text v-if="name"> {{ name }} </b-card-text>
    <b-card-text v-if="nickname"> {{ nickname }} </b-card-text>

    <b-button @click="selectId()" variant="primary">{{ buttonTitle }}</b-button>
  </b-card>
</template>

<script>
export default {
  name: "ApiTest",
  props: {
    id: {
      type: Number,
      required: false,
    },
    ApiTitle: {
      type: String,
      required: false,
    },
    description: {
      type: String,
      required: false,
    },

    season: {
      type: String,
      required: false,
    },

    buttonTitle: {
      type: String,
      default: "",
      required: true,
    },
    episodes: {
      type: String,
      required: false,
    },
    name: {
      type: String,
      required: false,
    },
    nickname: {
      type: String,
      required: false,
    },
    img: {
      type: String,
      required: false,
    },
  },
  methods: {
      selectId() {
        console.log("Clicked");
        this.$emit("selectedId", this.id);
      },
    },
};
</script>

<style scoped>
</style>