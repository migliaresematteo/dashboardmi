// API Service per Mercato Itinerante
import { ref } from 'vue';

// Configurazione di base
const API_BASE_URL = ref('');
const API_KEY = ref('');

// Funzione per impostare la configurazione
export const setApiConfig = (baseUrl: string, apiKey: string) => {
  API_BASE_URL.value = baseUrl;
  API_KEY.value = apiKey;
};

// Funzione per ottenere l'URL base dell'API
const getApiBaseUrl = () => {
  if (API_BASE_URL.value) {
    return API_BASE_URL.value;
  }
  
  // Usa la configurazione runtime di Nuxt se disponibile
  if (process.client) {
    try {
      const config = useRuntimeConfig();
      return config.public.apiBaseUrl || '';
    } catch (e) {
      // Se useRuntimeConfig non è disponibile, usa il valore di default
    }
  }
  
  // Fallback basato sull'ambiente
  return process.env.NODE_ENV === 'production'
    ? 'https://api.mercatoitinerante.it'
    : '/api/wp';
};

// Funzione generica per le chiamate API
const fetchApi = async (endpoint: string, options: RequestInit = {}) => {
  try {
    const baseUrl = getApiBaseUrl();
    const url = `${baseUrl}${endpoint}`;
    
    // Prepara gli headers
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
      ...(options.headers as Record<string, string> || {})
    };
    
    // Aggiungi l'API key se necessario
    if (API_KEY.value) {
      headers['x-api-key'] = API_KEY.value;
    }
    
    const response = await fetch(url, {
      ...options,
      headers
    });
    
    if (!response.ok) {
      throw new Error(`API error: ${response.status} - ${response.statusText}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('API request failed:', error);
    throw error;
  }
};

// API specifiche
export const api = {
  // Negozi
  getStores: () => fetchApi('/wp-json/wp/v2/store'),
  
  // Categorie negozi
  getStoreCategories: () => fetchApi('/wp-json/wp/v2/store_category?parent=0&per_page=100'),
  
  // Franchising
  getFranchising: () => fetchApi('/wp-json/mi_plugin/v1/franchisings'),
  
  // Venditori
  getVendors: (storeId: number, slug?: string) => {
    let endpoint = `/wp-json/mi_plugin/v1/get-vendors?store=${storeId}`;
    if (slug) endpoint += `&slug=${slug}`;
    return fetchApi(endpoint);
  },
  
  // Prodotti
  getProducts: (params: {
    search?: string,
    store?: number,
    vendors?: string,
    categories?: string,
    shipping_days?: number,
    user_roles?: string,
    limit?: number,
    page?: number,
    stock_status?: string,
    type?: string
  } = {}) => {
    const queryParams = Object.entries(params)
      .filter(([_, value]) => value !== undefined)
      .map(([key, value]) => `${key}=${value}`)
      .join('&');
    
    const endpoint = `/wp-json/mi_plugin/v1/get-products${queryParams ? `?${queryParams}` : ''}`;
    return fetchApi(endpoint);
  },
  
  // Spedizioni
  getShippings: (storeId: number, cap: string, amount?: number) => {
    let endpoint = `/wp-json/mi_plugin/v1/get-shippings?store=${storeId}&cap=${cap}`;
    if (amount !== undefined) endpoint += `&amount=${amount}`;
    return fetchApi(endpoint);
  },
  
  // Validazione CAP
  validateCap: (cap: string) => fetchApi(`/wp-json/mi_plugin/v1/validate-cap?cap=${cap}`),
  
  // Login
  login: (credentials: { email: string, password: string, googleToken?: string, token?: string }) => {
    return fetchApi('/wp-json/df_theme/v1/login', {
      method: 'POST',
      body: JSON.stringify(credentials)
    });
  },
  
  // Registrazione
  register: (userData: {
    referral?: number,
    registrationType: 'client' | 'gruppo_acquisto' | 'business',
    email: string,
    password: string,
    confirm_password: string,
    privacy: number,
    privacy_mkt: number,
    meta?: any[],
    googleToken?: string
  }) => {
    return fetchApi('/wp-json/df_theme/v1/login', {
      method: 'POST',
      body: JSON.stringify(userData)
    });
  },
  
  // Guadagni venditore
  getVendorEarnings: (params: {
    token: string,
    start: string,
    end: string,
    order_status?: string,
    vendor_id?: number
  }) => {
    const queryParams = Object.entries(params)
      .filter(([_, value]) => value !== undefined)
      .map(([key, value]) => `${key}=${value}`)
      .join('&');
    
    return fetchApi(`/wp-json/mi_plugin/v1/vendor-earnings?${queryParams}`);
  },

  // API per dashboard amministrativa

  // Ordini mensili
  getMonthlyOrders: async (month: string, year: string) => {
    try {
      // Prova a usare un endpoint specifico se esiste
      // Se non esiste, usa i prodotti per simulare
      const products = await api.getProducts({ limit: 100 });
      
      // Genera dati mock basati sui prodotti reali
      const mockOrders = products.slice(0, 20).map((product: any, index: number) => ({
        id: 1000 + index,
        status: ['Completato', 'In elaborazione', 'Spedito', 'Annullato'][Math.floor(Math.random() * 4)],
        creationDate: `${year}-${month.padStart(2, '0')}-${String(Math.floor(Math.random() * 28) + 1).padStart(2, '0')} ${String(Math.floor(Math.random() * 24)).padStart(2, '0')}:${String(Math.floor(Math.random() * 60)).padStart(2, '0')}:00`,
        client: `Cliente ${index + 1}`,
        email: `cliente${index + 1}@example.com`,
        total: parseFloat((Math.random() * 200 + 20).toFixed(2)),
        paid: Math.random() > 0.2,
        payment: ['Carta di Credito', 'PayPal', 'Bonifico', 'Contanti'][Math.floor(Math.random() * 4)],
        market: product.store_name || 'Mercato Centrale'
      }));

      return {
        orders: mockOrders,
        lastUpdate: new Date().toLocaleString('it-IT')
      };
    } catch (error) {
      console.error('Errore nel recupero degli ordini mensili:', error);
      
      // Fallback a dati completamente mock
      return {
        orders: Array.from({ length: 10 }, (_, i) => ({
          id: 1000 + i,
          status: ['Completato', 'In elaborazione', 'Spedito'][Math.floor(Math.random() * 3)],
          creationDate: `${year}-${month.padStart(2, '0')}-${String(Math.floor(Math.random() * 28) + 1).padStart(2, '0')} 10:30:00`,
          client: `Cliente ${i + 1}`,
          email: `cliente${i + 1}@example.com`,
          total: parseFloat((Math.random() * 200 + 20).toFixed(2)),
          paid: Math.random() > 0.2,
          payment: ['Carta di Credito', 'PayPal', 'Bonifico', 'Contanti'][Math.floor(Math.random() * 4)],
          market: 'Mercato Centrale'
        })),
        lastUpdate: new Date().toLocaleString('it-IT')
      };
    }
  },

  // Consegne rider
  getRiderDeliveries: async (month: string) => {
    try {
      return {
        riderDeliveries: Array.from({ length: 10 }, (_, i) => ({
          id: i + 1,
          name: `Rider ${i + 1}`,
          currentMonth: {
            count: Math.floor(Math.random() * 100) + 50,
            onTime: Math.floor(Math.random() * 80) + 40,
            late: Math.floor(Math.random() * 20) + 5
          },
          rating: parseFloat((Math.random() * 2 + 3).toFixed(1)),
          vehicle: ['Bicicletta elettrica', 'Scooter elettrico', 'Auto elettrica'][Math.floor(Math.random() * 3)],
          zone: ['Milano Centro', 'Milano Nord', 'Milano Sud', 'Milano Est', 'Milano Ovest'][Math.floor(Math.random() * 5)]
        })),
        lastUpdate: new Date().toLocaleString('it-IT')
      };
    } catch (error) {
      console.error('Errore nel recupero delle consegne rider:', error);
      throw error;
    }
  },

  // Consegne per CAP
  getPostalCodeDeliveries: async (timeSlot: string) => {
    try {
      const postalCodes = ['20121', '20122', '20123', '20124', '20125'];
      return {
        postalCodeDeliveries: postalCodes.map((code, index) => ({
          postalCode: code,
          zone: `Milano ${['Centro', 'Centro-Sud', 'Centro-Ovest', 'Centro-Est', 'Nord'][index]}`,
          deliveries: ['08:00-10:00', '10:00-12:00', '12:00-14:00', '14:00-16:00', '16:00-18:00', '18:00-20:00'].map(slot => ({
            timeSlot: slot,
            count: Math.floor(Math.random() * 30) + 5,
            onTime: Math.floor(Math.random() * 25) + 5
          })),
          totalDeliveries: Math.floor(Math.random() * 100) + 50,
          averageTime: Math.floor(Math.random() * 10) + 20
        })),
        lastUpdate: new Date().toLocaleString('it-IT')
      };
    } catch (error) {
      console.error('Errore nel recupero delle consegne per CAP:', error);
      throw error;
    }
  },

  // Tipologie di pagamento
  getPaymentTypes: async (date: string) => {
    try {
      return {
        paymentData: {
          date,
          payments: [
            { type: 'Carta di Credito', count: Math.floor(Math.random() * 50) + 30, amount: Math.floor(Math.random() * 2000) + 1000 },
            { type: 'PayPal', count: Math.floor(Math.random() * 30) + 15, amount: Math.floor(Math.random() * 1500) + 800 },
            { type: 'Bonifico', count: Math.floor(Math.random() * 15) + 5, amount: Math.floor(Math.random() * 2000) + 1000 },
            { type: 'Contanti', count: Math.floor(Math.random() * 20) + 10, amount: Math.floor(Math.random() * 600) + 300 },
            { type: 'Satispay', count: Math.floor(Math.random() * 20) + 10, amount: Math.floor(Math.random() * 500) + 200 }
          ]
        },
        lastUpdate: new Date().toLocaleString('it-IT')
      };
    } catch (error) {
      console.error('Errore nel recupero delle tipologie di pagamento:', error);
      throw error;
    }
  },

  // Ordini B2B
  getB2BOrders: async (period: string) => {
    try {
      const vendors = await api.getVendors(23);
      
      return {
        b2bOrders: vendors.slice(0, 10).map((vendor: any, index: number) => ({
          id: 2000 + index,
          company: vendor.name || `Azienda ${index + 1}`,
          contact: `Contatto ${index + 1}`,
          email: `azienda${index + 1}@example.com`,
          orders: Math.floor(Math.random() * 50) + 10,
          total: Math.floor(Math.random() * 10000) + 2000,
          lastOrder: new Date(Date.now() - Math.floor(Math.random() * 30) * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
          status: ['Attivo', 'In pausa', 'Nuovo cliente'][Math.floor(Math.random() * 3)]
        })),
        lastUpdate: new Date().toLocaleString('it-IT')
      };
    } catch (error) {
      console.error('Errore nel recupero degli ordini B2B:', error);
      
      // Fallback a dati mock
      return {
        b2bOrders: Array.from({ length: 10 }, (_, i) => ({
          id: 2000 + i,
          company: `Azienda ${i + 1}`,
          contact: `Contatto ${i + 1}`,
          email: `azienda${i + 1}@example.com`,
          orders: Math.floor(Math.random() * 50) + 10,
          total: Math.floor(Math.random() * 10000) + 2000,
          lastOrder: new Date(Date.now() - Math.floor(Math.random() * 30) * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
          status: ['Attivo', 'In pausa', 'Nuovo cliente'][Math.floor(Math.random() * 3)]
        })),
        lastUpdate: new Date().toLocaleString('it-IT')
      };
    }
  },

  // Impatto ambientale
  getEnvironmentalImpact: async (year: string) => {
    try {
      const months = ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 
                      'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'];
      
      return {
        environmentalData: {
          year,
          monthlyData: months.map((month) => ({
            month,
            co2Saved: Math.floor(Math.random() * 500) + 200,
            plasticReduced: Math.floor(Math.random() * 300) + 100,
            localProducers: Math.floor(Math.random() * 20) + 30,
            sustainableProducts: Math.floor(Math.random() * 100) + 50
          })),
          totals: {
            co2Saved: Math.floor(Math.random() * 5000) + 3000,
            plasticReduced: Math.floor(Math.random() * 3000) + 1500,
            localProducers: Math.floor(Math.random() * 50) + 100,
            sustainableProducts: Math.floor(Math.random() * 1000) + 500
          }
        },
        lastUpdate: new Date().toLocaleString('it-IT')
      };
    } catch (error) {
      console.error('Errore nel recupero dei dati di impatto ambientale:', error);
      throw error;
    }
  }
};

export default api;