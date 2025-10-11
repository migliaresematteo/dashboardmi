<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';

// Mock data per gli ordini B2B
const b2bOrders = ref([
  {
    id: 'B2B-001',
    vendorId: 'V001',
    vendorName: 'Ristorante Da Luigi',
    vendorType: 'Ristorante',
    date: '2023-05-01',
    total: 1250.75,
    status: 'Completed',
    paymentStatus: 'Paid',
    paymentType: 'Bonifico',
    items: [
      { product: 'Pomodori San Marzano', quantity: 20, price: 3.50, total: 70.00 },
      { product: 'Mozzarella di Bufala', quantity: 15, price: 8.50, total: 127.50 },
      { product: 'Olio Extra Vergine', quantity: 10, price: 12.50, total: 125.00 }
    ],
    deliveryDate: '2023-05-03',
    recurring: true,
    frequency: 'Settimanale'
  },
  {
    id: 'B2B-002',
    vendorId: 'V002',
    vendorName: 'Trattoria Bella Italia',
    vendorType: 'Trattoria',
    date: '2023-05-02',
    total: 980.50,
    status: 'Processing',
    paymentStatus: 'Pending',
    paymentType: 'Bonifico',
    items: [
      { product: 'Parmigiano Reggiano', quantity: 5, price: 22.00, total: 110.00 },
      { product: 'Prosciutto di Parma', quantity: 8, price: 18.50, total: 148.00 },
      { product: 'Vino Rosso', quantity: 12, price: 15.00, total: 180.00 }
    ],
    deliveryDate: '2023-05-04',
    recurring: true,
    frequency: 'Bisettimanale'
  },
  {
    id: 'B2B-003',
    vendorId: 'V003',
    vendorName: 'Hotel Milano',
    vendorType: 'Hotel',
    date: '2023-05-02',
    total: 1850.25,
    status: 'Completed',
    paymentStatus: 'Paid',
    paymentType: 'Carta di Credito',
    items: [
      { product: 'Frutta Mista', quantity: 50, price: 2.50, total: 125.00 },
      { product: 'Verdure Assortite', quantity: 40, price: 3.00, total: 120.00 },
      { product: 'Formaggi Locali', quantity: 15, price: 10.00, total: 150.00 }
    ],
    deliveryDate: '2023-05-03',
    recurring: true,
    frequency: 'Giornaliero'
  },
  {
    id: 'B2B-004',
    vendorId: 'V004',
    vendorName: 'Pizzeria Napoli',
    vendorType: 'Pizzeria',
    date: '2023-05-03',
    total: 750.00,
    status: 'Processing',
    paymentStatus: 'Pending',
    paymentType: 'Bonifico',
    items: [
      { product: 'Farina Tipo 00', quantity: 30, price: 2.50, total: 75.00 },
      { product: 'Pomodori Pelati', quantity: 40, price: 1.80, total: 72.00 },
      { product: 'Mozzarella', quantity: 25, price: 5.00, total: 125.00 }
    ],
    deliveryDate: '2023-05-05',
    recurring: true,
    frequency: 'Settimanale'
  },
  {
    id: 'B2B-005',
    vendorId: 'V005',
    vendorName: 'Catering Eventi',
    vendorType: 'Catering',
    date: '2023-05-04',
    total: 2500.00,
    status: 'Pending',
    paymentStatus: 'Not Paid',
    paymentType: 'Bonifico',
    items: [
      { product: 'Carne Selezionata', quantity: 20, price: 25.00, total: 500.00 },
      { product: 'Pesce Fresco', quantity: 15, price: 30.00, total: 450.00 },
      { product: 'Vini Pregiati', quantity: 10, price: 35.00, total: 350.00 }
    ],
    deliveryDate: '2023-05-10',
    recurring: false,
    frequency: 'Una Tantum'
  }
]);

// Tipi di venditori disponibili
const vendorTypes = ['Tutti', 'Ristorante', 'Trattoria', 'Hotel', 'Pizzeria', 'Catering'];
const selectedVendorType = ref('Tutti');

