<template>
  <div class="dropdown" ref="dropdownRef">
    <a href="#" class="btn btn-outlin-light my-2 dropdown-toggle" @click.prevent="toggleOpen">{{ title }}</a>
    <ul class="drop-down-menu" :style="{ display: 'block' }" v-if="isOpen">
      <slot></slot>
    </ul>
  </div>
</template>

<script lang="ts">
import useClickOutside from "@/hook/userClickOutside";
import { defineComponent, ref, watch } from "vue";

export default defineComponent({
  name: "DropDown",
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  setup() {
    const isOpen = ref(false);
    const dropdownRef = ref<null | HTMLElement>(null)
    const toggleOpen = () => {
      isOpen.value = !isOpen.value;
    };

    const isClickOutside = useClickOutside(dropdownRef)

    watch(isClickOutside, () => {
      if (isOpen.value && isClickOutside.value) {
        isOpen.value = false
      }
    })

    return { isOpen, toggleOpen, dropdownRef, isClickOutside };
  },
});
</script>
