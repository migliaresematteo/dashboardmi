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
    
    <!-- Placeholder for future components -->
    <v-row>
      <v-col cols="12" class="text-center mt-6">
        <p class="text-body-1">
          Altre sezioni in fase di implementazione:
        </p>
        <v-chip-group>
          <v-chip color="primary" variant="outlined">Consegna per Rider</v-chip>
          <v-chip color="primary" variant="outlined">Consegna per CAP</v-chip>
          <v-chip color="primary" variant="outlined">Tipologia di Pagamento</v-chip>
          <v-chip color="primary" variant="outlined">Ordini B2B</v-chip>
          <v-chip color="primary" variant="outlined">Tabelle Impatto</v-chip>
          <v-chip color="primary" variant="outlined">Dashboard Venditore</v-chip>
        </v-chip-group>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.page-wrapper {
  padding: 24px;
}
</style>