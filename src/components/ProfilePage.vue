<template>
<NavbarComponent></NavbarComponent>
  <h1 class="profile_nav_menu">{{userProfile.name}} Profile</h1>
  <form class="admin-form">
      <div class="form-group2">
        <label for="lname">Username:</label>
        <input
          type="text"
          v-model="userProfile.username"
          readonly
          class="input-patiens2"
        />
      </div>
      <div class="form-group">
        <label for="name">Name:</label>
        <input
          type="text"
          v-model="userProfile.name"
          class="input-patiens"
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
</style>