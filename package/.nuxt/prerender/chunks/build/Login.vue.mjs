import { _ as __nuxt_component_2, a as __nuxt_component_0 } from './Logo.vue.mjs';
import { defineComponent, ref, resolveComponent, mergeProps, withCtx, createTextVNode, createVNode, useSSRContext } from 'file://C:/Users/matte/OneDrive/Desktop/mi-dashboardamm/Modernize-nuxtjs-free/package/node_modules/vue/index.mjs';
import { ssrRenderComponent, ssrRenderAttrs } from 'file://C:/Users/matte/OneDrive/Desktop/mi-dashboardamm/Modernize-nuxtjs-free/package/node_modules/vue/server-renderer/index.mjs';
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

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "LoginForm",
  __ssrInlineRender: true,
  setup(__props) {
    const checkbox = ref(true);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      const _component_v_label = resolveComponent("v-label");
      const _component_v_text_field = resolveComponent("v-text-field");
      const _component_v_checkbox = resolveComponent("v-checkbox");
      const _component_NuxtLink = __nuxt_component_2;
      const _component_v_btn = resolveComponent("v-btn");
      _push(ssrRenderComponent(_component_v_row, mergeProps({ class: "d-flex mb-3" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_col, { cols: "12" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_label, { class: "font-weight-bold mb-1" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Username`);
                      } else {
                        return [
                          createTextVNode("Username")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_text_field, {
                    variant: "outlined",
                    "hide-details": "",
                    color: "primary"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_label, { class: "font-weight-bold mb-1" }, {
                      default: withCtx(() => [
                        createTextVNode("Username")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_text_field, {
                      variant: "outlined",
                      "hide-details": "",
                      color: "primary"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_col, { cols: "12" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_label, { class: "font-weight-bold mb-1" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Password`);
                      } else {
                        return [
                          createTextVNode("Password")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_text_field, {
                    variant: "outlined",
                    type: "password",
                    "hide-details": "",
                    color: "primary"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_label, { class: "font-weight-bold mb-1" }, {
                      default: withCtx(() => [
                        createTextVNode("Password")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_text_field, {
                      variant: "outlined",
                      type: "password",
                      "hide-details": "",
                      color: "primary"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_col, {
              cols: "12",
              class: "pt-0"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="d-flex flex-wrap align-center ml-n2"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_v_checkbox, {
                    modelValue: checkbox.value,
                    "onUpdate:modelValue": ($event) => checkbox.value = $event,
                    color: "primary",
                    "hide-details": ""
                  }, {
                    label: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Remeber this Device`);
                      } else {
                        return [
                          createTextVNode("Remeber this Device")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="ml-sm-auto"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_NuxtLink, {
                    to: "/",
                    class: "text-primary text-decoration-none text-body-1 opacity-1 font-weight-medium"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Forgot Password ?`);
                      } else {
                        return [
                          createTextVNode("Forgot Password ?")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "d-flex flex-wrap align-center ml-n2" }, [
                      createVNode(_component_v_checkbox, {
                        modelValue: checkbox.value,
                        "onUpdate:modelValue": ($event) => checkbox.value = $event,
                        color: "primary",
                        "hide-details": ""
                      }, {
                        label: withCtx(() => [
                          createTextVNode("Remeber this Device")
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode("div", { class: "ml-sm-auto" }, [
                        createVNode(_component_NuxtLink, {
                          to: "/",
                          class: "text-primary text-decoration-none text-body-1 opacity-1 font-weight-medium"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Forgot Password ?")
                          ]),
                          _: 1
                        })
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_col, {
              cols: "12",
              class: "pt-0"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_btn, {
                    to: "/",
                    color: "primary",
                    size: "large",
                    block: "",
                    flat: ""
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Sign in`);
                      } else {
                        return [
                          createTextVNode("Sign in")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_btn, {
                      to: "/",
                      color: "primary",
                      size: "large",
                      block: "",
                      flat: ""
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Sign in")
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
              createVNode(_component_v_col, { cols: "12" }, {
                default: withCtx(() => [
                  createVNode(_component_v_label, { class: "font-weight-bold mb-1" }, {
                    default: withCtx(() => [
                      createTextVNode("Username")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_text_field, {
                    variant: "outlined",
                    "hide-details": "",
                    color: "primary"
                  })
                ]),
                _: 1
              }),
              createVNode(_component_v_col, { cols: "12" }, {
                default: withCtx(() => [
                  createVNode(_component_v_label, { class: "font-weight-bold mb-1" }, {
                    default: withCtx(() => [
                      createTextVNode("Password")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_text_field, {
                    variant: "outlined",
                    type: "password",
                    "hide-details": "",
                    color: "primary"
                  })
                ]),
                _: 1
              }),
              createVNode(_component_v_col, {
                cols: "12",
                class: "pt-0"
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "d-flex flex-wrap align-center ml-n2" }, [
                    createVNode(_component_v_checkbox, {
                      modelValue: checkbox.value,
                      "onUpdate:modelValue": ($event) => checkbox.value = $event,
                      color: "primary",
                      "hide-details": ""
                    }, {
                      label: withCtx(() => [
                        createTextVNode("Remeber this Device")
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode("div", { class: "ml-sm-auto" }, [
                      createVNode(_component_NuxtLink, {
                        to: "/",
                        class: "text-primary text-decoration-none text-body-1 opacity-1 font-weight-medium"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Forgot Password ?")
                        ]),
                        _: 1
                      })
                    ])
                  ])
                ]),
                _: 1
              }),
              createVNode(_component_v_col, {
                cols: "12",
                class: "pt-0"
              }, {
                default: withCtx(() => [
                  createVNode(_component_v_btn, {
                    to: "/",
                    color: "primary",
                    size: "large",
                    block: "",
                    flat: ""
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Sign in")
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Login",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_container = resolveComponent("v-container");
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      const _component_v_card = resolveComponent("v-card");
      const _component_v_card_item = resolveComponent("v-card-item");
      const _component_LayoutFullLogo = __nuxt_component_0;
      const _component_AuthLoginForm = _sfc_main$1;
      const _component_NuxtLink = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "authentication" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_v_container, {
        fluid: "",
        class: "pa-3"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_row, { class: "h-100vh d-flex justify-center align-center" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_col, {
                    cols: "12",
                    lg: "4",
                    xl: "3",
                    class: "d-flex align-center"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_card, {
                          rounded: "md",
                          elevation: "10",
                          class: "px-sm-1 px-0 withbg mx-auto",
                          "max-width": "500"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_card_item, { class: "pa-sm-8" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<div class="d-flex justify-center py-4"${_scopeId5}>`);
                                    _push6(ssrRenderComponent(_component_LayoutFullLogo, null, null, _parent6, _scopeId5));
                                    _push6(`</div><div class="text-body-1 text-muted text-center mb-3"${_scopeId5}>Your Social Campaigns</div>`);
                                    _push6(ssrRenderComponent(_component_AuthLoginForm, null, null, _parent6, _scopeId5));
                                    _push6(`<h6 class="text-h6 text-muted font-weight-medium d-flex justify-center align-center mt-3"${_scopeId5}> New to Modernize? `);
                                    _push6(ssrRenderComponent(_component_NuxtLink, {
                                      to: "/auth/register",
                                      class: "text-primary text-decoration-none text-body-1 opacity-1 font-weight-medium pl-2"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(` Create an account`);
                                        } else {
                                          return [
                                            createTextVNode(" Create an account")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(`</h6>`);
                                  } else {
                                    return [
                                      createVNode("div", { class: "d-flex justify-center py-4" }, [
                                        createVNode(_component_LayoutFullLogo)
                                      ]),
                                      createVNode("div", { class: "text-body-1 text-muted text-center mb-3" }, "Your Social Campaigns"),
                                      createVNode(_component_AuthLoginForm),
                                      createVNode("h6", { class: "text-h6 text-muted font-weight-medium d-flex justify-center align-center mt-3" }, [
                                        createTextVNode(" New to Modernize? "),
                                        createVNode(_component_NuxtLink, {
                                          to: "/auth/register",
                                          class: "text-primary text-decoration-none text-body-1 opacity-1 font-weight-medium pl-2"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" Create an account")
                                          ]),
                                          _: 1
                                        })
                                      ])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_card_item, { class: "pa-sm-8" }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "d-flex justify-center py-4" }, [
                                      createVNode(_component_LayoutFullLogo)
                                    ]),
                                    createVNode("div", { class: "text-body-1 text-muted text-center mb-3" }, "Your Social Campaigns"),
                                    createVNode(_component_AuthLoginForm),
                                    createVNode("h6", { class: "text-h6 text-muted font-weight-medium d-flex justify-center align-center mt-3" }, [
                                      createTextVNode(" New to Modernize? "),
                                      createVNode(_component_NuxtLink, {
                                        to: "/auth/register",
                                        class: "text-primary text-decoration-none text-body-1 opacity-1 font-weight-medium pl-2"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Create an account")
                                        ]),
                                        _: 1
                                      })
                                    ])
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_card, {
                            rounded: "md",
                            elevation: "10",
                            class: "px-sm-1 px-0 withbg mx-auto",
                            "max-width": "500"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_card_item, { class: "pa-sm-8" }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "d-flex justify-center py-4" }, [
                                    createVNode(_component_LayoutFullLogo)
                                  ]),
                                  createVNode("div", { class: "text-body-1 text-muted text-center mb-3" }, "Your Social Campaigns"),
                                  createVNode(_component_AuthLoginForm),
                                  createVNode("h6", { class: "text-h6 text-muted font-weight-medium d-flex justify-center align-center mt-3" }, [
                                    createTextVNode(" New to Modernize? "),
                                    createVNode(_component_NuxtLink, {
                                      to: "/auth/register",
                                      class: "text-primary text-decoration-none text-body-1 opacity-1 font-weight-medium pl-2"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Create an account")
                                      ]),
                                      _: 1
                                    })
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
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_col, {
                      cols: "12",
                      lg: "4",
                      xl: "3",
                      class: "d-flex align-center"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_card, {
                          rounded: "md",
                          elevation: "10",
                          class: "px-sm-1 px-0 withbg mx-auto",
                          "max-width": "500"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_card_item, { class: "pa-sm-8" }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "d-flex justify-center py-4" }, [
                                  createVNode(_component_LayoutFullLogo)
                                ]),
                                createVNode("div", { class: "text-body-1 text-muted text-center mb-3" }, "Your Social Campaigns"),
                                createVNode(_component_AuthLoginForm),
                                createVNode("h6", { class: "text-h6 text-muted font-weight-medium d-flex justify-center align-center mt-3" }, [
                                  createTextVNode(" New to Modernize? "),
                                  createVNode(_component_NuxtLink, {
                                    to: "/auth/register",
                                    class: "text-primary text-decoration-none text-body-1 opacity-1 font-weight-medium pl-2"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Create an account")
                                    ]),
                                    _: 1
                                  })
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
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_row, { class: "h-100vh d-flex justify-center align-center" }, {
                default: withCtx(() => [
                  createVNode(_component_v_col, {
                    cols: "12",
                    lg: "4",
                    xl: "3",
                    class: "d-flex align-center"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_v_card, {
                        rounded: "md",
                        elevation: "10",
                        class: "px-sm-1 px-0 withbg mx-auto",
                        "max-width": "500"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_card_item, { class: "pa-sm-8" }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "d-flex justify-center py-4" }, [
                                createVNode(_component_LayoutFullLogo)
                              ]),
                              createVNode("div", { class: "text-body-1 text-muted text-center mb-3" }, "Your Social Campaigns"),
                              createVNode(_component_AuthLoginForm),
                              createVNode("h6", { class: "text-h6 text-muted font-weight-medium d-flex justify-center align-center mt-3" }, [
                                createTextVNode(" New to Modernize? "),
                                createVNode(_component_NuxtLink, {
                                  to: "/auth/register",
                                  class: "text-primary text-decoration-none text-body-1 opacity-1 font-weight-medium pl-2"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Create an account")
                                  ]),
                                  _: 1
                                })
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
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/auth/Login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Login.vue.mjs.map
