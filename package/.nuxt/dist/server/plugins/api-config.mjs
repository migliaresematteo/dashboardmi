import { defineNuxtPlugin } from "../node_modules/nuxt/dist/app/nuxt.mjs";
import "vue";
import "C:/Users/matte/OneDrive/Desktop/mi-dashboardamm/Modernize-nuxtjs-free/package/node_modules/klona/dist/index.mjs";
import "C:/Users/matte/OneDrive/Desktop/mi-dashboardamm/Modernize-nuxtjs-free/package/node_modules/defu/dist/defu.mjs";
import "#internal/nuxt/paths";
import { setApiConfig } from "../services/api.mjs";
const api_config_FBksLW_sMj9ylOYcaFjxMkdnzbYZuP_QkjbhK_7G7jU = defineNuxtPlugin((nuxtApp) => {
  const apiBaseUrl = process.env.NUXT_API_BASE_URL || "https://api.mercatoitinerante.it";
  const apiKey = process.env.NUXT_API_KEY || "";
  setApiConfig(apiBaseUrl, apiKey);
  return {
    provide: {
      setApiCredentials: (apiKey2) => {
        setApiConfig(apiBaseUrl, apiKey2);
      }
    }
  };
});
export {
  api_config_FBksLW_sMj9ylOYcaFjxMkdnzbYZuP_QkjbhK_7G7jU as default
};
//# sourceMappingURL=api-config.mjs.map
