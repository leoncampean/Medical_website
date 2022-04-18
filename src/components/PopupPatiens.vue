<template>
 <div class="root">
     <button @click="isOpen = true">More Details</button>
     <teleport to="body">
         <div class="modal" v-if="isOpen">
             <div>
                 <h2>{{Title}}</h2>
                 <p>This is the list of our patients!</p>
                 <p>You can only view the patients name and the hospital location.</p>
                 <p>If you have admin or user role, please visit the other pages for more informations and actions</p>
                 <p>For new patiens please contact us on:</p>
                 <router-link to="/laitek">
                 <a target="_blank">Click Here</a>
                 </router-link>     
                 <br>
                 <button @click="isOpen = false">Close</button>
             </div>
         </div>
     </teleport>
 </div>
</template>

<script>
import { ref } from "vue";


export default {
  setup() {
    const isOpen = ref(false);

    return { isOpen };
  },
   data(){
        return {
            Title:"Details",
            url:"Click Here"
        }
    }
};
</script>

<style scoped>

button {
    margin-top:10px;
    width: 150px;
    height: 50px;
    border-radius: 20px;
    border:2px solid black;
    box-shadow: 2px 3px gray;
}

.root {
    position: relative;
}

.modal {
    position:fixed;
    margin-top: 10%;
    margin-left: 25%;
    background: #2c3e50;
    width: 50%;
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 3px solid black;
    border-radius: 30px;
}

.modal >div {
    background: whitesmoke;
    padding: 50px;
    border-radius: 10px;
}

a {
    text-decoration: none;
    color: tomato;
}
</style>