// Stati ordine disponibili
const orderStatuses = ['Tutti', 'Completed', 'Processing', 'Pending'];
const selectedStatus = ref('Tutti');

// Filtra i dati in base ai filtri selezionati
const filteredData = computed(() => {
  return b2bOrders.value.filter(order => {
    const matchesVendorType = selectedVendorType.value === 'Tutti' || order.vendorType === selectedVendorType.value;
    const matchesStatus = selectedStatus.value === 'Tutti' || order.status === selectedStatus.value;
    return matchesVendorType && matchesStatus;
  }).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
});

// Totali per i dati filtrati
const filteredTotals = computed(() => {
  return filteredData.value.reduce((acc, order) => {
    acc.totalOrders += 1;
    acc.totalAmount += order.total;
    if (order.paymentStatus === 'Paid') {
      acc.paidAmount += order.total;
    } else {
      acc.pendingAmount += order.total;
    }
    return acc;
  }, { totalOrders: 0, totalAmount: 0, paidAmount: 0, pendingAmount: 0 });
});

// Dettagli dell'ordine selezionato per il modal
const selectedOrder = ref(null);
const showOrderDetails = ref(false);

// Funzione per visualizzare i dettagli dell'ordine
const viewOrderDetails = (order) => {
  selectedOrder.value = order;
  showOrderDetails.value = true;
};

// Funzione per chiudere il modal
const closeOrderDetails = () => {
  showOrderDetails.value = false;
};

