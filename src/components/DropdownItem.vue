<template>
    <li class="dropdown-option" :class="{ 'is-disabled': disabled }">
        <slot></slot>
        <div class="submit-area">
            <slot name="submit">
                <button type="submit" class="btn btn-primary">提交</button>
            </slot>
        </div>
    </li>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    props: {
        disabled: {
            type: Boolean,
            default: false,
        },
    },
});
</script>

<style>
.dropdown-option.is-disabled * {
    color: #6c757d;
    pointer-events: none;
    background-color: transparent;
}
</style>
