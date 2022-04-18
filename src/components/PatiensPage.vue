<template>
<NavbarComponent></NavbarComponent>
<PatiensTitle></PatiensTitle>
<PatiensContent></PatiensContent>
<PopupPatiens></PopupPatiens>

</template>

<script>
import PatiensTitle from './PatiensTitle.vue'
import PatiensContent from './PatiensContent.vue'
import NavbarComponent from './NavbarComponent.vue'
import PopupPatiens from './PopupPatiens.vue'





export default {
    name:"PatiensPage",
    components:{
        PatiensTitle,
        PatiensContent,
        NavbarComponent,
        PopupPatiens
    }
}
</script>