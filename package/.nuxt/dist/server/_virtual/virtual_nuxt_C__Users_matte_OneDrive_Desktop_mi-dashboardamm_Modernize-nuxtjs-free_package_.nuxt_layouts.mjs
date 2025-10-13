import { defineAsyncComponent } from "vue";
const layouts = {
  blank: defineAsyncComponent(() => import("../layouts/blank.vue.mjs").then((m) => m.default || m)),
  default: defineAsyncComponent(() => import("../layouts/default.vue.mjs").then((m) => m.default || m))
};
export {
  layouts as default
};
//# sourceMappingURL=virtual_nuxt_C__Users_matte_OneDrive_Desktop_mi-dashboardamm_Modernize-nuxtjs-free_package_.nuxt_layouts.mjs.map
