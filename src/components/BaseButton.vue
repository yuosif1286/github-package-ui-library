<script setup lang="ts">
import { computed } from "vue";
type BaseButtonProps = {
  text?:string
  size?: number;
  color?: string;
};

const props = withDefaults(defineProps<BaseButtonProps>(), {
  text:'this test libraary',
  color:'primary'
});

const fontSize = computed(() => `${props.size}px`);
</script>

<template>
    <v-btn v-bind="props">
    <slot>Click Me</slot>
  </v-btn>
</template>

