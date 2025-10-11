<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';

// Mock data per l'impatto ambientale
const environmentalData = ref([
  {
    month: 'Gennaio',
    year: 2023,
    co2Saved: 1250,
    plasticSaved: 320,
    waterSaved: 5600,
    localProducts: 85,
    organicProducts: 62,
    deliveryDistance: 1200,
    deliveryEmissions: 180
  },
  {
    month: 'Febbraio',
    year: 2023,
    co2Saved: 1320,
    plasticSaved: 350,
    waterSaved: 6100,
    localProducts: 88,
    organicProducts: 65,
    deliveryDistance: 1350,
    deliveryEmissions: 195
  },
  {
    month: 'Marzo',
    year: 2023,
    co2Saved: 1450,
    plasticSaved: 380,
    waterSaved: 6500,
    localProducts: 90,
    organicProducts: 70,
    deliveryDistance: 1400,
    deliveryEmissions: 210
  },
  {
    month: 'Aprile',
    year: 2023,
    co2Saved: 1380,
    plasticSaved: 360,
    waterSaved: 6200,
    localProducts: 87,
    organicProducts: 68,
    deliveryDistance: 1380,
    deliveryEmissions: 200
  },
  {
    month: 'Maggio',
    year: 2023,
    co2Saved: 1520,
    plasticSaved: 400,
    waterSaved: 6800,
    localProducts: 92,
    organicProducts: 72,
    deliveryDistance: 1450,
    deliveryEmissions: 220
  }
]);

// Mesi disponibili per la selezione
const availableMonths = computed(() => {
  return environmentalData.value.map(data => `${data.month} ${data.year}`);
});

// Mese selezionato (default: ultimo mese disponibile)
const selectedMonth = ref(availableMonths.value[availableMonths.value.length - 1]);

// Dati filtrati per il mese selezionato
const currentMonthData = computed(() => {
  const [month, year] = selectedMonth.value.split(' ');
  return environmentalData.value.find(
    data => data.month === month && data.year.toString() === year
  ) || environmentalData.value[0];
});

// Calcolo dei totali
const totals = computed(() => {
  return environmentalData.value.reduce(
    (acc, data) => {
      acc.co2Saved += data.co2Saved;
      acc.plasticSaved += data.plasticSaved;
      acc.waterSaved += data.waterSaved;
      acc.deliveryDistance += data.deliveryDistance;
      acc.deliveryEmissions += data.deliveryEmissions;
      return acc;
    },
    {
      co2Saved: 0,
      plasticSaved: 0,
      waterSaved: 0,
      deliveryDistance: 0,
      deliveryEmissions: 0
    }
  );
});

// Calcolo delle medie percentuali
const averages = computed(() => {
  const totalMonths = environmentalData.value.length;
  return {
    localProducts: environmentalData.value.reduce((acc, data) => acc + data.localProducts, 0) / totalMonths,
    organicProducts: environmentalData.value.reduce((acc, data) => acc + data.organicProducts, 0) / totalMonths
  };
});

