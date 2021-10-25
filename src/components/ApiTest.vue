<template>
  <b-card
    :title="ApiTitle"
    tag="article"
    style="max-width: 20rem"
    class="mb-2"
  >
    <b-card-text> {{ description }}</b-card-text>
    <b-card-text> {{ season }} </b-card-text>

    <b-button href="#" variant="primary">{{buttonTitle}}</b-button>
  </b-card>
</template>

<script>
export default {
  name: "ApiTest",
  props: {
    ApiTitle: {
      type: String,
      required: true,
      default: "",
    },
    description: {
      type: String,
      default: "",
      required: true,
    },

    season: {
      type: String,
      default: "",
      required: true,
    },

    buttonTitle: {
      type: String,
      default: "",
      required: true,
    },
  },
};
</script>

<style scoped>
</style>