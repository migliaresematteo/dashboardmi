<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';

// 1. Definiamo le interfacce TypeScript per una tipizzazione robusta
interface DeliveryMonth {
  month: string;
  count: number;
  onTime: number;
  late: number;
}

interface Rider {
  id: number;
  name: string;
  avatar: string; // Aggiunto avatar per un tocco visivo
  deliveries: DeliveryMonth[];
  rating: number;
  vehicle: string;
  zone: string;
}

// Interfaccia per i dati "appiattiti" mostrati in tabella
interface RiderMonthlyStat extends Omit<Rider, 'deliveries'> {
  monthlyDeliveries: DeliveryMonth;
  onTimePercentage: number;
}


// 2. Stato reattivo e dati (con simulazione di caricamento)
const isLoading = ref(true);
const riders = ref<Rider[]>([]); // Dati originali, ora tipizzati
const search = ref(''); // Per la barra di ricerca
const lastUpdate = ref('');
const selectedMonth = ref('Ottobre'); // Default a Ottobre 2025

// Mesi disponibili per il filtro
const months = ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'];

// 3. Headers per v-data-table: centralizzati e più puliti
const headers = [
  { title: 'Rider', key: 'name', align: 'start' },
  { title: 'Consegne', key: 'monthlyDeliveries.count', align: 'center' },
  { title: 'Puntualità', key: 'onTimePercentage', align: 'center' },
  { title: 'Rating', key: 'rating', align: 'center', class: 'd-none d-md-table-cell' },
  { title: 'Veicolo', key: 'vehicle', class: 'd-none d-lg-table-cell' },
  { title: 'Zona', key: 'zone', class: 'd-none d-lg-table-cell' },
];

// 4. Logica di calcolo (Computed Properties)
const filteredData = computed((): RiderMonthlyStat[] => {
  return riders.value.map(rider => {
    const monthData = rider.deliveries.find(d => d.month === selectedMonth.value) ||
                      { month: selectedMonth.value, count: 0, onTime: 0, late: 0 };

    const onTimePercentage = monthData.count > 0 ? (monthData.onTime / monthData.count) * 100 : 0;

    return {
      ...rider,
      monthlyDeliveries: monthData,
      onTimePercentage: onTimePercentage,
    };
  }).sort((a, b) => b.monthlyDeliveries.count - a.monthlyDeliveries.count);
});

const monthlyTotals = computed(() => {
  return filteredData.value.reduce((acc, rider) => {
    acc.totalDeliveries += rider.monthlyDeliveries.count;
    acc.onTime += rider.monthlyDeliveries.onTime;
    acc.late += rider.monthlyDeliveries.late;
    return acc;
  }, { totalDeliveries: 0, onTime: 0, late: 0 });
});

const overallOnTimePercentage = computed(() => {
  if (monthlyTotals.value.totalDeliveries === 0) return 0;
  return (monthlyTotals.value.onTime / monthlyTotals.value.totalDeliveries * 100);
});

// 5. Funzioni di Utilità e Azioni
const getPunctualityColor = (percentage: number) => {
  if (percentage >= 95) return 'success';
  if (percentage >= 90) return 'primary';
  return 'warning';
};

const getProgressBarColor = (percentage: number) => {
    if (percentage > 90) return 'success';
    if (percentage > 75) return 'warning';
    return 'error';
};

const exportToCSV = () => { /* La tua logica CSV va bene */ };
const exportToPDF = () => alert('Funzionalità PDF in sviluppo');
const refreshData = () => {
    // In un'app reale, qui richiameresti l'API
    lastUpdate.value = new Date().toLocaleString('it-IT');
};

