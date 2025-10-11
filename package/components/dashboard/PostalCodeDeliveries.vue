<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';

// Mock data per le consegne per CAP
const postalCodeDeliveries = ref([
  {
    postalCode: '20121',
    zone: 'Milano Centro',
    deliveries: [
      { timeSlot: '08:00-10:00', count: 15, onTime: 14 },
      { timeSlot: '10:00-12:00', count: 22, onTime: 20 },
      { timeSlot: '12:00-14:00', count: 18, onTime: 17 },
      { timeSlot: '14:00-16:00', count: 12, onTime: 11 },
      { timeSlot: '16:00-18:00', count: 20, onTime: 19 },
      { timeSlot: '18:00-20:00', count: 25, onTime: 23 }
    ],
    totalDeliveries: 112,
    averageTime: 22
  },
  {
    postalCode: '20122',
    zone: 'Milano Centro-Sud',
    deliveries: [
      { timeSlot: '08:00-10:00', count: 12, onTime: 11 },
      { timeSlot: '10:00-12:00', count: 18, onTime: 17 },
      { timeSlot: '12:00-14:00', count: 15, onTime: 14 },
      { timeSlot: '14:00-16:00', count: 10, onTime: 9 },
      { timeSlot: '16:00-18:00', count: 16, onTime: 15 },
      { timeSlot: '18:00-20:00', count: 20, onTime: 18 }
    ],
    totalDeliveries: 91,
    averageTime: 25
  },
  {
    postalCode: '20123',
    zone: 'Milano Centro-Ovest',
    deliveries: [
      { timeSlot: '08:00-10:00', count: 10, onTime: 9 },
      { timeSlot: '10:00-12:00', count: 15, onTime: 14 },
      { timeSlot: '12:00-14:00', count: 12, onTime: 11 },
      { timeSlot: '14:00-16:00', count: 8, onTime: 7 },
      { timeSlot: '16:00-18:00', count: 14, onTime: 13 },
      { timeSlot: '18:00-20:00', count: 18, onTime: 16 }
    ],
    totalDeliveries: 77,
    averageTime: 24
  },
  {
    postalCode: '20124',
    zone: 'Milano Centro-Est',
    deliveries: [
      { timeSlot: '08:00-10:00', count: 14, onTime: 13 },
      { timeSlot: '10:00-12:00', count: 20, onTime: 18 },
      { timeSlot: '12:00-14:00', count: 16, onTime: 15 },
      { timeSlot: '14:00-16:00', count: 11, onTime: 10 },
      { timeSlot: '16:00-18:00', count: 18, onTime: 17 },
      { timeSlot: '18:00-20:00', count: 22, onTime: 20 }
    ],
    totalDeliveries: 101,
    averageTime: 23
  },
  {
    postalCode: '20125',
    zone: 'Milano Nord',
    deliveries: [
      { timeSlot: '08:00-10:00', count: 8, onTime: 7 },
      { timeSlot: '10:00-12:00', count: 12, onTime: 11 },
      { timeSlot: '12:00-14:00', count: 10, onTime: 9 },
      { timeSlot: '14:00-16:00', count: 6, onTime: 5 },
      { timeSlot: '16:00-18:00', count: 11, onTime: 10 },
      { timeSlot: '18:00-20:00', count: 15, onTime: 13 }
    ],
    totalDeliveries: 62,
    averageTime: 28
  }
]);

const timeSlots = ['08:00-10:00', '10:00-12:00', '12:00-14:00', '14:00-16:00', '16:00-18:00', '18:00-20:00'];
const selectedTimeSlot = ref('Tutte');

