import _sfc_main$1 from "../NavItem/index.vue.mjs";
import { resolveComponent, mergeProps, withCtx, createBlock, createCommentVNode, openBlock, Fragment, renderList, createTextVNode, toDisplayString, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import _sfc_main$2 from "../Icon.vue.mjs";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  props: { item: Object, level: Number },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_list_group = resolveComponent("v-list-group");
      const _component_v_list_item = resolveComponent("v-list-item");
      const _component_v_list_item_title = resolveComponent("v-list-item-title");
      const _component_v_list_item_subtitle = resolveComponent("v-list-item-subtitle");
      const _component_LayoutFullVerticalSidebarNavCollapse = _sfc_main;
      const _component_LayoutFullVerticalSidebarNavItem = _sfc_main$1;
      _push(ssrRenderComponent(_component_v_list_group, mergeProps({ "no-action": "" }, _attrs), {
        activator: withCtx(({ props }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_list_item, mergeProps(props, {
              value: __props.item.title,
              rounded: "",
              class: "mb-1"
            }), {
              prepend: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$2, {
                    item: __props.item.icon,
                    level: __props.level
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$2, {
                      item: __props.item.icon,
                      level: __props.level
                    }, null, 8, ["item", "level"])
                  ];
                }
              }),
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_list_item_title, { class: "mr-auto" }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(__props.item.title)}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(__props.item.title), 1)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  if (__props.item.subCaption) {
                    _push3(ssrRenderComponent(_component_v_list_item_subtitle, { class: "text-caption mt-n1 hide-menu" }, {
                      default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(__props.item.subCaption)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(__props.item.subCaption), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    createVNode(_component_v_list_item_title, { class: "mr-auto" }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(__props.item.title), 1)
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
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_list_item, mergeProps(props, {
                value: __props.item.title,
                rounded: "",
                class: "mb-1"
              }), {
                prepend: withCtx(() => [
                  createVNode(_sfc_main$2, {
                    item: __props.item.icon,
                    level: __props.level
                  }, null, 8, ["item", "level"])
                ]),
                default: withCtx(() => [
                  createVNode(_component_v_list_item_title, { class: "mr-auto" }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(__props.item.title), 1)
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
                ]),
                _: 2
              }, 1040, ["value"])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (__props.item.children) {
              _push2(`<!--[-->`);
              ssrRenderList(__props.item.children, (subitem, i) => {
                _push2(`<!--[-->`);
                if (subitem.children) {
                  _push2(ssrRenderComponent(_component_LayoutFullVerticalSidebarNavCollapse, {
                    item: subitem,
                    level: __props.level + 1
                  }, null, _parent2, _scopeId));
                } else {
                  _push2(ssrRenderComponent(_component_LayoutFullVerticalSidebarNavItem, {
                    item: subitem,
                    level: __props.level + 1
                  }, null, _parent2, _scopeId));
                }
                _push2(`<!--]-->`);
              });
              _push2(`<!--]-->`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              __props.item.children ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList(__props.item.children, (subitem, i) => {
                return openBlock(), createBlock(Fragment, { key: i }, [
                  subitem.children ? (openBlock(), createBlock(_component_LayoutFullVerticalSidebarNavCollapse, {
                    key: 0,
                    item: subitem,
                    level: __props.level + 1
                  }, null, 8, ["item", "level"])) : (openBlock(), createBlock(_component_LayoutFullVerticalSidebarNavItem, {
                    key: 1,
                    item: subitem,
                    level: __props.level + 1
                  }, null, 8, ["item", "level"]))
                ], 64);
              }), 128)) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/full/vertical-sidebar/NavCollapse/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index.vue.mjs.map
