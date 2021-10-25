<template>
  <b-container>


 <b-row>
    <b-col></b-col>
    <b-col>
       <b-form @submit="onSubmit" @reset="onReset">
      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
        description="."
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          placeholder="Enter email v-model "
          required
        ></b-form-input>
      </b-form-group>
    </b-form>

    <b-form-group id="input-group-2 " label="Your Name:" label-for="input-2" label-size="sm">
      <b-form-input
        id="input-2"
        v-model="form.name"
        placeholder="Enter name"
        required
      ></b-form-input>
    </b-form-group>
       <div class="text-conter mt-4">
         
    <b-form-group id="input-group-2" label="Message:" label-for="input-2">
      <b-form-input
        id="input-2"
        v-model="form.message"
        placeholder="Ecrire message  v-model "
        required
      ></b-form-input>
    </b-form-group>
    </div>
    <b-form-group id="input-group-4" v-slot="{ ariaDescribedby }">
      <b-form-checkbox-group
        v-model="form.checked"
        id="checkboxes-4"
        :aria-describedby="ariaDescribedby"
        unchecked-value="not_accepted"
      >
        <b-form-checkbox value="me">Check me out</b-form-checkbox>
        <b-form-checkbox value="that">Check that out</b-form-checkbox>
      </b-form-checkbox-group>
    </b-form-group>

    <b-button @click="onSubmit()" type="submit v-model " variant="primary"
      >Submit</b-button
    >
    <b-button @click="onReset()" type="reset" variant="danger">Reset</b-button>

    </b-col>
    <b-col></b-col>
  </b-row>
  </b-container>
</template>

<script>
//export {required} from 'vuelidate/lib/validators'

import axios from "axios";

export default {
  name: "Contact",
  data() {
    return {
      form: {
        email: "",
        name: "",
        message: null,
        checked: [],
      },
    };
  },
  methods: {
    async onSubmit() {
      alert(JSON.stringify(this.form));
      await axios.post('http://localhost:3001/messages', {
         name: this.form.name 
         });

      
    },
    onReset() {
      // Reset our form values
      this.form.email = "";
      this.form.name = "";
      this.form.message = null;
      this.form.checked = [];

      // Trick to reset/clear native browser form validation state
    },
  },
};
</script>

<style scoped>


#app {
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 3rem;
  padding: 0 2rem;
  background: #38ada9;
  display: flex;
  justify-content: center;
  align-items: center;
}


</style>