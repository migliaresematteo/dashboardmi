<script setup lang="ts">
import MonthlyOrders from '@/components/dashboard/MonthlyOrders.vue';
</script>

<template>
  <v-container fluid class="page-wrapper">
    <v-row>
      <v-col cols="12">
        <h1 class="text-h4 font-weight-bold mb-6">Dashboard Mercato Itinerante - Amministrativa</h1>
      </v-col>
    </v-row>
    
    <v-row>
      <v-col cols="12">
        <MonthlyOrders />
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.page-wrapper {
  padding: 24px;
}
</style>