<template>
  <div class="root">
    <button @click="isOpen = true">Details</button>
    <teleport to="body">
      <div class="modal" v-if="isOpen">
        <div>
          <h3>{{ patDetails.name }}</h3>
          <ul id="example-1">
            <li>
              {{ patDetails.adress }}
            </li>
            <li>
              {{ patDetails.phone_number }}
            </li>
          </ul>
          <button @click="isOpen = false">Close</button>
        </div>
      </div>
    </teleport>
  </div>
</template>

<script>
import { ref } from "vue";
import axios from "axios";

export default {
  setup() {
    const isOpen = ref(false);

    return { isOpen };
  },
  data() {
    return {
      patDetails: {
        name: "patient not found!",
        adress: "not exist",
        phone_number: "unknoun",
      },
    };
  },
  mounted() {
    let url = this.dbApi + "/patients";
    let buttonValue = 10;
    axios
      .get(url)
      .then((response) => {
        let dataPatient = response.data;
        dataPatient.forEach((patient) => {
          if (buttonValue == patient.patient_id) {
            this.patDetails = patient;
          }
        });
        // console.log('pacientul are datele ', this.patDetails);
      })
      .catch(function (error) {
        console.log(error);
      });
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