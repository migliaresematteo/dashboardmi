import { _ as _export_sfc, f as useHead, e as __nuxt_component_1 } from './server.mjs';
import { resolveComponent, mergeProps, withCtx, createTextVNode, toDisplayString, useSSRContext, createVNode, resolveDynamicComponent, createSlots, createBlock, createCommentVNode, openBlock, Fragment, renderList, defineComponent, shallowRef, ref } from 'file://C:/Users/matte/OneDrive/Desktop/mi-dashboardamm/Modernize-nuxtjs-free/package/node_modules/vue/index.mjs';
import { ssrRenderComponent, ssrInterpolate, ssrRenderVNode, ssrRenderList } from 'file://C:/Users/matte/OneDrive/Desktop/mi-dashboardamm/Modernize-nuxtjs-free/package/node_modules/vue/server-renderer/index.mjs';
import { LayoutDashboardIcon, CalendarIcon, BasketIcon, TableIcon, CurrencyDollarIcon, ShoppingCartIcon, ChartAreaIcon } from 'file://C:/Users/matte/OneDrive/Desktop/mi-dashboardamm/Modernize-nuxtjs-free/package/node_modules/vue-tabler-icons/dist/vue-tabler-icons.js';
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

const _sfc_main$6 = {
  __name: "index",
  __ssrInlineRender: true,
  props: { item: Object },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_list_subheader = resolveComponent("v-list-subheader");
      _push(ssrRenderComponent(_component_v_list_subheader, mergeProps({
        color: "darkText",
        class: "smallCap text-uppercase text-subtitle-2 mt-5 font-weight-bold"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(props.item.header)}`);
          } else {
            return [
              createTextVNode(toDisplayString(props.item.header), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$5 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/full/vertical-sidebar/NavGroup/index.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};

const _sfc_main$5 = {
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
const _sfc_setup$4 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/full/vertical-sidebar/Icon.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};

const _sfc_main$4 = {
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
            _push2(ssrRenderComponent(_sfc_main$5, {
              item: __props.item.icon,
              level: __props.level
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$5, {
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
const _sfc_setup$3 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/full/vertical-sidebar/NavItem/index.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};

const _sfc_main$3 = {
  __name: "index",
  __ssrInlineRender: true,
  props: { item: Object, level: Number },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_list_group = resolveComponent("v-list-group");
      const _component_v_list_item = resolveComponent("v-list-item");
      const _component_v_list_item_title = resolveComponent("v-list-item-title");
      const _component_v_list_item_subtitle = resolveComponent("v-list-item-subtitle");
      const _component_LayoutFullVerticalSidebarNavCollapse = _sfc_main$3;
      const _component_LayoutFullVerticalSidebarNavItem = _sfc_main$4;
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
                  _push3(ssrRenderComponent(_sfc_main$5, {
                    item: __props.item.icon,
                    level: __props.level
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$5, {
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
                  createVNode(_sfc_main$5, {
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
const _sfc_setup$2 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/full/vertical-sidebar/NavCollapse/index.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};

/* empty css            */
const _sfc_main$2 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
}
const _sfc_setup$1 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/full/vertical-sidebar/ExtraBox/index.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender]]);

const sidebarItem = [
  { header: "Dashboard Amministrativa" },
  {
    title: "Panoramica",
    icon: LayoutDashboardIcon,
    to: "/",
    external: false
  },
  {
    title: "Ordini Mensili",
    icon: CalendarIcon,
    to: "/ordini-mensili",
    external: false
  },
  {
    title: "Consegne Rider",
    icon: BasketIcon,
    to: "/consegne-rider",
    external: false
  },
  {
    title: "Consegne per CAP",
    icon: TableIcon,
    to: "/consegne-cap",
    external: false
  },
  {
    title: "Tipologie Pagamento",
    icon: CurrencyDollarIcon,
    to: "/tipologie-pagamento",
    external: false
  },
  {
    title: "Ordini B2B",
    icon: ShoppingCartIcon,
    to: "/ordini-b2b",
    external: false
  },
  {
    title: "Impatto Ambientale",
    icon: ChartAreaIcon,
    to: "/impatto-ambientale",
    external: false
  }
];

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Main",
  __ssrInlineRender: true,
  setup(__props) {
    const sidebarMenu = shallowRef(sidebarItem);
    const sDrawer = ref(true);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_navigation_drawer = resolveComponent("v-navigation-drawer");
      const _component_perfect_scrollbar = resolveComponent("perfect-scrollbar");
      const _component_v_list = resolveComponent("v-list");
      const _component_LayoutFullVerticalSidebarNavGroup = _sfc_main$6;
      const _component_LayoutFullVerticalSidebarNavCollapse = _sfc_main$3;
      const _component_LayoutFullVerticalSidebarNavItem = _sfc_main$4;
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

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=default.vue.mjs.map