// 6. Lifecycle Hook per simulare il caricamento dati
onMounted(() => {
  setTimeout(() => {
    riders.value = [ // Dati mock spostati qui
        { id: 1, name: 'Marco Rossi', avatar: 'https://cdn.vuetifyjs.com/images/avatars/avatar-1.png', deliveries: [ { month: 'Ottobre', count: 60, onTime: 58, late: 2 } ], rating: 4.8, vehicle: 'Bicicletta elettrica', zone: 'Milano Centro' },
        { id: 2, name: 'Giulia Bianchi', avatar: 'https://cdn.vuetifyjs.com/images/avatars/avatar-2.png', deliveries: [ { month: 'Ottobre', count: 50, onTime: 47, late: 3 } ], rating: 4.7, vehicle: 'Scooter elettrico', zone: 'Milano Nord' },
        { id: 3, name: 'Luca Verdi', avatar: 'https://cdn.vuetifyjs.com/images/avatars/avatar-3.png', deliveries: [ { month: 'Ottobre', count: 65, onTime: 62, late: 3 } ], rating: 4.9, vehicle: 'Bicicletta elettrica', zone: 'Milano Est' },
        { id: 4, name: 'Sofia Neri', avatar: 'https://cdn.vuetifyjs.com/images/avatars/avatar-4.png', deliveries: [ { month: 'Ottobre', count: 58, onTime: 55, late: 3 } ], rating: 4.6, vehicle: 'Scooter elettrico', zone: 'Milano Sud' },
        { id: 5, name: 'Alessandro Gialli', avatar: 'https://cdn.vuetifyjs.com/images/avatars/avatar-5.png', deliveries: [ { month: 'Ottobre', count: 60, onTime: 58, late: 2 } ], rating: 4.8, vehicle: 'Bicicletta elettrica', zone: 'Milano Ovest' }
    ];
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
          <h2 class="text-h5">Performance Rider</h2>
          <p class="text-subtitle-1 text-medium-emphasis">Statistiche mensili delle consegne</p>
        </div>
        <v-spacer></v-spacer>
        <div class="d-flex flex-wrap align-center gap-2">
          <v-select
            v-model="selectedMonth"
            :items="months"
            label="Mese"
            density="compact"
            variant="outlined"
            hide-details
            style="min-width: 140px;"
          ></v-select>
          <v-btn icon="mdi-refresh" @click="refreshData" title="Aggiorna"></v-btn>
          <v-menu>
            <template v-slot:activator="{ props }">
                <v-btn icon="mdi-export-variant" v-bind="props" title="Esporta"></v-btn>
            </template>
            <v-list>
                <v-list-item @click="exportToCSV" prepend-icon="mdi-file-delimited">Esporta CSV</v-list-item>
                <v-list-item @click="exportToPDF" prepend-icon="mdi-file-pdf-box">Esporta PDF</v-list-item>
            </v-list>
          </v-menu>
        </div>
      </div>

      <v-row class="mt-4">
        <v-col cols="12" sm="4">
          <v-card variant="tonal" class="d-flex flex-column pa-4 text-center h-100">
            <v-spacer></v-spacer>
            <div class="text-h4 font-weight-bold">{{ monthlyTotals.totalDeliveries }}</div>
            <div class="text-body-1">Consegne Totali</div>
            <v-spacer></v-spacer>
          </v-card>
        </v-col>
        <v-col cols="12" sm="4">
          <v-card variant="tonal" color="success" class="d-flex flex-column pa-4 text-center h-100">
            <v-spacer></v-spacer>
            <div class="text-h4 font-weight-bold">{{ monthlyTotals.onTime }}</div>
            <div class="text-body-1">Puntuali</div>
            <v-spacer></v-spacer>
          </v-card>
        </v-col>
        <v-col cols="12" sm="4">
          <v-card variant="tonal" class="d-flex flex-column pa-4 text-center h-100">
            <div class="text-h4 font-weight-bold">{{ overallOnTimePercentage.toFixed(1) }}%</div>
            <div class="text-body-1 mb-2">Puntualità Globale</div>
            <v-spacer></v-spacer>
            <v-progress-linear
                :model-value="overallOnTimePercentage"
                :color="getProgressBarColor(overallOnTimePercentage)"
                height="8"
                rounded
                class="mt-auto"
            ></v-progress-linear>
          </v-card>
        </v-col>
      </v-row>
      </v-card-item>

    <v-divider></v-divider>

    <v-text-field
        v-model="search"
        label="Cerca rider per nome, veicolo o zona..."
        prepend-inner-icon="mdi-magnify"
        variant="solo-filled"
        flat
        hide-details
        single-line
    ></v-text-field>

    <v-data-table
      :headers="headers"
      :items="filteredData"
      :search="search"
      :loading="isLoading"
      item-value="id"
      class="elevation-0"
    >
      <template v-slot:loading>
        <v-skeleton-loader type="table-row@5"></v-skeleton-loader>
      </template>

      <template v-slot:item.name="{ item }">
        <div class="d-flex align-center pa-2">
            <v-avatar :image="item.avatar" size="40" class="me-3"></v-avatar>
            <div>
                <div class="font-weight-bold">{{ item.name }}</div>
                <div class="text-caption">{{ item.id }}</div>
            </div>
        </div>
      </template>

      <template v-slot:item.onTimePercentage="{ value }">
        <v-chip :color="getPunctualityColor(value)" size="small" class="font-weight-bold">
          {{ value.toFixed(1) }}%
        </v-chip>
      </template>

      <template v-slot:item.rating="{ value }">
        <v-rating
          :model-value="value"
          color="amber"
          density="compact"
          size="small"
          readonly
          half-increments
        ></v-rating>
      </template>

      <template v-slot:no-data>
        <div class="pa-4 text-center">Nessun dato disponibile per il mese selezionato.</div>
      </template>

    </v-data-table>
  </v-card>
</template>

<style scoped>
.gap-2 { gap: 8px; }
.gap-4 { gap: 16px; }
</style>