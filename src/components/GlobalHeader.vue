<template>
    <nav class="navbar navbar-dark bg-primary justify-content-between mb-4 px-4">
        <router-link to="/home" class="navbar-brand">者也专栏</router-link>
        <ul v-if="!user.isLogin" class="list-inline mb-0">
            <li class="list-inline-item">
                <router-link to="/login" class="btn btn-outlin-light my-2">登录</router-link>
                <router-link to="/login" class="btn btn-outlin-light my-2">注册</router-link>
            </li>
        </ul>
        <ul v-else class="list-inline mb-0">
            <li class="list-inline-item">
                <drop-down :title="`你好${user.name}`">
                    <dropdown-item><a href="#" class="dropdown-item">新建文章</a></dropdown-item>
                    <dropdown-item :disabled="true"><a href="#" class="dropdown-item">编辑资料</a></dropdown-item>
                    <dropdown-item><a href="#" class="dropdown-item">退出登陆</a></dropdown-item>
                </drop-down>
            </li>
        </ul>
    </nav>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import DropDown from './DropDown.vue';
import DropdownItem from './DropdownItem.vue';
export interface UserProps {
    isLogin: boolean;
    name?: string;
    id?: number;
}

export default defineComponent({
    name: 'GlobalHeader',
    components: {
        DropDown,
        DropdownItem,
    },
    props: {
        user: {
            type: Object as PropType<UserProps>,
            required: true,
        },
    },
});
</script>
