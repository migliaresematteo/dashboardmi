<script setup lang="ts">
import { ref, defineProps, defineEmits, watch } from 'vue';

const props = defineProps({
  order: {
    type: Object,
    required: true
  },
  show: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits(['close', 'update:show']);

const closeModal = () => {
  emit('close');
  emit('update:show', false);
};

// Watch for changes to the show prop
watch(() => props.show, (newVal) => {
  if (!newVal) {
    emit('close');
  }
});
</script>

<template>
  <v-dialog :model-value="show" @update:model-value="$emit('update:show', $event)" max-width="900px">
    <v-card>
      <v-card-title class="text-h5 bg-primary text-white pa-4">
        Dettaglio Ordine {{ order.id }}
        <v-spacer></v-spacer>
        <v-btn icon variant="text" color="white" @click="closeModal">
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
                <v-list-item-subtitle>{{ order.id }}</v-list-item-subtitle>
              </v-list-item>
              
              <v-list-item>
                <template v-slot:prepend>
                  <v-icon color="primary">mdi-calendar</v-icon>
                </template>
                <v-list-item-title>Data Creazione</v-list-item-title>
                <v-list-item-subtitle>{{ order.creationDate }}</v-list-item-subtitle>
              </v-list-item>
              
              <v-list-item>
                <template v-slot:prepend>
                  <v-icon color="primary">mdi-truck-delivery</v-icon>
                </template>
                <v-list-item-title>Data Consegna</v-list-item-title>
                <v-list-item-subtitle>{{ order.deliveryDate }}</v-list-item-subtitle>
              </v-list-item>
              
              <v-list-item>
                <template v-slot:prepend>
                  <v-icon color="primary">mdi-store</v-icon>
                </template>
                <v-list-item-title>Mercato</v-list-item-title>
                <v-list-item-subtitle>{{ order.market }}</v-list-item-subtitle>
              </v-list-item>
              
              <v-list-item>
                <template v-slot:prepend>
                  <v-icon :color="order.status === 'Completed' ? 'success' : order.status === 'Processing' ? 'primary' : 'warning'">
                    mdi-information
                  </v-icon>
                </template>
                <v-list-item-title>Stato</v-list-item-title>
                <v-list-item-subtitle>
                  <v-chip :color="order.status === 'Completed' ? 'success' : order.status === 'Processing' ? 'primary' : 'warning'" size="small">
                    {{ order.status }}
                  </v-chip>
                </v-list-item-subtitle>
              </v-list-item>
            </v-list>
          </v-col>
          
          <v-col cols="12" md="6">
            <v-list>
              <v-list-subheader class="text-h6">Informazioni Cliente</v-list-subheader>
              <v-list-item>
                <template v-slot:prepend>
                  <v-icon color="primary">mdi-account</v-icon>
                </template>
                <v-list-item-title>Nome</v-list-item-title>
                <v-list-item-subtitle>{{ order.clientName }} {{ order.clientSurname }}</v-list-item-subtitle>
              </v-list-item>
              
              <v-list-item>
                <template v-slot:prepend>
                  <v-icon color="primary">mdi-identifier</v-icon>
                </template>
                <v-list-item-title>ID Cliente</v-list-item-title>
                <v-list-item-subtitle>{{ order.clientId }}</v-list-item-subtitle>
              </v-list-item>
              
              <v-list-item>
                <template v-slot:prepend>
                  <v-icon color="primary">mdi-email</v-icon>
                </template>
                <v-list-item-title>Email</v-list-item-title>
                <v-list-item-subtitle>{{ order.email }}</v-list-item-subtitle>
              </v-list-item>
            </v-list>
          </v-col>
        </v-row>
        
        <v-divider class="my-4"></v-divider>
        
        <v-row>
          <v-col cols="12">
            <h3 class="text-h6 mb-3">Dettagli Pagamento</h3>
            <v-table>
              <thead>
                <tr>
                  <th>Totale</th>
                  <th>Fees</th>
                  <th>Spedizione</th>
                  <th>Pagato</th>
                  <th>Metodo Pagamento</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="text-h6">€{{ order.total.toFixed(2) }}</td>
                  <td>€{{ order.fees.toFixed(2) }}</td>
                  <td>€{{ order.shipping.toFixed(2) }}</td>
                  <td>
                    <v-icon :color="order.paid ? 'success' : 'error'">
                      {{ order.paid ? 'mdi-check-circle' : 'mdi-close-circle' }}
                    </v-icon>
                    {{ order.paid ? 'Sì' : 'No' }}
                  </td>
                  <td>{{ order.paymentType }}</td>
                </tr>
              </tbody>
            </v-table>
          </v-col>
        </v-row>
        
        <v-divider class="my-4"></v-divider>
        
        <v-row>
          <v-col cols="12">
            <h3 class="text-h6 mb-3">Prodotti</h3>
            <p>{{ order.products }}</p>
          </v-col>
        </v-row>
        
        <v-divider class="my-4"></v-divider>
        
        <v-row>
          <v-col cols="12">
            <h3 class="text-h6 mb-3">Venditori</h3>
            <v-table>
              <thead>
                <tr>
                  <th>Nome Venditore</th>
                  <th>Totale</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(vendor, index) in order.vendors" :key="index">
                  <td>{{ vendor.name }}</td>
                  <td>€{{ vendor.total.toFixed(2) }}</td>
                </tr>
              </tbody>
            </v-table>
          </v-col>
        </v-row>
      </v-card-text>
      
      <v-card-actions class="pa-4">
        <v-spacer></v-spacer>
        <v-btn color="primary" variant="text" @click="closeModal">
          Chiudi
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>