<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';

// 1. TypeScript Interfaces per una struttura dati robusta e auto-documentante
interface OrderItem {
  product: string;
  quantity: number;
  price: number;
  total: number;
}

interface B2BOrder {
  id: string;
  vendorId: string;
  vendorName: string;
  vendorType: string;
  date: string;
  total: number;
  status: 'Completed' | 'Processing' | 'Pending';
  paymentStatus: 'Paid' | 'Pending' | 'Not Paid';
  paymentType: string;
  items: OrderItem[];
  deliveryDate: string;
  recurring: boolean;
  frequency: string;
}

// 2. Stato reattivo
const isLoading = ref(true);
const search = ref('');
const b2bOrders = ref<B2BOrder[]>([]);
const lastUpdate = ref('');

// Filtri
const vendorTypes = ['Tutti', 'Ristorante', 'Trattoria', 'Hotel', 'Pizzeria', 'Catering'];
const orderStatuses = ['Tutti', 'Completed', 'Processing', 'Pending'];
const selectedVendorType = ref('Tutti');
const selectedStatus = ref('Tutti');

// Modale
const selectedOrder = ref<B2BOrder | null>(null);
const showOrderDetails = ref(false);

// 3. Headers per le v-data-table
const mainHeaders = [
  { title: 'Venditore', key: 'vendorName', align: 'start' },
  { title: 'Data Ordine', key: 'date', class: 'd-none d-md-table-cell' },
  { title: 'Totale', key: 'total', align: 'end' },
  { title: 'Stato Ordine', key: 'status', align: 'center' },
  { title: 'Stato Pagamento', key: 'paymentStatus', align: 'center' },
  { title: 'Ricorrente', key: 'recurring', align: 'center', class: 'd-none d-lg-table-cell' },
  { title: 'Azioni', key: 'actions', align: 'center', sortable: false },
];

const modalItemsHeaders = [
    { title: 'Prodotto', key: 'product', align: 'start' },
    { title: 'Quantità', key: 'quantity', align: 'end' },
    { title: 'Prezzo Unitario', key: 'price', align: 'end' },
    { title: 'Totale Riga', key: 'total', align: 'end' },
];

// 4. Logica di calcolo (Computed Properties)
const filteredData = computed(() => {
  return b2bOrders.value.filter(order => {
    const matchesVendorType = selectedVendorType.value === 'Tutti' || order.vendorType === selectedVendorType.value;
    const matchesStatus = selectedStatus.value === 'Tutti' || order.status === selectedStatus.value;
    return matchesVendorType && matchesStatus;
  });
});

const filteredTotals = computed(() => {
  return filteredData.value.reduce((acc, order) => {
    acc.totalOrders += 1;
    acc.totalAmount += order.total;
    if (order.paymentStatus === 'Paid') acc.paidAmount += order.total;
    else acc.pendingAmount += order.total;
    return acc;
  }, { totalOrders: 0, totalAmount: 0, paidAmount: 0, pendingAmount: 0 });
});

// 5. Funzioni Helper e Azioni
const getOrderStatusColor = (status: B2BOrder['status']) => 
    ({ Completed: 'success', Processing: 'primary', Pending: 'warning' }[status]);
const getPaymentStatusColor = (status: B2BOrder['paymentStatus']) =>
    ({ Paid: 'success', Pending: 'warning', 'Not Paid': 'error' }[status]);

const formatCurrency = (value: number) => new Intl.NumberFormat('it-IT', { style: 'currency', currency: 'EUR' }).format(value);
const formatDate = (dateString: string) => new Date(dateString).toLocaleDateString('it-IT');

const viewOrderDetails = (order: B2BOrder) => {
  selectedOrder.value = order;
  showOrderDetails.value = true;
};
const closeOrderDetails = () => showOrderDetails.value = false;

const exportToCSV = () => { /* La tua logica CSV è corretta */ };
const exportToPDF = () => alert('Funzionalità PDF in sviluppo');
const refreshData = () => { lastUpdate.value = new Date().toLocaleString('it-IT'); };

