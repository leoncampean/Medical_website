<template>
  <div class="login-box">
            <h1>Login</h1>
            <input type="text" placeholder="name">
            <br>
            <input type="password" placeholder="password">
        </div>
        <select name="roles" class="role-selector" required>
      <option value="" disabled selected hidden>Select you role!</option>
      <option value="" disabled selected>Select your role!</option>
      <option value="1">Patient</option>
      <option value="2">User</option>
      <option value="3">Admin</option>
    </select>
    <div class="login-button">
      <router-link to="/Home" >
        <button type="submit">Login</button>
      </router-link>
    </div>
</template>


<script>
  export default {
    data () {
    return {
    }
  },
  methods: {
        onChange(event) {
            console.log(event.target.value)
        }
    }

  }
</script>




<style scoped>
.login-box {
    background-color: rgb(39, 109, 22);
    width:50%;
    margin: auto;
    height: 400px;
    border-top-right-radius: 30px;
    border-top-left-radius: 400px;
    border:5px solid black;
    box-shadow: 1px 2px rgb(113, 122, 114);
    margin-top:60px;

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
    border:2px solid gray;
    border-radius: 10px;
    margin-top: 20px;
}

.login-button button{
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