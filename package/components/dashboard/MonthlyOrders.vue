<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import OrderDetailsModal from './OrderDetailsModal.vue';
import { api } from '~/services/api';

// Dati degli ordini
const orders = ref([]);
const isLoading = ref(false);
const lastUpdate = ref('');

// Selected month (default to current month)
const selectedMonth = ref(new Date().getMonth());
const selectedYear = ref(new Date().getFullYear());
const months = [
  'Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno',
  'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'
];

// Stato errore
const errorMessage = ref('');

// Funzione per caricare i dati degli ordini
const loadOrders = async () => {
  try {
    isLoading.value = true;
    errorMessage.value = '';
    
    // Formatta il mese con zero iniziale se necessario
    const monthStr = String(selectedMonth.value + 1).padStart(2, '0');
    const yearStr = String(selectedYear.value);
    
    const response = await api.getMonthlyOrders(monthStr, yearStr);
    orders.value = response.orders || [];
    lastUpdate.value = response.lastUpdate || new Date().toLocaleString('it-IT');
  } catch (error) {
    console.error('Errore nel caricamento degli ordini:', error);
    errorMessage.value = 'Impossibile caricare i dati. Verifica la connessione al server.';
    orders.value = [];
  } finally {
    isLoading.value = false;
  }
};

// Modal control
const showModal = ref(false);
const selectedOrder = ref(null);

const viewOrderDetails = (order) => {
  selectedOrder.value = order;
  showModal.value = true;
};

const closeModal = () => {
  showModal.value = false;
};

// Carica i dati quando cambia il mese o l'anno
watch([selectedMonth, selectedYear], () => {
  loadOrders();
});

// Function to export data as CSV
const exportCSV = () => {
  // Headers
  let csvContent = "ID Ordine,Stato,Data Creazione,Cliente,Email,Totale,Pagato,Tipologia Pagamento,Mercato\n";
  
  // Add data rows
  orders.value.forEach(order => {
    const row = [
      order.id,
      order.status,
      order.creationDate,
      order.client,
      order.email,
      `${order.total}€`,
      order.paid ? 'Sì' : 'No',
      order.payment,
      order.market
    ].join(',');
    csvContent += row + "\n";
  });
  
  // Create and download the CSV file
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement("a");
  const url = URL.createObjectURL(blob);
  link.setAttribute("href", url);
  link.setAttribute("download", `ordini_${months[selectedMonth.value]}_${selectedYear.value}.csv`);
  link.style.visibility = 'hidden';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

// Function to export data as PDF
const exportPDF = () => {
  alert('Funzionalità di esportazione PDF in fase di implementazione');
};

// Function to refresh data
const refreshData = () => {
  loadOrders();
};

// Carica i dati all'avvio
onMounted(() => {
  loadOrders();
});
</script>

<template>
  <v-card elevation="10">
    <v-card-item class="pa-6">
      <v-row>
        <v-col cols="12" sm="6">
          <v-card-title class="text-h5 pt-sm-2">
            Resoconto Ordini Mensili
          </v-card-title>
          <div class="text-caption mb-4">
            Ultimo aggiornamento: {{ lastUpdate }}
          </div>
        </v-col>
        <v-col cols="12" sm="6" class="d-flex align-center justify-end flex-wrap gap-2">
          <v-select
            v-model="selectedMonth"
            :items="months.map((month, index) => ({ text: month, value: index }))"
            item-title="text"
            item-value="value"
            label="Mese"
            hide-details
            variant="outlined"
            density="compact"
            class="month-selector"
            style="max-width: 150px;"
          ></v-select>
          <div class="d-flex gap-2 mt-2 mt-sm-0">
            <v-btn icon @click="refreshData" title="Aggiorna dati">
              <v-icon>mdi-refresh</v-icon>
            </v-btn>
            <v-btn icon @click="exportCSV" title="Esporta CSV">
              <v-icon>mdi-file-delimited</v-icon>
            </v-btn>
            <v-btn icon @click="exportPDF" title="Esporta PDF">
              <v-icon>mdi-file-pdf-box</v-icon>
            </v-btn>
          </div>
        </v-col>
      </v-row>
      
      <div v-if="isLoading" class="d-flex justify-center my-5">
        <v-progress-circular indeterminate color="primary"></v-progress-circular>
      </div>
      <div v-else class="table-responsive">
        <v-table class="month-orders-table">
          <thead>
            <tr>
              <th class="text-left">ID</th>
              <th class="text-left">Stato</th>
              <th class="text-left d-none d-sm-table-cell">Data</th>
              <th class="text-left">Cliente</th>
              <th class="text-left d-none d-md-table-cell">Email</th>
              <th class="text-right">Totale</th>
              <th class="text-center d-none d-md-table-cell">Pagato</th>
              <th class="text-left d-none d-lg-table-cell">Pagamento</th>
              <th class="text-left d-none d-lg-table-cell">Mercato</th>
              <th class="text-center">Azioni</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="order in orders" :key="order.id">
              <td>{{ order.id }}</td>
              <td>
                <v-chip
                  :color="order.status === 'Completato' ? 'success' : order.status === 'In elaborazione' ? 'warning' : 'error'"
                  size="small"
                  class="text-white"
                >
                  {{ order.status }}
                </v-chip>
              </td>
              <td class="d-none d-sm-table-cell">{{ order.creationDate }}</td>
              <td>{{ order.client }}</td>
              <td class="d-none d-md-table-cell">{{ order.email }}</td>
              <td class="text-right">{{ typeof order.total === 'number' ? order.total.toFixed(2) : order.total }}€</td>
              <td class="text-center d-none d-md-table-cell">
                <v-icon :color="order.paid ? 'success' : 'error'">
                  {{ order.paid ? 'mdi-check-circle' : 'mdi-close-circle' }}
                </v-icon>
              </td>
              <td class="d-none d-lg-table-cell">{{ order.payment }}</td>
              <td class="d-none d-lg-table-cell">{{ order.market }}</td>
              <td class="text-center">
                <v-btn
                  icon
                  variant="text"
                  color="primary"
                  size="small"
                  @click="viewOrderDetails(order)"
                >
                  <v-icon>mdi-eye</v-icon>
                </v-btn>
              </td>
            </tr>
          </tbody>
        </v-table>
      </div>
    </v-card-item>
    
    <!-- Order Details Modal -->
    <OrderDetailsModal 
      :order="selectedOrder" 
      :show="showModal" 
      @close="closeModal" 
      v-if="selectedOrder"
    />
  </v-card>
</template>

<style scoped>
.month-selector {
  min-width: 120px;
}

.table-responsive {
  overflow-x: auto;
  width: 100%;
}

@media (max-width: 600px) {
  .v-table {
    font-size: 0.85rem;
  }
}
</style>