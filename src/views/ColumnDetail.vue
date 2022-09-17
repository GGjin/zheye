<template>
    <h1>
        <pre
            >{{ route }}
        </pre>
    </h1>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';
import { GlobalDataProps } from '../store';
export default defineComponent({
    setup() {
        const route = useRoute();
        const store = useStore<GlobalDataProps>();
        const currentId = +route.params.id;
        const column = computed(() => store.getters.getColumnById(currentId));
        const list = computed(() => store.getters.getPostsByCid(currentId));
        return { route, list, column };
    },
});
</script>

<style scoped>
</style>
