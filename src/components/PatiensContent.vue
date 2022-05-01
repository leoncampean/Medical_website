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
      <select
        name="selectHospital"
        id="hospitalDropdown"
        v-model="patient"
        @input="searchDropdown"
      >
        <option value="" disabled selected>--select hospital--</option>
        <option v-for="option in options" :key="option">{{ option }}</option>
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
            <td>
              <div class="root">
                <button @click="
                  isOpen = true;
                  contactModal($event)
                "
                :data-id="patient.patient_id">
                Details</button>
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
  </section>
</template>

<script>
import axios from "axios";
import { searchBar } from "../assets/JavaScript/searchbar.js";
import { filterTable } from "../assets/JavaScript/searchbar.js";
import { ref } from "vue";

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

      patDetails: {
        name: "patient not found!",
        adress: "not exist",
        phone_number: "unknoun",
      },
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
      return Object.keys(this.patients).map((k) => {
        let o = this.patients[k];
        return `${o.hospital}`;
      });
    },
  },
  setup() {
    const isOpen = ref(false);

    return { isOpen };
  },

  methods: {
    searchByName() {
      searchBar();
    },
    searchDropdown() {
      filterTable();
    },
    contactModal: function(event){
      var id = event.target.getAttribute('data-id');
      console.log('data-id este: ',id);
      //Am reusit sa aflu id ul pacientului in urma apasarii butonului, mai trebuia sa aloc valoarea variabilei buttonValue de mai sus dar nu am reusit..
      //Aceeasi logica am vrut sa o aplic si pentru butonul de edit pentru users
    }
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

select {
  width: 200px;
  height: 40px;
  font-size: 17px;
  font-weight: bold;
  border-radius: 10px;
  margin-bottom: 20px;
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