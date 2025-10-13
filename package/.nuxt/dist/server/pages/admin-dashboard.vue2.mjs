import { defineComponent, resolveComponent, mergeProps, withCtx, createVNode } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import MonthlyOrders from "../components/dashboard/MonthlyOrders.vue.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "admin-dashboard",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_container = resolveComponent("v-container");
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      _push(ssrRenderComponent(_component_v_container, mergeProps({
        fluid: "",
        class: "page-wrapper"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_row, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_col, { cols: "12" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<h1 class="text-h4 font-weight-bold mb-6" data-v-7d78e383${_scopeId3}>Dashboard Mercato Itinerante - Amministrativa</h1>`);
                      } else {
                        return [
                          createVNode("h1", { class: "text-h4 font-weight-bold mb-6" }, "Dashboard Mercato Itinerante - Amministrativa")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_col, { cols: "12" }, {
                      default: withCtx(() => [
                        createVNode("h1", { class: "text-h4 font-weight-bold mb-6" }, "Dashboard Mercato Itinerante - Amministrativa")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_row, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_col, { cols: "12" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(MonthlyOrders, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(MonthlyOrders)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_col, { cols: "12" }, {
                      default: withCtx(() => [
                        createVNode(MonthlyOrders)
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_row, null, {
                default: withCtx(() => [
                  createVNode(_component_v_col, { cols: "12" }, {
                    default: withCtx(() => [
                      createVNode("h1", { class: "text-h4 font-weight-bold mb-6" }, "Dashboard Mercato Itinerante - Amministrativa")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_v_row, null, {
                default: withCtx(() => [
                  createVNode(_component_v_col, { cols: "12" }, {
                    default: withCtx(() => [
                      createVNode(MonthlyOrders)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
export {
  _sfc_main as default
};
//# sourceMappingURL=admin-dashboard.vue2.mjs.map
