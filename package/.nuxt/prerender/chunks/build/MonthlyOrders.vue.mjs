import { defineComponent, watch, resolveComponent, mergeProps, withCtx, createTextVNode, createVNode, toDisplayString, createBlock, openBlock, Fragment, renderList, ref, createCommentVNode, useSSRContext } from 'file://C:/Users/matte/OneDrive/Desktop/mi-dashboardamm/Modernize-nuxtjs-free/package/node_modules/vue/index.mjs';
import { ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderStyle } from 'file://C:/Users/matte/OneDrive/Desktop/mi-dashboardamm/Modernize-nuxtjs-free/package/node_modules/vue/server-renderer/index.mjs';
import { d as api, _ as _export_sfc } from './server.mjs';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "OrderDetailsModal",
  __ssrInlineRender: true,
  props: {
    order: {
      type: Object,
      required: true
    },
    show: {
      type: Boolean,
      default: false
    }
  },
  emits: ["close", "update:show"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const closeModal = () => {
      emit("close");
      emit("update:show", false);
    };
    watch(() => props.show, (newVal) => {
      if (!newVal) {
        emit("close");
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_dialog = resolveComponent("v-dialog");
      const _component_v_card = resolveComponent("v-card");
      const _component_v_card_title = resolveComponent("v-card-title");
      const _component_v_spacer = resolveComponent("v-spacer");
      const _component_v_btn = resolveComponent("v-btn");
      const _component_v_icon = resolveComponent("v-icon");
      const _component_v_card_text = resolveComponent("v-card-text");
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      const _component_v_list = resolveComponent("v-list");
      const _component_v_list_subheader = resolveComponent("v-list-subheader");
      const _component_v_list_item = resolveComponent("v-list-item");
      const _component_v_list_item_title = resolveComponent("v-list-item-title");
      const _component_v_list_item_subtitle = resolveComponent("v-list-item-subtitle");
      const _component_v_chip = resolveComponent("v-chip");
      const _component_v_divider = resolveComponent("v-divider");
      const _component_v_table = resolveComponent("v-table");
      const _component_v_card_actions = resolveComponent("v-card-actions");
      _push(ssrRenderComponent(_component_v_dialog, mergeProps({
        "model-value": __props.show,
        "onUpdate:modelValue": ($event) => _ctx.$emit("update:show", $event),
        "max-width": "900px"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_card, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_card_title, { class: "text-h5 bg-primary text-white pa-4" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Dettaglio Ordine ${ssrInterpolate(__props.order.id)} `);
                        _push4(ssrRenderComponent(_component_v_spacer, null, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_btn, {
                          icon: "",
                          variant: "text",
                          color: "white",
                          onClick: closeModal
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_icon, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`mdi-close`);
                                  } else {
                                    return [
                                      createTextVNode("mdi-close")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_icon, null, {
                                  default: withCtx(() => [
                                    createTextVNode("mdi-close")
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
                          createTextVNode(" Dettaglio Ordine " + toDisplayString(__props.order.id) + " ", 1),
                          createVNode(_component_v_spacer),
                          createVNode(_component_v_btn, {
                            icon: "",
                            variant: "text",
                            color: "white",
                            onClick: closeModal
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_icon, null, {
                                default: withCtx(() => [
                                  createTextVNode("mdi-close")
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
                  _push3(ssrRenderComponent(_component_v_card_text, { class: "pa-4" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_row, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_col, {
                                cols: "12",
                                md: "6"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_list, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_v_list_subheader, { class: "text-h6" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`Informazioni Ordine`);
                                              } else {
                                                return [
                                                  createTextVNode("Informazioni Ordine")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_v_list_item, null, {
                                            prepend: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_v_icon, { color: "primary" }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`mdi-identifier`);
                                                    } else {
                                                      return [
                                                        createTextVNode("mdi-identifier")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_v_icon, { color: "primary" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode("mdi-identifier")
                                                    ]),
                                                    _: 1
                                                  })
                                                ];
                                              }
                                            }),
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_v_list_item_title, null, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`ID Ordine`);
                                                    } else {
                                                      return [
                                                        createTextVNode("ID Ordine")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(_component_v_list_item_subtitle, null, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`${ssrInterpolate(__props.order.id)}`);
                                                    } else {
                                                      return [
                                                        createTextVNode(toDisplayString(__props.order.id), 1)
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_v_list_item_title, null, {
                                                    default: withCtx(() => [
                                                      createTextVNode("ID Ordine")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_v_list_item_subtitle, null, {
                                                    default: withCtx(() => [
                                                      createTextVNode(toDisplayString(__props.order.id), 1)
                                                    ]),
                                                    _: 1
                                                  })
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_v_list_item, null, {
                                            prepend: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_v_icon, { color: "primary" }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`mdi-calendar`);
                                                    } else {
                                                      return [
                                                        createTextVNode("mdi-calendar")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_v_icon, { color: "primary" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode("mdi-calendar")
                                                    ]),
                                                    _: 1
                                                  })
                                                ];
                                              }
                                            }),
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_v_list_item_title, null, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`Data Creazione`);
                                                    } else {
                                                      return [
                                                        createTextVNode("Data Creazione")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(_component_v_list_item_subtitle, null, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`${ssrInterpolate(__props.order.creationDate)}`);
                                                    } else {
                                                      return [
                                                        createTextVNode(toDisplayString(__props.order.creationDate), 1)
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_v_list_item_title, null, {
                                                    default: withCtx(() => [
                                                      createTextVNode("Data Creazione")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_v_list_item_subtitle, null, {
                                                    default: withCtx(() => [
                                                      createTextVNode(toDisplayString(__props.order.creationDate), 1)
                                                    ]),
                                                    _: 1
                                                  })
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_v_list_item, null, {
                                            prepend: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_v_icon, { color: "primary" }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`mdi-truck-delivery`);
                                                    } else {
                                                      return [
                                                        createTextVNode("mdi-truck-delivery")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_v_icon, { color: "primary" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode("mdi-truck-delivery")
                                                    ]),
                                                    _: 1
                                                  })
                                                ];
                                              }
                                            }),
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_v_list_item_title, null, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`Data Consegna`);
                                                    } else {
                                                      return [
                                                        createTextVNode("Data Consegna")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(_component_v_list_item_subtitle, null, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`${ssrInterpolate(__props.order.deliveryDate)}`);
                                                    } else {
                                                      return [
                                                        createTextVNode(toDisplayString(__props.order.deliveryDate), 1)
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_v_list_item_title, null, {
                                                    default: withCtx(() => [
                                                      createTextVNode("Data Consegna")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_v_list_item_subtitle, null, {
                                                    default: withCtx(() => [
                                                      createTextVNode(toDisplayString(__props.order.deliveryDate), 1)
                                                    ]),
                                                    _: 1
                                                  })
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_v_list_item, null, {
                                            prepend: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_v_icon, { color: "primary" }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`mdi-store`);
                                                    } else {
                                                      return [
                                                        createTextVNode("mdi-store")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_v_icon, { color: "primary" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode("mdi-store")
                                                    ]),
                                                    _: 1
                                                  })
                                                ];
                                              }
                                            }),
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_v_list_item_title, null, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`Mercato`);
                                                    } else {
                                                      return [
                                                        createTextVNode("Mercato")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(_component_v_list_item_subtitle, null, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`${ssrInterpolate(__props.order.market)}`);
                                                    } else {
                                                      return [
                                                        createTextVNode(toDisplayString(__props.order.market), 1)
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_v_list_item_title, null, {
                                                    default: withCtx(() => [
                                                      createTextVNode("Mercato")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_v_list_item_subtitle, null, {
                                                    default: withCtx(() => [
                                                      createTextVNode(toDisplayString(__props.order.market), 1)
                                                    ]),
                                                    _: 1
                                                  })
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_v_list_item, null, {
                                            prepend: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_v_icon, {
                                                  color: __props.order.status === "Completed" ? "success" : __props.order.status === "Processing" ? "primary" : "warning"
                                                }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(` mdi-information `);
                                                    } else {
                                                      return [
                                                        createTextVNode(" mdi-information ")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_v_icon, {
                                                    color: __props.order.status === "Completed" ? "success" : __props.order.status === "Processing" ? "primary" : "warning"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(" mdi-information ")
                                                    ]),
                                                    _: 1
                                                  }, 8, ["color"])
                                                ];
                                              }
                                            }),
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_v_list_item_title, null, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`Stato`);
                                                    } else {
                                                      return [
                                                        createTextVNode("Stato")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(_component_v_list_item_subtitle, null, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(_component_v_chip, {
                                                        color: __props.order.status === "Completed" ? "success" : __props.order.status === "Processing" ? "primary" : "warning",
                                                        size: "small"
                                                      }, {
                                                        default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                          if (_push10) {
                                                            _push10(`${ssrInterpolate(__props.order.status)}`);
                                                          } else {
                                                            return [
                                                              createTextVNode(toDisplayString(__props.order.status), 1)
                                                            ];
                                                          }
                                                        }),
                                                        _: 1
                                                      }, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createVNode(_component_v_chip, {
                                                          color: __props.order.status === "Completed" ? "success" : __props.order.status === "Processing" ? "primary" : "warning",
                                                          size: "small"
                                                        }, {
                                                          default: withCtx(() => [
                                                            createTextVNode(toDisplayString(__props.order.status), 1)
                                                          ]),
                                                          _: 1
                                                        }, 8, ["color"])
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_v_list_item_title, null, {
                                                    default: withCtx(() => [
                                                      createTextVNode("Stato")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_v_list_item_subtitle, null, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_chip, {
                                                        color: __props.order.status === "Completed" ? "success" : __props.order.status === "Processing" ? "primary" : "warning",
                                                        size: "small"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createTextVNode(toDisplayString(__props.order.status), 1)
                                                        ]),
                                                        _: 1
                                                      }, 8, ["color"])
                                                    ]),
                                                    _: 1
                                                  })
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_v_list_subheader, { class: "text-h6" }, {
                                              default: withCtx(() => [
                                                createTextVNode("Informazioni Ordine")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_list_item, null, {
                                              prepend: withCtx(() => [
                                                createVNode(_component_v_icon, { color: "primary" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode("mdi-identifier")
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              default: withCtx(() => [
                                                createVNode(_component_v_list_item_title, null, {
                                                  default: withCtx(() => [
                                                    createTextVNode("ID Ordine")
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_v_list_item_subtitle, null, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(__props.order.id), 1)
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_list_item, null, {
                                              prepend: withCtx(() => [
                                                createVNode(_component_v_icon, { color: "primary" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode("mdi-calendar")
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              default: withCtx(() => [
                                                createVNode(_component_v_list_item_title, null, {
                                                  default: withCtx(() => [
                                                    createTextVNode("Data Creazione")
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_v_list_item_subtitle, null, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(__props.order.creationDate), 1)
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_list_item, null, {
                                              prepend: withCtx(() => [
                                                createVNode(_component_v_icon, { color: "primary" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode("mdi-truck-delivery")
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              default: withCtx(() => [
                                                createVNode(_component_v_list_item_title, null, {
                                                  default: withCtx(() => [
                                                    createTextVNode("Data Consegna")
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_v_list_item_subtitle, null, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(__props.order.deliveryDate), 1)
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_list_item, null, {
                                              prepend: withCtx(() => [
                                                createVNode(_component_v_icon, { color: "primary" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode("mdi-store")
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              default: withCtx(() => [
                                                createVNode(_component_v_list_item_title, null, {
                                                  default: withCtx(() => [
                                                    createTextVNode("Mercato")
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_v_list_item_subtitle, null, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(__props.order.market), 1)
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_list_item, null, {
                                              prepend: withCtx(() => [
                                                createVNode(_component_v_icon, {
                                                  color: __props.order.status === "Completed" ? "success" : __props.order.status === "Processing" ? "primary" : "warning"
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(" mdi-information ")
                                                  ]),
                                                  _: 1
                                                }, 8, ["color"])
                                              ]),
                                              default: withCtx(() => [
                                                createVNode(_component_v_list_item_title, null, {
                                                  default: withCtx(() => [
                                                    createTextVNode("Stato")
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_v_list_item_subtitle, null, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_chip, {
                                                      color: __props.order.status === "Completed" ? "success" : __props.order.status === "Processing" ? "primary" : "warning",
                                                      size: "small"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(toDisplayString(__props.order.status), 1)
                                                      ]),
                                                      _: 1
                                                    }, 8, ["color"])
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
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_list, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_list_subheader, { class: "text-h6" }, {
                                            default: withCtx(() => [
                                              createTextVNode("Informazioni Ordine")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_list_item, null, {
                                            prepend: withCtx(() => [
                                              createVNode(_component_v_icon, { color: "primary" }, {
                                                default: withCtx(() => [
                                                  createTextVNode("mdi-identifier")
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            default: withCtx(() => [
                                              createVNode(_component_v_list_item_title, null, {
                                                default: withCtx(() => [
                                                  createTextVNode("ID Ordine")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_v_list_item_subtitle, null, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(__props.order.id), 1)
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_list_item, null, {
                                            prepend: withCtx(() => [
                                              createVNode(_component_v_icon, { color: "primary" }, {
                                                default: withCtx(() => [
                                                  createTextVNode("mdi-calendar")
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            default: withCtx(() => [
                                              createVNode(_component_v_list_item_title, null, {
                                                default: withCtx(() => [
                                                  createTextVNode("Data Creazione")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_v_list_item_subtitle, null, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(__props.order.creationDate), 1)
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_list_item, null, {
                                            prepend: withCtx(() => [
                                              createVNode(_component_v_icon, { color: "primary" }, {
                                                default: withCtx(() => [
                                                  createTextVNode("mdi-truck-delivery")
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            default: withCtx(() => [
                                              createVNode(_component_v_list_item_title, null, {
                                                default: withCtx(() => [
                                                  createTextVNode("Data Consegna")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_v_list_item_subtitle, null, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(__props.order.deliveryDate), 1)
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_list_item, null, {
                                            prepend: withCtx(() => [
                                              createVNode(_component_v_icon, { color: "primary" }, {
                                                default: withCtx(() => [
                                                  createTextVNode("mdi-store")
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            default: withCtx(() => [
                                              createVNode(_component_v_list_item_title, null, {
                                                default: withCtx(() => [
                                                  createTextVNode("Mercato")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_v_list_item_subtitle, null, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(__props.order.market), 1)
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_list_item, null, {
                                            prepend: withCtx(() => [
                                              createVNode(_component_v_icon, {
                                                color: __props.order.status === "Completed" ? "success" : __props.order.status === "Processing" ? "primary" : "warning"
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(" mdi-information ")
                                                ]),
                                                _: 1
                                              }, 8, ["color"])
                                            ]),
                                            default: withCtx(() => [
                                              createVNode(_component_v_list_item_title, null, {
                                                default: withCtx(() => [
                                                  createTextVNode("Stato")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_v_list_item_subtitle, null, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_chip, {
                                                    color: __props.order.status === "Completed" ? "success" : __props.order.status === "Processing" ? "primary" : "warning",
                                                    size: "small"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(toDisplayString(__props.order.status), 1)
                                                    ]),
                                                    _: 1
                                                  }, 8, ["color"])
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
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_col, {
                                cols: "12",
                                md: "6"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_list, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_v_list_subheader, { class: "text-h6" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`Informazioni Cliente`);
                                              } else {
                                                return [
                                                  createTextVNode("Informazioni Cliente")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_v_list_item, null, {
                                            prepend: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_v_icon, { color: "primary" }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`mdi-account`);
                                                    } else {
                                                      return [
                                                        createTextVNode("mdi-account")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_v_icon, { color: "primary" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode("mdi-account")
                                                    ]),
                                                    _: 1
                                                  })
                                                ];
                                              }
                                            }),
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_v_list_item_title, null, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`Nome`);
                                                    } else {
                                                      return [
                                                        createTextVNode("Nome")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(_component_v_list_item_subtitle, null, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`${ssrInterpolate(__props.order.clientName)} ${ssrInterpolate(__props.order.clientSurname)}`);
                                                    } else {
                                                      return [
                                                        createTextVNode(toDisplayString(__props.order.clientName) + " " + toDisplayString(__props.order.clientSurname), 1)
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_v_list_item_title, null, {
                                                    default: withCtx(() => [
                                                      createTextVNode("Nome")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_v_list_item_subtitle, null, {
                                                    default: withCtx(() => [
                                                      createTextVNode(toDisplayString(__props.order.clientName) + " " + toDisplayString(__props.order.clientSurname), 1)
                                                    ]),
                                                    _: 1
                                                  })
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_v_list_item, null, {
                                            prepend: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_v_icon, { color: "primary" }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`mdi-identifier`);
                                                    } else {
                                                      return [
                                                        createTextVNode("mdi-identifier")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_v_icon, { color: "primary" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode("mdi-identifier")
                                                    ]),
                                                    _: 1
                                                  })
                                                ];
                                              }
                                            }),
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_v_list_item_title, null, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`ID Cliente`);
                                                    } else {
                                                      return [
                                                        createTextVNode("ID Cliente")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(_component_v_list_item_subtitle, null, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`${ssrInterpolate(__props.order.clientId)}`);
                                                    } else {
                                                      return [
                                                        createTextVNode(toDisplayString(__props.order.clientId), 1)
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_v_list_item_title, null, {
                                                    default: withCtx(() => [
                                                      createTextVNode("ID Cliente")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_v_list_item_subtitle, null, {
                                                    default: withCtx(() => [
                                                      createTextVNode(toDisplayString(__props.order.clientId), 1)
                                                    ]),
                                                    _: 1
                                                  })
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_v_list_item, null, {
                                            prepend: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_v_icon, { color: "primary" }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`mdi-email`);
                                                    } else {
                                                      return [
                                                        createTextVNode("mdi-email")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_v_icon, { color: "primary" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode("mdi-email")
                                                    ]),
                                                    _: 1
                                                  })
                                                ];
                                              }
                                            }),
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_v_list_item_title, null, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`Email`);
                                                    } else {
                                                      return [
                                                        createTextVNode("Email")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(_component_v_list_item_subtitle, null, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`${ssrInterpolate(__props.order.email)}`);
                                                    } else {
                                                      return [
                                                        createTextVNode(toDisplayString(__props.order.email), 1)
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_v_list_item_title, null, {
                                                    default: withCtx(() => [
                                                      createTextVNode("Email")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_v_list_item_subtitle, null, {
                                                    default: withCtx(() => [
                                                      createTextVNode(toDisplayString(__props.order.email), 1)
                                                    ]),
                                                    _: 1
                                                  })
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_v_list_subheader, { class: "text-h6" }, {
                                              default: withCtx(() => [
                                                createTextVNode("Informazioni Cliente")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_list_item, null, {
                                              prepend: withCtx(() => [
                                                createVNode(_component_v_icon, { color: "primary" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode("mdi-account")
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              default: withCtx(() => [
                                                createVNode(_component_v_list_item_title, null, {
                                                  default: withCtx(() => [
                                                    createTextVNode("Nome")
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_v_list_item_subtitle, null, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(__props.order.clientName) + " " + toDisplayString(__props.order.clientSurname), 1)
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_list_item, null, {
                                              prepend: withCtx(() => [
                                                createVNode(_component_v_icon, { color: "primary" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode("mdi-identifier")
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              default: withCtx(() => [
                                                createVNode(_component_v_list_item_title, null, {
                                                  default: withCtx(() => [
                                                    createTextVNode("ID Cliente")
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_v_list_item_subtitle, null, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(__props.order.clientId), 1)
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_list_item, null, {
                                              prepend: withCtx(() => [
                                                createVNode(_component_v_icon, { color: "primary" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode("mdi-email")
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              default: withCtx(() => [
                                                createVNode(_component_v_list_item_title, null, {
                                                  default: withCtx(() => [
                                                    createTextVNode("Email")
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_v_list_item_subtitle, null, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(__props.order.email), 1)
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
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_list, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_list_subheader, { class: "text-h6" }, {
                                            default: withCtx(() => [
                                              createTextVNode("Informazioni Cliente")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_list_item, null, {
                                            prepend: withCtx(() => [
                                              createVNode(_component_v_icon, { color: "primary" }, {
                                                default: withCtx(() => [
                                                  createTextVNode("mdi-account")
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            default: withCtx(() => [
                                              createVNode(_component_v_list_item_title, null, {
                                                default: withCtx(() => [
                                                  createTextVNode("Nome")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_v_list_item_subtitle, null, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(__props.order.clientName) + " " + toDisplayString(__props.order.clientSurname), 1)
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_list_item, null, {
                                            prepend: withCtx(() => [
                                              createVNode(_component_v_icon, { color: "primary" }, {
                                                default: withCtx(() => [
                                                  createTextVNode("mdi-identifier")
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            default: withCtx(() => [
                                              createVNode(_component_v_list_item_title, null, {
                                                default: withCtx(() => [
                                                  createTextVNode("ID Cliente")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_v_list_item_subtitle, null, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(__props.order.clientId), 1)
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_list_item, null, {
                                            prepend: withCtx(() => [
                                              createVNode(_component_v_icon, { color: "primary" }, {
                                                default: withCtx(() => [
                                                  createTextVNode("mdi-email")
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            default: withCtx(() => [
                                              createVNode(_component_v_list_item_title, null, {
                                                default: withCtx(() => [
                                                  createTextVNode("Email")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_v_list_item_subtitle, null, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(__props.order.email), 1)
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
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_col, {
                                  cols: "12",
                                  md: "6"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_list, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_list_subheader, { class: "text-h6" }, {
                                          default: withCtx(() => [
                                            createTextVNode("Informazioni Ordine")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_list_item, null, {
                                          prepend: withCtx(() => [
                                            createVNode(_component_v_icon, { color: "primary" }, {
                                              default: withCtx(() => [
                                                createTextVNode("mdi-identifier")
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          default: withCtx(() => [
                                            createVNode(_component_v_list_item_title, null, {
                                              default: withCtx(() => [
                                                createTextVNode("ID Ordine")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_list_item_subtitle, null, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(__props.order.id), 1)
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_list_item, null, {
                                          prepend: withCtx(() => [
                                            createVNode(_component_v_icon, { color: "primary" }, {
                                              default: withCtx(() => [
                                                createTextVNode("mdi-calendar")
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          default: withCtx(() => [
                                            createVNode(_component_v_list_item_title, null, {
                                              default: withCtx(() => [
                                                createTextVNode("Data Creazione")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_list_item_subtitle, null, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(__props.order.creationDate), 1)
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_list_item, null, {
                                          prepend: withCtx(() => [
                                            createVNode(_component_v_icon, { color: "primary" }, {
                                              default: withCtx(() => [
                                                createTextVNode("mdi-truck-delivery")
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          default: withCtx(() => [
                                            createVNode(_component_v_list_item_title, null, {
                                              default: withCtx(() => [
                                                createTextVNode("Data Consegna")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_list_item_subtitle, null, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(__props.order.deliveryDate), 1)
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_list_item, null, {
                                          prepend: withCtx(() => [
                                            createVNode(_component_v_icon, { color: "primary" }, {
                                              default: withCtx(() => [
                                                createTextVNode("mdi-store")
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          default: withCtx(() => [
                                            createVNode(_component_v_list_item_title, null, {
                                              default: withCtx(() => [
                                                createTextVNode("Mercato")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_list_item_subtitle, null, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(__props.order.market), 1)
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_list_item, null, {
                                          prepend: withCtx(() => [
                                            createVNode(_component_v_icon, {
                                              color: __props.order.status === "Completed" ? "success" : __props.order.status === "Processing" ? "primary" : "warning"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(" mdi-information ")
                                              ]),
                                              _: 1
                                            }, 8, ["color"])
                                          ]),
                                          default: withCtx(() => [
                                            createVNode(_component_v_list_item_title, null, {
                                              default: withCtx(() => [
                                                createTextVNode("Stato")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_list_item_subtitle, null, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_chip, {
                                                  color: __props.order.status === "Completed" ? "success" : __props.order.status === "Processing" ? "primary" : "warning",
                                                  size: "small"
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(__props.order.status), 1)
                                                  ]),
                                                  _: 1
                                                }, 8, ["color"])
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
                                }),
                                createVNode(_component_v_col, {
                                  cols: "12",
                                  md: "6"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_list, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_list_subheader, { class: "text-h6" }, {
                                          default: withCtx(() => [
                                            createTextVNode("Informazioni Cliente")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_list_item, null, {
                                          prepend: withCtx(() => [
                                            createVNode(_component_v_icon, { color: "primary" }, {
                                              default: withCtx(() => [
                                                createTextVNode("mdi-account")
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          default: withCtx(() => [
                                            createVNode(_component_v_list_item_title, null, {
                                              default: withCtx(() => [
                                                createTextVNode("Nome")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_list_item_subtitle, null, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(__props.order.clientName) + " " + toDisplayString(__props.order.clientSurname), 1)
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_list_item, null, {
                                          prepend: withCtx(() => [
                                            createVNode(_component_v_icon, { color: "primary" }, {
                                              default: withCtx(() => [
                                                createTextVNode("mdi-identifier")
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          default: withCtx(() => [
                                            createVNode(_component_v_list_item_title, null, {
                                              default: withCtx(() => [
                                                createTextVNode("ID Cliente")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_list_item_subtitle, null, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(__props.order.clientId), 1)
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_list_item, null, {
                                          prepend: withCtx(() => [
                                            createVNode(_component_v_icon, { color: "primary" }, {
                                              default: withCtx(() => [
                                                createTextVNode("mdi-email")
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          default: withCtx(() => [
                                            createVNode(_component_v_list_item_title, null, {
                                              default: withCtx(() => [
                                                createTextVNode("Email")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_list_item_subtitle, null, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(__props.order.email), 1)
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
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_divider, { class: "my-4" }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_row, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_col, { cols: "12" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<h3 class="text-h6 mb-3"${_scopeId5}>Dettagli Pagamento</h3>`);
                                    _push6(ssrRenderComponent(_component_v_table, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<thead${_scopeId6}><tr${_scopeId6}><th${_scopeId6}>Totale</th><th${_scopeId6}>Fees</th><th${_scopeId6}>Spedizione</th><th${_scopeId6}>Pagato</th><th${_scopeId6}>Metodo Pagamento</th></tr></thead><tbody${_scopeId6}><tr${_scopeId6}><td class="text-h6"${_scopeId6}>€${ssrInterpolate(__props.order.total.toFixed(2))}</td><td${_scopeId6}>€${ssrInterpolate(__props.order.fees.toFixed(2))}</td><td${_scopeId6}>€${ssrInterpolate(__props.order.shipping.toFixed(2))}</td><td${_scopeId6}>`);
                                          _push7(ssrRenderComponent(_component_v_icon, {
                                            color: __props.order.paid ? "success" : "error"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`${ssrInterpolate(__props.order.paid ? "mdi-check-circle" : "mdi-close-circle")}`);
                                              } else {
                                                return [
                                                  createTextVNode(toDisplayString(__props.order.paid ? "mdi-check-circle" : "mdi-close-circle"), 1)
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(` ${ssrInterpolate(__props.order.paid ? "Sì" : "No")}</td><td${_scopeId6}>${ssrInterpolate(__props.order.paymentType)}</td></tr></tbody>`);
                                        } else {
                                          return [
                                            createVNode("thead", null, [
                                              createVNode("tr", null, [
                                                createVNode("th", null, "Totale"),
                                                createVNode("th", null, "Fees"),
                                                createVNode("th", null, "Spedizione"),
                                                createVNode("th", null, "Pagato"),
                                                createVNode("th", null, "Metodo Pagamento")
                                              ])
                                            ]),
                                            createVNode("tbody", null, [
                                              createVNode("tr", null, [
                                                createVNode("td", { class: "text-h6" }, "€" + toDisplayString(__props.order.total.toFixed(2)), 1),
                                                createVNode("td", null, "€" + toDisplayString(__props.order.fees.toFixed(2)), 1),
                                                createVNode("td", null, "€" + toDisplayString(__props.order.shipping.toFixed(2)), 1),
                                                createVNode("td", null, [
                                                  createVNode(_component_v_icon, {
                                                    color: __props.order.paid ? "success" : "error"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(toDisplayString(__props.order.paid ? "mdi-check-circle" : "mdi-close-circle"), 1)
                                                    ]),
                                                    _: 1
                                                  }, 8, ["color"]),
                                                  createTextVNode(" " + toDisplayString(__props.order.paid ? "Sì" : "No"), 1)
                                                ]),
                                                createVNode("td", null, toDisplayString(__props.order.paymentType), 1)
                                              ])
                                            ])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode("h3", { class: "text-h6 mb-3" }, "Dettagli Pagamento"),
                                      createVNode(_component_v_table, null, {
                                        default: withCtx(() => [
                                          createVNode("thead", null, [
                                            createVNode("tr", null, [
                                              createVNode("th", null, "Totale"),
                                              createVNode("th", null, "Fees"),
                                              createVNode("th", null, "Spedizione"),
                                              createVNode("th", null, "Pagato"),
                                              createVNode("th", null, "Metodo Pagamento")
                                            ])
                                          ]),
                                          createVNode("tbody", null, [
                                            createVNode("tr", null, [
                                              createVNode("td", { class: "text-h6" }, "€" + toDisplayString(__props.order.total.toFixed(2)), 1),
                                              createVNode("td", null, "€" + toDisplayString(__props.order.fees.toFixed(2)), 1),
                                              createVNode("td", null, "€" + toDisplayString(__props.order.shipping.toFixed(2)), 1),
                                              createVNode("td", null, [
                                                createVNode(_component_v_icon, {
                                                  color: __props.order.paid ? "success" : "error"
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(__props.order.paid ? "mdi-check-circle" : "mdi-close-circle"), 1)
                                                  ]),
                                                  _: 1
                                                }, 8, ["color"]),
                                                createTextVNode(" " + toDisplayString(__props.order.paid ? "Sì" : "No"), 1)
                                              ]),
                                              createVNode("td", null, toDisplayString(__props.order.paymentType), 1)
                                            ])
                                          ])
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_col, { cols: "12" }, {
                                  default: withCtx(() => [
                                    createVNode("h3", { class: "text-h6 mb-3" }, "Dettagli Pagamento"),
                                    createVNode(_component_v_table, null, {
                                      default: withCtx(() => [
                                        createVNode("thead", null, [
                                          createVNode("tr", null, [
                                            createVNode("th", null, "Totale"),
                                            createVNode("th", null, "Fees"),
                                            createVNode("th", null, "Spedizione"),
                                            createVNode("th", null, "Pagato"),
                                            createVNode("th", null, "Metodo Pagamento")
                                          ])
                                        ]),
                                        createVNode("tbody", null, [
                                          createVNode("tr", null, [
                                            createVNode("td", { class: "text-h6" }, "€" + toDisplayString(__props.order.total.toFixed(2)), 1),
                                            createVNode("td", null, "€" + toDisplayString(__props.order.fees.toFixed(2)), 1),
                                            createVNode("td", null, "€" + toDisplayString(__props.order.shipping.toFixed(2)), 1),
                                            createVNode("td", null, [
                                              createVNode(_component_v_icon, {
                                                color: __props.order.paid ? "success" : "error"
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(__props.order.paid ? "mdi-check-circle" : "mdi-close-circle"), 1)
                                                ]),
                                                _: 1
                                              }, 8, ["color"]),
                                              createTextVNode(" " + toDisplayString(__props.order.paid ? "Sì" : "No"), 1)
                                            ]),
                                            createVNode("td", null, toDisplayString(__props.order.paymentType), 1)
                                          ])
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
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_divider, { class: "my-4" }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_row, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_col, { cols: "12" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<h3 class="text-h6 mb-3"${_scopeId5}>Prodotti</h3><p${_scopeId5}>${ssrInterpolate(__props.order.products)}</p>`);
                                  } else {
                                    return [
                                      createVNode("h3", { class: "text-h6 mb-3" }, "Prodotti"),
                                      createVNode("p", null, toDisplayString(__props.order.products), 1)
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_col, { cols: "12" }, {
                                  default: withCtx(() => [
                                    createVNode("h3", { class: "text-h6 mb-3" }, "Prodotti"),
                                    createVNode("p", null, toDisplayString(__props.order.products), 1)
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_divider, { class: "my-4" }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_row, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_col, { cols: "12" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<h3 class="text-h6 mb-3"${_scopeId5}>Venditori</h3>`);
                                    _push6(ssrRenderComponent(_component_v_table, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<thead${_scopeId6}><tr${_scopeId6}><th${_scopeId6}>Nome Venditore</th><th${_scopeId6}>Totale</th></tr></thead><tbody${_scopeId6}><!--[-->`);
                                          ssrRenderList(__props.order.vendors, (vendor, index) => {
                                            _push7(`<tr${_scopeId6}><td${_scopeId6}>${ssrInterpolate(vendor.name)}</td><td${_scopeId6}>€${ssrInterpolate(vendor.total.toFixed(2))}</td></tr>`);
                                          });
                                          _push7(`<!--]--></tbody>`);
                                        } else {
                                          return [
                                            createVNode("thead", null, [
                                              createVNode("tr", null, [
                                                createVNode("th", null, "Nome Venditore"),
                                                createVNode("th", null, "Totale")
                                              ])
                                            ]),
                                            createVNode("tbody", null, [
                                              (openBlock(true), createBlock(Fragment, null, renderList(__props.order.vendors, (vendor, index) => {
                                                return openBlock(), createBlock("tr", { key: index }, [
                                                  createVNode("td", null, toDisplayString(vendor.name), 1),
                                                  createVNode("td", null, "€" + toDisplayString(vendor.total.toFixed(2)), 1)
                                                ]);
                                              }), 128))
                                            ])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode("h3", { class: "text-h6 mb-3" }, "Venditori"),
                                      createVNode(_component_v_table, null, {
                                        default: withCtx(() => [
                                          createVNode("thead", null, [
                                            createVNode("tr", null, [
                                              createVNode("th", null, "Nome Venditore"),
                                              createVNode("th", null, "Totale")
                                            ])
                                          ]),
                                          createVNode("tbody", null, [
                                            (openBlock(true), createBlock(Fragment, null, renderList(__props.order.vendors, (vendor, index) => {
                                              return openBlock(), createBlock("tr", { key: index }, [
                                                createVNode("td", null, toDisplayString(vendor.name), 1),
                                                createVNode("td", null, "€" + toDisplayString(vendor.total.toFixed(2)), 1)
                                              ]);
                                            }), 128))
                                          ])
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_col, { cols: "12" }, {
                                  default: withCtx(() => [
                                    createVNode("h3", { class: "text-h6 mb-3" }, "Venditori"),
                                    createVNode(_component_v_table, null, {
                                      default: withCtx(() => [
                                        createVNode("thead", null, [
                                          createVNode("tr", null, [
                                            createVNode("th", null, "Nome Venditore"),
                                            createVNode("th", null, "Totale")
                                          ])
                                        ]),
                                        createVNode("tbody", null, [
                                          (openBlock(true), createBlock(Fragment, null, renderList(__props.order.vendors, (vendor, index) => {
                                            return openBlock(), createBlock("tr", { key: index }, [
                                              createVNode("td", null, toDisplayString(vendor.name), 1),
                                              createVNode("td", null, "€" + toDisplayString(vendor.total.toFixed(2)), 1)
                                            ]);
                                          }), 128))
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
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_row, null, {
                            default: withCtx(() => [
                              createVNode(_component_v_col, {
                                cols: "12",
                                md: "6"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_list, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_list_subheader, { class: "text-h6" }, {
                                        default: withCtx(() => [
                                          createTextVNode("Informazioni Ordine")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_list_item, null, {
                                        prepend: withCtx(() => [
                                          createVNode(_component_v_icon, { color: "primary" }, {
                                            default: withCtx(() => [
                                              createTextVNode("mdi-identifier")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        default: withCtx(() => [
                                          createVNode(_component_v_list_item_title, null, {
                                            default: withCtx(() => [
                                              createTextVNode("ID Ordine")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_list_item_subtitle, null, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(__props.order.id), 1)
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_list_item, null, {
                                        prepend: withCtx(() => [
                                          createVNode(_component_v_icon, { color: "primary" }, {
                                            default: withCtx(() => [
                                              createTextVNode("mdi-calendar")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        default: withCtx(() => [
                                          createVNode(_component_v_list_item_title, null, {
                                            default: withCtx(() => [
                                              createTextVNode("Data Creazione")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_list_item_subtitle, null, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(__props.order.creationDate), 1)
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_list_item, null, {
                                        prepend: withCtx(() => [
                                          createVNode(_component_v_icon, { color: "primary" }, {
                                            default: withCtx(() => [
                                              createTextVNode("mdi-truck-delivery")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        default: withCtx(() => [
                                          createVNode(_component_v_list_item_title, null, {
                                            default: withCtx(() => [
                                              createTextVNode("Data Consegna")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_list_item_subtitle, null, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(__props.order.deliveryDate), 1)
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_list_item, null, {
                                        prepend: withCtx(() => [
                                          createVNode(_component_v_icon, { color: "primary" }, {
                                            default: withCtx(() => [
                                              createTextVNode("mdi-store")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        default: withCtx(() => [
                                          createVNode(_component_v_list_item_title, null, {
                                            default: withCtx(() => [
                                              createTextVNode("Mercato")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_list_item_subtitle, null, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(__props.order.market), 1)
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_list_item, null, {
                                        prepend: withCtx(() => [
                                          createVNode(_component_v_icon, {
                                            color: __props.order.status === "Completed" ? "success" : __props.order.status === "Processing" ? "primary" : "warning"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(" mdi-information ")
                                            ]),
                                            _: 1
                                          }, 8, ["color"])
                                        ]),
                                        default: withCtx(() => [
                                          createVNode(_component_v_list_item_title, null, {
                                            default: withCtx(() => [
                                              createTextVNode("Stato")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_list_item_subtitle, null, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_chip, {
                                                color: __props.order.status === "Completed" ? "success" : __props.order.status === "Processing" ? "primary" : "warning",
                                                size: "small"
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(__props.order.status), 1)
                                                ]),
                                                _: 1
                                              }, 8, ["color"])
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
                              }),
                              createVNode(_component_v_col, {
                                cols: "12",
                                md: "6"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_list, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_list_subheader, { class: "text-h6" }, {
                                        default: withCtx(() => [
                                          createTextVNode("Informazioni Cliente")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_list_item, null, {
                                        prepend: withCtx(() => [
                                          createVNode(_component_v_icon, { color: "primary" }, {
                                            default: withCtx(() => [
                                              createTextVNode("mdi-account")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        default: withCtx(() => [
                                          createVNode(_component_v_list_item_title, null, {
                                            default: withCtx(() => [
                                              createTextVNode("Nome")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_list_item_subtitle, null, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(__props.order.clientName) + " " + toDisplayString(__props.order.clientSurname), 1)
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_list_item, null, {
                                        prepend: withCtx(() => [
                                          createVNode(_component_v_icon, { color: "primary" }, {
                                            default: withCtx(() => [
                                              createTextVNode("mdi-identifier")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        default: withCtx(() => [
                                          createVNode(_component_v_list_item_title, null, {
                                            default: withCtx(() => [
                                              createTextVNode("ID Cliente")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_list_item_subtitle, null, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(__props.order.clientId), 1)
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_list_item, null, {
                                        prepend: withCtx(() => [
                                          createVNode(_component_v_icon, { color: "primary" }, {
                                            default: withCtx(() => [
                                              createTextVNode("mdi-email")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        default: withCtx(() => [
                                          createVNode(_component_v_list_item_title, null, {
                                            default: withCtx(() => [
                                              createTextVNode("Email")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_list_item_subtitle, null, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(__props.order.email), 1)
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
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_divider, { class: "my-4" }),
                          createVNode(_component_v_row, null, {
                            default: withCtx(() => [
                              createVNode(_component_v_col, { cols: "12" }, {
                                default: withCtx(() => [
                                  createVNode("h3", { class: "text-h6 mb-3" }, "Dettagli Pagamento"),
                                  createVNode(_component_v_table, null, {
                                    default: withCtx(() => [
                                      createVNode("thead", null, [
                                        createVNode("tr", null, [
                                          createVNode("th", null, "Totale"),
                                          createVNode("th", null, "Fees"),
                                          createVNode("th", null, "Spedizione"),
                                          createVNode("th", null, "Pagato"),
                                          createVNode("th", null, "Metodo Pagamento")
                                        ])
                                      ]),
                                      createVNode("tbody", null, [
                                        createVNode("tr", null, [
                                          createVNode("td", { class: "text-h6" }, "€" + toDisplayString(__props.order.total.toFixed(2)), 1),
                                          createVNode("td", null, "€" + toDisplayString(__props.order.fees.toFixed(2)), 1),
                                          createVNode("td", null, "€" + toDisplayString(__props.order.shipping.toFixed(2)), 1),
                                          createVNode("td", null, [
                                            createVNode(_component_v_icon, {
                                              color: __props.order.paid ? "success" : "error"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(__props.order.paid ? "mdi-check-circle" : "mdi-close-circle"), 1)
                                              ]),
                                              _: 1
                                            }, 8, ["color"]),
                                            createTextVNode(" " + toDisplayString(__props.order.paid ? "Sì" : "No"), 1)
                                          ]),
                                          createVNode("td", null, toDisplayString(__props.order.paymentType), 1)
                                        ])
                                      ])
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_divider, { class: "my-4" }),
                          createVNode(_component_v_row, null, {
                            default: withCtx(() => [
                              createVNode(_component_v_col, { cols: "12" }, {
                                default: withCtx(() => [
                                  createVNode("h3", { class: "text-h6 mb-3" }, "Prodotti"),
                                  createVNode("p", null, toDisplayString(__props.order.products), 1)
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_divider, { class: "my-4" }),
                          createVNode(_component_v_row, null, {
                            default: withCtx(() => [
                              createVNode(_component_v_col, { cols: "12" }, {
                                default: withCtx(() => [
                                  createVNode("h3", { class: "text-h6 mb-3" }, "Venditori"),
                                  createVNode(_component_v_table, null, {
                                    default: withCtx(() => [
                                      createVNode("thead", null, [
                                        createVNode("tr", null, [
                                          createVNode("th", null, "Nome Venditore"),
                                          createVNode("th", null, "Totale")
                                        ])
                                      ]),
                                      createVNode("tbody", null, [
                                        (openBlock(true), createBlock(Fragment, null, renderList(__props.order.vendors, (vendor, index) => {
                                          return openBlock(), createBlock("tr", { key: index }, [
                                            createVNode("td", null, toDisplayString(vendor.name), 1),
                                            createVNode("td", null, "€" + toDisplayString(vendor.total.toFixed(2)), 1)
                                          ]);
                                        }), 128))
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
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_card_actions, { class: "pa-4" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_spacer, null, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_btn, {
                          color: "primary",
                          variant: "text",
                          onClick: closeModal
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Chiudi `);
                            } else {
                              return [
                                createTextVNode(" Chiudi ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_spacer),
                          createVNode(_component_v_btn, {
                            color: "primary",
                            variant: "text",
                            onClick: closeModal
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Chiudi ")
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
                    createVNode(_component_v_card_title, { class: "text-h5 bg-primary text-white pa-4" }, {
                      default: withCtx(() => [
                        createTextVNode(" Dettaglio Ordine " + toDisplayString(__props.order.id) + " ", 1),
                        createVNode(_component_v_spacer),
                        createVNode(_component_v_btn, {
                          icon: "",
                          variant: "text",
                          color: "white",
                          onClick: closeModal
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_icon, null, {
                              default: withCtx(() => [
                                createTextVNode("mdi-close")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_card_text, { class: "pa-4" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_row, null, {
                          default: withCtx(() => [
                            createVNode(_component_v_col, {
                              cols: "12",
                              md: "6"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_list, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_list_subheader, { class: "text-h6" }, {
                                      default: withCtx(() => [
                                        createTextVNode("Informazioni Ordine")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_list_item, null, {
                                      prepend: withCtx(() => [
                                        createVNode(_component_v_icon, { color: "primary" }, {
                                          default: withCtx(() => [
                                            createTextVNode("mdi-identifier")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      default: withCtx(() => [
                                        createVNode(_component_v_list_item_title, null, {
                                          default: withCtx(() => [
                                            createTextVNode("ID Ordine")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_list_item_subtitle, null, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(__props.order.id), 1)
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_list_item, null, {
                                      prepend: withCtx(() => [
                                        createVNode(_component_v_icon, { color: "primary" }, {
                                          default: withCtx(() => [
                                            createTextVNode("mdi-calendar")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      default: withCtx(() => [
                                        createVNode(_component_v_list_item_title, null, {
                                          default: withCtx(() => [
                                            createTextVNode("Data Creazione")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_list_item_subtitle, null, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(__props.order.creationDate), 1)
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_list_item, null, {
                                      prepend: withCtx(() => [
                                        createVNode(_component_v_icon, { color: "primary" }, {
                                          default: withCtx(() => [
                                            createTextVNode("mdi-truck-delivery")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      default: withCtx(() => [
                                        createVNode(_component_v_list_item_title, null, {
                                          default: withCtx(() => [
                                            createTextVNode("Data Consegna")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_list_item_subtitle, null, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(__props.order.deliveryDate), 1)
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_list_item, null, {
                                      prepend: withCtx(() => [
                                        createVNode(_component_v_icon, { color: "primary" }, {
                                          default: withCtx(() => [
                                            createTextVNode("mdi-store")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      default: withCtx(() => [
                                        createVNode(_component_v_list_item_title, null, {
                                          default: withCtx(() => [
                                            createTextVNode("Mercato")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_list_item_subtitle, null, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(__props.order.market), 1)
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_list_item, null, {
                                      prepend: withCtx(() => [
                                        createVNode(_component_v_icon, {
                                          color: __props.order.status === "Completed" ? "success" : __props.order.status === "Processing" ? "primary" : "warning"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" mdi-information ")
                                          ]),
                                          _: 1
                                        }, 8, ["color"])
                                      ]),
                                      default: withCtx(() => [
                                        createVNode(_component_v_list_item_title, null, {
                                          default: withCtx(() => [
                                            createTextVNode("Stato")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_list_item_subtitle, null, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_chip, {
                                              color: __props.order.status === "Completed" ? "success" : __props.order.status === "Processing" ? "primary" : "warning",
                                              size: "small"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(__props.order.status), 1)
                                              ]),
                                              _: 1
                                            }, 8, ["color"])
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
                            }),
                            createVNode(_component_v_col, {
                              cols: "12",
                              md: "6"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_list, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_list_subheader, { class: "text-h6" }, {
                                      default: withCtx(() => [
                                        createTextVNode("Informazioni Cliente")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_list_item, null, {
                                      prepend: withCtx(() => [
                                        createVNode(_component_v_icon, { color: "primary" }, {
                                          default: withCtx(() => [
                                            createTextVNode("mdi-account")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      default: withCtx(() => [
                                        createVNode(_component_v_list_item_title, null, {
                                          default: withCtx(() => [
                                            createTextVNode("Nome")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_list_item_subtitle, null, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(__props.order.clientName) + " " + toDisplayString(__props.order.clientSurname), 1)
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_list_item, null, {
                                      prepend: withCtx(() => [
                                        createVNode(_component_v_icon, { color: "primary" }, {
                                          default: withCtx(() => [
                                            createTextVNode("mdi-identifier")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      default: withCtx(() => [
                                        createVNode(_component_v_list_item_title, null, {
                                          default: withCtx(() => [
                                            createTextVNode("ID Cliente")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_list_item_subtitle, null, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(__props.order.clientId), 1)
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_list_item, null, {
                                      prepend: withCtx(() => [
                                        createVNode(_component_v_icon, { color: "primary" }, {
                                          default: withCtx(() => [
                                            createTextVNode("mdi-email")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      default: withCtx(() => [
                                        createVNode(_component_v_list_item_title, null, {
                                          default: withCtx(() => [
                                            createTextVNode("Email")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_list_item_subtitle, null, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(__props.order.email), 1)
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
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_divider, { class: "my-4" }),
                        createVNode(_component_v_row, null, {
                          default: withCtx(() => [
                            createVNode(_component_v_col, { cols: "12" }, {
                              default: withCtx(() => [
                                createVNode("h3", { class: "text-h6 mb-3" }, "Dettagli Pagamento"),
                                createVNode(_component_v_table, null, {
                                  default: withCtx(() => [
                                    createVNode("thead", null, [
                                      createVNode("tr", null, [
                                        createVNode("th", null, "Totale"),
                                        createVNode("th", null, "Fees"),
                                        createVNode("th", null, "Spedizione"),
                                        createVNode("th", null, "Pagato"),
                                        createVNode("th", null, "Metodo Pagamento")
                                      ])
                                    ]),
                                    createVNode("tbody", null, [
                                      createVNode("tr", null, [
                                        createVNode("td", { class: "text-h6" }, "€" + toDisplayString(__props.order.total.toFixed(2)), 1),
                                        createVNode("td", null, "€" + toDisplayString(__props.order.fees.toFixed(2)), 1),
                                        createVNode("td", null, "€" + toDisplayString(__props.order.shipping.toFixed(2)), 1),
                                        createVNode("td", null, [
                                          createVNode(_component_v_icon, {
                                            color: __props.order.paid ? "success" : "error"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(__props.order.paid ? "mdi-check-circle" : "mdi-close-circle"), 1)
                                            ]),
                                            _: 1
                                          }, 8, ["color"]),
                                          createTextVNode(" " + toDisplayString(__props.order.paid ? "Sì" : "No"), 1)
                                        ]),
                                        createVNode("td", null, toDisplayString(__props.order.paymentType), 1)
                                      ])
                                    ])
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_divider, { class: "my-4" }),
                        createVNode(_component_v_row, null, {
                          default: withCtx(() => [
                            createVNode(_component_v_col, { cols: "12" }, {
                              default: withCtx(() => [
                                createVNode("h3", { class: "text-h6 mb-3" }, "Prodotti"),
                                createVNode("p", null, toDisplayString(__props.order.products), 1)
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_divider, { class: "my-4" }),
                        createVNode(_component_v_row, null, {
                          default: withCtx(() => [
                            createVNode(_component_v_col, { cols: "12" }, {
                              default: withCtx(() => [
                                createVNode("h3", { class: "text-h6 mb-3" }, "Venditori"),
                                createVNode(_component_v_table, null, {
                                  default: withCtx(() => [
                                    createVNode("thead", null, [
                                      createVNode("tr", null, [
                                        createVNode("th", null, "Nome Venditore"),
                                        createVNode("th", null, "Totale")
                                      ])
                                    ]),
                                    createVNode("tbody", null, [
                                      (openBlock(true), createBlock(Fragment, null, renderList(__props.order.vendors, (vendor, index) => {
                                        return openBlock(), createBlock("tr", { key: index }, [
                                          createVNode("td", null, toDisplayString(vendor.name), 1),
                                          createVNode("td", null, "€" + toDisplayString(vendor.total.toFixed(2)), 1)
                                        ]);
                                      }), 128))
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
                    }),
                    createVNode(_component_v_card_actions, { class: "pa-4" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_spacer),
                        createVNode(_component_v_btn, {
                          color: "primary",
                          variant: "text",
                          onClick: closeModal
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Chiudi ")
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
              createVNode(_component_v_card, null, {
                default: withCtx(() => [
                  createVNode(_component_v_card_title, { class: "text-h5 bg-primary text-white pa-4" }, {
                    default: withCtx(() => [
                      createTextVNode(" Dettaglio Ordine " + toDisplayString(__props.order.id) + " ", 1),
                      createVNode(_component_v_spacer),
                      createVNode(_component_v_btn, {
                        icon: "",
                        variant: "text",
                        color: "white",
                        onClick: closeModal
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_icon, null, {
                            default: withCtx(() => [
                              createTextVNode("mdi-close")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_card_text, { class: "pa-4" }, {
                    default: withCtx(() => [
                      createVNode(_component_v_row, null, {
                        default: withCtx(() => [
                          createVNode(_component_v_col, {
                            cols: "12",
                            md: "6"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_list, null, {
                                default: withCtx(() => [
                                  createVNode(_component_v_list_subheader, { class: "text-h6" }, {
                                    default: withCtx(() => [
                                      createTextVNode("Informazioni Ordine")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_list_item, null, {
                                    prepend: withCtx(() => [
                                      createVNode(_component_v_icon, { color: "primary" }, {
                                        default: withCtx(() => [
                                          createTextVNode("mdi-identifier")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    default: withCtx(() => [
                                      createVNode(_component_v_list_item_title, null, {
                                        default: withCtx(() => [
                                          createTextVNode("ID Ordine")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_list_item_subtitle, null, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(__props.order.id), 1)
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_list_item, null, {
                                    prepend: withCtx(() => [
                                      createVNode(_component_v_icon, { color: "primary" }, {
                                        default: withCtx(() => [
                                          createTextVNode("mdi-calendar")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    default: withCtx(() => [
                                      createVNode(_component_v_list_item_title, null, {
                                        default: withCtx(() => [
                                          createTextVNode("Data Creazione")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_list_item_subtitle, null, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(__props.order.creationDate), 1)
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_list_item, null, {
                                    prepend: withCtx(() => [
                                      createVNode(_component_v_icon, { color: "primary" }, {
                                        default: withCtx(() => [
                                          createTextVNode("mdi-truck-delivery")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    default: withCtx(() => [
                                      createVNode(_component_v_list_item_title, null, {
                                        default: withCtx(() => [
                                          createTextVNode("Data Consegna")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_list_item_subtitle, null, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(__props.order.deliveryDate), 1)
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_list_item, null, {
                                    prepend: withCtx(() => [
                                      createVNode(_component_v_icon, { color: "primary" }, {
                                        default: withCtx(() => [
                                          createTextVNode("mdi-store")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    default: withCtx(() => [
                                      createVNode(_component_v_list_item_title, null, {
                                        default: withCtx(() => [
                                          createTextVNode("Mercato")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_list_item_subtitle, null, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(__props.order.market), 1)
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_list_item, null, {
                                    prepend: withCtx(() => [
                                      createVNode(_component_v_icon, {
                                        color: __props.order.status === "Completed" ? "success" : __props.order.status === "Processing" ? "primary" : "warning"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" mdi-information ")
                                        ]),
                                        _: 1
                                      }, 8, ["color"])
                                    ]),
                                    default: withCtx(() => [
                                      createVNode(_component_v_list_item_title, null, {
                                        default: withCtx(() => [
                                          createTextVNode("Stato")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_list_item_subtitle, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_chip, {
                                            color: __props.order.status === "Completed" ? "success" : __props.order.status === "Processing" ? "primary" : "warning",
                                            size: "small"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(__props.order.status), 1)
                                            ]),
                                            _: 1
                                          }, 8, ["color"])
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
                          }),
                          createVNode(_component_v_col, {
                            cols: "12",
                            md: "6"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_list, null, {
                                default: withCtx(() => [
                                  createVNode(_component_v_list_subheader, { class: "text-h6" }, {
                                    default: withCtx(() => [
                                      createTextVNode("Informazioni Cliente")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_list_item, null, {
                                    prepend: withCtx(() => [
                                      createVNode(_component_v_icon, { color: "primary" }, {
                                        default: withCtx(() => [
                                          createTextVNode("mdi-account")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    default: withCtx(() => [
                                      createVNode(_component_v_list_item_title, null, {
                                        default: withCtx(() => [
                                          createTextVNode("Nome")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_list_item_subtitle, null, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(__props.order.clientName) + " " + toDisplayString(__props.order.clientSurname), 1)
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_list_item, null, {
                                    prepend: withCtx(() => [
                                      createVNode(_component_v_icon, { color: "primary" }, {
                                        default: withCtx(() => [
                                          createTextVNode("mdi-identifier")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    default: withCtx(() => [
                                      createVNode(_component_v_list_item_title, null, {
                                        default: withCtx(() => [
                                          createTextVNode("ID Cliente")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_list_item_subtitle, null, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(__props.order.clientId), 1)
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_list_item, null, {
                                    prepend: withCtx(() => [
                                      createVNode(_component_v_icon, { color: "primary" }, {
                                        default: withCtx(() => [
                                          createTextVNode("mdi-email")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    default: withCtx(() => [
                                      createVNode(_component_v_list_item_title, null, {
                                        default: withCtx(() => [
                                          createTextVNode("Email")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_list_item_subtitle, null, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(__props.order.email), 1)
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
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_divider, { class: "my-4" }),
                      createVNode(_component_v_row, null, {
                        default: withCtx(() => [
                          createVNode(_component_v_col, { cols: "12" }, {
                            default: withCtx(() => [
                              createVNode("h3", { class: "text-h6 mb-3" }, "Dettagli Pagamento"),
                              createVNode(_component_v_table, null, {
                                default: withCtx(() => [
                                  createVNode("thead", null, [
                                    createVNode("tr", null, [
                                      createVNode("th", null, "Totale"),
                                      createVNode("th", null, "Fees"),
                                      createVNode("th", null, "Spedizione"),
                                      createVNode("th", null, "Pagato"),
                                      createVNode("th", null, "Metodo Pagamento")
                                    ])
                                  ]),
                                  createVNode("tbody", null, [
                                    createVNode("tr", null, [
                                      createVNode("td", { class: "text-h6" }, "€" + toDisplayString(__props.order.total.toFixed(2)), 1),
                                      createVNode("td", null, "€" + toDisplayString(__props.order.fees.toFixed(2)), 1),
                                      createVNode("td", null, "€" + toDisplayString(__props.order.shipping.toFixed(2)), 1),
                                      createVNode("td", null, [
                                        createVNode(_component_v_icon, {
                                          color: __props.order.paid ? "success" : "error"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(__props.order.paid ? "mdi-check-circle" : "mdi-close-circle"), 1)
                                          ]),
                                          _: 1
                                        }, 8, ["color"]),
                                        createTextVNode(" " + toDisplayString(__props.order.paid ? "Sì" : "No"), 1)
                                      ]),
                                      createVNode("td", null, toDisplayString(__props.order.paymentType), 1)
                                    ])
                                  ])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_divider, { class: "my-4" }),
                      createVNode(_component_v_row, null, {
                        default: withCtx(() => [
                          createVNode(_component_v_col, { cols: "12" }, {
                            default: withCtx(() => [
                              createVNode("h3", { class: "text-h6 mb-3" }, "Prodotti"),
                              createVNode("p", null, toDisplayString(__props.order.products), 1)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_divider, { class: "my-4" }),
                      createVNode(_component_v_row, null, {
                        default: withCtx(() => [
                          createVNode(_component_v_col, { cols: "12" }, {
                            default: withCtx(() => [
                              createVNode("h3", { class: "text-h6 mb-3" }, "Venditori"),
                              createVNode(_component_v_table, null, {
                                default: withCtx(() => [
                                  createVNode("thead", null, [
                                    createVNode("tr", null, [
                                      createVNode("th", null, "Nome Venditore"),
                                      createVNode("th", null, "Totale")
                                    ])
                                  ]),
                                  createVNode("tbody", null, [
                                    (openBlock(true), createBlock(Fragment, null, renderList(__props.order.vendors, (vendor, index) => {
                                      return openBlock(), createBlock("tr", { key: index }, [
                                        createVNode("td", null, toDisplayString(vendor.name), 1),
                                        createVNode("td", null, "€" + toDisplayString(vendor.total.toFixed(2)), 1)
                                      ]);
                                    }), 128))
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
                  }),
                  createVNode(_component_v_card_actions, { class: "pa-4" }, {
                    default: withCtx(() => [
                      createVNode(_component_v_spacer),
                      createVNode(_component_v_btn, {
                        color: "primary",
                        variant: "text",
                        onClick: closeModal
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Chiudi ")
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "MonthlyOrders",
  __ssrInlineRender: true,
  setup(__props) {
    const orders = ref([]);
    const isLoading = ref(true);
    const lastUpdate = ref("");
    const search = ref("");
    const errorMessage = ref("");
    const selectedMonth = ref(0);
    const selectedYear = ref(0);
    const months = ref([]);
    const years = ref([]);
    const headers = [
      { title: "ID", key: "id", align: "start" },
      { title: "Stato", key: "status" },
      { title: "Data", key: "creationDate", class: "d-none d-sm-table-cell" },
      { title: "Cliente", key: "client" },
      { title: "Email", key: "email", class: "d-none d-md-table-cell" },
      { title: "Totale", key: "total", align: "end" },
      { title: "Pagato", key: "paid", align: "center", class: "d-none d-md-table-cell" },
      { title: "Pagamento", key: "payment", class: "d-none d-lg-table-cell" },
      { title: "Mercato", key: "market", class: "d-none d-lg-table-cell" },
      { title: "Azioni", key: "actions", align: "center", sortable: false }
    ];
    const loadOrders = async () => {
      isLoading.value = true;
      errorMessage.value = "";
      try {
        const monthStr = String(selectedMonth.value + 1).padStart(2, "0");
        const response = await api.getMonthlyOrders(monthStr, String(selectedYear.value));
        orders.value = response.orders || [];
        lastUpdate.value = response.lastUpdate || (/* @__PURE__ */ new Date()).toLocaleString("it-IT");
      } catch (error) {
        console.error("Errore nel caricamento degli ordini:", error);
        errorMessage.value = "Impossibile caricare i dati. Verifica la connessione.";
        orders.value = [];
      } finally {
        isLoading.value = false;
      }
    };
    const showModal = ref(false);
    const selectedOrder = ref(null);
    const viewOrderDetails = (order) => {
      selectedOrder.value = order;
      showModal.value = true;
    };
    const closeModal = () => showModal.value = false;
    const getStatusColor = (status) => {
      if (status === "Completato") return "success";
      if (status === "In elaborazione") return "warning";
      return "error";
    };
    const formatCurrency = (value) => {
      return new Intl.NumberFormat("it-IT", { style: "currency", currency: "EUR" }).format(value);
    };
    const exportCSV = () => {
    };
    const exportPDF = () => alert("Funzionalità di esportazione PDF in fase di implementazione");
    const refreshData = () => loadOrders();
    watch([selectedMonth, selectedYear], loadOrders);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_card = resolveComponent("v-card");
      const _component_v_card_title = resolveComponent("v-card-title");
      const _component_v_card_subtitle = resolveComponent("v-card-subtitle");
      const _component_v_spacer = resolveComponent("v-spacer");
      const _component_v_select = resolveComponent("v-select");
      const _component_v_btn = resolveComponent("v-btn");
      const _component_v_menu = resolveComponent("v-menu");
      const _component_v_list = resolveComponent("v-list");
      const _component_v_list_item = resolveComponent("v-list-item");
      const _component_v_list_item_title = resolveComponent("v-list-item-title");
      const _component_v_icon = resolveComponent("v-icon");
      const _component_v_divider = resolveComponent("v-divider");
      const _component_v_text_field = resolveComponent("v-text-field");
      const _component_v_alert = resolveComponent("v-alert");
      const _component_v_data_table = resolveComponent("v-data-table");
      const _component_v_skeleton_loader = resolveComponent("v-skeleton-loader");
      const _component_v_chip = resolveComponent("v-chip");
      _push(ssrRenderComponent(_component_v_card, mergeProps({ elevation: "10" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_card_title, { class: "d-flex flex-wrap align-center pa-4" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="me-4" data-v-3f14a087${_scopeId2}><h5 class="text-h5" data-v-3f14a087${_scopeId2}>Resoconto Ordini</h5>`);
                  _push3(ssrRenderComponent(_component_v_card_subtitle, { class: "ps-0" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Ultimo aggiornamento: ${ssrInterpolate(lastUpdate.value)}`);
                      } else {
                        return [
                          createTextVNode("Ultimo aggiornamento: " + toDisplayString(lastUpdate.value), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                  _push3(ssrRenderComponent(_component_v_spacer, null, null, _parent3, _scopeId2));
                  _push3(`<div class="d-flex align-center flex-wrap gap-2" style="${ssrRenderStyle({ "width": "100%", "max-width": "600px" })}" data-v-3f14a087${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_v_select, {
                    modelValue: selectedMonth.value,
                    "onUpdate:modelValue": ($event) => selectedMonth.value = $event,
                    items: months.value,
                    label: "Mese",
                    "hide-details": "",
                    variant: "outlined",
                    density: "compact",
                    class: "flex-grow-1",
                    style: { "min-width": "140px" }
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_select, {
                    modelValue: selectedYear.value,
                    "onUpdate:modelValue": ($event) => selectedYear.value = $event,
                    items: years.value,
                    label: "Anno",
                    "hide-details": "",
                    variant: "outlined",
                    density: "compact",
                    class: "flex-grow-1",
                    style: { "min-width": "120px" }
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_btn, {
                    icon: "mdi-refresh",
                    onClick: refreshData,
                    title: "Aggiorna dati"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_menu, null, {
                    activator: withCtx(({ props }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_btn, mergeProps({ icon: "mdi-download" }, props, { title: "Esporta dati" }), null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_btn, mergeProps({ icon: "mdi-download" }, props, { title: "Esporta dati" }), null, 16)
                        ];
                      }
                    }),
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_list, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_list_item, { onClick: exportCSV }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_list_item_title, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_v_icon, { start: "" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`mdi-file-delimited`);
                                              } else {
                                                return [
                                                  createTextVNode("mdi-file-delimited")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(`Esporta CSV`);
                                        } else {
                                          return [
                                            createVNode(_component_v_icon, { start: "" }, {
                                              default: withCtx(() => [
                                                createTextVNode("mdi-file-delimited")
                                              ]),
                                              _: 1
                                            }),
                                            createTextVNode("Esporta CSV")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_list_item_title, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_icon, { start: "" }, {
                                            default: withCtx(() => [
                                              createTextVNode("mdi-file-delimited")
                                            ]),
                                            _: 1
                                          }),
                                          createTextVNode("Esporta CSV")
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_list_item, { onClick: exportPDF }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_list_item_title, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_v_icon, { start: "" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`mdi-file-pdf-box`);
                                              } else {
                                                return [
                                                  createTextVNode("mdi-file-pdf-box")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(`Esporta PDF`);
                                        } else {
                                          return [
                                            createVNode(_component_v_icon, { start: "" }, {
                                              default: withCtx(() => [
                                                createTextVNode("mdi-file-pdf-box")
                                              ]),
                                              _: 1
                                            }),
                                            createTextVNode("Esporta PDF")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_list_item_title, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_icon, { start: "" }, {
                                            default: withCtx(() => [
                                              createTextVNode("mdi-file-pdf-box")
                                            ]),
                                            _: 1
                                          }),
                                          createTextVNode("Esporta PDF")
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_list_item, { onClick: exportCSV }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_list_item_title, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_icon, { start: "" }, {
                                          default: withCtx(() => [
                                            createTextVNode("mdi-file-delimited")
                                          ]),
                                          _: 1
                                        }),
                                        createTextVNode("Esporta CSV")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_list_item, { onClick: exportPDF }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_list_item_title, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_icon, { start: "" }, {
                                          default: withCtx(() => [
                                            createTextVNode("mdi-file-pdf-box")
                                          ]),
                                          _: 1
                                        }),
                                        createTextVNode("Esporta PDF")
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
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_list, null, {
                            default: withCtx(() => [
                              createVNode(_component_v_list_item, { onClick: exportCSV }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_list_item_title, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_icon, { start: "" }, {
                                        default: withCtx(() => [
                                          createTextVNode("mdi-file-delimited")
                                        ]),
                                        _: 1
                                      }),
                                      createTextVNode("Esporta CSV")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_list_item, { onClick: exportPDF }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_list_item_title, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_icon, { start: "" }, {
                                        default: withCtx(() => [
                                          createTextVNode("mdi-file-pdf-box")
                                        ]),
                                        _: 1
                                      }),
                                      createTextVNode("Esporta PDF")
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
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "me-4" }, [
                      createVNode("h5", { class: "text-h5" }, "Resoconto Ordini"),
                      createVNode(_component_v_card_subtitle, { class: "ps-0" }, {
                        default: withCtx(() => [
                          createTextVNode("Ultimo aggiornamento: " + toDisplayString(lastUpdate.value), 1)
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode(_component_v_spacer),
                    createVNode("div", {
                      class: "d-flex align-center flex-wrap gap-2",
                      style: { "width": "100%", "max-width": "600px" }
                    }, [
                      createVNode(_component_v_select, {
                        modelValue: selectedMonth.value,
                        "onUpdate:modelValue": ($event) => selectedMonth.value = $event,
                        items: months.value,
                        label: "Mese",
                        "hide-details": "",
                        variant: "outlined",
                        density: "compact",
                        class: "flex-grow-1",
                        style: { "min-width": "140px" }
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                      createVNode(_component_v_select, {
                        modelValue: selectedYear.value,
                        "onUpdate:modelValue": ($event) => selectedYear.value = $event,
                        items: years.value,
                        label: "Anno",
                        "hide-details": "",
                        variant: "outlined",
                        density: "compact",
                        class: "flex-grow-1",
                        style: { "min-width": "120px" }
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                      createVNode(_component_v_btn, {
                        icon: "mdi-refresh",
                        onClick: refreshData,
                        title: "Aggiorna dati"
                      }),
                      createVNode(_component_v_menu, null, {
                        activator: withCtx(({ props }) => [
                          createVNode(_component_v_btn, mergeProps({ icon: "mdi-download" }, props, { title: "Esporta dati" }), null, 16)
                        ]),
                        default: withCtx(() => [
                          createVNode(_component_v_list, null, {
                            default: withCtx(() => [
                              createVNode(_component_v_list_item, { onClick: exportCSV }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_list_item_title, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_icon, { start: "" }, {
                                        default: withCtx(() => [
                                          createTextVNode("mdi-file-delimited")
                                        ]),
                                        _: 1
                                      }),
                                      createTextVNode("Esporta CSV")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_list_item, { onClick: exportPDF }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_list_item_title, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_icon, { start: "" }, {
                                        default: withCtx(() => [
                                          createTextVNode("mdi-file-pdf-box")
                                        ]),
                                        _: 1
                                      }),
                                      createTextVNode("Esporta PDF")
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
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_divider, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_text_field, {
              modelValue: search.value,
              "onUpdate:modelValue": ($event) => search.value = $event,
              label: "Cerca in tabella (cliente, email, stato...)",
              "prepend-inner-icon": "mdi-magnify",
              variant: "solo-filled",
              flat: "",
              "hide-details": "",
              "single-line": "",
              class: "pa-2"
            }, null, _parent2, _scopeId));
            if (errorMessage.value) {
              _push2(ssrRenderComponent(_component_v_alert, {
                type: "error",
                class: "ma-2",
                density: "compact",
                closable: ""
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(errorMessage.value)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(errorMessage.value), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(_component_v_data_table, {
              headers,
              items: orders.value,
              search: search.value,
              loading: isLoading.value,
              "item-value": "id",
              class: "elevation-0"
            }, {
              loading: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_skeleton_loader, { type: "table-row@5" }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_skeleton_loader, { type: "table-row@5" })
                  ];
                }
              }),
              "item.status": withCtx(({ value }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_chip, {
                    color: getStatusColor(value),
                    size: "small"
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(value)}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(value), 1)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_chip, {
                      color: getStatusColor(value),
                      size: "small"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(value), 1)
                      ]),
                      _: 2
                    }, 1032, ["color"])
                  ];
                }
              }),
              "item.total": withCtx(({ value }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(formatCurrency(value))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(formatCurrency(value)), 1)
                  ];
                }
              }),
              "item.paid": withCtx(({ value }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_icon, {
                    color: value ? "success" : "error"
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(value ? "mdi-check-circle" : "mdi-close-circle")}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(value ? "mdi-check-circle" : "mdi-close-circle"), 1)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_icon, {
                      color: value ? "success" : "error"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(value ? "mdi-check-circle" : "mdi-close-circle"), 1)
                      ]),
                      _: 2
                    }, 1032, ["color"])
                  ];
                }
              }),
              "item.actions": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_btn, {
                    icon: "mdi-eye",
                    variant: "text",
                    color: "primary",
                    size: "small",
                    onClick: ($event) => viewOrderDetails(item)
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_btn, {
                      icon: "mdi-eye",
                      variant: "text",
                      color: "primary",
                      size: "small",
                      onClick: ($event) => viewOrderDetails(item)
                    }, null, 8, ["onClick"])
                  ];
                }
              }),
              "no-data": withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="pa-4 text-center" data-v-3f14a087${_scopeId2}>Nessun ordine trovato per il periodo selezionato.</div>`);
                } else {
                  return [
                    createVNode("div", { class: "pa-4 text-center" }, "Nessun ordine trovato per il periodo selezionato.")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            if (selectedOrder.value) {
              _push2(ssrRenderComponent(_sfc_main$1, {
                order: selectedOrder.value,
                show: showModal.value,
                onClose: closeModal
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode(_component_v_card_title, { class: "d-flex flex-wrap align-center pa-4" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "me-4" }, [
                    createVNode("h5", { class: "text-h5" }, "Resoconto Ordini"),
                    createVNode(_component_v_card_subtitle, { class: "ps-0" }, {
                      default: withCtx(() => [
                        createTextVNode("Ultimo aggiornamento: " + toDisplayString(lastUpdate.value), 1)
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode(_component_v_spacer),
                  createVNode("div", {
                    class: "d-flex align-center flex-wrap gap-2",
                    style: { "width": "100%", "max-width": "600px" }
                  }, [
                    createVNode(_component_v_select, {
                      modelValue: selectedMonth.value,
                      "onUpdate:modelValue": ($event) => selectedMonth.value = $event,
                      items: months.value,
                      label: "Mese",
                      "hide-details": "",
                      variant: "outlined",
                      density: "compact",
                      class: "flex-grow-1",
                      style: { "min-width": "140px" }
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                    createVNode(_component_v_select, {
                      modelValue: selectedYear.value,
                      "onUpdate:modelValue": ($event) => selectedYear.value = $event,
                      items: years.value,
                      label: "Anno",
                      "hide-details": "",
                      variant: "outlined",
                      density: "compact",
                      class: "flex-grow-1",
                      style: { "min-width": "120px" }
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                    createVNode(_component_v_btn, {
                      icon: "mdi-refresh",
                      onClick: refreshData,
                      title: "Aggiorna dati"
                    }),
                    createVNode(_component_v_menu, null, {
                      activator: withCtx(({ props }) => [
                        createVNode(_component_v_btn, mergeProps({ icon: "mdi-download" }, props, { title: "Esporta dati" }), null, 16)
                      ]),
                      default: withCtx(() => [
                        createVNode(_component_v_list, null, {
                          default: withCtx(() => [
                            createVNode(_component_v_list_item, { onClick: exportCSV }, {
                              default: withCtx(() => [
                                createVNode(_component_v_list_item_title, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_icon, { start: "" }, {
                                      default: withCtx(() => [
                                        createTextVNode("mdi-file-delimited")
                                      ]),
                                      _: 1
                                    }),
                                    createTextVNode("Esporta CSV")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_list_item, { onClick: exportPDF }, {
                              default: withCtx(() => [
                                createVNode(_component_v_list_item_title, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_icon, { start: "" }, {
                                      default: withCtx(() => [
                                        createTextVNode("mdi-file-pdf-box")
                                      ]),
                                      _: 1
                                    }),
                                    createTextVNode("Esporta PDF")
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
                  ])
                ]),
                _: 1
              }),
              createVNode(_component_v_divider),
              createVNode(_component_v_text_field, {
                modelValue: search.value,
                "onUpdate:modelValue": ($event) => search.value = $event,
                label: "Cerca in tabella (cliente, email, stato...)",
                "prepend-inner-icon": "mdi-magnify",
                variant: "solo-filled",
                flat: "",
                "hide-details": "",
                "single-line": "",
                class: "pa-2"
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              errorMessage.value ? (openBlock(), createBlock(_component_v_alert, {
                key: 0,
                type: "error",
                class: "ma-2",
                density: "compact",
                closable: ""
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(errorMessage.value), 1)
                ]),
                _: 1
              })) : createCommentVNode("", true),
              createVNode(_component_v_data_table, {
                headers,
                items: orders.value,
                search: search.value,
                loading: isLoading.value,
                "item-value": "id",
                class: "elevation-0"
              }, {
                loading: withCtx(() => [
                  createVNode(_component_v_skeleton_loader, { type: "table-row@5" })
                ]),
                "item.status": withCtx(({ value }) => [
                  createVNode(_component_v_chip, {
                    color: getStatusColor(value),
                    size: "small"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(value), 1)
                    ]),
                    _: 2
                  }, 1032, ["color"])
                ]),
                "item.total": withCtx(({ value }) => [
                  createTextVNode(toDisplayString(formatCurrency(value)), 1)
                ]),
                "item.paid": withCtx(({ value }) => [
                  createVNode(_component_v_icon, {
                    color: value ? "success" : "error"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(value ? "mdi-check-circle" : "mdi-close-circle"), 1)
                    ]),
                    _: 2
                  }, 1032, ["color"])
                ]),
                "item.actions": withCtx(({ item }) => [
                  createVNode(_component_v_btn, {
                    icon: "mdi-eye",
                    variant: "text",
                    color: "primary",
                    size: "small",
                    onClick: ($event) => viewOrderDetails(item)
                  }, null, 8, ["onClick"])
                ]),
                "no-data": withCtx(() => [
                  createVNode("div", { class: "pa-4 text-center" }, "Nessun ordine trovato per il periodo selezionato.")
                ]),
                _: 1
              }, 8, ["items", "search", "loading"]),
              selectedOrder.value ? (openBlock(), createBlock(_sfc_main$1, {
                key: 1,
                order: selectedOrder.value,
                show: showModal.value,
                onClose: closeModal
              }, null, 8, ["order", "show"])) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dashboard/MonthlyOrders.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const MonthlyOrders = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-3f14a087"]]);

export { MonthlyOrders as M };
//# sourceMappingURL=MonthlyOrders.vue.mjs.map
