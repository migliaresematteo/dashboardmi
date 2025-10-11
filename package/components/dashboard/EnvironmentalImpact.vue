<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';

// 1. TypeScript Interface per i dati
interface EnvironmentalData {
  month: string;
  year: number;
  co2Saved: number;
  plasticSaved: number;
  waterSaved: number;
  localProducts: number;
  organicProducts: number;
  deliveryDistance: number;
  deliveryEmissions: number;
}

// 2. Stato reattivo
const isLoading = ref(true);
const search = ref('');
const environmentalData = ref<EnvironmentalData[]>([]);
const lastUpdate = ref('');
// Aggiungiamo un filtro per anno per maggiore flessibilità
const years = computed(() => [...new Set(environmentalData.value.map(d => d.year))]);
const selectedYear = ref(new Date().getFullYear());


// 3. Logica di calcolo (Computed Properties)
// Filtra i dati per anno prima di passarli alla tabella
const filteredData = computed(() => 
    environmentalData.value.filter(d => d.year === selectedYear.value)
);

// 4. Configurazione dei KPI: IL CUORE DELLA SEMPLIFICAZIONE
// Definiamo ogni metrica una sola volta. Il template si adatterà automaticamente.
const kpiConfig = [
  { key: 'co2Saved', label: 'CO2 Risparmiata', unit: 'kg', icon: 'mdi-molecule-co2', color: 'success', type: 'sum' },
  { key: 'plasticSaved', label: 'Plastica Risparmiata', unit: 'kg', icon: 'mdi-recycle-variant', color: 'info', type: 'sum' },
  { key: 'waterSaved', label: 'Acqua Risparmiata', unit: 'L', icon: 'mdi-water-outline', color: 'primary', type: 'sum' },
  { key: 'localProducts', label: 'Prodotti Locali', unit: '%', icon: 'mdi-map-marker-outline', color: 'teal', type: 'avg' },
  { key: 'organicProducts', label: 'Prodotti Biologici', unit: '%', icon: 'mdi-leaf-outline', color: 'green', type: 'avg' },
  { key: 'deliveryDistance', label: 'Distanza Consegne', unit: 'km', icon: 'mdi-truck-outline', color: 'warning', type: 'sum' },
  { key: 'deliveryEmissions', label: 'Emissioni Consegne', unit: 'kg CO₂', icon: 'mdi-factory', color: 'error', type: 'sum' },
];

// Calcoliamo dinamicamente i valori dei KPI in base alla configurazione
const kpiTotals = computed(() => {
    const data = environmentalData.value; // Calcola sempre sul totale
    if (data.length === 0) return [];
    
    return kpiConfig.map(kpi => {
        let value = 0;
        if (kpi.type === 'sum') {
            value = data.reduce((acc, item) => acc + item[kpi.key as keyof EnvironmentalData], 0);
        } else if (kpi.type === 'avg') {
            value = data.reduce((acc, item) => acc + item[kpi.key as keyof EnvironmentalData], 0) / data.length;
        }
        return { ...kpi, value };
    });
});

// 5. Headers per la v-data-table
const headers = [
  { title: 'Mese', key: 'month', align: 'start' },
  { title: 'CO₂ Risparm. (kg)', key: 'co2Saved', align: 'end' },
  { title: 'Plastica (kg)', key: 'plasticSaved', align: 'end' },
  { title: 'Acqua (L)', key: 'waterSaved', align: 'end' },
  { title: 'Prod. Locali (%)', key: 'localProducts', align: 'end' },
  { title: 'Prod. Bio (%)', key: 'organicProducts', align: 'end', class: 'd-none d-sm-table-cell' },
  { title: 'Distanza (km)', key: 'deliveryDistance', align: 'end', class: 'd-none d-md-table-cell' },
  { title: 'Emissioni (kg CO₂)', key: 'deliveryEmissions', align: 'end', class: 'd-none d-md-table-cell' },
];

// 6. Azioni e Lifecycle
const formatMetric = (value: number, unit: string) => `${unit === '%' ? value.toFixed(1) : value.toLocaleString('it-IT')} ${unit}`;
const exportToCSV = () => { /* La tua logica CSV è corretta */ };
const exportToPDF = () => alert('Funzionalità PDF in sviluppo');
const refreshData = () => { lastUpdate.value = new Date().toLocaleString('it-IT'); };

