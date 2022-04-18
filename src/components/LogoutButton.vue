<template>
    <div class="logout-button">
        <router-link to="/">
            <button type="submit">Logout?</button>
        </router-link>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.logout-button {
    background-color: rgb(36, 95, 36);
    width: 9%;
    margin: auto;
    border-radius: 30px;
}
.logout-button button {
    padding: 30px 20px;
    border-top-right-radius: 30px;
    border-bottom-left-radius: 30px;
    margin: 10px 0px;
    border:1px double whitesmoke;
    background-color: #2c3e50;
    color: whitesmoke;
}
</style>