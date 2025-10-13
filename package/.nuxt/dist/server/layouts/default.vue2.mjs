import "../components/layout/full/Main.vue.mjs";
import __nuxt_component_1 from "../node_modules/nuxt/dist/pages/runtime/page.mjs";
import { defineComponent, ref, resolveComponent, withCtx, createVNode } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { useHead } from "../node_modules/nuxt/dist/head/runtime/composables/v3.mjs";
import _sfc_main$1 from "../components/layout/full/Main.vue2.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    const title = ref(
      "Modernize - Nuxt3 Typescript based Free Admin Dashboard Template"
    );
    useHead({
      meta: [{ content: title }],
      titleTemplate: (titleChunk) => {
        return titleChunk ? `${titleChunk} - Nuxt3 Typescript based Free Admin Dashboard Template` : "Modernize - Nuxt3 Typescript based Free Admin Dashboard Template";
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_locale_provider = resolveComponent("v-locale-provider");
      const _component_v_app = resolveComponent("v-app");
      const _component_LayoutFullMain = _sfc_main$1;
      const _component_v_main = resolveComponent("v-main");
      const _component_v_container = resolveComponent("v-container");
      const _component_NuxtPage = __nuxt_component_1;
      _push(ssrRenderComponent(_component_v_locale_provider, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_app, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_LayoutFullMain, null, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_main, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_container, {
                          fluid: "",
                          class: "page-wrapper"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="maxWidth"${_scopeId4}>`);
                              _push5(ssrRenderComponent(_component_NuxtPage, null, null, _parent5, _scopeId4));
                              _push5(`</div>`);
                            } else {
                              return [
                                createVNode("div", { class: "maxWidth" }, [
                                  createVNode(_component_NuxtPage)
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_container, {
                            fluid: "",
                            class: "page-wrapper"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "maxWidth" }, [
                                createVNode(_component_NuxtPage)
                              ])
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
                    createVNode(_component_LayoutFullMain),
                    createVNode(_component_v_main, null, {
                      default: withCtx(() => [
                        createVNode(_component_v_container, {
                          fluid: "",
                          class: "page-wrapper"
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "maxWidth" }, [
                              createVNode(_component_NuxtPage)
                            ])
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
              createVNode(_component_v_app, null, {
                default: withCtx(() => [
                  createVNode(_component_LayoutFullMain),
                  createVNode(_component_v_main, null, {
                    default: withCtx(() => [
                      createVNode(_component_v_container, {
                        fluid: "",
                        class: "page-wrapper"
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "maxWidth" }, [
                            createVNode(_component_NuxtPage)
                          ])
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
export {
  _sfc_main as default
};
//# sourceMappingURL=default.vue2.mjs.map
