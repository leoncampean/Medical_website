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
      </div>
      <h4>Use this dropdown to filter by hospital</h4>
      <select name="selectHospital" id="hospitalDropdown" v-model="patient" @input="searchDropdown">
        <option value="" disabled selected>--select hospital--</option>
        <option v-for="option in options" :key="option">{{option}}</option>
        <option selected="selected">All</option>
      </select>

      <table id="patiens-table">
        <thead>
          <tr>
            <th col-index="1">{{ Header.Nume }}</th>
            <th col-index="2">{{ Header.Spital }}</th>
            <th col-index="3">{{ Header.Data_Nasterii }}</th>
            <th col-index="4">{{ Header.Varsta }}</th>
            <th col-index="5">{{ Header.Details }}</th>
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
import { filterTable } from "../assets/JavaScript/searchbar.js";
import ContactPopup from "./ContactPopup.vue";

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
      selectedOption: null
    };
  },
  mounted() {
    let url = this.api + "/patients";
    axios
      .get(url)
      .then((response) => {
        this.patients = response.data;
      })
      .catch(function (error) {
        console.log(error);
      });
  },
  computed:{
    options(){
      return Object.keys(this.patients).map(k => {
        let o = this.patients[k]
        return `${o.hospital}`
      })
    }
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
    searchDropdown() {
      filterTable();
    }
  }
}
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

select {
  width: 200px;
  height: 40px;
  font-size: 17px;
  font-weight: bold;
  border-radius: 10px;
  margin-bottom: 20px;
}
</style>