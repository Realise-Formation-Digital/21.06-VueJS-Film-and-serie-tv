<template>
  <b-card
    :title="ApiTitle"
    tag="article"
    class="mb-2"
  >
    <b-card-img :src="img" height="350" class="card-img-top"/>
    <b-card-text v-if="description"> {{ description }}</b-card-text>
    <b-card-text v-if="season"> {{ season }} </b-card-text>
    <b-card-text v-if="episodes"> {{ episodes }} </b-card-text>
    <b-card-text v-if="name"> {{ name }} </b-card-text>
    <b-card-text v-if="nickname"> {{ nickname }} </b-card-text>

    <b-button href="#" variant="primary">{{ buttonTitle }}</b-button>
  </b-card>
</template>

<script>
export default {
  name: "ApiTest",
  props: {
    ApiTitle: {
      type: String,
      required: false,
    },
    description: {
      type: String,
      required: false,
    },
    season: {
      type: Number,
      required: false,
    },
    buttonTitle: {
      type: String,
      default: "",
      required: true,
    },
    episodes: {
      type: Number,
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
};
</script>

<style scoped>
.card-img-top {
  width: 100%;
  object-fit: cover;
  object-position: top;
}
</style>