<template>
  <div class="root">
    <button @click="isOpen = true">Edit</button>
    <teleport to="body">
      <div class="modal" v-if="isOpen">
        <div>
          <h2>{{ Title }}</h2>
          First Name:<input type="text" name="fname" id="fname" /><br /><br />
          Last Name:<input type="text" name="lname" id="lname" /><br /><br />
          Age:<input type="text" name="age" id="age" /><br /><br />
          <button @click="editUser">Confirm Edit</button><br /><br />
          <button @click="isOpen = false">Close</button>
        </div>
      </div>
    </teleport>
  </div>
</template>

<script>
import { ref } from "vue";
import { editRow } from "../assets/JavaScript/editRow.js";

export default {
  setup() {
    const isOpen = ref(false);

    return { isOpen };
  },
  data() {
    return {
      Title: "Edit this user",
    };
  },
  methods: {
    editUser() {
      editRow();
    },
  },
};
</script>

<style scoped>
button {
  width: 80px;
  height: 50px;
  border-radius: 20px;
  border: 2px solid black;
  box-shadow: 2px 3px gray;
}

.root {
  position: relative;
}

.modal {
  position: fixed;
  margin-top: 10%;
  margin-left: 25%;
  background: #2c3e50;
  width: 50%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 3px solid black;
  border-radius: 30px;
}

.modal > div {
  background: whitesmoke;
  padding: 50px;
  border-radius: 10px;
}
</style>