<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';

// 1. TypeScript Interfaces per definire la struttura dei dati
interface TimeSlotDelivery {
  timeSlot: string;
  count: number;
  onTime: number;
}

interface PostalCodeData {
  postalCode: string;
  zone: string;
  deliveries: TimeSlotDelivery[];
  totalDeliveries: number;
  averageTime: number;
}

// Interfaccia per la riga di dati UNIFICATA mostrata in tabella
interface PostalCodeStat {
  postalCode: string;
  zone: string;
  deliveryCount: number;
  onTimeCount: number;
  onTimePercentage: number;
  averageTime: number;
  timeSlot?: string; // Opzionale, solo per la vista per fascia oraria
}

// 2. Stato reattivo
const isLoading = ref(true);
const search = ref('');
const postalCodeDeliveries = ref<PostalCodeData[]>([]);
const lastUpdate = ref('');
const selectedTimeSlot = ref('Tutte');
const timeSlots = ['08:00-10:00', '10:00-12:00', '12:00-14:00', '14:00-16:00', '16:00-18:00', '18:00-20:00'];

// 3. Logica Unificata (Computed Properties)
const isAllTimeSlots = computed(() => selectedTimeSlot.value === 'Tutte');

// UNIFICHIAMO i dati qui, una volta per tutte. Il resto del codice sarà molto più semplice.
const filteredData = computed((): PostalCodeStat[] => {
  if (isAllTimeSlots.value) {
    return postalCodeDeliveries.value.map(pc => {
      const totalOnTime = pc.deliveries.reduce((sum, slot) => sum + slot.onTime, 0);
      return {
        postalCode: pc.postalCode,
        zone: pc.zone,
        deliveryCount: pc.totalDeliveries,
        onTimeCount: totalOnTime,
        onTimePercentage: pc.totalDeliveries > 0 ? (totalOnTime / pc.totalDeliveries) * 100 : 0,
        averageTime: pc.averageTime,
      };
    }).sort((a, b) => b.deliveryCount - a.deliveryCount);
  } else {
    return postalCodeDeliveries.value.map(pc => {
      const slotData = pc.deliveries.find(d => d.timeSlot === selectedTimeSlot.value) || { count: 0, onTime: 0 };
      return {
        postalCode: pc.postalCode,
        zone: pc.zone,
        deliveryCount: slotData.count,
        onTimeCount: slotData.onTime,
        onTimePercentage: slotData.count > 0 ? (slotData.onTime / slotData.count) * 100 : 0,
        averageTime: pc.averageTime,
        timeSlot: selectedTimeSlot.value,
      };
    }).sort((a, b) => b.deliveryCount - a.deliveryCount);
  }
});

// Ora `slotTotals` non ha più bisogno di `if/else`
const slotTotals = computed(() => {
    const totals = filteredData.value.reduce((acc, item) => {
        acc.totalDeliveries += item.deliveryCount;
        acc.onTime += item.onTimeCount;
        return acc;
    }, { totalDeliveries: 0, onTime: 0 });

    const averageTime = postalCodeDeliveries.value.length > 0
        ? Math.round(postalCodeDeliveries.value.reduce((acc, pc) => acc + pc.averageTime, 0) / postalCodeDeliveries.value.length)
        : 0;

    return {
        totalDeliveries: totals.totalDeliveries,
        onTime: totals.onTime,
        late: totals.totalDeliveries - totals.onTime,
        averageTime: averageTime,
        onTimePercentage: totals.totalDeliveries > 0 ? (totals.onTime / totals.totalDeliveries) * 100 : 0,
    };
});

