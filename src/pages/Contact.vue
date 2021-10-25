<template>
  <div><b-form @submit="onSubmit" @reset="onReset">
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
          placeholder="Enter email"
          required

        ></b-form-input>
      </b-form-group>
      </b-form>

       <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.name"
          placeholder="Enter name"
          required
        ></b-form-input>
      </b-form-group>
  
<b-form-group id="input-group-2" label="Message:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.message"
          placeholder="Ecrire message"
          required
        ></b-form-input>
      </b-form-group>
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

      <b-button @click="onSubmit()" type="submit" variant="primary">Submit</b-button>
      <b-button @click="onReset()" type="reset" variant="danger">Reset</b-button>
    
      </div>
      
</template>

<script>
//export {required} from 'vuelidate/lib/validators'
export default {
  name: "Contact",
data() {
      return {
        form: {
          email: '',
          name: '',
          message: null,
          checked: []
        }
        
      }
    },
    methods: {
      onSubmit() { 
        alert(JSON.stringify(this.form))

      },
      onReset() {
        // Reset our form values
        this.form.email = ''
        this.form.name = ''
        this.form.message = null
        this.form.checked = []
        
        // Trick to reset/clear native browser form validation state
        
        
      }






    }

}
</script>

<style scoped>

</style>