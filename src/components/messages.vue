<template>
  <di>
    <h1>messages</h1>
    <ul>
      <li v-for="message of messages" :key="message.id">
        {{ messages.name }}
      </li>
    </ul>
  </di>
</template>

<script>
import axios from "axios";

export default {
  name: "messages.vue",
  data() {
    return {
      messages: []
    };
  },
  async created() {
    try {
      const res = await axios.get(`http://localhost:3001/messages`);

      this.messages = res.data;
    } catch (e) {
      console.error(e);
    }
  },
  methods: {
    async addMessages() {
      try {
        const res = await axios.post('http://localhost:3001/messages', { name: this.messagesName });

        this.todos = [...this.messages, res.data];

        this.messagesName = "";
      } catch (e) {
        console.error(e);
      }
    }
  }
};
</script>

<style >

</style>