
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
        <label for="hospital">Hospital:</label>
        <input
          type="text"
          placeholder="Cluj-Napoca"
          v-model="hospital"
          class="input-patiens2"
        />
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
              <button
                @click="
                  isOpen = true;
                  editModal($event)
                "
                :data-id="user.user_id"
              >    
                Details
              </button>
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
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>


<script>
import axios from "axios";
import { ref } from "vue";

let loggedUser = JSON.parse(localStorage.getItem("logedUser"));

export default {
  setup() {
    // components: {
    //   Popup,
    // },
    const isOpen = ref(false);

    return { isOpen };
  },
  name: "Leaderboard",
  data: () => ({
    // name: "",
    hospital: "",
    allHospitals: [],
    search: "",
    blogs: [],
    del: "X",
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
    sortedList: function () {
      return this.allHospitals.slice().sort(function (a, b) {
        return b.hospital - a.hospital;
      });
    },
    filtered() {
      return this.blogs.filter((blog) => {
        return blog.title.match(this.search);
      });
    },
  },
  methods: {
    onSubmit() {
      this.allHospitals.push({ name: this.name, hospital: this.hospital });
      this.clearForm();
    },
    clearForm() {
      this.name = "";
      this.hospital = "";
    },
    editModal: function(event){
      var id = event.target.getAttribute('data-id');
      console.log('data-id este: ',id);
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