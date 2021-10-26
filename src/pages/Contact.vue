<template>
  <b-container>
    <b-row class="mt-5">
      <b-col>
        <ValidationObserver ref="observer">
          <b-form
            slot-scope="{ validate }"
            @submit.prevent="validate().then(handleSubmit)"
          >
            <ValidationProvider rules="required" name="Email">
              <b-form-group
                id="input-group-1"
                label="Email address:"
                label-for="input-1"
                slot-scope="{ valid, errors }"
              >
                <b-form-input
                  id="input-1"
                  v-model="form.email"
                  type="email"
                  placeholder="Enter email  "
                  :state="errors[0] ? false : valid ? true : null"
                  required
                ></b-form-input>
                <b-form-invalid-feedback>
              {{ errors[0] }}
            </b-form-invalid-feedback>
              </b-form-group>
            </ValidationProvider>

           <ValidationProvider rules="required" name="Neme">
              <b-form-group
                id="input-group-1"
                label="Name :"
                label-for="input-1"
                slot-scope="{ valid, errors }"
              >
                <b-form-input
                  id="input-1"
                  v-model="form.name"
                  type="name"
                  placeholder="Enter name  "
                  :state="errors[0] ? false : valid ? true : null"
                  required
                ></b-form-input>
              </b-form-group>
            </ValidationProvider>

           <ValidationProvider rules="required" name="mobile">
              <b-form-group
                id="input-group-1"
                label="mobile :"
                label-for="input-1"
                slot-scope="{ valid, errors }"
              >
                <b-form-input
                  id="input-1"
                  v-model="form.mobile"
                  type="mobile"
                  placeholder="mobile"
                  :state="errors[0] ? false : valid ? true : null"
                  required
                ></b-form-input>
              </b-form-group>
            </ValidationProvider>

            <ValidationProvider rules="required" name="Messages">
              <b-form-group
                id="input-group-1"
                label="messages :"
                label-for="input-1"
                slot-scope="{ valid, errors }"
              >
                <b-form-input
                  id="input-1"
                  v-model="form.messages"
                  type="message"
                  placeholder="messages"
                  :state="errors[0] ? false : valid ? true : null"
                  required
                ></b-form-input>
              </b-form-group>
            </ValidationProvider>

            

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

            <b-button
              @click="handleSubmit()"
              type="submit v-model "
              variant="primary"
              >Submit</b-button
            >
            
            <b-button @click="onReset()" type="reset" variant="danger"
              >Reset</b-button
            >
          </b-form>
        </ValidationObserver>
      </b-col>

      <b-col class="dava">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2761.877517634503!2d6.126591315998909!3d46.19299597911617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478c7b2e1299827b%3A0xb6bbc30dd8e5306f!2zUsOpYWxpc2U!5e0!3m2!1sfr!2sch!4v1635171596685!5m2!1sfr!2sch"
          width="600"
          height="450"
          style="border: 0"
          allowfullscreen=""
           
        ></iframe>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { ValidationObserver, ValidationProvider } from "vee-validate";

import axios from "axios";

export default {
  name: "Contact",
  components: {
    ValidationObserver,
    ValidationProvider,
  },
  data() {
    return {
      form: {
        email: "",
        name: "",
        mobile: "",
        message: null,
        checked: [],
      },
    };
  },

  methods: {
    async onSubmit() {
      alert(JSON.stringify(this.form));
      await axios.post("http://localhost:3001/messages", {
        name: this.form.name,
        email: this.form.email,
        messages: this.form.messages,
        mobile: this.form.mobile,


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

<style>
form {
   max-width: 500px;
   margin: 0 auto; 
   text-align: left;
}
.form-group > label {
    font-weight: 600;


}
input {
  font-size: 30px;
  border: 1px double rgb(102, 97, 96) ;
  border-radius: 4px;
}

label{
  display: block;
  margin: 20px 0 10px;
}




</style>