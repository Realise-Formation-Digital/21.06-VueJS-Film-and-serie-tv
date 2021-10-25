<template>
  <b-card
    :title="ApiTitle"
    :img-src="img"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem"
    class="mb-2"
  >
    <b-card-text> {{ description }} {{ img }} </b-card-text>

    <b-button href="#" variant="primary">{{buttontitle}}</b-button>
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

    img: {
      type: String,
      default: "",
      required: true,
    },

    buttontitle: {
      type: String,
      default: "",
      required: true,
    },
  },
};
</script>

<style scoped>
</style>