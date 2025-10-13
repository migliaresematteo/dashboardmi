import { createVNode, resolveDynamicComponent, mergeProps, useSSRContext } from "vue";
import { ssrRenderVNode } from "vue/server-renderer";
const _sfc_main = {
  __name: "Icon",
  __ssrInlineRender: true,
  props: { item: Object, level: Number },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      if (__props.level > 0) {
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(__props.item), mergeProps({
          size: "14",
          "stroke-width": "1.5",
          class: "iconClass"
        }, _attrs), null), _parent);
      } else {
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(__props.item), mergeProps({
          size: "20",
          "stroke-width": "1.5",
          class: "iconClass"
        }, _attrs), null), _parent);
      }
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/full/vertical-sidebar/Icon.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=Icon.vue.mjs.map