const filteredData = computed(() => {
  if (selectedTimeSlot.value === 'Tutte') {
    return postalCodeDeliveries.value.sort((a, b) => b.totalDeliveries - a.totalDeliveries);
  } else {
    return postalCodeDeliveries.value.map(pc => {
      const slotData = pc.deliveries.find(d => d.timeSlot === selectedTimeSlot.value) || 
                      { timeSlot: selectedTimeSlot.value, count: 0, onTime: 0 };
      return {
        ...pc,
        currentSlot: slotData,
      };
    }).sort((a, b) => b.currentSlot.count - a.currentSlot.count);
  }
});

const slotTotals = computed(() => {
  if (selectedTimeSlot.value === 'Tutte') {
    const totalDeliveries = postalCodeDeliveries.value.reduce((acc, pc) => acc + pc.totalDeliveries, 0);
    const onTime = postalCodeDeliveries.value.reduce((acc, pc) => {
      return acc + pc.deliveries.reduce((sum, slot) => sum + slot.onTime, 0);
    }, 0);
    const averageTime = Math.round(postalCodeDeliveries.value.reduce((acc, pc) => acc + pc.averageTime, 0) / postalCodeDeliveries.value.length);
    const late = totalDeliveries - onTime;
    const onTimePercentage = totalDeliveries > 0 ? ((onTime / totalDeliveries) * 100).toFixed(1) : '0.0';
    
    return {
      totalDeliveries,
      onTime,
      late,
      averageTime,
      onTimePercentage
    };
  } else {
    const result = filteredData.value.reduce((acc, pc) => {
      acc.totalDeliveries += pc.currentSlot.count;
      acc.onTime += pc.currentSlot.onTime;
      return acc;
    }, { 
      totalDeliveries: 0, 
      onTime: 0,
      averageTime: Math.round(postalCodeDeliveries.value.reduce((acc, pc) => acc + pc.averageTime, 0) / postalCodeDeliveries.value.length)
    });
    
    result.late = result.totalDeliveries - result.onTime;
    result.onTimePercentage = result.totalDeliveries > 0 ? ((result.onTime / result.totalDeliveries) * 100).toFixed(1) : '0.0';
    
    return result;
  }
});

