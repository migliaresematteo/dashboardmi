import { defineComponent, ref, resolveComponent, mergeProps, withCtx, createTextVNode } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent } from "vue/server-renderer";
import _imports_0 from "./_virtual/virtual_public.mjs";
import { useHead } from "./node_modules/nuxt/dist/head/runtime/composables/v3.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "error",
  __ssrInlineRender: true,
  setup(__props) {
    const title = ref("404-Page Not Found");
    useHead({
      meta: [{ content: title }],
      titleTemplate: (titleChunk) => {
        return titleChunk ? `${titleChunk} - 404-Page Not Found` : "Modernize - Nuxt3 Typescript based Free Admin Dashboard Template";
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_btn = resolveComponent("v-btn");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "d-flex justify-center align-center text-center h-100vh" }, _attrs))}><div><img${ssrRenderAttr("src", _imports_0)} width="500" alt="404"><h1 class="text-h1 pt-3">Opps!!!</h1><h4 class="text-h4 my-8">This page you are looking for could not be found.</h4>`);
      _push(ssrRenderComponent(_component_v_btn, {
        flat: "",
        color: "primary",
        class: "mb-4",
        to: "/"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Go Back to Home`);
          } else {
            return [
              createTextVNode("Go Back to Home")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
export {
  _sfc_main as default
};
//# sourceMappingURL=error.vue2.mjs.map
