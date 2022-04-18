<template>
<HomePageTitle></HomePageTitle>
<HomePatiens></HomePatiens>
<HomeUsers></HomeUsers>
<HomeAdmin></HomeAdmin>
<LogoutButton></LogoutButton>
</template>

<script>
import HomePageTitle from './HomePageTitle.vue'
import HomePatiens from './HomePatiens.vue'
import HomeUsers from './HomeUsers.vue'
import HomeAdmin from './HomeAdmin.vue'
import LogoutButton from './LogoutButton.vue'





export default {
    name:"HomePage",
    components:{
        HomePageTitle,
        HomePatiens,
        HomeUsers,
        HomeAdmin,
        LogoutButton
    }
}
</script>
