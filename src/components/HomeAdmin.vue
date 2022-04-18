<template>
<router-link to="/Admins" >
    <div class="home-patiens">
        <a>Click here to redirect to Admin Page</a>
        <img src="../assets/admin_login.jpg">
    </div>
</router-link>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.home-patiens {
    margin: 50px auto;
    width: 90%;
    background-color:rgb(64, 112, 106);
    height: 150px;
    font-size: 40px;
    text-decoration: none;
    border-bottom-left-radius: 500px;
    border-bottom-right-radius: 500px;
    border:3px solid black;
    color: black;
    margin-bottom: 15px;
    line-height: 150px;
    vertical-align: center;
}

.home-patiens img {
    float:right;
    border-bottom-right-radius: 200px;
}

.home-patiens a {
    text-decoration: none;
    float: left;
    margin-left: 100px;
}
</style>