// Funzione per esportare i dati in CSV
const exportToCSV = () => {
  const headers = ['ID', 'Venditore', 'Tipo', 'Data', 'Totale', 'Stato', 'Pagamento', 'Metodo', 'Consegna', 'Ricorrente', 'Frequenza'];
  
  const csvData = filteredData.value.map(order => {
    return [
      order.id,
      order.vendorName,
      order.vendorType,
      order.date,
      order.total.toFixed(2),
      order.status,
      order.paymentStatus,
      order.paymentType,
      order.deliveryDate,
      order.recurring ? 'Sì' : 'No',
      order.frequency
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
  link.setAttribute('download', `ordini_b2b.csv`);
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
        <h2 class="text-h5">Ordini B2B</h2>
        <p class="text-subtitle-1 text-medium-emphasis">
          Gestione degli ordini business-to-business
        </p>
      </div>
      <v-spacer></v-spacer>
      <v-select
        v-model="selectedVendorType"
        :items="vendorTypes"
        label="Tipo Venditore"
        density="compact"
        variant="outlined"
        class="filter-select me-2"
        style="max-width: 150px;"
      ></v-select>
      <v-select
        v-model="selectedStatus"
        :items="orderStatuses"
        label="Stato"
        density="compact"
        variant="outlined"
        class="filter-select me-2"
        style="max-width: 150px;"
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
          <div class="text-overline">Totale Ordini</div>
          <div class="text-h4">{{ filteredTotals.totalOrders }}</div>
        </v-card>
        
        <v-card variant="outlined" class="pa-4 me-4 mb-4" width="200">
          <div class="text-overline">Importo Totale</div>
          <div class="text-h4">€{{ filteredTotals.totalAmount.toFixed(2) }}</div>
        </v-card>
        
        <v-card variant="outlined" class="pa-4 me-4 mb-4" width="200">
          <div class="text-overline">Pagati</div>
          <div class="text-h4">€{{ filteredTotals.paidAmount.toFixed(2) }}</div>
        </v-card>
        
        <v-card variant="outlined" class="pa-4 mb-4" width="200">
          <div class="text-overline">In Attesa</div>
          <div class="text-h4">€{{ filteredTotals.pendingAmount.toFixed(2) }}</div>
        </v-card>
      </div>
      
      <v-table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Venditore</th>
            <th>Tipo</th>
            <th>Data</th>
            <th>Totale</th>
            <th>Stato</th>
            <th>Pagamento</th>
            <th>Ricorrente</th>
            <th>Azioni</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="order in filteredData" :key="order.id">
            <td>{{ order.id }}</td>
            <td>{{ order.vendorName }}</td>
            <td>{{ order.vendorType }}</td>
            <td>{{ new Date(order.date).toLocaleDateString('it-IT') }}</td>
            <td>€{{ order.total.toFixed(2) }}</td>
            <td>
              <v-chip
                :color="order.status === 'Completed' ? 'success' : order.status === 'Processing' ? 'primary' : 'warning'"
                size="small"
              >
                {{ order.status }}
              </v-chip>
            </td>
            <td>
              <v-chip
                :color="order.paymentStatus === 'Paid' ? 'success' : order.paymentStatus === 'Pending' ? 'warning' : 'error'"
                size="small"
              >
                {{ order.paymentStatus }}
              </v-chip>
            </td>
            <td>
              <v-icon v-if="order.recurring" color="success">mdi-check-circle</v-icon>
              <v-icon v-else color="error">mdi-close-circle</v-icon>
              {{ order.frequency }}
            </td>
            <td>
              <v-btn icon size="small" title="Visualizza dettagli" @click="viewOrderDetails(order)">
                <v-icon>mdi-eye</v-icon>
              </v-btn>
            </td>
          </tr>
        </tbody>
      </v-table>
      
      <div class="text-caption text-right mt-2">
        Ultimo aggiornamento: {{ lastUpdate }}
      </div>
    </v-card-text>
    
    <!-- Modal per i dettagli dell'ordine -->
    <v-dialog v-model="showOrderDetails" max-width="900px">
      <v-card v-if="selectedOrder">
        <v-card-title class="text-h5 bg-primary text-white pa-4">
          Dettaglio Ordine B2B {{ selectedOrder.id }}
          <v-spacer></v-spacer>
          <v-btn icon variant="text" color="white" @click="closeOrderDetails">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        
        <v-card-text class="pa-4">
          <v-row>
            <v-col cols="12" md="6">
              <v-list>
                <v-list-subheader class="text-h6">Informazioni Ordine</v-list-subheader>
                <v-list-item>
                  <template v-slot:prepend>
                    <v-icon color="primary">mdi-identifier</v-icon>
                  </template>
                  <v-list-item-title>ID Ordine</v-list-item-title>
                  <v-list-item-subtitle>{{ selectedOrder.id }}</v-list-item-subtitle>
                </v-list-item>
                
                <v-list-item>
                  <template v-slot:prepend>
                    <v-icon color="primary">mdi-calendar</v-icon>
                  </template>
                  <v-list-item-title>Data Ordine</v-list-item-title>
                  <v-list-item-subtitle>{{ new Date(selectedOrder.date).toLocaleDateString('it-IT') }}</v-list-item-subtitle>
                </v-list-item>
                
                <v-list-item>
                  <template v-slot:prepend>
                    <v-icon color="primary">mdi-truck-delivery</v-icon>
                  </template>
                  <v-list-item-title>Data Consegna</v-list-item-title>
                  <v-list-item-subtitle>{{ new Date(selectedOrder.deliveryDate).toLocaleDateString('it-IT') }}</v-list-item-subtitle>
                </v-list-item>
                
                <v-list-item>
                  <template v-slot:prepend>
                    <v-icon :color="selectedOrder.status === 'Completed' ? 'success' : selectedOrder.status === 'Processing' ? 'primary' : 'warning'">
                      mdi-information
                    </v-icon>
                  </template>
                  <v-list-item-title>Stato</v-list-item-title>
                  <v-list-item-subtitle>
                    <v-chip :color="selectedOrder.status === 'Completed' ? 'success' : selectedOrder.status === 'Processing' ? 'primary' : 'warning'" size="small">
                      {{ selectedOrder.status }}
                    </v-chip>
                  </v-list-item-subtitle>
                </v-list-item>
                
                <v-list-item>
                  <template v-slot:prepend>
                    <v-icon :color="selectedOrder.paymentStatus === 'Paid' ? 'success' : selectedOrder.paymentStatus === 'Pending' ? 'warning' : 'error'">
                      mdi-cash
                    </v-icon>
                  </template>
                  <v-list-item-title>Stato Pagamento</v-list-item-title>
                  <v-list-item-subtitle>
                    <v-chip :color="selectedOrder.paymentStatus === 'Paid' ? 'success' : selectedOrder.paymentStatus === 'Pending' ? 'warning' : 'error'" size="small">
                      {{ selectedOrder.paymentStatus }}
                    </v-chip>
                  </v-list-item-subtitle>
                </v-list-item>
                
                <v-list-item>
                  <template v-slot:prepend>
                    <v-icon color="primary">mdi-credit-card</v-icon>
                  </template>
                  <v-list-item-title>Metodo Pagamento</v-list-item-title>
                  <v-list-item-subtitle>{{ selectedOrder.paymentType }}</v-list-item-subtitle>
                </v-list-item>
              </v-list>
            </v-col>
            
            <v-col cols="12" md="6">
              <v-list>
                <v-list-subheader class="text-h6">Informazioni Venditore</v-list-subheader>
                <v-list-item>
                  <template v-slot:prepend>
                    <v-icon color="primary">mdi-store</v-icon>
                  </template>
                  <v-list-item-title>Nome</v-list-item-title>
                  <v-list-item-subtitle>{{ selectedOrder.vendorName }}</v-list-item-subtitle>
                </v-list-item>
                
                <v-list-item>
                  <template v-slot:prepend>
                    <v-icon color="primary">mdi-identifier</v-icon>
                  </template>
                  <v-list-item-title>ID Venditore</v-list-item-title>
                  <v-list-item-subtitle>{{ selectedOrder.vendorId }}</v-list-item-subtitle>
                </v-list-item>
                
                <v-list-item>
                  <template v-slot:prepend>
                    <v-icon color="primary">mdi-tag</v-icon>
                  </template>
                  <v-list-item-title>Tipo</v-list-item-title>
                  <v-list-item-subtitle>{{ selectedOrder.vendorType }}</v-list-item-subtitle>
                </v-list-item>
                
                <v-list-item>
                  <template v-slot:prepend>
                    <v-icon color="primary">mdi-refresh</v-icon>
                  </template>
                  <v-list-item-title>Ordine Ricorrente</v-list-item-title>
                  <v-list-item-subtitle>
                    <v-icon v-if="selectedOrder.recurring" color="success">mdi-check-circle</v-icon>
                    <v-icon v-else color="error">mdi-close-circle</v-icon>
                    {{ selectedOrder.frequency }}
                  </v-list-item-subtitle>
                </v-list-item>
              </v-list>
            </v-col>
          </v-row>
          
          <v-divider class="my-4"></v-divider>
          
          <v-row>
            <v-col cols="12">
              <h3 class="text-h6 mb-3">Prodotti Ordinati</h3>
              <v-table>
                <thead>
                  <tr>
                    <th>Prodotto</th>
                    <th>Quantità</th>
                    <th>Prezzo Unitario</th>
                    <th>Totale</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, index) in selectedOrder.items" :key="index">
                    <td>{{ item.product }}</td>
                    <td>{{ item.quantity }}</td>
                    <td>€{{ item.price.toFixed(2) }}</td>
                    <td>€{{ item.total.toFixed(2) }}</td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <td colspan="3" class="text-right font-weight-bold">Totale Ordine:</td>
                    <td class="text-h6">€{{ selectedOrder.total.toFixed(2) }}</td>
                  </tr>
                </tfoot>
              </v-table>
            </v-col>
          </v-row>
        </v-card-text>
        
        <v-card-actions class="pa-4">
          <v-spacer></v-spacer>
          <v-btn color="primary" variant="text" @click="closeOrderDetails">
            Chiudi
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-card>
</template>

<style scoped>
.filter-select {
  min-width: 120px;
}
</style>