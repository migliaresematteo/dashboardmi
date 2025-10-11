<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';

// Mock data per le tipologie di pagamento
const paymentData = ref([
  {
    date: '2023-05-01',
    payments: [
      { type: 'Carta di Credito', count: 45, amount: 2250.50 },
      { type: 'PayPal', count: 22, amount: 1100.75 },
      { type: 'Bonifico', count: 8, amount: 1600.00 },
      { type: 'Contanti', count: 15, amount: 450.25 },
      { type: 'Satispay', count: 12, amount: 360.00 }
    ]
  },
  {
    date: '2023-05-02',
    payments: [
      { type: 'Carta di Credito', count: 42, amount: 2100.25 },
      { type: 'PayPal', count: 20, amount: 980.50 },
      { type: 'Bonifico', count: 6, amount: 1200.00 },
      { type: 'Contanti', count: 18, amount: 540.75 },
      { type: 'Satispay', count: 14, amount: 420.00 }
    ]
  },
  {
    date: '2023-05-03',
    payments: [
      { type: 'Carta di Credito', count: 48, amount: 2400.00 },
      { type: 'PayPal', count: 25, amount: 1250.25 },
      { type: 'Bonifico', count: 10, amount: 2000.00 },
      { type: 'Contanti', count: 12, amount: 360.50 },
      { type: 'Satispay', count: 15, amount: 450.00 }
    ]
  },
  {
    date: '2023-05-04',
    payments: [
      { type: 'Carta di Credito', count: 40, amount: 2000.00 },
      { type: 'PayPal', count: 18, amount: 900.00 },
      { type: 'Bonifico', count: 5, amount: 1000.00 },
      { type: 'Contanti', count: 20, amount: 600.00 },
      { type: 'Satispay', count: 10, amount: 300.00 }
    ]
  },
  {
    date: '2023-05-05',
    payments: [
      { type: 'Carta di Credito', count: 50, amount: 2500.00 },
      { type: 'PayPal', count: 28, amount: 1400.00 },
      { type: 'Bonifico', count: 12, amount: 2400.00 },
      { type: 'Contanti', count: 10, amount: 300.00 },
      { type: 'Satispay', count: 18, amount: 540.00 }
    ]
  }
]);

// Date disponibili
const availableDates = computed(() => {
  return paymentData.value.map(day => {
    const date = new Date(day.date);
    return {
      value: day.date,
      title: date.toLocaleDateString('it-IT', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
    };
  });
});

// Data selezionata (default: ultima data disponibile)
const selectedDate = ref(paymentData.value[paymentData.value.length - 1].date);

// Dati filtrati per la data selezionata
const filteredData = computed(() => {
  const dayData = paymentData.value.find(day => day.date === selectedDate.value);
  if (!dayData) return [];
  
  return dayData.payments.sort((a, b) => b.amount - a.amount);
});

// Totali per la data selezionata
const dailyTotals = computed(() => {
  const dayData = paymentData.value.find(day => day.date === selectedDate.value);
  if (!dayData) return { totalCount: 0, totalAmount: 0 };
  
  return dayData.payments.reduce((acc, payment) => {
    acc.totalCount += payment.count;
    acc.totalAmount += payment.amount;
    return acc;
  }, { totalCount: 0, totalAmount: 0 });
});

// Percentuali per tipo di pagamento
const paymentPercentages = computed(() => {
  if (dailyTotals.value.totalCount === 0 || dailyTotals.value.totalAmount === 0) return [];
  
  return filteredData.value.map(payment => {
    return {
      ...payment,
      countPercentage: (payment.count / dailyTotals.value.totalCount * 100).toFixed(1),
      amountPercentage: (payment.amount / dailyTotals.value.totalAmount * 100).toFixed(1)
    };
  });
});

// Funzione per esportare i dati in CSV
const exportToCSV = () => {
  const headers = ['Tipo Pagamento', 'Numero Transazioni', '% Transazioni', 'Importo Totale', '% Importo'];
  
  const csvData = paymentPercentages.value.map(payment => {
    return [
      payment.type,
      payment.count,
      payment.countPercentage,
      payment.amount.toFixed(2),
      payment.amountPercentage
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
  link.setAttribute('download', `pagamenti_${selectedDate.value}.csv`);
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
        <h2 class="text-h5">Tipologie di Pagamento</h2>
        <p class="text-subtitle-1 text-medium-emphasis">
          Statistiche giornaliere dei metodi di pagamento
        </p>
      </div>
      <v-spacer></v-spacer>
      <v-select
        v-model="selectedDate"
        :items="availableDates"
        label="Data"
        density="compact"
        variant="outlined"
        class="date-select"
        style="max-width: 200px;"
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
      <div class="d-flex mb-4 flex-wrap">
        <v-card variant="outlined" class="pa-4 me-4 mb-4" width="200">
          <div class="text-overline">Totale Transazioni</div>
          <div class="text-h4">{{ dailyTotals.totalCount }}</div>
        </v-card>
        
        <v-card variant="outlined" class="pa-4 mb-4" width="200">
          <div class="text-overline">Importo Totale</div>
          <div class="text-h4">€{{ dailyTotals.totalAmount.toFixed(2) }}</div>
        </v-card>
      </div>
      
      <v-table>
        <thead>
          <tr>
            <th>Tipo Pagamento</th>
            <th>Numero Transazioni</th>
            <th>% Transazioni</th>
            <th>Importo Totale</th>
            <th>% Importo</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="payment in paymentPercentages" :key="payment.type">
            <td>
              <div class="d-flex align-center">
                <v-icon :icon="
                  payment.type === 'Carta di Credito' ? 'mdi-credit-card' :
                  payment.type === 'PayPal' ? 'mdi-paypal' :
                  payment.type === 'Bonifico' ? 'mdi-bank' :
                  payment.type === 'Contanti' ? 'mdi-cash' :
                  payment.type === 'Satispay' ? 'mdi-cellphone' : 'mdi-cash-multiple'"
                  class="me-2"
                ></v-icon>
                {{ payment.type }}
              </div>
            </td>
            <td>{{ payment.count }}</td>
            <td>
              <v-progress-linear
                :model-value="parseFloat(payment.countPercentage)"
                height="8"
                color="primary"
                class="mt-1"
              ></v-progress-linear>
              <span class="text-caption">{{ payment.countPercentage }}%</span>
            </td>
            <td>€{{ payment.amount.toFixed(2) }}</td>
            <td>
              <v-progress-linear
                :model-value="parseFloat(payment.amountPercentage)"
                height="8"
                color="success"
                class="mt-1"
              ></v-progress-linear>
              <span class="text-caption">{{ payment.amountPercentage }}%</span>
            </td>
          </tr>
        </tbody>
      </v-table>
      
      <div class="text-caption text-right mt-2">
        Ultimo aggiornamento: {{ lastUpdate }}
      </div>
    </v-card-text>
  </v-card>
</template>

<style scoped>
.date-select {
  min-width: 180px;
}
</style>