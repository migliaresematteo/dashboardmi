<script setup lang="ts">
import EnvironmentalImpact from '@/components/dashboard/EnvironmentalImpact.vue';
</script>

<template>
  <v-card class="bg-transparent" elevation="0">
    <v-card-text class="pa-1">
      <h1 class="text-h4 font-weight-medium mb-5">Impatto Ambientale</h1>
      
      <v-row>
        <v-col cols="12" lg="12">
          <EnvironmentalImpact />
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>