// Funzione per esportare i dati in CSV
const exportToCSV = () => {
  const headers = ['Mese', 'Anno', 'CO2 Risparmiata (kg)', 'Plastica Risparmiata (kg)', 'Acqua Risparmiata (L)', 
                  'Prodotti Locali (%)', 'Prodotti Biologici (%)', 'Distanza Consegne (km)', 'Emissioni Consegne (kg CO2)'];
  
  const csvData = environmentalData.value.map(data => {
    return [
      data.month,
      data.year,
      data.co2Saved,
      data.plasticSaved,
      data.waterSaved,
      data.localProducts,
      data.organicProducts,
      data.deliveryDistance,
      data.deliveryEmissions
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
  link.setAttribute('download', `impatto_ambientale.csv`);
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
  // Qui andrebbe la chiamata API per aggiornare i dati
  lastUpdate.value = new Date().toLocaleString('it-IT');
};

// Inizializzazione
onMounted(() => {
  // Qui andrebbe la chiamata API per caricare i dati reali
});
</script>

<template>
  <v-card class="mb-6">
    <v-card-title class="d-flex align-center">
      <div>
        <h2 class="text-h5">Impatto Ambientale</h2>
        <p class="text-subtitle-1 text-medium-emphasis">
          Monitoraggio dell'impatto ambientale del mercato
        </p>
      </div>
      <v-spacer></v-spacer>
      <v-select
        v-model="selectedMonth"
        :items="availableMonths"
        label="Mese"
        density="compact"
        variant="outlined"
        class="month-select me-2"
        style="max-width: 180px;"
      ></v-select>
      <v-btn icon class="ms-2" title="Esporta CSV" @click="exportToCSV">
        <v-icon>mdi-file-export</v-icon>
      </v-btn>
      <v-btn icon class="ms-2" title="Esporta PDF" @click="exportToPDF">
        <v-icon>mdi-file-pdf-box</v-icon>
      </v-btn>
      <v-btn icon class="ms-2" title="Aggiorna dati" @click="refreshData">
        <v-icon>mdi-refresh</v-icon>
      </v-btn>
    </v-card-title>
    
    <v-card-text>
      <v-row>
        <v-col cols="12" md="6">
          <v-card variant="outlined" class="pa-4 mb-4">
            <h3 class="text-h6 mb-4">Impatto Mensile ({{ selectedMonth }})</h3>
            
            <v-row>
              <v-col cols="6" md="4">
                <v-card variant="flat" class="pa-2 text-center">
                  <v-icon color="success" size="large">mdi-molecule-co2</v-icon>
                  <div class="text-overline">CO2 Risparmiata</div>
                  <div class="text-h5">{{ currentMonthData.co2Saved }} kg</div>
                </v-card>
              </v-col>
              
              <v-col cols="6" md="4">
                <v-card variant="flat" class="pa-2 text-center">
                  <v-icon color="info" size="large">mdi-recycle</v-icon>
                  <div class="text-overline">Plastica Risparmiata</div>
                  <div class="text-h5">{{ currentMonthData.plasticSaved }} kg</div>
                </v-card>
              </v-col>
              
              <v-col cols="6" md="4">
                <v-card variant="flat" class="pa-2 text-center">
                  <v-icon color="primary" size="large">mdi-water</v-icon>
                  <div class="text-overline">Acqua Risparmiata</div>
                  <div class="text-h5">{{ currentMonthData.waterSaved }} L</div>
                </v-card>
              </v-col>
              
              <v-col cols="6" md="6">
                <v-card variant="flat" class="pa-2 text-center">
                  <v-icon color="success" size="large">mdi-map-marker</v-icon>
                  <div class="text-overline">Prodotti Locali</div>
                  <div class="text-h5">{{ currentMonthData.localProducts }}%</div>
                </v-card>
              </v-col>
              
              <v-col cols="6" md="6">
                <v-card variant="flat" class="pa-2 text-center">
                  <v-icon color="success" size="large">mdi-leaf</v-icon>
                  <div class="text-overline">Prodotti Biologici</div>
                  <div class="text-h5">{{ currentMonthData.organicProducts }}%</div>
                </v-card>
              </v-col>
            </v-row>
            
            <v-divider class="my-4"></v-divider>
            
            <h4 class="text-subtitle-1 mb-3">Impatto Consegne</h4>
            <v-row>
              <v-col cols="6">
                <v-card variant="flat" class="pa-2 text-center">
                  <v-icon color="warning" size="large">mdi-truck</v-icon>
                  <div class="text-overline">Distanza Percorsa</div>
                  <div class="text-h5">{{ currentMonthData.deliveryDistance }} km</div>
                </v-card>
              </v-col>
              
              <v-col cols="6">
                <v-card variant="flat" class="pa-2 text-center">
                  <v-icon color="error" size="large">mdi-factory</v-icon>
                  <div class="text-overline">Emissioni</div>
                  <div class="text-h5">{{ currentMonthData.deliveryEmissions }} kg CO2</div>
                </v-card>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
        
        <v-col cols="12" md="6">
          <v-card variant="outlined" class="pa-4 mb-4">
            <h3 class="text-h6 mb-4">Impatto Totale</h3>
            
            <v-row>
              <v-col cols="6" md="4">
                <v-card variant="flat" class="pa-2 text-center">
                  <v-icon color="success" size="large">mdi-molecule-co2</v-icon>
                  <div class="text-overline">CO2 Risparmiata</div>
                  <div class="text-h5">{{ totals.co2Saved }} kg</div>
                </v-card>
              </v-col>
              
              <v-col cols="6" md="4">
                <v-card variant="flat" class="pa-2 text-center">
                  <v-icon color="info" size="large">mdi-recycle</v-icon>
                  <div class="text-overline">Plastica Risparmiata</div>
                  <div class="text-h5">{{ totals.plasticSaved }} kg</div>
                </v-card>
              </v-col>
              
              <v-col cols="6" md="4">
                <v-card variant="flat" class="pa-2 text-center">
                  <v-icon color="primary" size="large">mdi-water</v-icon>
                  <div class="text-overline">Acqua Risparmiata</div>
                  <div class="text-h5">{{ totals.waterSaved }} L</div>
                </v-card>
              </v-col>
              
              <v-col cols="6" md="6">
                <v-card variant="flat" class="pa-2 text-center">
                  <v-icon color="success" size="large">mdi-map-marker</v-icon>
                  <div class="text-overline">Media Prodotti Locali</div>
                  <div class="text-h5">{{ averages.localProducts.toFixed(1) }}%</div>
                </v-card>
              </v-col>
              
              <v-col cols="6" md="6">
                <v-card variant="flat" class="pa-2 text-center">
                  <v-icon color="success" size="large">mdi-leaf</v-icon>
                  <div class="text-overline">Media Prodotti Biologici</div>
                  <div class="text-h5">{{ averages.organicProducts.toFixed(1) }}%</div>
                </v-card>
              </v-col>
            </v-row>
            
            <v-divider class="my-4"></v-divider>
            
            <h4 class="text-subtitle-1 mb-3">Impatto Consegne Totale</h4>
            <v-row>
              <v-col cols="6">
                <v-card variant="flat" class="pa-2 text-center">
                  <v-icon color="warning" size="large">mdi-truck</v-icon>
                  <div class="text-overline">Distanza Totale</div>
                  <div class="text-h5">{{ totals.deliveryDistance }} km</div>
                </v-card>
              </v-col>
              
              <v-col cols="6">
                <v-card variant="flat" class="pa-2 text-center">
                  <v-icon color="error" size="large">mdi-factory</v-icon>
                  <div class="text-overline">Emissioni Totali</div>
                  <div class="text-h5">{{ totals.deliveryEmissions }} kg CO2</div>
                </v-card>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
      
      <v-row>
        <v-col cols="12">
          <v-card variant="outlined" class="pa-4">
            <h3 class="text-h6 mb-4">Dettaglio Mensile</h3>
            <v-table>
              <thead>
                <tr>
                  <th>Mese</th>
                  <th>CO2 Risparmiata</th>
                  <th>Plastica Risparmiata</th>
                  <th>Acqua Risparmiata</th>
                  <th>Prodotti Locali</th>
                  <th>Prodotti Biologici</th>
                  <th>Distanza Consegne</th>
                  <th>Emissioni</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(data, index) in environmentalData" :key="index">
                  <td>{{ data.month }} {{ data.year }}</td>
                  <td>{{ data.co2Saved }} kg</td>
                  <td>{{ data.plasticSaved }} kg</td>
                  <td>{{ data.waterSaved }} L</td>
                  <td>{{ data.localProducts }}%</td>
                  <td>{{ data.organicProducts }}%</td>
                  <td>{{ data.deliveryDistance }} km</td>
                  <td>{{ data.deliveryEmissions }} kg CO2</td>
                </tr>
              </tbody>
            </v-table>
          </v-card>
        </v-col>
      </v-row>
      
      <div class="text-caption text-right mt-2">
        Ultimo aggiornamento: {{ lastUpdate }}
      </div>
    </v-card-text>
  </v-card>
</template>

<style scoped>
.month-select {
  min-width: 150px;
}
</style>