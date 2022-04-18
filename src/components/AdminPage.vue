<template>
<NavbarComponent></NavbarComponent>
  <div class="admin-main">
      <h3>Use the form bellow to add users!</h3>
    <form class="admin-form">
      <div class="form-group">
        <label for="name">Name:</label>
        <input
          type="text"
          placeholder="Campean"
          v-model="name"
          class="input-patiens"
        />
      </div>
      <div class="form-group2">
        <label for="lname">Last Name:</label>
        <input
          type="text"
          placeholder="Leon"
          v-model="lname"
          class="input-patiens2"
        />
      </div>
      <div class="form-group3">
        <label for="age">Age:</label>
        <input
          type="number"
          placeholder="22"
          v-model="age"
          class="input-patiens2"
        />
      </div>
      <div class="form-group4">
        <label for="score">Score:</label>
        <input
          type="number"
          placeholder="2005"
          v-model="score"
          class="input-patiens2"
        />
      </div>
      <button type="button" @click="onSubmit" class="button">
        Submit
      </button>
      <button type="button" @click="clearForm" class="button2">
        Clear
      </button>
      <br>
    </form>
        <table id="tableAdmin" class="table-admin">
        <thead class="table-admin-header">
            <tr>
            <th scope="col">#</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Age</th>
            <th scope="col">Contribution Score</th>
            <th scope="col">Actions</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th>1</th>
                <td>Campean</td>
                <td>Leon</td>
                <td>22</td>
                <td>12005</td>
                <td>
                <button @click="deleteAdmin" type="submit">Delete</button>
            </td>
            </tr>
            <tr>
                <th>2</th>
                <td>Frim</td>
                <td>Paul</td>
                <td>14</td>
                <td>2068</td>
                <td>
                <button @click="deleteAdmin" type="submit">Delete</button>
            </td>
            </tr>
            <tr>
                <th>3</th>
                <td>Georgescu</td>
                <td>Ana</td>
                <td>30</td>
                <td>1090</td>
                <td>
                <button @click="deleteAdmin" type="submit">Delete</button>
            </td>
            </tr>
            <tr>
                <th>3</th>
                <td>Georgescu</td>
                <td>Ana</td>
                <td>30</td>
                <td>1090</td>
                <td>
                <button @click="deleteAdmin" type="submit">Delete</button>
            </td>
            </tr>
            <tr v-for="(entry, i) in sortedList" :key="i">
            <th scope="row">{{ ++i+3 }}</th>
            <td>{{ entry.name }}</td>
            <td>{{ entry.lname }}</td>
            <td>{{ entry.age }}</td>
            <td>{{ entry.score }}</td>
            <td>
                <button @click="deleteAdmin" type="submit">Delete</button>
            </td>
            </tr>
        </tbody>
        </table>
  </div>
</template>

<script>

import NavbarComponent from './NavbarComponent.vue';
import {deleteRow} from '../assets/JavaScript/delete.js';

export default {
    mounted(){
        deleteRow();
    },
  name: "Leaderboard",
  components:{
      NavbarComponent
  },
  data: () => ({ name: "", lname:"", age:"", score: "", allScores: [], search:'', blogs:[], del:'X'}),
  computed: {
    sortedList: function() {
      return this.allScores.slice().sort(function(a, b) {
        return b.score - a.score;
      });
    },
    filtered(){
        return this.blogs.filter((blog) => {
            return blog.title.match(this.search)
        })
    },
  },
  methods: {
    onSubmit() {
      this.allScores.push({ name:this.name, lname: this.lname, age: this.age, score: this.score });
      this.clearForm();
    },
    clearForm() {
      this.name = "";
      this.lname = "";
      this.age = "";
      this.score = "";
    },
    sortDescendent(){
        return this.allScores.slice().sort(function(a, b) {
        return a.score - b.score;
      });
    },
    deleteAdmin(){
        deleteRow(this);
    }
  },

};
</script>

<style scoped>

.admin-main {
    color: white;
}

.admin-main table {
    margin-left: 10%;
}

.admin-main table td {
    border:1px solid black;
    padding: 25px 80px;
}

.admin-main table th {
    border: 3px solid black;
    padding: 25px 80px;
}

.admin-form {
    background: rgb(168, 164, 164);
    color: black;
    font-weight: bold;
    width: 25%;
    margin: auto;
    padding: 30px 0px;
    border-top-left-radius: 50px;
    border-top-right-radius: 50px;
    margin-bottom: 20px;
    border:3px solid black;
    font-size: 18px;
    box-shadow: 1px 2px whitesmoke;
}

.admin-form .form-group label {
    margin-right: 10px;
}

.admin-form .form-group2 label {
    margin-right: 10px;
}

.admin-form .form-group3 label {
    margin-right: 10px;

}

.admin-form .form-group4 label {
    margin-right: 10px;
}

.admin-form .form-group2 {
    margin-top: 5px;
    margin-right: 36px;
}

.admin-form .form-group3 {
    margin-top: 5px;
    margin-left: 17px;
}

.admin-form .form-group4 {
    margin-top: 5px;
    margin-left: 5px;
    margin-bottom: 5px;
}

button {
    width: 80px;
    height: 50px;
    border-radius: 20px;
    border:2px solid black;
    box-shadow: 2px 3px gray;
}
</style>