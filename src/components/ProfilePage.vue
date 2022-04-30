<template>
<NavbarComponent></NavbarComponent>
  <h1 class="profile_nav_menu">{{userProfile.name}} Profile</h1>
  <div class="admin-subform1">
    <form>
      <h4>Your user informations</h4>
      <div>
        <p>{{userProfile.name}}</p>
        <label for="name">Name</label>
        <p>{{userProfile.username}}</p>
        <label for="name">Username</label>
        <p>{{userProfile.role}}</p>
        <label for="name">Role</label>
        <p>{{userProfile.password}}</p>
        <label for="name">Password</label>
      </div>
    </form>
  </div>
  <form class="admin-subform2">

    <h2>Use the form bellow to edit your user details</h2>

     <div class="form-group">
        <label for="name">Name:</label>
        <input
          type="text"
          v-model="userProfile.name"
          class="input-patiens"
        />
      </div>
      <div class="form-group2">
        <label for="lname">Username:</label>
        <input
          type="text"
          v-model="userProfile.username"
          class="input-patiens2"
        />
      </div>
      
      <div class="form-group3">
        <label for="age">Role:</label>
        <input
          type="text"
          v-model="userProfile.role"
          readonly
          class="input-patiens2"
        />
      </div>
      <div class="form-group4">
        <label for="score">Password:</label>
        <input
          type="password"
          placeholder="password"
          v-model="userProfile.password"
          class="input-patiens2"
        />
      </div>
      <div class="form-group4">
        <label for="score">Confirm Password:</label>
        <input
          type="password"
          placeholder="confirm password"
          v-model="userProfile.confirmPassword"
          class="input-patiens2"
        />
      </div>
    </form>
</template>

<script>

import NavbarComponent from './NavbarComponent.vue'

let loggedUser= JSON.parse(localStorage.getItem('logedUser'));

export default {
    name:"ProfilePage",
    components:{
        NavbarComponent,
    },
    data() {
        return {
            userProfile: loggedUser
        }
    }
}
</script>

<style>
.profile_nav_menu { 
    color: whitesmoke;
    margin-top: 100px;
}

.admin-subform1 {
  background: rgb(13, 30, 50);
  color: whitesmoke;
  width: 40%;
  margin:auto;
  margin-bottom: 20px;
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
}

.admin-subform1 p {
  background:whitesmoke;
  color: black;
  font-size: 20px;
  width: 60%;
  margin: auto;
  margin-top: 10px;
  border-radius: 20px;
  font-weight: bold;
}

.admin-subform1 label {
  font-weight: bold;
}

.admin-subform1 h4 {
  margin-bottom: 40px;
}
.admin-subform2 h2 {
  margin-bottom: 40px;
}

.admin-subform2 {
  background: rgb(13, 30, 50);
  color: whitesmoke;
  width: 50%;
  margin:auto;
  margin-top: 50px;
  border-bottom-left-radius: 40px;
  border-bottom-right-radius: 40px;
}

.admin-subform2 label {
  font-weight: bold;
}
</style>