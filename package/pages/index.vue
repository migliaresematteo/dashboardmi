<script setup lang="ts">
import SalesOverview from '@/components/dashboard/SalesOverview.vue';
import YearlyBreakup from '@/components/dashboard/YearlyBreakup.vue';
import MonthlyEarning from '@/components/dashboard/MonthlyEarnings.vue';
import MonthlyOrders from '@/components/dashboard/MonthlyOrders.vue';
import RiderDeliveries from '@/components/dashboard/RiderDeliveries.vue';
import PostalCodeDeliveries from '@/components/dashboard/PostalCodeDeliveries.vue';
import PaymentTypes from '@/components/dashboard/PaymentTypes.vue';
import B2BOrders from '@/components/dashboard/B2BOrders.vue';
import EnvironmentalImpact from '@/components/dashboard/EnvironmentalImpact.vue';
</script>

<template>
  <v-card class="bg-transparent" elevation="0">
    <v-card-text class="pa-1">
      <h1 class="text-h4 font-weight-medium mb-5">Dashboard Mercato Itinerante - Amministrativa</h1>
      
      <v-row>
        <v-col cols="12" sm="6" lg="4">
          <YearlyBreakup />
        </v-col>
        <v-col cols="12" sm="6" lg="4">
          <MonthlyEarning />
        </v-col>
        <v-col cols="12" sm="12" lg="4">
          <SalesOverview />
        </v-col>
      </v-row>
      
      <v-row>
        <v-col cols="12" lg="12">
          <MonthlyOrders />
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" lg="12">
          <RiderDeliveries />
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" lg="12">
          <PostalCodeDeliveries />
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" lg="12">
          <PaymentTypes />
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" lg="12">
          <B2BOrders />
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" lg="12">
          <EnvironmentalImpact />
        </v-col>
      </v-row>

      <!-- Placeholder per le altre sezioni -->
      <v-row>
        <v-col cols="12">
          <v-card class="pa-5">
            <v-card-text class="text-center">
              <h3 class="text-h5 mb-2">Sezioni da implementare:</h3>
              <ul class="text-left">
                <li>Dashboard Venditore</li>
              </ul>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      
      <v-row>
        <v-col class="text-center mt-2">
          <p class="text-muted">Mercato Itinerante - Dashboard Amministrativa</p>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<style scoped>
.page-wrapper {
    padding: 24px;
}
</style>