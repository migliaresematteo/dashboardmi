import { $fetch } from "ofetch";
import { baseURL } from "#internal/nuxt/paths";
if (!globalThis.$fetch) {
  globalThis.$fetch = $fetch.create({
    baseURL: baseURL()
  });
}
//# sourceMappingURL=virtual_nuxt_C__Users_matte_OneDrive_Desktop_mi-dashboardamm_Modernize-nuxtjs-free_package_.nuxt_fetch.mjs.map
