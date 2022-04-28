<template>
<HomePageTitle></HomePageTitle>
<HomePatiens></HomePatiens>
<HomeUsers></HomeUsers>
<HomeAdmin></HomeAdmin>
<HomeProfile></HomeProfile>
<LogoutButton></LogoutButton>
</template>

<script>
import HomePageTitle from './HomePageTitle.vue'
import HomePatiens from './HomePatiens.vue'
import HomeUsers from './HomeUsers.vue'
import HomeAdmin from './HomeAdmin.vue'
import LogoutButton from './LogoutButton.vue'
import HomeProfile from './HomeProfile.vue'



export default {
    name:"HomePage",
    components:{
        HomePageTitle,
        HomePatiens,
        HomeUsers,
        HomeAdmin,
        LogoutButton,
        HomeProfile
    }
}
</script>
