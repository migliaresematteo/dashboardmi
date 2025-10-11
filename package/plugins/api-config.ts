// Plugin per la configurazione delle API
import { defineNuxtPlugin } from '#app';
import { setApiConfig } from '~/services/api';

export default defineNuxtPlugin((nuxtApp) => {
  // Configurazione di base delle API
  const apiBaseUrl = process.env.NUXT_API_BASE_URL || 'https://api.mercatoitinerante.it';
  const apiKey = process.env.NUXT_API_KEY || '';

  // Imposta la configurazione delle API
  setApiConfig(apiBaseUrl, apiKey);

  // Esponi funzioni utili
  return {
    provide: {
      setApiCredentials: (apiKey: string) => {
        setApiConfig(apiBaseUrl, apiKey);
      }
    }
  };
});