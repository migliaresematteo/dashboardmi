<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';

// 1. TypeScript Interfaces per una struttura dati chiara e sicura
interface Payment {
  type: string;
  count: number;
  amount: number;
}

interface DailyPaymentData {
  date: string;
  payments: Payment[];
}

// Interfaccia per i dati finali mostrati in tabella
interface PaymentStat extends Payment {
  countPercentage: number;
  amountPercentage: number;
}

// 2. Stato reattivo
const isLoading = ref(true);
const search = ref('');
const paymentData = ref<DailyPaymentData[]>([]);
const selectedDate = ref<string | null>(null);
const lastUpdate = ref('');

// 3. Headers per v-data-table
const headers = [
  { title: 'Tipo Pagamento', key: 'type', align: 'start' },
  { title: 'N. Transazioni', key: 'count', align: 'center' },
  { title: '% Transazioni', key: 'countPercentage', align: 'start', sortable: false },
  { title: 'Importo Totale', key: 'amount', align: 'end' },
  { title: '% Importo', key: 'amountPercentage', align: 'start', sortable: false },
];

// 4. Logica di calcolo (Computed Properties)
const availableDates = computed(() => {
  return paymentData.value.map(day => {
    const date = new Date(day.date);
    return {
      value: day.date,
      title: date.toLocaleDateString('it-IT', { weekday: 'long', day: 'numeric', month: 'long' })
    };
  }).reverse(); // Mostra le date più recenti per prime
});

const dailyTotals = computed(() => {
  const dayData = paymentData.value.find(day => day.date === selectedDate.value);
  if (!dayData) return { totalCount: 0, totalAmount: 0 };
  
  return dayData.payments.reduce((acc, payment) => {
    acc.totalCount += payment.count;
    acc.totalAmount += payment.amount;
    return acc;
  }, { totalCount: 0, totalAmount: 0 });
});

// Questa è la fonte dati finale per la tabella, già arricchita con le percentuali
const tableData = computed((): PaymentStat[] => {
  const dayData = paymentData.value.find(day => day.date === selectedDate.value);
  if (!dayData) return [];

  const { totalCount, totalAmount } = dailyTotals.value;
  if (totalCount === 0 || totalAmount === 0) return [];

  return dayData.payments
    .map(payment => ({
      ...payment,
      countPercentage: (payment.count / totalCount) * 100,
      amountPercentage: (payment.amount / totalAmount) * 100,
    }))
    .sort((a, b) => b.amount - a.amount);
});


// 5. Funzioni Helper e Azioni
const getPaymentIcon = (type: string): string => {
  const icons: { [key: string]: string } = {
    'Carta di Credito': 'mdi-credit-card-outline',
    'PayPal': 'mdi-paypal',
    'Bonifico': 'mdi-bank-outline',
    'Contanti': 'mdi-cash-multiple',
    'Satispay': 'mdi-cellphone',
  };
  return icons[type] || 'mdi-help-circle-outline';
};

const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('it-IT', { style: 'currency', currency: 'EUR' }).format(value);
};

const exportToCSV = () => { /* La tua logica CSV va bene, puoi semplificarla usando tableData */ };
const exportToPDF = () => alert('Funzionalità PDF in sviluppo');
const refreshData = () => {
  lastUpdate.value = new Date().toLocaleString('it-IT');
};

