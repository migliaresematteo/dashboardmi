import __nuxt_page_meta from "../pages/auth/Login.vue2.mjs";
import __nuxt_page_meta$1 from "../pages/auth/Register.vue2.mjs";
function handleHotUpdate(_router, _generateRoutes) {
}
const _routes = [
  {
    name: "index",
    path: "/",
    component: () => import("../pages/index.vue.mjs")
  },
  {
    name: "auth-Login",
    path: "/auth/Login",
    meta: __nuxt_page_meta || {},
    component: () => import("../pages/auth/Login.vue.mjs")
  },
  {
    name: "ordini-b2b",
    path: "/ordini-b2b",
    component: () => import("../pages/ordini-b2b.vue.mjs")
  },
  {
    name: "consegne-cap",
    path: "/consegne-cap",
    component: () => import("../pages/consegne-cap.vue.mjs")
  },
  {
    name: "auth-Register",
    path: "/auth/Register",
    meta: __nuxt_page_meta$1 || {},
    component: () => import("../pages/auth/Register.vue.mjs")
  },
  {
    name: "consegne-rider",
    path: "/consegne-rider",
    component: () => import("../pages/consegne-rider.vue.mjs")
  },
  {
    name: "ordini-mensili",
    path: "/ordini-mensili",
    component: () => import("../pages/ordini-mensili.vue.mjs")
  },
  {
    name: "admin-dashboard",
    path: "/admin-dashboard",
    component: () => import("../pages/admin-dashboard.vue.mjs")
  },
  {
    name: "impatto-ambientale",
    path: "/impatto-ambientale",
    component: () => import("../pages/impatto-ambientale.vue.mjs")
  },
  {
    name: "tipologie-pagamento",
    path: "/tipologie-pagamento",
    component: () => import("../pages/tipologie-pagamento.vue.mjs")
  }
];
export {
  _routes as default,
  handleHotUpdate
};
//# sourceMappingURL=virtual_nuxt_C__Users_matte_OneDrive_Desktop_mi-dashboardamm_Modernize-nuxtjs-free_package_.nuxt_routes.mjs.map
