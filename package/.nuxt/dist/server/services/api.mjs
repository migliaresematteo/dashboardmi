import { ref } from "vue";
import { useRuntimeConfig } from "../node_modules/nuxt/dist/app/nuxt.mjs";
const API_BASE_URL = ref("");
const API_KEY = ref("");
const setApiConfig = (baseUrl, apiKey) => {
  API_BASE_URL.value = baseUrl;
  API_KEY.value = apiKey;
};
const getApiBaseUrl = () => {
  if (API_BASE_URL.value) {
    return API_BASE_URL.value;
  }
  try {
    const config = useRuntimeConfig();
    return config.public.apiBaseUrl || "";
  } catch (e) {
  }
  return process.env.NODE_ENV === "production" ? "https://www.mercatoitinerante.it" : "";
};
const getApiKey = () => {
  if (API_KEY.value) {
    return API_KEY.value;
  }
  try {
    const config = useRuntimeConfig();
    return config.apiKey || "";
  } catch (e) {
    return "";
  }
};
const fetchApi = async (endpoint, options = {}) => {
  try {
    const baseUrl = getApiBaseUrl();
    const url = `${baseUrl}${endpoint}`;
    const headers = {
      "Content-Type": "application/json",
      ...options.headers || {}
    };
    const apiKey = getApiKey();
    if (apiKey) {
      headers["x-api-key"] = apiKey;
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
    console.error("API request failed:", error);
    throw error;
  }
};
const api = {
  // Negozi
  getStores: () => fetchApi("/wp-json/wp/v2/store"),
  // Categorie negozi
  getStoreCategories: () => fetchApi("/wp-json/wp/v2/store_category?parent=0&per_page=100"),
  // Franchising
  getFranchising: () => fetchApi("/wp-json/mi_plugin/v1/franchisings"),
  // Venditori
  getVendors: (storeId, slug) => {
    let endpoint = `/wp-json/mi_plugin/v1/get-vendors?store=${storeId}`;
    if (slug) endpoint += `&slug=${slug}`;
    return fetchApi(endpoint);
  },
  // Prodotti
  getProducts: (params = {}) => {
    const queryParams = Object.entries(params).filter(([_, value]) => value !== void 0).map(([key, value]) => `${key}=${value}`).join("&");
    const endpoint = `/wp-json/mi_plugin/v1/get-products${queryParams ? `?${queryParams}` : ""}`;
    return fetchApi(endpoint);
  },
  // Spedizioni
  getShippings: (storeId, cap, amount) => {
    let endpoint = `/wp-json/mi_plugin/v1/get-shippings?store=${storeId}&cap=${cap}`;
    if (amount !== void 0) endpoint += `&amount=${amount}`;
    return fetchApi(endpoint);
  },
  // Validazione CAP
  validateCap: (cap) => fetchApi(`/wp-json/mi_plugin/v1/validate-cap?cap=${cap}`),
  // Login
  login: (credentials) => {
    return fetchApi("/wp-json/df_theme/v1/login", {
      method: "POST",
      body: JSON.stringify(credentials)
    });
  },
  // Registrazione
  register: (userData) => {
    return fetchApi("/wp-json/df_theme/v1/login", {
      method: "POST",
      body: JSON.stringify(userData)
    });
  },
  // Guadagni venditore
  getVendorEarnings: (params) => {
    const queryParams = Object.entries(params).filter(([_, value]) => value !== void 0).map(([key, value]) => `${key}=${value}`).join("&");
    return fetchApi(`/wp-json/mi_plugin/v1/vendor-earnings?${queryParams}`);
  },
  // API per dashboard amministrativa
  // Dashboard data functions - Simulazioni temporanee
  getMonthlyOrders: async (month, year) => {
    try {
      const baseUrl = getApiBaseUrl();
      const response = await fetchApi(`/get-products?limit=100&month=${month}&year=${year}`);
      if (!response || !response.data) {
        throw new Error("Nessun dato ricevuto dall'API");
      }
      const orders = response.data.slice(0, 20).map((product, index) => ({
        id: index + 1,
        status: ["Completato", "In elaborazione", "Spedito", "Consegnato"][Math.floor(Math.random() * 4)],
        creationDate: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1e3).toLocaleDateString("it-IT"),
        client: product.name || `Cliente ${index + 1}`,
        email: `cliente${index + 1}@email.com`,
        total: parseFloat((Math.random() * 200 + 50).toFixed(2)),
        payment: ["Carta di Credito", "PayPal", "Bonifico", "Contanti"][Math.floor(Math.random() * 4)],
        market: "Mercato Centrale"
      }));
      return {
        orders,
        lastUpdate: (/* @__PURE__ */ new Date()).toLocaleString("it-IT")
      };
    } catch (error) {
      console.error("Errore API, uso dati simulati:", error);
      return {
        orders: Array.from({ length: 20 }, (_, i) => ({
          id: i + 1,
          status: ["Completato", "In elaborazione", "Spedito", "Consegnato"][Math.floor(Math.random() * 4)],
          creationDate: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1e3).toLocaleDateString("it-IT"),
          client: `Cliente ${i + 1}`,
          email: `cliente${i + 1}@email.com`,
          total: parseFloat((Math.random() * 200 + 50).toFixed(2)),
          payment: ["Carta di Credito", "PayPal", "Bonifico", "Contanti"][Math.floor(Math.random() * 4)],
          market: "Mercato Centrale"
        })),
        lastUpdate: (/* @__PURE__ */ new Date()).toLocaleString("it-IT")
      };
    }
  },
  // Consegne rider
  getRiderDeliveries: async (month) => {
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
          vehicle: ["Bicicletta elettrica", "Scooter elettrico", "Auto elettrica"][Math.floor(Math.random() * 3)],
          zone: ["Milano Centro", "Milano Nord", "Milano Sud", "Milano Est", "Milano Ovest"][Math.floor(Math.random() * 5)]
        })),
        lastUpdate: (/* @__PURE__ */ new Date()).toLocaleString("it-IT")
      };
    } catch (error) {
      console.error("Errore nel recupero delle consegne rider:", error);
      throw error;
    }
  },
  // Consegne per CAP
  getPostalCodeDeliveries: async (timeSlot) => {
    try {
      const postalCodes = ["20121", "20122", "20123", "20124", "20125"];
      return {
        postalCodeDeliveries: postalCodes.map((code, index) => ({
          postalCode: code,
          zone: `Milano ${["Centro", "Centro-Sud", "Centro-Ovest", "Centro-Est", "Nord"][index]}`,
          deliveries: ["08:00-10:00", "10:00-12:00", "12:00-14:00", "14:00-16:00", "16:00-18:00", "18:00-20:00"].map((slot) => ({
            timeSlot: slot,
            count: Math.floor(Math.random() * 30) + 5,
            onTime: Math.floor(Math.random() * 25) + 5
          })),
          totalDeliveries: Math.floor(Math.random() * 100) + 50,
          averageTime: Math.floor(Math.random() * 10) + 20
        })),
        lastUpdate: (/* @__PURE__ */ new Date()).toLocaleString("it-IT")
      };
    } catch (error) {
      console.error("Errore nel recupero delle consegne per CAP:", error);
      throw error;
    }
  },
  // Tipologie di pagamento
  getPaymentTypes: async (date) => {
    try {
      return {
        paymentData: {
          date,
          payments: [
            { type: "Carta di Credito", count: Math.floor(Math.random() * 50) + 30, amount: Math.floor(Math.random() * 2e3) + 1e3 },
            { type: "PayPal", count: Math.floor(Math.random() * 30) + 15, amount: Math.floor(Math.random() * 1500) + 800 },
            { type: "Bonifico", count: Math.floor(Math.random() * 15) + 5, amount: Math.floor(Math.random() * 2e3) + 1e3 },
            { type: "Contanti", count: Math.floor(Math.random() * 20) + 10, amount: Math.floor(Math.random() * 600) + 300 },
            { type: "Satispay", count: Math.floor(Math.random() * 20) + 10, amount: Math.floor(Math.random() * 500) + 200 }
          ]
        },
        lastUpdate: (/* @__PURE__ */ new Date()).toLocaleString("it-IT")
      };
    } catch (error) {
      console.error("Errore nel recupero delle tipologie di pagamento:", error);
      throw error;
    }
  },
  // Ordini B2B
  getB2BOrders: async (period) => {
    try {
      const vendors = await api.getVendors(23);
      return {
        b2bOrders: vendors.slice(0, 10).map((vendor, index) => ({
          id: 2e3 + index,
          company: vendor.name || `Azienda ${index + 1}`,
          contact: `Contatto ${index + 1}`,
          email: `azienda${index + 1}@example.com`,
          orders: Math.floor(Math.random() * 50) + 10,
          total: Math.floor(Math.random() * 1e4) + 2e3,
          lastOrder: new Date(Date.now() - Math.floor(Math.random() * 30) * 24 * 60 * 60 * 1e3).toISOString().split("T")[0],
          status: ["Attivo", "In pausa", "Nuovo cliente"][Math.floor(Math.random() * 3)]
        })),
        lastUpdate: (/* @__PURE__ */ new Date()).toLocaleString("it-IT")
      };
    } catch (error) {
      console.error("Errore nel recupero degli ordini B2B:", error);
      return {
        b2bOrders: Array.from({ length: 10 }, (_, i) => ({
          id: 2e3 + i,
          company: `Azienda ${i + 1}`,
          contact: `Contatto ${i + 1}`,
          email: `azienda${i + 1}@example.com`,
          orders: Math.floor(Math.random() * 50) + 10,
          total: Math.floor(Math.random() * 1e4) + 2e3,
          lastOrder: new Date(Date.now() - Math.floor(Math.random() * 30) * 24 * 60 * 60 * 1e3).toISOString().split("T")[0],
          status: ["Attivo", "In pausa", "Nuovo cliente"][Math.floor(Math.random() * 3)]
        })),
        lastUpdate: (/* @__PURE__ */ new Date()).toLocaleString("it-IT")
      };
    }
  },
  // Impatto ambientale
  getEnvironmentalImpact: async (year) => {
    try {
      const months = [
        "Gennaio",
        "Febbraio",
        "Marzo",
        "Aprile",
        "Maggio",
        "Giugno",
        "Luglio",
        "Agosto",
        "Settembre",
        "Ottobre",
        "Novembre",
        "Dicembre"
      ];
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
            co2Saved: Math.floor(Math.random() * 5e3) + 3e3,
            plasticReduced: Math.floor(Math.random() * 3e3) + 1500,
            localProducers: Math.floor(Math.random() * 50) + 100,
            sustainableProducts: Math.floor(Math.random() * 1e3) + 500
          }
        },
        lastUpdate: (/* @__PURE__ */ new Date()).toLocaleString("it-IT")
      };
    } catch (error) {
      console.error("Errore nel recupero dei dati di impatto ambientale:", error);
      throw error;
    }
  }
};
export {
  api,
  api as default,
  setApiConfig
};
//# sourceMappingURL=api.mjs.map