// 6. Lifecycle
onMounted(() => {
  setTimeout(() => {
    paymentData.value = [ // Dati mock
        { date: '2025-10-07', payments: [ { type: 'Carta di Credito', count: 45, amount: 2250.50 }, { type: 'PayPal', count: 22, amount: 1100.75 }, { type: 'Bonifico', count: 8, amount: 1600.00 }, { type: 'Contanti', count: 15, amount: 450.25 }, { type: 'Satispay', count: 12, amount: 360.00 } ] },
        { date: '2025-10-08', payments: [ { type: 'Carta di Credito', count: 42, amount: 2100.25 }, { type: 'PayPal', count: 20, amount: 980.50 }, { type: 'Bonifico', count: 6, amount: 1200.00 }, { type: 'Contanti', count: 18, amount: 540.75 }, { type: 'Satispay', count: 14, amount: 420.00 } ] },
        { date: '2025-10-09', payments: [ { type: 'Carta di Credito', count: 48, amount: 2400.00 }, { type: 'PayPal', count: 25, amount: 1250.25 }, { type: 'Bonifico', count: 10, amount: 2000.00 }, { type: 'Contanti', count: 12, amount: 360.50 }, { type: 'Satispay', count: 15, amount: 450.00 } ] },
        { date: '2025-10-10', payments: [ { type: 'Carta di Credito', count: 40, amount: 2000.00 }, { type: 'PayPal', count: 18, amount: 900.00 }, { type: 'Bonifico', count: 5, amount: 1000.00 }, { type: 'Contanti', count: 20, amount: 600.00 }, { type: 'Satispay', count: 10, amount: 300.00 } ] },
        { date: '2025-10-11', payments: [ { type: 'Carta di Credito', count: 50, amount: 2500.00 }, { type: 'PayPal', count: 28, amount: 1400.00 }, { type: 'Bonifico', count: 12, amount: 2400.00 }, { type: 'Contanti', count: 10, amount: 300.00 }, { type: 'Satispay', count: 18, amount: 540.00 } ] }
    ];
    // Imposta la data di default all'ultima disponibile (oggi)
    if (paymentData.value.length > 0) {
      selectedDate.value = paymentData.value[paymentData.value.length - 1].date;
    }
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
          <h2 class="text-h5">Statistiche Metodi di Pagamento</h2>
          <p class="text-subtitle-1 text-medium-emphasis">Dati aggregati per giorno</p>
        </div>
        <v-spacer></v-spacer>
        <div class="d-flex flex-wrap align-center gap-2">
          <v-select
            v-model="selectedDate"
            :items="availableDates"
            label="Seleziona Giorno"
            density="compact"
            variant="outlined"
            hide-details
            style="min-width: 240px;"
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
        <v-col cols="12" sm="6">
            <v-card variant="tonal" class="pa-4 text-center h-100">
                <div class="text-overline">Totale Transazioni</div>
                <div class="text-h3 font-weight-bold">{{ dailyTotals.totalCount }}</div>
            </v-card>
        </v-col>
        <v-col cols="12" sm="6">
            <v-card variant="tonal" color="success" class="pa-4 text-center h-100">
                <div class="text-overline">Importo Totale Incassato</div>
                <div class="text-h3 font-weight-bold">{{ formatCurrency(dailyTotals.totalAmount) }}</div>
            </v-card>
        </v-col>
      </v-row>
    </v-card-item>
    
    <v-divider></v-divider>

     <v-text-field
        v-model="search"
        label="Cerca metodo di pagamento..."
        prepend-inner-icon="mdi-magnify"
        variant="solo-filled"
        flat hide-details single-line
    ></v-text-field>

    <v-data-table
      :headers="headers"
      :items="tableData"
      :search="search"
      :loading="isLoading"
      item-value="type"
      class="elevation-0"
    >
        <template v-slot:loading>
            <v-skeleton-loader type="table-row@5"></v-skeleton-loader>
        </template>
        
        <template v-slot:item.type="{ item }">
            <div class="d-flex align-center font-weight-bold py-2">
                <v-icon :icon="getPaymentIcon(item.type)" class="me-3" size="24"></v-icon>
                <span>{{ item.type }}</span>
            </div>
        </template>
        
        <template v-slot:item.countPercentage="{ value }">
            <div style="min-width: 120px;">
                <v-progress-linear :model-value="value" color="primary" height="8" rounded></v-progress-linear>
                <span class="text-caption text-medium-emphasis">{{ value.toFixed(1) }}%</span>
            </div>
        </template>
        
        <template v-slot:item.amount="{ value }">
            <span class="font-weight-bold">{{ formatCurrency(value) }}</span>
        </template>
        
        <template v-slot:item.amountPercentage="{ value }">
            <div style="min-width: 120px;">
                <v-progress-linear :model-value="value" color="success" height="8" rounded></v-progress-linear>
                <span class="text-caption text-medium-emphasis">{{ value.toFixed(1) }}%</span>
            </div>
        </template>
        
        <template v-slot:no-data>
            <div class="pa-4 text-center">Nessun dato trovato per la data selezionata.</div>
        </template>
    </v-data-table>
  </v-card>
</template>

<style scoped>
.gap-2 { gap: 8px; }
.gap-4 { gap: 16px; }
</style>