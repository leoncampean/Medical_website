import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import LoginPage from './components/LoginPage.vue';
import HomePage from './components/HomePage.vue';
import PatiensPage from './components/PatiensPage.vue';
import UserPage from './components/UserPage.vue';
import AdminPage from './components/AdminPage.vue';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';




const routes = [
    { path:'/', component: LoginPage},
    { path:'/home', component: HomePage},
    { path:'/patiens', component: PatiensPage},
    { path:'/users', component: UserPage},
    { path:'/admins', component: AdminPage},
    {
        path: '/laitek',
        beforeEnter() {location.href = 'https://laitek.com'}
    }

]


const router = createRouter({
    routes: routes,
    history: createWebHistory(),
});


const app = createApp(App);
app.use(router)
app.mount('#app')