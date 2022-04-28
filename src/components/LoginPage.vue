<template>
  <div class="login-box">
    <h1>Login</h1>
    <input type="text" placeholder="name" name="username" v-model="user" />
    <br />
    <input
      type="password"
      placeholder="password"
      name="password"
      v-model="pdw"
    />
  </div>
  <div class="login-button">
    <router-link to="/Home">
      <button @click="submit" type="submit">Login</button>
    </router-link>
  </div>
</template>


<script>
import { login } from "../assets/JavaScript/connection.js";

export default {
  data() {
    return {
      user: "",
      pdw: "",
    };
  },
  beforeRouteLeave(to, from, next) {
    login().then((result) => {
      let list = result.data,
        userFound = {};

      list.forEach((user) => {
        if (this.user == user.username && this.pdw == user.password) {
          userFound = user;
        }
      });
      if (Object.keys(userFound).length != 0 && userFound.user_id !== "") {
        this.logedUser = userFound;
        localStorage.setItem("logedUser", JSON.stringify(userFound));
        next();
      } else if (!this.user && !this.pdw) {
        alert("Fields are empty.");
      } else if (!this.user) {
        alert("Username required.");
      } else if (!this.pdw) {
        alert("Password required.");
      } else {
        alert("Credentials are wrong.");
      }
    });
  },
  methods: {
    onChange(event) {
      console.log(event.target.value);
    },
    submit: function () {
      setTimeout(function () {
        window.location.reload();
      }, 50);
    },
  },
};
</script>




<style scoped>
.login-box {
  background-color: rgb(39, 109, 22);
  width: 50%;
  margin: auto;
  height: 400px;
  border-top-right-radius: 30px;
  border-top-left-radius: 400px;
  border: 5px solid black;
  box-shadow: 1px 2px rgb(113, 122, 114);
  margin-top: 60px;
}

.login-box h1 {
  color: whitesmoke;
  padding-top: 10px;
  font-size: 30px;
}

.login-box input {
  padding: 10px 15px;
  margin-top: 40px;
  margin-right: 20px;
  margin-left: 20px;
  color: #b6bec7;
  background-color: #b6bec7;
  color: rgb(41, 46, 40);
}

.login-box button {
  margin-top: 20px;
}

.role-selector {
  padding: 10px 20px;
  background-color: rgb(36, 95, 36);
  color: whitesmoke;
  border: 2px solid gray;
  border-radius: 10px;
  margin-top: 20px;
}

.login-button button {
  margin-top: 50px;
  width: 300px;
  height: 100px;
  border-bottom-right-radius: 100px;
  border-bottom-left-radius: 100px;
  border-top-right-radius: 30px;
  border-top-left-radius: 30px;
  background-color: rgb(36, 95, 36);
  font-size: 20px;
  color: whitesmoke;
}
</style>