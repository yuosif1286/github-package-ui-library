<script setup lang="ts">
 import { ref } from 'vue';
import BaseButton from './components/BaseButton.vue';

 const test=ref('')
</script>

<template>
<VRow class="p-xl-3">
    <VCol class="justify-center ma-12 pa-12">
        <BaseButton></BaseButton>
    </VCol>
</VRow>
<span>{{ test }}</span>
</template>
