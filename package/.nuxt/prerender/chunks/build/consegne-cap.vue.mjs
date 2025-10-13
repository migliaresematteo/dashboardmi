import { defineComponent, resolveComponent, mergeProps, withCtx, createVNode, useSSRContext } from 'file://C:/Users/matte/OneDrive/Desktop/mi-dashboardamm/Modernize-nuxtjs-free/package/node_modules/vue/index.mjs';
import { ssrRenderComponent } from 'file://C:/Users/matte/OneDrive/Desktop/mi-dashboardamm/Modernize-nuxtjs-free/package/node_modules/vue/server-renderer/index.mjs';
import { P as PostalCodeDeliveries } from './PostalCodeDeliveries.vue.mjs';
import './server.mjs';
import 'file://C:/Users/matte/OneDrive/Desktop/mi-dashboardamm/Modernize-nuxtjs-free/package/node_modules/hookable/dist/index.mjs';
import 'file://C:/Users/matte/OneDrive/Desktop/mi-dashboardamm/Modernize-nuxtjs-free/package/node_modules/unctx/dist/index.mjs';
import 'file://C:/Users/matte/OneDrive/Desktop/mi-dashboardamm/Modernize-nuxtjs-free/package/node_modules/h3/dist/index.mjs';
import 'file://C:/Users/matte/OneDrive/Desktop/mi-dashboardamm/Modernize-nuxtjs-free/package/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file://C:/Users/matte/OneDrive/Desktop/mi-dashboardamm/Modernize-nuxtjs-free/package/node_modules/radix3/dist/index.mjs';
import 'file://C:/Users/matte/OneDrive/Desktop/mi-dashboardamm/Modernize-nuxtjs-free/package/node_modules/defu/dist/defu.mjs';
import 'file://C:/Users/matte/OneDrive/Desktop/mi-dashboardamm/Modernize-nuxtjs-free/package/node_modules/ufo/dist/index.mjs';
import '../_/renderer.mjs';
import 'file://C:/Users/matte/OneDrive/Desktop/mi-dashboardamm/Modernize-nuxtjs-free/package/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file://C:/Users/matte/OneDrive/Desktop/mi-dashboardamm/Modernize-nuxtjs-free/package/node_modules/unhead/dist/server.mjs';
import 'file://C:/Users/matte/OneDrive/Desktop/mi-dashboardamm/Modernize-nuxtjs-free/package/node_modules/unhead/dist/utils.mjs';
import '../_/nitro.mjs';
import 'file://C:/Users/matte/OneDrive/Desktop/mi-dashboardamm/Modernize-nuxtjs-free/package/node_modules/destr/dist/index.mjs';
import 'file://C:/Users/matte/OneDrive/Desktop/mi-dashboardamm/Modernize-nuxtjs-free/package/node_modules/ofetch/dist/node.mjs';
import 'file://C:/Users/matte/OneDrive/Desktop/mi-dashboardamm/Modernize-nuxtjs-free/package/node_modules/node-mock-http/dist/index.mjs';
import 'file://C:/Users/matte/OneDrive/Desktop/mi-dashboardamm/Modernize-nuxtjs-free/package/node_modules/unstorage/dist/index.mjs';
import 'file://C:/Users/matte/OneDrive/Desktop/mi-dashboardamm/Modernize-nuxtjs-free/package/node_modules/unstorage/drivers/fs.mjs';
import 'file:///C:/Users/matte/OneDrive/Desktop/mi-dashboardamm/Modernize-nuxtjs-free/package/node_modules/nuxt/dist/core/runtime/nitro/utils/cache-driver.js';
import 'file://C:/Users/matte/OneDrive/Desktop/mi-dashboardamm/Modernize-nuxtjs-free/package/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file://C:/Users/matte/OneDrive/Desktop/mi-dashboardamm/Modernize-nuxtjs-free/package/node_modules/ohash/dist/index.mjs';
import 'file://C:/Users/matte/OneDrive/Desktop/mi-dashboardamm/Modernize-nuxtjs-free/package/node_modules/klona/dist/index.mjs';
import 'file://C:/Users/matte/OneDrive/Desktop/mi-dashboardamm/Modernize-nuxtjs-free/package/node_modules/scule/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file://C:/Users/matte/OneDrive/Desktop/mi-dashboardamm/Modernize-nuxtjs-free/package/node_modules/pathe/dist/index.mjs';
import 'file://C:/Users/matte/OneDrive/Desktop/mi-dashboardamm/Modernize-nuxtjs-free/package/node_modules/devalue/index.js';
import 'file://C:/Users/matte/OneDrive/Desktop/mi-dashboardamm/Modernize-nuxtjs-free/package/node_modules/unhead/dist/plugins.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "consegne-cap",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_card = resolveComponent("v-card");
      const _component_v_card_text = resolveComponent("v-card-text");
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      _push(ssrRenderComponent(_component_v_card, mergeProps({
        class: "bg-transparent",
        elevation: "0"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_card_text, { class: "pa-1" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<h1 class="text-h4 font-weight-medium mb-5"${_scopeId2}>Consegne per CAP</h1>`);
                  _push3(ssrRenderComponent(_component_v_row, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_col, {
                          cols: "12",
                          lg: "12"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(PostalCodeDeliveries, null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(PostalCodeDeliveries)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_col, {
                            cols: "12",
                            lg: "12"
                          }, {
                            default: withCtx(() => [
                              createVNode(PostalCodeDeliveries)
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode("h1", { class: "text-h4 font-weight-medium mb-5" }, "Consegne per CAP"),
                    createVNode(_component_v_row, null, {
                      default: withCtx(() => [
                        createVNode(_component_v_col, {
                          cols: "12",
                          lg: "12"
                        }, {
                          default: withCtx(() => [
                            createVNode(PostalCodeDeliveries)
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
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_card_text, { class: "pa-1" }, {
                default: withCtx(() => [
                  createVNode("h1", { class: "text-h4 font-weight-medium mb-5" }, "Consegne per CAP"),
                  createVNode(_component_v_row, null, {
                    default: withCtx(() => [
                      createVNode(_component_v_col, {
                        cols: "12",
                        lg: "12"
                      }, {
                        default: withCtx(() => [
                          createVNode(PostalCodeDeliveries)
                        ]),
                        _: 1
                      })
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

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/consegne-cap.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=consegne-cap.vue.mjs.map
