<script setup lang="ts">
import { computed } from "vue";
type BaseButtonProps = {
  size?: number;
  color?: string;
};

const props = withDefaults(defineProps<BaseButtonProps>(), {
});

const fontSize = computed(() => `${props.size}px`);
</script>

<template>
    <v-btn v-bind="props">
    <slot>Click Me</slot>
  </v-btn>
</template>

