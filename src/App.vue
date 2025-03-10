<script setup lang="ts">
 import { ref } from 'vue';

 const test=ref('test')
</script>

<template>
<VRow class="p-xl-3">
    <VCol class="justify-center ma-12 pa-12">
        <MyButton color='primary'></MyButton>
    </VCol>
</VRow>
<span>{{ test }}</span>
</template>
