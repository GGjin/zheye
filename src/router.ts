import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';
import Login from './views/Login.vue';
import ColumnDetail from './views/ColumnDetail.vue';
import store from './store';

const routerHistory = createWebHistory();
const routes = [
    { path: '/home', name: 'home', component: Home },
    { path: '/login', name: 'login', component: Login, meta: { redirectAlreadyLogin: true } },
    { path: '/column', name: 'column', component: ColumnDetail, meta: { requiredLogin: true } },
];
const router = createRouter({
    history: routerHistory,
    routes,
});
router.beforeEach((to, from, next) => {
    if (to.meta.requiredLogin && !store.state.user.isLogin) {
        next({ name: 'login' });
    } else if (to.meta.redirectAlreadyLogin && store.state.user.isLogin) {
        next('/');
    } else {
        next();
    }
});
export default router;