// HEADERS DINAMICI: la soluzione per un template pulito
const dynamicHeaders = computed(() => {
    const baseHeaders = [
        { title: 'CAP', key: 'postalCode', align: 'start' },
        { title: 'Zona', key: 'zone' },
    ];
    if (isAllTimeSlots.value) {
        return [
            ...baseHeaders,
            { title: 'Totale Consegne', key: 'deliveryCount', align: 'center' },
            { title: 'Puntualità', key: 'onTimePercentage', align: 'center' },
            { title: 'Tempo Medio', key: 'averageTime', align: 'end', class: 'd-none d-md-table-cell' },
        ];
    }
    return [
        ...baseHeaders,
        { title: 'Fascia Oraria', key: 'timeSlot', class: 'd-none d-sm-table-cell' },
        { title: 'Consegne', key: 'deliveryCount', align: 'center' },
        { title: 'Puntualità', key: 'onTimePercentage', align: 'center' },
        { title: 'Tempo Medio', key: 'averageTime', align: 'end', class: 'd-none d-md-table-cell' },
    ];
});

// 4. Azioni
const getProgressBarColor = (percentage: number) => {
    if (percentage > 90) return 'success';
    if (percentage > 75) return 'warning';
    return 'error';
};

const exportToCSV = () => { /* Logica semplificata grazie a dynamicHeaders e filteredData */ };
const exportToPDF = () => alert('Funzionalità PDF in sviluppo');
const refreshData = () => {
    lastUpdate.value = new Date().toLocaleString('it-IT');
};