// 6. Lifecycle
onMounted(() => {
  setTimeout(() => {
    b2bOrders.value = [ // Mock data
        { id: 'B2B-001', vendorId: 'V001', vendorName: 'Ristorante Da Luigi', vendorType: 'Ristorante', date: '2025-10-11', total: 1250.75, status: 'Completed', paymentStatus: 'Paid', paymentType: 'Bonifico', items: [ { product: 'Pomodori San Marzano', quantity: 20, price: 3.50, total: 70.00 }, { product: 'Mozzarella di Bufala', quantity: 15, price: 8.50, total: 127.50 }, { product: 'Olio Extra Vergine', quantity: 10, price: 12.50, total: 125.00 } ], deliveryDate: '2025-10-13', recurring: true, frequency: 'Settimanale' },
        { id: 'B2B-002', vendorId: 'V002', vendorName: 'Trattoria Bella Italia', vendorType: 'Trattoria', date: '2025-10-10', total: 980.50, status: 'Processing', paymentStatus: 'Pending', paymentType: 'Bonifico', items: [ { product: 'Parmigiano Reggiano', quantity: 5, price: 22.00, total: 110.00 }, { product: 'Prosciutto di Parma', quantity: 8, price: 18.50, total: 148.00 }, { product: 'Vino Rosso', quantity: 12, price: 15.00, total: 180.00 } ], deliveryDate: '2025-10-12', recurring: true, frequency: 'Bisettimanale' },
        { id: 'B2B-003', vendorId: 'V003', vendorName: 'Hotel Milano', vendorType: 'Hotel', date: '2025-10-10', total: 1850.25, status: 'Completed', paymentStatus: 'Paid', paymentType: 'Carta di Credito', items: [ { product: 'Frutta Mista', quantity: 50, price: 2.50, total: 125.00 }, { product: 'Verdure Assortite', quantity: 40, price: 3.00, total: 120.00 }, { product: 'Formaggi Locali', quantity: 15, price: 10.00, total: 150.00 } ], deliveryDate: '2025-10-11', recurring: true, frequency: 'Giornaliero' },
        { id: 'B2B-004', vendorId: 'V004', vendorName: 'Pizzeria Napoli', vendorType: 'Pizzeria', date: '2025-10-09', total: 750.00, status: 'Processing', paymentStatus: 'Pending', paymentType: 'Bonifico', items: [ { product: 'Farina Tipo 00', quantity: 30, price: 2.50, total: 75.00 }, { product: 'Pomodori Pelati', quantity: 40, price: 1.80, total: 72.00 }, { product: 'Mozzarella', quantity: 25, price: 5.00, total: 125.00 } ], deliveryDate: '2025-10-11', recurring: true, frequency: 'Settimanale' },
        { id: 'B2B-005', vendorId: 'V005', vendorName: 'Catering Eventi', vendorType: 'Catering', date: '2025-10-08', total: 2500.00, status: 'Pending', paymentStatus: 'Not Paid', paymentType: 'Bonifico', items: [ { product: 'Carne Selezionata', quantity: 20, price: 25.00, total: 500.00 }, { product: 'Pesce Fresco', quantity: 15, price: 30.00, total: 450.00 }, { product: 'Vini Pregiati', quantity: 10, price: 35.00, total: 350.00 } ], deliveryDate: '2025-10-18', recurring: false, frequency: 'Una Tantum' }
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
          <h2 class="text-h5">Gestione Ordini B2B</h2>
          <p class="text-subtitle-1 text-medium-emphasis">Filtra e analizza gli ordini business</p>
        </div>
        <v-spacer></v-spacer>
        <div class="d-flex flex-wrap align-center gap-2">
          <v-select v-model="selectedVendorType" :items="vendorTypes" label="Tipo Venditore" density="compact" variant="outlined" hide-details style="min-width: 150px;"></v-select>
          <v-select v-model="selectedStatus" :items="orderStatuses" label="Stato Ordine" density="compact" variant="outlined" hide-details style="min-width: 150px;"></v-select>
          <v-menu>
            <template v-slot:activator="{ props }"><v-btn icon="mdi-dots-vertical" v-bind="props"></v-btn></template>
            <v-list>
              <v-list-item @click="refreshData" prepend-icon="mdi-refresh">Aggiorna</v-list-item>
              <v-list-item @click="exportToCSV" prepend-icon="mdi-file-delimited">Esporta CSV</v-list-item>
              <v-list-item @click="exportToPDF" prepend-icon="mdi-file-pdf-box">Esporta PDF</v-list-item>
            </v-list>
          </v-menu>
        </div>
      </div>

      <v-row class="mt-4">
        <v-col v-for="item in [
            { label: 'Ordini Filtrati', value: filteredTotals.totalOrders, format: (v) => v },
            { label: 'Importo Totale', value: filteredTotals.totalAmount, format: formatCurrency, color: 'primary' },
            { label: 'Importo Pagato', value: filteredTotals.paidAmount, format: formatCurrency, color: 'success' },
            { label: 'Importo In Attesa', value: filteredTotals.pendingAmount, format: formatCurrency, color: 'warning' },
        ]" :key="item.label" cols="12" sm="6" md="3">
          <v-card variant="tonal" :color="item.color" class="pa-4 text-center h-100">
            <div class="text-overline">{{ item.label }}</div>
            <div class="text-h4 font-weight-bold">{{ item.format(item.value) }}</div>
          </v-card>
        </v-col>
      </v-row>
    </v-card-item>

    <v-divider></v-divider>
    
    <v-text-field v-model="search" label="Cerca per nome venditore o ID..." prepend-inner-icon="mdi-magnify" variant="solo-filled" flat hide-details single-line></v-text-field>

    <v-data-table
      :headers="mainHeaders"
      :items="filteredData"
      :search="search"
      :loading="isLoading"
      item-value="id"
      class="elevation-0"
      :sort-by="[{ key: 'date', order: 'desc' }]"
    >
      <template v-slot:loading><v-skeleton-loader type="table-row@5"></v-skeleton-loader></template>
      
      <template v-slot:item.vendorName="{ item }">
        <div class="font-weight-bold">{{ item.vendorName }}</div>
        <div class="text-caption">{{ item.vendorType }}</div>
      </template>
      
      <template v-slot:item.total="{ value }"><span class="font-weight-bold">{{ formatCurrency(value) }}</span></template>
      
      <template v-slot:item.status="{ value }"><v-chip :color="getOrderStatusColor(value)" size="small">{{ value }}</v-chip></template>
      <template v-slot:item.paymentStatus="{ value }"><v-chip :color="getPaymentStatusColor(value)" size="small">{{ value }}</v-chip></template>

      <template v-slot:item.recurring="{ item }">
        <v-icon :color="item.recurring ? 'success' : 'grey-lighten-1'">
            {{ item.recurring ? 'mdi-check-circle' : 'mdi-close-circle' }}
        </v-icon>
        <span class="ms-1 text-caption">{{ item.frequency }}</span>
      </template>

      <template v-slot:item.actions="{ item }">
        <v-btn icon="mdi-eye-outline" variant="text" size="small" @click="viewOrderDetails(item)"></v-btn>
      </template>

      <template v-slot:no-data><div class="pa-4 text-center">Nessun ordine trovato con i filtri attuali.</div></template>
    </v-data-table>

    <v-dialog v-model="showOrderDetails" max-width="900px" scrollable>
      <v-card v-if="selectedOrder">
        <v-card-title class="d-flex align-center pa-4">
          <span class="text-h5">Dettaglio Ordine {{ selectedOrder.id }}</span>
          <v-spacer></v-spacer>
          <v-btn icon="mdi-close" variant="text" @click="closeOrderDetails"></v-btn>
        </v-card-title>
        <v-divider></v-divider>
        
        <v-card-text>
          <v-row>
            <v-col cols="12" md="6">
              <div class="text-overline">Informazioni Ordine</div>
              <v-list-item :title="selectedOrder.id" subtitle="ID Ordine" prepend-icon="mdi-identifier"></v-list-item>
              <v-list-item :title="formatDate(selectedOrder.date)" subtitle="Data Ordine" prepend-icon="mdi-calendar-start"></v-list-item>
              <v-list-item :title="formatDate(selectedOrder.deliveryDate)" subtitle="Data Consegna" prepend-icon="mdi-truck-delivery"></v-list-item>
            </v-col>
            <v-col cols="12" md="6">
              <div class="text-overline">Informazioni Venditore</div>
              <v-list-item :title="selectedOrder.vendorName" :subtitle="selectedOrder.vendorId" prepend-icon="mdi-storefront-outline"></v-list-item>
              <v-list-item :title="selectedOrder.vendorType" subtitle="Tipo Venditore" prepend-icon="mdi-tag-outline"></v-list-item>
              <v-list-item :title="selectedOrder.frequency" :subtitle="`Ordine ${selectedOrder.recurring ? 'ricorrente' : 'singolo'}`" prepend-icon="mdi-sync"></v-list-item>
            </v-col>
          </v-row>
          <v-divider class="my-4"></v-divider>
          
          <h3 class="text-h6 mb-2">Prodotti Ordinati</h3>
          <v-data-table
            :headers="modalItemsHeaders"
            :items="selectedOrder.items"
            density="compact"
            class="border rounded"
          >
            <template v-slot:item.price="{ value }">{{ formatCurrency(value) }}</template>
            <template v-slot:item.total="{ value }">{{ formatCurrency(value) }}</template>
          </v-data-table>
        </v-card-text>
        
        <v-divider></v-divider>
        <v-card-actions class="pa-4">
            <div class="text-h6">Totale: <span class="font-weight-bold">{{ formatCurrency(selectedOrder.total) }}</span></div>
            <v-spacer></v-spacer>
            <v-btn color="primary" variant="tonal" @click="closeOrderDetails">Chiudi</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-card>
</template>

<style scoped>
.gap-2 { gap: 8px; }
.gap-4 { gap: 16px; }
</style>