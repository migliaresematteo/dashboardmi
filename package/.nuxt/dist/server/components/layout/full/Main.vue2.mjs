import _sfc_main$1 from "./vertical-sidebar/NavGroup/index.vue.mjs";
import _sfc_main$2 from "./vertical-sidebar/NavCollapse/index.vue.mjs";
import _sfc_main$3 from "./vertical-sidebar/NavItem/index.vue.mjs";
import __nuxt_component_3 from "./vertical-sidebar/ExtraBox/index.vue.mjs";
import { defineComponent, shallowRef, ref, resolveComponent, mergeProps, withCtx, createBlock, openBlock, Fragment, renderList, createVNode } from "vue";
import { ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import sidebarItem from "./vertical-sidebar/sidebarItem.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Main",
  __ssrInlineRender: true,
  setup(__props) {
    const sidebarMenu = shallowRef(sidebarItem);
    const sDrawer = ref(true);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_navigation_drawer = resolveComponent("v-navigation-drawer");
      const _component_perfect_scrollbar = resolveComponent("perfect-scrollbar");
      const _component_v_list = resolveComponent("v-list");
      const _component_LayoutFullVerticalSidebarNavGroup = _sfc_main$1;
      const _component_LayoutFullVerticalSidebarNavCollapse = _sfc_main$2;
      const _component_LayoutFullVerticalSidebarNavItem = _sfc_main$3;
      const _component_LayoutFullVerticalSidebarExtraBox = __nuxt_component_3;
      _push(ssrRenderComponent(_component_v_navigation_drawer, mergeProps({
        left: "",
        elevation: "0",
        app: "",
        class: "leftSidebar",
        modelValue: sDrawer.value,
        "onUpdate:modelValue": ($event) => sDrawer.value = $event,
        width: "270"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_perfect_scrollbar, { class: "scrollnavbar" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_list, { class: "pa-3" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<!--[-->`);
                        ssrRenderList(sidebarMenu.value, (item, i) => {
                          _push4(`<!--[-->`);
                          if (item.header) {
                            _push4(ssrRenderComponent(_component_LayoutFullVerticalSidebarNavGroup, {
                              item,
                              key: item.title
                            }, null, _parent4, _scopeId3));
                          } else if (item.children) {
                            _push4(ssrRenderComponent(_component_LayoutFullVerticalSidebarNavCollapse, {
                              class: "leftPadding",
                              item,
                              level: 0
                            }, null, _parent4, _scopeId3));
                          } else {
                            _push4(ssrRenderComponent(_component_LayoutFullVerticalSidebarNavItem, {
                              item,
                              class: "leftPadding"
                            }, null, _parent4, _scopeId3));
                          }
                          _push4(`<!--]-->`);
                        });
                        _push4(`<!--]-->`);
                      } else {
                        return [
                          (openBlock(true), createBlock(Fragment, null, renderList(sidebarMenu.value, (item, i) => {
                            return openBlock(), createBlock(Fragment, null, [
                              item.header ? (openBlock(), createBlock(_component_LayoutFullVerticalSidebarNavGroup, {
                                item,
                                key: item.title
                              }, null, 8, ["item"])) : item.children ? (openBlock(), createBlock(_component_LayoutFullVerticalSidebarNavCollapse, {
                                key: 1,
                                class: "leftPadding",
                                item,
                                level: 0
                              }, null, 8, ["item"])) : (openBlock(), createBlock(_component_LayoutFullVerticalSidebarNavItem, {
                                key: 2,
                                item,
                                class: "leftPadding"
                              }, null, 8, ["item"]))
                            ], 64);
                          }), 256))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="pa-4"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_LayoutFullVerticalSidebarExtraBox, null, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode(_component_v_list, { class: "pa-3" }, {
                      default: withCtx(() => [
                        (openBlock(true), createBlock(Fragment, null, renderList(sidebarMenu.value, (item, i) => {
                          return openBlock(), createBlock(Fragment, null, [
                            item.header ? (openBlock(), createBlock(_component_LayoutFullVerticalSidebarNavGroup, {
                              item,
                              key: item.title
                            }, null, 8, ["item"])) : item.children ? (openBlock(), createBlock(_component_LayoutFullVerticalSidebarNavCollapse, {
                              key: 1,
                              class: "leftPadding",
                              item,
                              level: 0
                            }, null, 8, ["item"])) : (openBlock(), createBlock(_component_LayoutFullVerticalSidebarNavItem, {
                              key: 2,
                              item,
                              class: "leftPadding"
                            }, null, 8, ["item"]))
                          ], 64);
                        }), 256))
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "pa-4" }, [
                      createVNode(_component_LayoutFullVerticalSidebarExtraBox)
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", null, [
                createVNode(_component_perfect_scrollbar, { class: "scrollnavbar" }, {
                  default: withCtx(() => [
                    createVNode(_component_v_list, { class: "pa-3" }, {
                      default: withCtx(() => [
                        (openBlock(true), createBlock(Fragment, null, renderList(sidebarMenu.value, (item, i) => {
                          return openBlock(), createBlock(Fragment, null, [
                            item.header ? (openBlock(), createBlock(_component_LayoutFullVerticalSidebarNavGroup, {
                              item,
                              key: item.title
                            }, null, 8, ["item"])) : item.children ? (openBlock(), createBlock(_component_LayoutFullVerticalSidebarNavCollapse, {
                              key: 1,
                              class: "leftPadding",
                              item,
                              level: 0
                            }, null, 8, ["item"])) : (openBlock(), createBlock(_component_LayoutFullVerticalSidebarNavItem, {
                              key: 2,
                              item,
                              class: "leftPadding"
                            }, null, 8, ["item"]))
                          ], 64);
                        }), 256))
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "pa-4" }, [
                      createVNode(_component_LayoutFullVerticalSidebarExtraBox)
                    ])
                  ]),
                  _: 1
                })
              ])
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
//# sourceMappingURL=Main.vue2.mjs.map
