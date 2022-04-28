
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
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>{{ user.name }}</td>
          <td>{{ user.username }}</td>
          <td>{{ user.role }}</td>
          <td>Edit</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  setup() {
    // return {
    //   Popup,
    // };
  },
  // components: {
  //   Popup,
  // },
  name: "Leaderboard",
  data: () => ({
    name: "",
    hospital: "",
    allHospitals: [],
    search: "",
    blogs: [],
    del: "X",
    users: [],
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
</style>