<script setup lang="ts">
 import { ref } from 'vue';
import AppTextField from './@core/components/AppTextField.vue';

 const test=ref('')
</script>

<template>
<VRow class="p-xl-3">
    <VCol>
        <AppTextField label="test" v-model="test"/>
    </VCol>
</VRow>
<span>{{ test }}</span>
</template>