onMounted(() => {
  setTimeout(() => {
    environmentalData.value = [
      { month: 'Gennaio', year: 2025, co2Saved: 1250, plasticSaved: 320, waterSaved: 5600, localProducts: 85, organicProducts: 62, deliveryDistance: 1200, deliveryEmissions: 180 },
      { month: 'Febbraio', year: 2025, co2Saved: 1320, plasticSaved: 350, waterSaved: 6100, localProducts: 88, organicProducts: 65, deliveryDistance: 1350, deliveryEmissions: 195 },
      { month: 'Marzo', year: 2025, co2Saved: 1450, plasticSaved: 380, waterSaved: 6500, localProducts: 90, organicProducts: 70, deliveryDistance: 1400, deliveryEmissions: 210 },
      { month: 'Aprile', year: 2025, co2Saved: 1380, plasticSaved: 360, waterSaved: 6200, localProducts: 87, organicProducts: 68, deliveryDistance: 1380, deliveryEmissions: 200 },
      { month: 'Maggio', year: 2025, co2Saved: 1520, plasticSaved: 400, waterSaved: 6800, localProducts: 92, organicProducts: 72, deliveryDistance: 1450, deliveryEmissions: 220 }
    ];
    selectedYear.value = 2025;
    lastUpdate.value = new Date().toLocaleString('it-IT');
    isLoading.value = false;
  }, 1000);
});
</script>

<template>
  <v-card>
    <v-card-item class="pa-4 pa-md-6">
      <div class="d-flex flex-wrap align-center gap-4">
        <div>
          <h2 class="text-h5">Dashboard Impatto Ambientale</h2>
          <p class="text-subtitle-1 text-medium-emphasis">Metriche di sostenibilità aggregate e mensili</p>
        </div>
        <v-spacer></v-spacer>
        <div class="d-flex flex-wrap align-center gap-2">
          <v-select v-model="selectedYear" :items="years" label="Anno" density="compact" variant="outlined" hide-details style="min-width: 120px;"></v-select>
          <v-menu>
            <template v-slot:activator="{ props }"><v-btn icon="mdi-dots-vertical" v-bind="props"></v-btn></template>
            <v-list>
              <v-list-item @click="refreshData" prepend-icon="mdi-refresh">Aggiorna</v-list-item>
              <v-list-item @click="exportToCSV" prepend-icon="mdi-file-delimited">Esporta CSV</v-list-item>
            </v-list>
          </v-menu>
        </div>
      </div>

      <v-row class="mt-4">
        <v-col v-for="kpi in kpiTotals" :key="kpi.key" cols="12" sm="6" md="4" lg="3">
          <v-card variant="tonal" :color="kpi.color" class="pa-3 h-100">
            <div class="d-flex align-center">
              <v-avatar :icon="kpi.icon" :color="kpi.color" variant="tonal" size="40" class="me-3"></v-avatar>
              <div>
                <div class="text-overline">{{ kpi.label }}</div>
                <div class="text-h5 font-weight-bold">{{ formatMetric(kpi.value, kpi.unit) }}</div>
              </div>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-card-item>

    <v-divider></v-divider>

    <v-card-title class="d-flex align-center">
      <h3 class="text-h6">Dettaglio Mensile per l'anno {{ selectedYear }}</h3>
      <v-spacer></v-spacer>
      <v-text-field v-model="search" label="Cerca mese..." prepend-inner-icon="mdi-magnify" variant="outlined" density="compact" hide-details style="max-width: 250px;"></v-text-field>
    </v-card-title>
    
    <v-data-table
      :headers="headers"
      :items="filteredData"
      :search="search"
      :loading="isLoading"
      item-value="month"
      class="elevation-0"
    >
      <template v-slot:loading><v-skeleton-loader type="table-row@5"></v-skeleton-loader></template>

      <template v-slot:item.co2Saved="{ value }">{{ value.toLocaleString('it-IT') }}</template>
      <template v-slot:item.plasticSaved="{ value }">{{ value.toLocaleString('it-IT') }}</template>
      <template v-slot:item.waterSaved="{ value }">{{ value.toLocaleString('it-IT') }}</template>
      <template v-slot:item.localProducts="{ value }">{{ value }}</template>
      <template v-slot:item.organicProducts="{ value }">{{ value }}</template>
      <template v-slot:item.deliveryDistance="{ value }">{{ value.toLocaleString('it-IT') }}</template>
      <template v-slot:item.deliveryEmissions="{ value }">{{ value.toLocaleString('it-IT') }}</template>
      
      <template v-slot:no-data><div class="pa-4 text-center">Nessun dato trovato per l'anno selezionato.</div></template>
    </v-data-table>

  </v-card>
</template>

<style scoped>
.gap-2 { gap: 8px; }
.gap-4 { gap: 16px; }
</style>