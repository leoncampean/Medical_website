<template>
<router-link to="/profile">
  <div class="home-profile">
      <a class="title_profile">Click here to go to Profile</a>
  </div>
  </router-link>
</template>

<script>
export default {

}
</script>

<style>
.home-profile {
  margin: 50px auto;
  width: 90%;
  background-color: rgb(64, 112, 106);
  height: 150px;
  font-size: 40px;
  text-decoration: none;
  border-bottom-left-radius: 500px;
  border-bottom-right-radius: 500px;
  border: 3px solid black;
  color: black;
  margin-bottom: 15px;
  line-height: 150px;
  vertical-align: center;
}

.home-profile a {
  text-decoration: none;
  float: left;
  margin-left: 100px;
  color: black;
}
</style>