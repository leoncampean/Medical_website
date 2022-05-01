<template>
<NavbarComponent></NavbarComponent>
<UsersContent></UsersContent>
</template>

<script>
import UsersContent from './UsersContent.vue'
import NavbarComponent from './NavbarComponent.vue'



export default {
    name:"UsersPage",
    components:{
        UsersContent,
        NavbarComponent
    }
}
</script>