import __nuxt_component_2 from "../../node_modules/nuxt/dist/app/components/nuxt-link.mjs";
import { defineComponent, ref, resolveComponent, mergeProps, withCtx, createTextVNode, createVNode } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
const _sfc_main = /* @__PURE__ */ defineComponent({
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
export {
  _sfc_main as default
};
//# sourceMappingURL=LoginForm.vue2.mjs.map
