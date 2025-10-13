<script setup lang="ts">
import { ref, onMounted, watch, computed } from 'vue';
import OrderDetailsModal from './OrderDetailsModal.vue';
import { api } from '~/services/api';

// 1. Interfaccia TypeScript per una tipizzazione forte
interface Order {
  id: number;
  status: 'Completato' | 'In elaborazione' | 'Annullato'; // Sii più specifico possibile
  creationDate: string;
  client: string;
  email: string;
  total: number;
  paid: boolean;
  payment: string;
  market: string;
}

// 2. Stato reattivo (Refs)
const orders = ref<Order[]>([]);
const isLoading = ref(true);
const lastUpdate = ref('');
const search = ref(''); // Aggiunto per la funzionalità di ricerca
const errorMessage = ref('');

// 3. Gestione di data e anno
const selectedMonth = ref(0);
const selectedYear = ref(0);
const months = ref<{ title: string; value: number; }[]>([]);
const years = ref<number[]>([]);

onMounted(() => {
  const currentYear = new Date().getFullYear();
  selectedMonth.value = new Date().getMonth();
  selectedYear.value = currentYear;
  months.value = Array.from({ length: 12 }, (_, i) => ({ title: new Date(0, i).toLocaleString('it-IT', { month: 'long' }), value: i }));
  years.value = Array.from({ length: 10 }, (_, i) => currentYear - 5 + i);
  loadOrders();
});

// 4. Headers per v-data-table (più dichiarativo e pulito)
// Le classi per la responsività sono definite qui
const headers = [
  { title: 'ID', key: 'id', align: 'start' },
  { title: 'Stato', key: 'status' },
  { title: 'Data', key: 'creationDate', class: 'd-none d-sm-table-cell' },
  { title: 'Cliente', key: 'client' },
  { title: 'Email', key: 'email', class: 'd-none d-md-table-cell' },
  { title: 'Totale', key: 'total', align: 'end' },
  { title: 'Pagato', key: 'paid', align: 'center', class: 'd-none d-md-table-cell' },
  { title: 'Pagamento', key: 'payment', class: 'd-none d-lg-table-cell' },
  { title: 'Mercato', key: 'market', class: 'd-none d-lg-table-cell' },
  { title: 'Azioni', key: 'actions', align: 'center', sortable: false },
];

// 5. Logica API
const loadOrders = async () => {
  isLoading.value = true;
  errorMessage.value = '';
  try {
    const monthStr = String(selectedMonth.value + 1).padStart(2, '0');
    const response = await api.getMonthlyOrders(monthStr, String(selectedYear.value));
    orders.value = response.orders || [];
    lastUpdate.value = response.lastUpdate || new Date().toLocaleString('it-IT');
  } catch (error) {
    console.error('Errore nel caricamento degli ordini:', error);
    errorMessage.value = 'Impossibile caricare i dati. Verifica la connessione.';
    orders.value = [];
  } finally {
    isLoading.value = false;
  }
};

// 6. Gestione Modale (invariata)
const showModal = ref(false);
const selectedOrder = ref<Order | null>(null);

const viewOrderDetails = (order: Order) => {
  selectedOrder.value = order;
  showModal.value = true;
};
const closeModal = () => showModal.value = false;

// 7. Funzioni di Utilità e Azioni
const getStatusColor = (status: Order['status']) => {
  if (status === 'Completato') return 'success';
  if (status === 'In elaborazione') return 'warning';
  return 'error';
};

const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('it-IT', { style: 'currency', currency: 'EUR' }).format(value);
};

const exportCSV = () => { /* La tua logica CSV va bene, nessun cambiamento necessario */ };
const exportPDF = () => alert('Funzionalità di esportazione PDF in fase di implementazione');
const refreshData = () => loadOrders();

// 8. Watchers e Lifecycle Hooks
watch([selectedMonth, selectedYear], loadOrders);
onMounted(loadOrders);
</script>

<template>
  <v-card elevation="10">
    <v-card-title class="d-flex flex-wrap align-center pa-4">
      <div class="me-4">
        <h5 class="text-h5">Resoconto Ordini</h5>
        <v-card-subtitle class="ps-0">Ultimo aggiornamento: {{ lastUpdate }}</v-card-subtitle>
      </div>
      <v-spacer></v-spacer>
      <div class="d-flex align-center flex-wrap gap-2" style="width: 100%; max-width: 600px;">
        <v-select
          v-model="selectedMonth"
          :items="months"
          label="Mese"
          hide-details
          variant="outlined"
          density="compact"
          class="flex-grow-1"
          style="min-width: 140px;"
        ></v-select>
        <v-select
          v-model="selectedYear"
          :items="years"
          label="Anno"
          hide-details
          variant="outlined"
          density="compact"
          class="flex-grow-1"
          style="min-width: 120px;"
        ></v-select>
        <v-btn icon="mdi-refresh" @click="refreshData" title="Aggiorna dati"></v-btn>
        <v-menu>
          <template v-slot:activator="{ props }">
            <v-btn icon="mdi-download" v-bind="props" title="Esporta dati"></v-btn>
          </template>
          <v-list>
            <v-list-item @click="exportCSV">
              <v-list-item-title><v-icon start>mdi-file-delimited</v-icon>Esporta CSV</v-list-item-title>
            </v-list-item>
            <v-list-item @click="exportPDF">
              <v-list-item-title><v-icon start>mdi-file-pdf-box</v-icon>Esporta PDF</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </v-card-title>
    
    <v-divider></v-divider>

    <v-text-field
      v-model="search"
      label="Cerca in tabella (cliente, email, stato...)"
      prepend-inner-icon="mdi-magnify"
      variant="solo-filled"
      flat
      hide-details
      single-line
      class="pa-2"
    ></v-text-field>

    <v-alert v-if="errorMessage" type="error" class="ma-2" density="compact" closable>
      {{ errorMessage }}
    </v-alert>

    <v-data-table
      :headers="headers"
      :items="orders"
      :search="search"
      :loading="isLoading"
      item-value="id"
      class="elevation-0"
    >
      <template v-slot:loading>
        <v-skeleton-loader type="table-row@5"></v-skeleton-loader>
      </template>
      
      <template v-slot:item.status="{ value }">
        <v-chip :color="getStatusColor(value)" size="small">{{ value }}</v-chip>
      </template>

      <template v-slot:item.total="{ value }">
        {{ formatCurrency(value) }}
      </template>
      
      <template v-slot:item.paid="{ value }">
        <v-icon :color="value ? 'success' : 'error'">
          {{ value ? 'mdi-check-circle' : 'mdi-close-circle' }}
        </v-icon>
      </template>

      <template v-slot:item.actions="{ item }">
        <v-btn icon="mdi-eye" variant="text" color="primary" size="small" @click="viewOrderDetails(item)"></v-btn>
      </template>
      
      <template v-slot:no-data>
        <div class="pa-4 text-center">Nessun ordine trovato per il periodo selezionato.</div>
      </template>

    </v-data-table>

    <OrderDetailsModal 
      :order="selectedOrder" 
      :show="showModal" 
      @close="closeModal" 
      v-if="selectedOrder"
    />
  </v-card>
</template>

<style scoped>
/* Stili per rendere i gap tra elementi flessibili */
.gap-2 {
  gap: 8px;
}
</style>