<template>
    <div class="container">
        <div id="app"></div>
        <global-header :user="currentUser" />
        <router-view />
        <footer class="text-center py-4 text-secondary bg-light mt-6">
            <small>
                <ul class="list-inline mb-0">
                    <li class="list-inline-item">@ 2020者也专栏</li>
                    <li class="list-inline-item">课程</li>
                    <li class="list-inline-item">文档</li>
                    <li class="list-inline-item">联系</li>
                    <li class="list-inline-item">更多</li>
                </ul>
            </small>
        </footer>
    </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useStore } from 'vuex';
import 'bootstrap/dist/css/bootstrap.min.css';
import GlobalHeader from './components/GlobalHeader.vue';

export default defineComponent({
    name: 'App',
    components: {
        GlobalHeader,
    },
    setup() {
        const store = useStore();
        const currentUser = computed(() => store.state.user);
        return { currentUser };
    },
});
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
