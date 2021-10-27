<template>
  <b-card checkbox
    :title="ApiTitle"
    tag="article"
    class="mb-2"
    bg-variant="dark"
    text-variant="white"
  >
    <b-card-img v-if="img"  :src="img" height="350" class="card-img-top"/>
    <b-card-text v-if="description"> {{ description }}</b-card-text>
    <b-card-text v-if="season"> {{ season }} </b-card-text>
    <b-card-text v-if="episodes"> {{ episodes }} </b-card-text>
    <b-card-text v-if="name"> {{ name }} </b-card-text>
    <b-card-text v-if="nickname"> {{ nickname }} </b-card-text>
    <b-card-text v-if="air_date"> {{ air_date }} </b-card-text>
    <b-card-text v-if="characters"> {{ characters }} </b-card-text>
    <b-card-text v-if="birthday"> {{ birthday }} </b-card-text>
        


    <b-button @click="selectId()" variant="secondary">{{ buttonTitle }}</b-button>
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
    air_date: {
      type: String,
      required: false,
    },
    characters: {
      type: String,
      required: false,
    },
    birthday: {
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
.card-img-top {
  width: 100%;
  object-fit: cover;
  object-position: top;
}
</style>