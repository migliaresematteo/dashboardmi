import _sfc_main from "./admin-dashboard.vue2.mjs";
/* empty css                      */
import { useSSRContext } from "vue";
import _export_sfc from "../_virtual/_plugin-vue_export-helper.mjs";
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin-dashboard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const adminDashboard = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-7d78e383"]]);
export {
  adminDashboard as default
};
//# sourceMappingURL=admin-dashboard.vue.mjs.map
