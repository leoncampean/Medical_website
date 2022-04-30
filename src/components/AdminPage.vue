<template>
  <NavbarComponent></NavbarComponent>
  <h1>Admin Page</h1>
  <div class="container" style="max-width: 600px">
    <h2>Use this form bellow to asign task</h2>
    <div class="d-flex mt-5">
      <input
        type="text"
        v-model="task"
        placeholder="Enter task"
        class="w-100 form-control"
      />
      <button class="btn btn-warning rounded-0" @click="submitTask">
        SUBMIT
      </button>
    </div>
    <table id="admin_tasks_table" class="table table-bordered mt-5">
      <thead>
        <tr>
          <th scope="col">Task</th>
          <th scope="col" style="width: 120px">Status</th>
          <th scope="col" class="text-center">#</th>
          <th scope="col" class="text-center">#</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(task, index) in tasks" :key="index">
          <td>
            <span :class="{ 'line-through': task.status === 'finished' }">
              {{ task.name }}
            </span>
          </td>
          <td>
            <span
              class="pointer noselect"
              @click="changeStatus(index)"
              :class="{
                'text-danger': task.status === 'to-do',
                'text-success': task.status === 'finished',
                'text-warning': task.status === 'in-progress',
              }"
            >
              {{ capitalizeFirstChar(task.status) }}
            </span>
          </td>
          <td class="text-center">
            <div @click="deleteTask(index)">
              <button>Delete</button>
            </div>
          </td>
          <td class="text-center">
            <div @click="editTask(index)">
              <button>Edit</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <div class="admin-main">
    <h2>Use the form bellow to add users!</h2>
    <form class="admin-form">
      <div class="form-group">
        <label for="name">Name:</label>
        <input
          type="text"
          placeholder="Campean"
          v-model="name1"
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
      <button type="button" @click="onSubmit" class="button">Submit</button>
      <button type="button" @click="clearForm" class="button2">Clear</button>
      <br />
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
          <th scope="row">{{ ++i + 3 }}</th>
          <td>{{ entry.name1 }}</td>
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
import NavbarComponent from "./NavbarComponent.vue";
import { deleteRow } from "../assets/JavaScript/delete.js";

export default {
  components: {
    NavbarComponent,
  },
  name1: "HelloWorld",
  props: {
    msg: String,
  },
  mounted() {
    deleteRow();
  },
  name: "Leaderboard",
  data() {
    return {
      task: "",
      editedTask: null,
      statuses: ["to-do", "in-progress", "finished"],
      tasks: [
        {
          name: "Contact medical personal of Militar hospital",
          status: "to-do",
        },
        {
          name: "Checking contribution score on all users",
          status: "in-progress",
        },
        {
          name: "Email parteners for new jobs",
          status: "finished",
        },
      ],
      name1: "",
      lname: "",
      age: "",
      score: "",
      allScores: [],
      search: "",
      blogs: [],
      del: "X",
    };
  },
  methods: {
    capitalizeFirstChar(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    },
    changeStatus(index) {
      let newIndex = this.statuses.indexOf(this.tasks[index].status);
      if (++newIndex > 2) newIndex = 0;
      this.tasks[index].status = this.statuses[newIndex];
    },
    deleteTask(index) {
      this.tasks.splice(index, 1);
    },
    editTask(index) {
      this.task = this.tasks[index].name;
      this.editedTask = index;
    },
    submitTask() {
      if (this.task.length === 0) return;
      if (this.editedTask != null) {
        this.tasks[this.editedTask].name = this.task;
        this.editedTask = null;
      } else {
        this.tasks.push({
          name: this.task,
          status: "todo",
        });
      }
      this.task = "";
    },
    onSubmit() {
      this.allScores.push({
        name1: this.name1,
        lname: this.lname,
        age: this.age,
        score: this.score,
      });
      this.clearForm();
    },
    clearForm() {
      this.name1 = "";
      this.lname = "";
      this.age = "";
      this.score = "";
    },
    sortDescendent() {
      return this.allScores.slice().sort(function (a, b) {
        return a.score - b.score;
      });
    },
    deleteAdmin() {
      deleteRow(this);
    },
  },
  computed: {
    sortedList: function () {
      return this.allScores.slice().sort(function (a, b) {
        return b.score - a.score;
      });
    },
    filtered() {
      return this.blogs.filter((blog) => {
        return blog.title.match(this.search);
      });
    },
  },
};
</script>

<style scoped>
.pointer {
  cursor: pointer;
}
.noselect {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.line-through {
  text-decoration: line-through;
}
#admin_tasks_table {
  background: white;
  color: black;
}

h1,
h2 {
  color: whitesmoke;
}

h2 {
  margin-top: 40px;
}

.admin-main {
  color: white;
}
.admin-main table {
  margin-left: 10%;
}
.admin-main table td {
  border: 1px solid black;
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
  border: 3px solid black;
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
  border: 2px solid black;
  box-shadow: 2px 3px gray;
}
</style>