// 5. Lifecycle
onMounted(() => {
  setTimeout(() => {
    postalCodeDeliveries.value = [
        { postalCode: '20121', zone: 'Milano Centro', deliveries: [ { timeSlot: '08:00-10:00', count: 15, onTime: 14 }, { timeSlot: '10:00-12:00', count: 22, onTime: 20 }, { timeSlot: '12:00-14:00', count: 18, onTime: 17 }, { timeSlot: '14:00-16:00', count: 12, onTime: 11 }, { timeSlot: '16:00-18:00', count: 20, onTime: 19 }, { timeSlot: '18:00-20:00', count: 25, onTime: 23 } ], totalDeliveries: 112, averageTime: 22 },
        { postalCode: '20122', zone: 'Milano Centro-Sud', deliveries: [ { timeSlot: '08:00-10:00', count: 12, onTime: 11 }, { timeSlot: '10:00-12:00', count: 18, onTime: 17 }, { timeSlot: '12:00-14:00', count: 15, onTime: 14 }, { timeSlot: '14:00-16:00', count: 10, onTime: 9 }, { timeSlot: '16:00-18:00', count: 16, onTime: 15 }, { timeSlot: '18:00-20:00', count: 20, onTime: 18 } ], totalDeliveries: 91, averageTime: 25 },
        { postalCode: '20123', zone: 'Milano Centro-Ovest', deliveries: [ { timeSlot: '08:00-10:00', count: 10, onTime: 9 }, { timeSlot: '10:00-12:00', count: 15, onTime: 14 }, { timeSlot: '12:00-14:00', count: 12, onTime: 11 }, { timeSlot: '14:00-16:00', count: 8, onTime: 7 }, { timeSlot: '16:00-18:00', count: 14, onTime: 13 }, { timeSlot: '18:00-20:00', count: 18, onTime: 16 } ], totalDeliveries: 77, averageTime: 24 },
        { postalCode: '20124', zone: 'Milano Centro-Est', deliveries: [ { timeSlot: '08:00-10:00', count: 14, onTime: 13 }, { timeSlot: '10:00-12:00', count: 20, onTime: 18 }, { timeSlot: '12:00-14:00', count: 16, onTime: 15 }, { timeSlot: '14:00-16:00', count: 11, onTime: 10 }, { timeSlot: '16:00-18:00', count: 18, onTime: 17 }, { timeSlot: '18:00-20:00', count: 22, onTime: 20 } ], totalDeliveries: 101, averageTime: 23 },
        { postalCode: '20125', zone: 'Milano Nord', deliveries: [ { timeSlot: '08:00-10:00', count: 8, onTime: 7 }, { timeSlot: '10:00-12:00', count: 12, onTime: 11 }, { timeSlot: '12:00-14:00', count: 10, onTime: 9 }, { timeSlot: '14:00-16:00', count: 6, onTime: 5 }, { timeSlot: '16:00-18:00', count: 11, onTime: 10 }, { timeSlot: '18:00-20:00', count: 15, onTime: 13 } ], totalDeliveries: 62, averageTime: 28 }
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
          <h2 class="text-h5">Analisi Consegne per CAP</h2>
          <p class="text-subtitle-1 text-medium-emphasis">Dati aggregati per codice postale e fasce orarie</p>
        </div>
        <v-spacer></v-spacer>
        <div class="d-flex flex-wrap align-center gap-2">
          <v-select
            v-model="selectedTimeSlot"
            :items="['Tutte', ...timeSlots]"
            label="Fascia Oraria"
            density="compact"
            variant="outlined"
            hide-details
            style="min-width: 160px;"
          ></v-select>
           <v-menu>
            <template v-slot:activator="{ props }">
                <v-btn icon="mdi-dots-vertical" v-bind="props" title="Altre azioni"></v-btn>
            </template>
            <v-list>
                <v-list-item @click="refreshData" prepend-icon="mdi-refresh">Aggiorna</v-list-item>
                <v-list-item @click="exportToCSV" prepend-icon="mdi-file-delimited">Esporta CSV</v-list-item>
                <v-list-item @click="exportToPDF" prepend-icon="mdi-file-pdf-box">Esporta PDF</v-list-item>
            </v-list>
          </v-menu>
        </div>
      </div>

      <v-row class="mt-4">
        <v-col v-for="(item, i) in [
            { label: 'Totale Consegne', value: slotTotals.totalDeliveries, color: 'primary' },
            { label: 'Puntuali', value: slotTotals.onTime, color: 'success' },
            { label: 'In Ritardo', value: slotTotals.late, color: 'error' },
            { label: 'Puntualità %', value: slotTotals.onTimePercentage, isPercentage: true }
        ]" :key="i" cols="12" sm="6" md="3">
          <v-card variant="tonal" :color="item.color" class="d-flex flex-column pa-4 text-center h-100">
            <div class="text-h4 font-weight-bold">{{ item.isPercentage ? `${item.value.toFixed(1)}%` : item.value }}</div>
            <div class="text-body-1">{{ item.label }}</div>
            <template v-if="item.isPercentage">
                <v-spacer></v-spacer>
                 <v-progress-linear
                    :model-value="item.value"
                    :color="getProgressBarColor(item.value)"
                    height="6"
                    rounded
                    class="mt-2"
                ></v-progress-linear>
            </template>
          </v-card>
        </v-col>
      </v-row>
    </v-card-item>

    <v-divider></v-divider>
    
    <v-text-field
        v-model="search"
        label="Cerca per CAP o zona..."
        prepend-inner-icon="mdi-magnify"
        variant="solo-filled"
        flat hide-details single-line
    ></v-text-field>

    <v-data-table
      :headers="dynamicHeaders"
      :items="filteredData"
      :search="search"
      :loading="isLoading"
      item-value="postalCode"
      class="elevation-0"
    >
        <template v-slot:loading>
            <v-skeleton-loader type="table-row@5"></v-skeleton-loader>
        </template>
        
        <template v-slot:item.onTimePercentage="{ value }">
            <v-chip :color="getProgressBarColor(value)" size="small" class="font-weight-bold">
                {{ value.toFixed(1) }}%
            </v-chip>
        </template>

        <template v-slot:item.averageTime="{ value }">
            {{ value }} min
        </template>

        <template v-slot:no-data>
            <div class="pa-4 text-center">Nessun dato trovato.</div>
        </template>
    </v-data-table>
  </v-card>
</template>

<style scoped>
.gap-2 { gap: 8px; }
.gap-4 { gap: 16px; }
</style>