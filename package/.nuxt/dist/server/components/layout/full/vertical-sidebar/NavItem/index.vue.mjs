import { resolveComponent, mergeProps, createSlots, withCtx, createTextVNode, toDisplayString, createBlock, createCommentVNode, openBlock, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import _sfc_main$1 from "../Icon.vue.mjs";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  props: { item: Object, level: Number },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_list_item = resolveComponent("v-list-item");
      const _component_v_list_item_title = resolveComponent("v-list-item-title");
      const _component_v_chip = resolveComponent("v-chip");
      const _component_v_list_item_subtitle = resolveComponent("v-list-item-subtitle");
      _push(ssrRenderComponent(_component_v_list_item, mergeProps({
        href: __props.item.external ? __props.item.to : void 0,
        to: !__props.item.external ? __props.item.to : void 0,
        rounded: "",
        class: "mb-1",
        color: "primary",
        disabled: __props.item.disabled,
        target: __props.item.external === true ? "_blank" : void 0
      }, _attrs), createSlots({
        prepend: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$1, {
              item: __props.item.icon,
              level: __props.level
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$1, {
                item: __props.item.icon,
                level: __props.level
              }, null, 8, ["item", "level"])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_list_item_title, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(__props.item.title)} `);
                  if (__props.item.children) {
                    _push3(`<span${_scopeId2}>`);
                    if (__props.item.chip) {
                      _push3(`<span class="ps-3"${_scopeId2}>`);
                      _push3(ssrRenderComponent(_component_v_chip, {
                        color: "primary",
                        class: "sidebarchip",
                        size: __props.item.chipIcon ? "x-small" : "x-small",
                        variant: __props.item.chipVariant,
                        "prepend-icon": __props.item.chipIcon
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`${ssrInterpolate(__props.item.chip)}`);
                          } else {
                            return [
                              createTextVNode(toDisplayString(__props.item.chip), 1)
                            ];
                          }
                        }),
                        _: 1
                      }, _parent3, _scopeId2));
                      _push3(`</span>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`</span>`);
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    createTextVNode(toDisplayString(__props.item.title) + " ", 1),
                    __props.item.children ? (openBlock(), createBlock("span", { key: 0 }, [
                      __props.item.chip ? (openBlock(), createBlock("span", {
                        key: 0,
                        class: "ps-3"
                      }, [
                        createVNode(_component_v_chip, {
                          color: "primary",
                          class: "sidebarchip",
                          size: __props.item.chipIcon ? "x-small" : "x-small",
                          variant: __props.item.chipVariant,
                          "prepend-icon": __props.item.chipIcon
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(__props.item.chip), 1)
                          ]),
                          _: 1
                        }, 8, ["size", "variant", "prepend-icon"])
                      ])) : createCommentVNode("", true)
                    ])) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            if (__props.item.subCaption) {
              _push2(ssrRenderComponent(_component_v_list_item_subtitle, { class: "text-caption mt-n1 hide-menu" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(__props.item.subCaption)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(__props.item.subCaption), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode(_component_v_list_item_title, null, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(__props.item.title) + " ", 1),
                  __props.item.children ? (openBlock(), createBlock("span", { key: 0 }, [
                    __props.item.chip ? (openBlock(), createBlock("span", {
                      key: 0,
                      class: "ps-3"
                    }, [
                      createVNode(_component_v_chip, {
                        color: "primary",
                        class: "sidebarchip",
                        size: __props.item.chipIcon ? "x-small" : "x-small",
                        variant: __props.item.chipVariant,
                        "prepend-icon": __props.item.chipIcon
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(__props.item.chip), 1)
                        ]),
                        _: 1
                      }, 8, ["size", "variant", "prepend-icon"])
                    ])) : createCommentVNode("", true)
                  ])) : createCommentVNode("", true)
                ]),
                _: 1
              }),
              __props.item.subCaption ? (openBlock(), createBlock(_component_v_list_item_subtitle, {
                key: 0,
                class: "text-caption mt-n1 hide-menu"
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(__props.item.subCaption), 1)
                ]),
                _: 1
              })) : createCommentVNode("", true)
            ];
          }
        }),
        _: 2
      }, [
        __props.item.chip ? {
          name: "append",
          fn: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_v_chip, {
                color: "primary",
                class: "sidebarchip",
                size: __props.item.chipIcon ? "x-small" : "x-small",
                variant: __props.item.chipVariant,
                "prepend-icon": __props.item.chipIcon
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(__props.item.chip)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(__props.item.chip), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_v_chip, {
                  color: "primary",
                  class: "sidebarchip",
                  size: __props.item.chipIcon ? "x-small" : "x-small",
                  variant: __props.item.chipVariant,
                  "prepend-icon": __props.item.chipIcon
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(__props.item.chip), 1)
                  ]),
                  _: 1
                }, 8, ["size", "variant", "prepend-icon"])
              ];
            }
          }),
          key: "0"
        } : void 0
      ]), _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/full/vertical-sidebar/NavItem/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index.vue.mjs.map
