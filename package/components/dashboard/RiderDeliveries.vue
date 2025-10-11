<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';

// Mock data per le consegne dei rider
const riderDeliveries = ref([
  {
    id: 1,
    name: 'Marco Rossi',
    deliveries: [
      { month: 'Gennaio', count: 45, onTime: 42, late: 3 },
      { month: 'Febbraio', count: 52, onTime: 48, late: 4 },
      { month: 'Marzo', count: 60, onTime: 58, late: 2 },
      { month: 'Aprile', count: 48, onTime: 45, late: 3 },
      { month: 'Maggio', count: 55, onTime: 52, late: 3 }
    ],
    rating: 4.8,
    vehicle: 'Bicicletta elettrica',
    zone: 'Milano Centro'
  },
  {
    id: 2,
    name: 'Giulia Bianchi',
    deliveries: [
      { month: 'Gennaio', count: 38, onTime: 36, late: 2 },
      { month: 'Febbraio', count: 42, onTime: 40, late: 2 },
      { month: 'Marzo', count: 50, onTime: 47, late: 3 },
      { month: 'Aprile', count: 45, onTime: 43, late: 2 },
      { month: 'Maggio', count: 48, onTime: 46, late: 2 }
    ],
    rating: 4.7,
    vehicle: 'Scooter elettrico',
    zone: 'Milano Nord'
  },
  {
    id: 3,
    name: 'Luca Verdi',
    deliveries: [
      { month: 'Gennaio', count: 50, onTime: 48, late: 2 },
      { month: 'Febbraio', count: 55, onTime: 52, late: 3 },
      { month: 'Marzo', count: 62, onTime: 60, late: 2 },
      { month: 'Aprile', count: 58, onTime: 55, late: 3 },
      { month: 'Maggio', count: 65, onTime: 62, late: 3 }
    ],
    rating: 4.9,
    vehicle: 'Bicicletta elettrica',
    zone: 'Milano Est'
  },
  {
    id: 4,
    name: 'Sofia Neri',
    deliveries: [
      { month: 'Gennaio', count: 42, onTime: 39, late: 3 },
      { month: 'Febbraio', count: 48, onTime: 45, late: 3 },
      { month: 'Marzo', count: 55, onTime: 52, late: 3 },
      { month: 'Aprile', count: 50, onTime: 47, late: 3 },
      { month: 'Maggio', count: 58, onTime: 55, late: 3 }
    ],
    rating: 4.6,
    vehicle: 'Scooter elettrico',
    zone: 'Milano Sud'
  },
  {
    id: 5,
    name: 'Alessandro Gialli',
    deliveries: [
      { month: 'Gennaio', count: 48, onTime: 46, late: 2 },
      { month: 'Febbraio', count: 52, onTime: 50, late: 2 },
      { month: 'Marzo', count: 58, onTime: 56, late: 2 },
      { month: 'Aprile', count: 54, onTime: 52, late: 2 },
      { month: 'Maggio', count: 60, onTime: 58, late: 2 }
    ],
    rating: 4.8,
    vehicle: 'Bicicletta elettrica',
    zone: 'Milano Ovest'
  }
]);

// Mesi disponibili
const months = ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'];
const selectedMonth = ref('Maggio');

// Filtra i dati in base al mese selezionato
const filteredData = computed(() => {
  return riderDeliveries.value.map(rider => {
    const monthData = rider.deliveries.find(d => d.month === selectedMonth.value) || 
                      { month: selectedMonth.value, count: 0, onTime: 0, late: 0 };
    return {
      ...rider,
      currentMonth: monthData
    };
  }).sort((a, b) => b.currentMonth.count - a.currentMonth.count);
});

// Totali per il mese selezionato
const monthlyTotals = computed(() => {
  return filteredData.value.reduce((acc, rider) => {
    acc.totalDeliveries += rider.currentMonth.count;
    acc.onTime += rider.currentMonth.onTime;
    acc.late += rider.currentMonth.late;
    return acc;
  }, { totalDeliveries: 0, onTime: 0, late: 0 });
});

// Percentuale di consegne puntuali
const onTimePercentage = computed(() => {
  if (monthlyTotals.value.totalDeliveries === 0) return '0.0';
  return (monthlyTotals.value.onTime / monthlyTotals.value.totalDeliveries * 100).toFixed(1);
});

