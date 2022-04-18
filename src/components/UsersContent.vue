
<template>
  <div class="container">
    <h3>Use the form bellow to add Patients!</h3>
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
    <div class="search-input">
      <input
        type="text"
        @keyup="searchByName"
        class="form-control"
        id="search-box"
        placeholder="Search by name..."
      />
      <input
        type="text"
        @keyup="searchByHospital"
        class="form-control2"
        id="search-box2"
        placeholder="Search by hospital..."
      />
    </div>
    <table id="patientsTable" class="table-patiens">
      <thead class="table-header">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Hospital</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>1</th>
          <td>Campean Leon</td>
          <td>Cluj-Napoca</td>
          <td>
            <Popup> </Popup>
          </td>
        </tr>
        <tr>
          <th>2</th>
          <td>Grigorescu Vlad</td>
          <td>Timisoara</td>
          <td>
            <Popup> </Popup>
          </td>
        </tr>
        <tr>
          <th>3</th>
          <td>Popescu Paul</td>
          <td>Cluj-Napoca</td>
          <td>
            <Popup> </Popup>
          </td>
        </tr>
        <tr>
          <th>4</th>
          <td>Danciulescu Petru</td>
          <td>Cluj-Napoca</td>
          <td>
            <Popup> </Popup>
          </td>
        </tr>
        <tr>
          <th>5</th>
          <td>Paun Cirstian</td>
          <td>Timisoara</td>
          <td>
            <Popup> </Popup>
          </td>
        </tr>
        <tr v-for="(entry, i) in sortedList" :key="i">
          <th scope="row">{{ ++i + 5 }}</th>
          <td>{{ entry.name }}</td>
          <td>{{ entry.hospital }}</td>
          <td>
            <Popup> </Popup>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
// import { ref } from 'vue';
import Popup from "./Popup.vue";
import {searchBar} from "../assets/JavaScript/searchbar.js";
import {searchBar2} from "../assets/JavaScript/searchbar.js";


export default {
    mounted() {
    searchBar();
    searchBar2();
  },
  setup() {
    return {
      Popup,
    };
  },
  components: {
    Popup,
  },
  name: "Leaderboard",
  data: () => ({
    name: "",
    hospital: "",
    allHospitals: [],
    search: "",
    blogs: [],
    del: "X",
  }),
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
    searchByName() {
        searchBar();
    },
    searchByHospital() {
      searchBar2();
    }
  }
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