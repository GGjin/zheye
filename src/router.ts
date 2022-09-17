import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';
import Login from './views/Login.vue';
import ColumnDetail from './views/ColumnDetail.vue';

const routerHistory = createWebHistory();
const routes = [
    { path: '/home', name: 'home', component: Home },
    { path: '/login', name: 'login', component: Login },
    { path: '/column', name: 'column', component: ColumnDetail },
];
const router = createRouter({
    history: routerHistory,
    routes,
});
export default router;
