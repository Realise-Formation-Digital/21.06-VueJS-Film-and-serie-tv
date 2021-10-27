<template>
<div class="mt-5 pt-5">
  <b-container>
    <b-row class="mt-5">
      <b-col>
        <ValidationObserver ref="observer">
    <b-form slot-scope="{ validate }" @submit.prevent="validate().then(handleSubmit)">
      <ValidationProvider rules="required" name="Name">
        <b-form-group slot-scope="{ valid, errors }" label="Name">
            <b-form-input
              type="text"
              v-model="user.name"
              :state="errors[0] ? false : (valid ? true : null)"
              placeholder="Enter name">
            </b-form-input>
            <b-form-invalid-feedback>
              {{ errors[0] }}
            </b-form-invalid-feedback>
        </b-form-group>
      </ValidationProvider>
      <ValidationProvider rules="required|email" name="Email">
        <b-form-group 
          slot-scope="{ valid, errors }"
          label="Email">
            <b-form-input
              type="email"
              v-model="user.email"
              :state="errors[0] ? false : (valid ? true : null)"
              placeholder="Enter email">
            </b-form-input>
            <b-form-invalid-feedback>
              {{ errors[0] }}
            </b-form-invalid-feedback>
        </b-form-group>
      </ValidationProvider>
      <ValidationProvider rules="required" name="Mobile">
        <b-form-group 
          slot-scope="{ valid, errors }"
          label="Mobile">
            <b-form-input
              type="text"
              v-model="user.mobile"
              :state="errors[0] ? false : (valid ? true : null)"
              placeholder="Enter mobile no">
            </b-form-input>
            <b-form-invalid-feedback>
              {{ errors[0] }}
            </b-form-invalid-feedback>
        </b-form-group>
      </ValidationProvider>
      <ValidationProvider rules="required" name="Message">
        <b-form-group 
          slot-scope="{ valid, errors }"
          label="Messages">
            <b-form-input
              type="text"
              v-model="user.message"
              :state="errors[0] ? false : (valid ? true : null)"
              placeholder="Enter message no">
            </b-form-input>
            <b-form-invalid-feedback>
              {{ errors[0] }}
            </b-form-invalid-feedback>
        </b-form-group>
      </ValidationProvider>
      <ValidationProvider name="City" rules="required">
        <b-form-group slot-scope="{ valid, errors }" label="City:">
          <b-form-select 
            :state="errors[0] ? false : (valid ? true : null)" 
            v-model="user.city">
            <option value="">Choose</option>
            <option value="CA">Geneve</option>
            <option value="IL">italian</option>
            <option value="LA">New Orleans</option>
            <option value="NM">gare</option>
          </b-form-select>
            <b-form-invalid-feedback>
              {{ errors[0] }}
            </b-form-invalid-feedback>
        </b-form-group>
        </ValidationProvider>
      <b-button block type="submit" variant="primary">Submit</b-button>
      </b-form>
       </ValidationObserver>
       </b-col>
      <b-col>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2761.877517634503!2d6.126591315998909!3d46.19299597911617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478c7b2e1299827b%3A0xb6bbc30dd8e5306f!2zUsOpYWxpc2U!5e0!3m2!1sfr!2sch!4v1635171596685!5m2!1sfr!2sch"
          width="600"
          height="450"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </b-col>
    </b-row>
  </b-container>
</div>
</template>

<script>

  
import { ValidationObserver, ValidationProvider } from 'vee-validate';

import axios from "axios";


export default {
  name:"contact",
  components: {
    ValidationObserver,
    ValidationProvider
  },
  data: () => ({
    user:{
        name: '',
        email: '',
        messages: '',
        mobile: '',
        city: '',
        
    }
  }),
  methods: {
   async handleSubmit () {
     alert(JSON.stringify(this.user));
     await axios.post("http://localhost:3001/messages", {
        name: this.user.name,
        email: this.user.email,
        mobile: this.user.mobile,
        messages: this.user.messages,
      });
    console.log(this.user);

    }
  }
};
  
</script>


<style>
form {
   max-width: 1000px;
   margin: 0 auto; 
   text-align: left;
}
.form-group > label {
    font-weight: 600;
}
input {
  font-size: 50px;
  border: 1px double rgb(102, 97, 96);
  border-radius: 4px;
}

label {
  display: block;
  margin: 20px 0 10px;
}
</style>