import { defineComponent, watch, resolveComponent, mergeProps, withCtx, createTextVNode, createVNode, toDisplayString, createBlock, openBlock, Fragment, renderList } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
const _sfc_main = /* @__PURE__ */ defineComponent({
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
export {
  _sfc_main as default
};
//# sourceMappingURL=OrderDetailsModal.vue2.mjs.map
