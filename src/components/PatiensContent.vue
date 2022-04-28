<template>
  <section>
    <div class="patiens-content">
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
      <table>
        <thead>
          <tr>
            <th>{{ Header.Nume }}</th>
            <th>{{ Header.Spital }}</th>
            <th>{{ Header.Data_Nasterii }}</th>
            <th>{{ Header.Varsta }}</th>
            <th>{{ Header.Details }}</th>
          </tr>
        </thead>
        <tbody id="Patients_body_table">
          <tr v-for="patient in patients" :key="patient.id">
            <td>{{ patient.name }}</td>
            <td>{{ patient.hospital }}</td>
            <td>{{ patient.date_birth }}</td>
            <td>{{ patient.age }}</td>
            <td><ContactPopup></ContactPopup></td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script>
import axios from "axios";
import { searchBar } from "../assets/JavaScript/searchbar.js";
import { searchBar2 } from "../assets/JavaScript/searchbar.js";
import ContactPopup from './ContactPopup.vue'


export default {
  data() {
    return {
      Header: {
        Nume: "Nume",
        Spital: "Spital",
        Data_Nasterii: "Data Nasterii",
        Varsta: "Varsta",
        Details: "Detalii",
      },
      patients: [],
      api: this.dbApi,
    };
  },
  mounted() {
    let url = this.api + "/patients";
    axios
      .get(url)
      .then((response) => {
        this.patients = response.data;
        // console.log("pacienti = ", this.patients);
        // console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  },
  setup() {
    return {
      ContactPopup,
    };
  },
  components: {
    ContactPopup,
  },
  methods: {
    searchByName() {
      searchBar();
    },
    searchByHospital() {
      searchBar2();
    },
  },
};
</script>

<style scoped>
.patiens-content {
  margin-top: 20px;
  color: whitesmoke;
  text-align: center;
}

.patiens-content table td,
th {
  border: 1px solid black;
  padding: 30px 200px;
}

.patiens-content table {
  margin: auto;
  width: 90%;
}

.add-patient {
  margin-top: 25px;
  padding-right: 20px;
  margin-right: 20px;
  width: 80px;
  height: 40px;
}

.remove-patient {
  margin-left: 20px;
  width: 150px;
  height: 40px;
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
</style>