const exportToCSV = () => {
  let headers, csvData;
  
  if (selectedTimeSlot.value === 'Tutte') {
    headers = ['CAP', 'Zona', 'Totale Consegne', 'Tempo Medio (min)'];
    
    csvData = filteredData.value.map(pc => {
      return [
        pc.postalCode,
        pc.zone,
        pc.totalDeliveries,
        pc.averageTime
      ];
    });
  } else {
    headers = ['CAP', 'Zona', 'Fascia Oraria', 'Consegne', 'Puntuali', 'Puntualità %', 'Tempo Medio (min)'];
    
    csvData = filteredData.value.map(pc => {
      const onTimePercent = pc.currentSlot.count > 0 
        ? (pc.currentSlot.onTime / pc.currentSlot.count * 100).toFixed(1) 
        : '0.0';
      
      return [
        pc.postalCode,
        pc.zone,
        selectedTimeSlot.value,
        pc.currentSlot.count,
        pc.currentSlot.onTime,
        onTimePercent,
        pc.averageTime
      ];
    });
  }
  
  let csvContent = headers.join(',') + '\n';
  csvData.forEach(row => {
    csvContent += row.join(',') + '\n';
  });
  
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  const url = URL.createObjectURL(blob);
  
  link.setAttribute('href', url);
  link.setAttribute('download', `consegne_cap_${selectedTimeSlot.value.replace(/:/g, '-')}.csv`);
  link.style.visibility = 'hidden';
  
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const exportToPDF = () => {
  alert('Funzionalità di esportazione PDF in fase di implementazione');
};

const lastUpdate = ref(new Date().toLocaleString('it-IT'));
const refreshData = () => {
  lastUpdate.value = new Date().toLocaleString('it-IT');
};

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
            <h2 class="text-h5">Consegne per CAP</h2>
            <p class="text-subtitle-1 text-medium-emphasis">
              Statistiche delle consegne per codice postale e fasce orarie
            </p>
            <div class="text-caption">
              Ultimo aggiornamento: {{ lastUpdate }}
            </div>
          </v-card-title>
        </v-col>
        <v-col cols="12" sm="6" class="d-flex align-center justify-end flex-wrap gap-2">
          <v-select
            v-model="selectedTimeSlot"
            :items="['Tutte', ...timeSlots]"
            label="Fascia Oraria"
            density="compact"
            variant="outlined"
            class="time-slot-select"
            style="max-width: 180px;"
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
        <v-col cols="12" sm="6" md="3" class="mb-4">
          <v-card variant="outlined" class="pa-4 h-100">
            <div class="text-h6 font-weight-bold">{{ slotTotals.totalDeliveries }}</div>
            <div class="text-subtitle-2">Totale Consegne</div>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6" md="3" class="mb-4">
          <v-card variant="outlined" class="pa-4 h-100">
            <div class="text-h6 font-weight-bold text-success">{{ slotTotals.onTime }}</div>
            <div class="text-subtitle-2">Consegne Puntuali</div>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6" md="3" class="mb-4">
          <v-card variant="outlined" class="pa-4 h-100">
            <div class="text-h6 font-weight-bold text-error">{{ slotTotals.late }}</div>
            <div class="text-subtitle-2">Consegne in Ritardo</div>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6" md="3" class="mb-4">
          <v-card variant="outlined" class="pa-4 h-100">
            <div class="d-flex align-center">
              <div class="text-h6 font-weight-bold">{{ slotTotals.onTimePercentage }}%</div>
              <v-progress-circular
                :model-value="parseFloat(slotTotals.onTimePercentage)"
                :color="parseFloat(slotTotals.onTimePercentage) > 90 ? 'success' : parseFloat(slotTotals.onTimePercentage) > 75 ? 'warning' : 'error'"
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
              <th class="text-left">CAP</th>
              <th class="text-left">Zona</th>
              <template v-if="selectedTimeSlot === 'Tutte'">
                <th class="text-left">Totale Consegne</th>
                <th class="text-left d-none d-md-table-cell">Tempo Medio</th>
              </template>
              <template v-else>
                <th class="text-left d-none d-sm-table-cell">Fascia Oraria</th>
                <th class="text-left">Consegne</th>
                <th class="text-left d-none d-sm-table-cell">Puntuali</th>
                <th class="text-left">Puntualità</th>
                <th class="text-left d-none d-md-table-cell">Tempo Medio</th>
              </template>
            </tr>
          </thead>
          <tbody>
            <tr v-for="pc in filteredData" :key="pc.postalCode">
              <td>{{ pc.postalCode }}</td>
              <td>{{ pc.zone }}</td>
              <template v-if="selectedTimeSlot === 'Tutte'">
                <td>{{ pc.totalDeliveries }}</td>
                <td class="d-none d-md-table-cell">{{ pc.averageTime }} min</td>
              </template>
              <template v-else>
                <td class="d-none d-sm-table-cell">{{ selectedTimeSlot }}</td>
                <td>{{ pc.currentSlot.count }}</td>
                <td class="d-none d-sm-table-cell">{{ pc.currentSlot.onTime }}</td>
                <td>
                  <v-chip
                    :color="pc.currentSlot.count > 0 && (pc.currentSlot.onTime / pc.currentSlot.count) >= 0.95 ? 'success' : 
                           pc.currentSlot.count > 0 && (pc.currentSlot.onTime / pc.currentSlot.count) >= 0.9 ? 'primary' : 'warning'"
                    size="small"
                  >
                    {{ pc.currentSlot.count > 0 ? ((pc.currentSlot.onTime / pc.currentSlot.count) * 100).toFixed(1) : '0.0' }}%
                  </v-chip>
                </td>
                <td class="d-none d-md-table-cell">{{ pc.averageTime }} min</td>
              </template>
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
.time-slot-select {
  min-width: 150px;
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