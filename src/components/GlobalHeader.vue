<template>
  <nav class="navbar navbar-dark bg-primary justify-content-between mb-4 px-4">
    <a href="#" class="navbar-brand">者也专栏</a>
    <ul v-if="!user.isLogin" class="list-inline mb-0">
      <li class="list-inline-item">
        <a href="#" class="btn btn-outlin-light my-2">登录</a>
        <a href="#" class="btn btn-outlin-light my-2">注册</a>
      </li>
    </ul>
    <ul v-else class="list-inline mb-0">
      <li class="list-inline-item">
        <dropdown :title="`你好${user.name}`" />
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import Dropdown from "./Dropdown.vue";
export interface UserProps {
  isLogin: boolean;
  name?: string;
  id?: number;
}

export default defineComponent({
  name: "GlobalHeader",
  components: {
    Dropdown,
  },
  props: {
    user: {
      type: Object as PropType<UserProps>,
      required: true,
    },
  },
});
</script>
