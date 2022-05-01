
<template>
  <div class="container">
    <h3>Use the form bellow to add User!</h3>
    <form class="user-form">
      <div class="form-group">
        <label for="name">Name:</label>
        <input
          type="text"
          placeholder="Campean Leon"
          v-model="name"
          class="input-patiens"
        />
      </div>
      <div class="form-group">
        <label for="username">Username:</label>
        <input
          type="text"
          placeholder="cleon"
          v-model="username"
          class="input-patiens2"
        />
      </div>
      <div class="form-group">
        <label for="role">Role:</label>
       <select
        name="selectHospital"
        id="hospitalDropdown"
        v-model="role"
        @input="searchDropdown"
      >
        <option value="" disabled selected>--select role--</option>
        <option v-for="option in options" :key="option">{{ option }}</option>
      </select>
      </div>
      <button type="button" @click="onSubmit" class="button">Submit</button>
      <button type="button" @click="clearForm" class="button2">Clear</button>
      <br />
    </form>
    <table id="patientsTable" class="table-patiens">
      <thead class="table-header">
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Username</th>
          <th scope="col">Role</th>
          <th v-show="isAdmin">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, index) in users" :key="index">
          <td>{{ user.name }}</td>
          <td>{{ user.username }}</td>
          <td>{{ user.role }}</td>
          <td v-show="isAdmin">
            <div class="root">
              <EditPopup></EditPopup>
              <button @click="deleteUser">Delete</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>


<script>
import axios from "axios";
import { ref } from "vue";
import EditPopup from "./EditPopup.vue";
import { deleteRow2 } from "../assets/JavaScript/delete.js";


let loggedUser = JSON.parse(localStorage.getItem("logedUser"));

export default {
  components: {
      EditPopup,
    },
  setup() {
    
    const isOpen = ref(false);

    return { isOpen };
  },
  name: "Leaderboard",
  data: () => ({
    users: [],
    user: loggedUser,
    isAdmin: loggedUser.role == "admin",
    patDetails: {
      name: "patient not found!",
      adress: "not exist",
      phone_number: "unknoun",
    },
  }),

  mounted() {
    let url = this.dbApi + "/users";
    axios
      .get(url)
      .then((response) => {
        this.users = response.data;
        console.log("pacienti = ", this.users);
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
    let buttonValue = 1;

    axios
      .get(url)
      .then((response) => {
        let dataPatient = response.data;
        dataPatient.forEach((patient) => {
          if (buttonValue == patient.patient_id) {
            this.patDetails = patient;
          }
        });
        console.log("pacientul are datele ", this.patDetails);
      })
      .catch(function (error) {
        console.log(error);
      });
  },
  computed: {
    options() {
      return Object.keys(this.users).map((k) => {
        let o = this.users[k];
        return `${o.role}`;
      });
    },
  },
  methods: {
    onSubmit() {
      this.users.push({ name: this.name, username: this.username, role: this.role });
      this.clearForm();
    },
    clearForm() {
      this.name = "";
      this.username = "";
      this.role = "";
    },
    editModal: function(event){
      var id = event.target.getAttribute('data-id');
      console.log('data-id este: ',id);
    },
    deleteUser(){
      deleteRow2(this);
    }
  },
};
</script>

<style scoped>
.container {
  text-align: center;
  color: white;
}

.container table {
  margin-left: 19%;
  margin-top: 30px;
  width: 60%;
}

.container table td {
  border: 1px solid black;
  padding: 40px 120px;
}

.table-header th {
  border: 3px solid black;
}

.button {
  margin-top: 10px;
  width: 80px;
  height: 40px;
  border-radius: 15px;
  margin-right: 3px;
}

.button2 {
  margin-top: 10px;
  width: 80px;
  height: 40px;
  border-radius: 15px;
  margin-left: 3px;
}

.input-patiens {
  width: 150px;
  height: 25px;
  border-radius: 10px;
}

.input-patiens2 {
  margin-top: 5px;
  width: 150px;
  height: 25px;
  margin-right: 19px;
  border-radius: 10px;
}

label {
  font-size: 18px;
  font-weight: bold;
  margin-right: 10px;
}

.form-control {
  width: 35%;
  margin: auto;
  font-size: 16px;
  border: 2px solid black;
  border-radius: 20px;
  height: 50px;
  margin-bottom: 10px;
}

.form-control2 {
  width: 35%;
  margin: auto;
  font-size: 16px;
  border: 2px solid black;
  border-radius: 20px;
  height: 50px;
}

.user-form {
  background: rgb(168, 164, 164);
  color: black;
  font-weight: bold;
  width: 25%;
  margin: auto;
  padding: 30px 0px;
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
  margin-bottom: 20px;
  border: 3px solid black;
  font-size: 18px;
  box-shadow: 1px 2px whitesmoke;
}

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