// Funzione per esportare i dati in CSV
const exportToCSV = () => {
  const headers = ['ID', 'Nome', 'Consegne', 'Puntuali', 'In Ritardo', 'Puntualità %', 'Rating', 'Veicolo', 'Zona'];
  
  const csvData = filteredData.value.map(rider => {
    const onTimePercent = rider.currentMonth.count > 0 
      ? (rider.currentMonth.onTime / rider.currentMonth.count * 100).toFixed(1) 
      : '0.0';
    
    return [
      rider.id,
      rider.name,
      rider.currentMonth.count,
      rider.currentMonth.onTime,
      rider.currentMonth.late,
      onTimePercent,
      rider.rating,
      rider.vehicle,
      rider.zone
    ];
  });
  
  let csvContent = headers.join(',') + '\n';
  csvData.forEach(row => {
    csvContent += row.join(',') + '\n';
  });
  
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  const url = URL.createObjectURL(blob);
  
  link.setAttribute('href', url);
  link.setAttribute('download', `consegne_rider_${selectedMonth.value}.csv`);
  link.style.visibility = 'hidden';
  
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

// Funzione per esportare i dati in PDF
const exportToPDF = () => {
  alert('Funzionalità di esportazione PDF in fase di implementazione');
};

// Funzione per aggiornare i dati
const lastUpdate = ref(new Date().toLocaleString('it-IT'));
const refreshData = () => {
  lastUpdate.value = new Date().toLocaleString('it-IT');
};

// Inizializzazione
onMounted(() => {
  // Qui andrebbe la chiamata API per caricare i dati reali
});
</script>

<template>
  <v-card class="mb-6">
    <v-card-item class="pa-6">
      <v-row>
        <v-col cols="12" sm="6">
          <v-card-title class="pa-0">
            <h2 class="text-h5">Consegne per Rider</h2>
            <p class="text-subtitle-1 text-medium-emphasis">
              Statistiche mensili delle consegne per rider
            </p>
            <div class="text-caption">
              Ultimo aggiornamento: {{ lastUpdate }}
            </div>
          </v-card-title>
        </v-col>
        <v-col cols="12" sm="6" class="d-flex align-center justify-end flex-wrap gap-2">
          <v-select
            v-model="selectedMonth"
            :items="months"
            label="Mese"
            density="compact"
            variant="outlined"
            class="month-select"
            style="max-width: 150px;"
          ></v-select>
          <div class="d-flex gap-2 mt-2 mt-sm-0">
            <v-btn icon title="Esporta CSV" @click="exportToCSV">
              <v-icon>mdi-file-export</v-icon>
            </v-btn>
            <v-btn icon title="Esporta PDF" @click="exportToPDF">
              <v-icon>mdi-file-pdf-box</v-icon>
            </v-btn>
            <v-btn icon title="Aggiorna dati" @click="refreshData">
              <v-icon>mdi-refresh</v-icon>
            </v-btn>
          </div>
        </v-col>
      </v-row>
      
      <v-row class="mt-4">
        <v-col cols="12" sm="6" md="4" class="mb-4">
          <v-card variant="outlined" class="pa-4 h-100">
            <div class="text-h6 font-weight-bold">{{ monthlyTotals.totalDeliveries }}</div>
            <div class="text-subtitle-2">Consegne Totali</div>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6" md="4" class="mb-4">
          <v-card variant="outlined" class="pa-4 h-100">
            <div class="text-h6 font-weight-bold text-success">{{ monthlyTotals.onTime }}</div>
            <div class="text-subtitle-2">Consegne Puntuali</div>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6" md="4" class="mb-4">
          <v-card variant="outlined" class="pa-4 h-100">
            <div class="d-flex align-center">
              <div class="text-h6 font-weight-bold">{{ onTimePercentage }}%</div>
              <v-progress-circular
                :model-value="parseFloat(onTimePercentage)"
                :color="parseFloat(onTimePercentage) > 90 ? 'success' : parseFloat(onTimePercentage) > 75 ? 'warning' : 'error'"
                class="ms-2"
                size="40"
              ></v-progress-circular>
            </div>
            <div class="text-subtitle-2">Puntualità</div>
          </v-card>
        </v-col>
      </v-row>
      
      <div class="table-responsive">
        <v-table>
          <thead>
            <tr>
              <th class="text-left">ID</th>
              <th class="text-left">Nome Rider</th>
              <th class="text-left">Consegne</th>
              <th class="text-left d-none d-sm-table-cell">Puntuali</th>
              <th class="text-left d-none d-sm-table-cell">In Ritardo</th>
              <th class="text-left">Puntualità</th>
              <th class="text-left d-none d-md-table-cell">Rating</th>
              <th class="text-left d-none d-lg-table-cell">Veicolo</th>
              <th class="text-left d-none d-lg-table-cell">Zona</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="rider in filteredData" :key="rider.id">
              <td>{{ rider.id }}</td>
              <td>{{ rider.name }}</td>
              <td>{{ rider.currentMonth.count }}</td>
              <td class="d-none d-sm-table-cell">{{ rider.currentMonth.onTime }}</td>
              <td class="d-none d-sm-table-cell">{{ rider.currentMonth.late }}</td>
              <td>
                <v-chip
                  :color="rider.currentMonth.count > 0 && (rider.currentMonth.onTime / rider.currentMonth.count) >= 0.95 ? 'success' : 
                         rider.currentMonth.count > 0 && (rider.currentMonth.onTime / rider.currentMonth.count) >= 0.9 ? 'primary' : 'warning'"
                  size="small"
                >
                  {{ rider.currentMonth.count > 0 ? ((rider.currentMonth.onTime / rider.currentMonth.count) * 100).toFixed(1) : '0.0' }}%
                </v-chip>
              </td>
              <td class="d-none d-md-table-cell">
                <v-rating
                  :model-value="rider.rating"
                  color="amber"
                  density="compact"
                  size="small"
                  readonly
                  half-increments
                ></v-rating>
              </td>
              <td class="d-none d-lg-table-cell">{{ rider.vehicle }}</td>
              <td class="d-none d-lg-table-cell">{{ rider.zone }}</td>
            </tr>
          </tbody>
        </v-table>
      </div>
      
      <div class="text-caption text-right mt-2">
        Dati aggiornati al: {{ lastUpdate }}
      </div>
    </v-card-item>
  </v-card>
</template>

<style scoped>
.month-select {
  min-width: 120px;
}

.table-responsive {
  overflow-x: auto;
}

@media (max-width: 600px) {
  :deep(.v-table) {
    font-size: 0.8rem;
  }
}
</style>