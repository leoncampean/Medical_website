<template>
  <router-link to="/Patiens">
    <div v-show="isAdmin" class="home-patiens">
      <a>Click here to redirect to Patiens Page</a>
      <img src="../assets/story_main.jpg" />
    </div>
  </router-link>
</template>

<script>
let loggedUser = JSON.parse(localStorage.getItem("logedUser") || 0),
    role = loggedUser.role == "admin";

export default {
  data() {
    return {
      isAdmin: role,
    };
  },
};
</script>

<style scoped>
.home-patiens {
  margin-top: 50px;
  width: 90%;
  margin: 50px auto;
  background-color: rgb(64, 112, 106);
  height: 150px;
  font-size: 40px;
  text-decoration: none;
  border-top-left-radius: 500px;
  border-top-right-radius: 500px;
  border: 3px solid black;
  color: black;
  line-height: 150px;
  vertical-align: center;
}

.home-patiens a {
  float: left;
  margin-left: 100px;
}

.home-patiens img {
  float: right;
  border-top-right-radius: 2000px;
}
</style>