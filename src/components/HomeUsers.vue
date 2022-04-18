<template>
<router-link to="/Users" >
    <div class="home-users">
        <a>Click here to redirect to Users Page</a>
        <img src="../assets/users.png">
    </div>
</router-link>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.home-users {
    margin: 50px auto;
    width: 90%;
    background-color:rgb(64, 112, 106);
    height: 150px;
    font-size: 40px;
    text-decoration: none;
    border:3px solid black;
    color: black;
    line-height: 150px;
    vertical-align: center;
}

.home-users a {
    margin-left: 40px;
    float: left;
    margin-left: 100px;
}

.home-users img {
    float: right;
}
</style>