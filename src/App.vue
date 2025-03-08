<script setup lang="ts">
 import { ref } from 'vue';

 const test=ref('this test word')
</script>

<template>
<VRow class="p-xl-3">
    <VCol class="justify-center ma-12 pa-12">
    this is exported to library
        <MyButton color='primary'></MyButton>
    </VCol>
    <v-container class="fill-height">
    <v-responsive class="d-flex align-center text-center fill-height">
      <div class="text-body-2 font-weight-light mb-n1">Welcome to</div>

      <h1 class="text-h1">Vuetify</h1>

      <div class="py-5" />

      <v-row class="d-flex align-center justify-center">
        <v-btn color="primary">
      <v-icon>mdi-home</v-icon> <!-- Material Design Icon -->
      Home
    </v-btn>
        <v-col cols="auto"> <v-btn color="primary"> Primary </v-btn> </v-col>
        <v-col cols="auto">
          <v-btn color="secondary"> Secondary </v-btn>
        </v-col>
        <v-col cols="auto"> <v-btn color="error"> Error </v-btn> </v-col>
      </v-row>

      <v-row class="d-flex align-center justify-center">
        <v-col cols="auto">
          <v-btn color="info"> Info </v-btn>
        </v-col>
        <v-col cols="auto">
          <v-btn color="success"> Success </v-btn>
        </v-col>
        <v-col cols="auto">
          <v-btn color="warning"> Warning </v-btn>
        </v-col>
        <v-col cols="auto">
          <v-btn color="darken2"> light Blue </v-btn>
        </v-col>
      </v-row>
    </v-responsive>
  </v-container>
</VRow>
<span class="hello">{{ test }}</span>
</template>
<style lang="scss">
.hello{
    background-color: $primary;
}
</style>