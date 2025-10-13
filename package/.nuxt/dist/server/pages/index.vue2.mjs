import { defineComponent, resolveComponent, mergeProps, withCtx, createVNode } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import MonthlyOrders from "../components/dashboard/MonthlyOrders.vue.mjs";
import RiderDeliveries from "../components/dashboard/RiderDeliveries.vue.mjs";
import PostalCodeDeliveries from "../components/dashboard/PostalCodeDeliveries.vue.mjs";
import PaymentTypes from "../components/dashboard/PaymentTypes.vue.mjs";
import B2BOrders from "../components/dashboard/B2BOrders.vue.mjs";
import EnvironmentalImpact from "../components/dashboard/EnvironmentalImpact.vue.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
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
                  _push3(`<h1 class="text-h4 font-weight-medium mb-5" data-v-3d262486${_scopeId2}>Dashboard Mercato Itinerante - Amministrativa</h1>`);
                  _push3(ssrRenderComponent(_component_v_row, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_col, {
                          cols: "12",
                          lg: "12"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(MonthlyOrders, null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(MonthlyOrders)
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
                              createVNode(MonthlyOrders)
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_row, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_col, {
                          cols: "12",
                          lg: "12"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(RiderDeliveries, null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(RiderDeliveries)
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
                              createVNode(RiderDeliveries)
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
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
                  _push3(ssrRenderComponent(_component_v_row, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_col, {
                          cols: "12",
                          lg: "12"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(PaymentTypes, null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(PaymentTypes)
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
                              createVNode(PaymentTypes)
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_row, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_col, {
                          cols: "12",
                          lg: "12"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(B2BOrders, null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(B2BOrders)
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
                              createVNode(B2BOrders)
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_row, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_col, {
                          cols: "12",
                          lg: "12"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(EnvironmentalImpact, null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(EnvironmentalImpact)
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
                              createVNode(EnvironmentalImpact)
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_row, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_col, { cols: "12" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_card, { class: "pa-5" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_card_text, { class: "text-center" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<h3 class="text-h5 mb-2" data-v-3d262486${_scopeId6}>Sezioni da implementare:</h3><ul class="text-left" data-v-3d262486${_scopeId6}><li data-v-3d262486${_scopeId6}>Dashboard Venditore</li></ul>`);
                                        } else {
                                          return [
                                            createVNode("h3", { class: "text-h5 mb-2" }, "Sezioni da implementare:"),
                                            createVNode("ul", { class: "text-left" }, [
                                              createVNode("li", null, "Dashboard Venditore")
                                            ])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_card_text, { class: "text-center" }, {
                                        default: withCtx(() => [
                                          createVNode("h3", { class: "text-h5 mb-2" }, "Sezioni da implementare:"),
                                          createVNode("ul", { class: "text-left" }, [
                                            createVNode("li", null, "Dashboard Venditore")
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
                                createVNode(_component_v_card, { class: "pa-5" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_card_text, { class: "text-center" }, {
                                      default: withCtx(() => [
                                        createVNode("h3", { class: "text-h5 mb-2" }, "Sezioni da implementare:"),
                                        createVNode("ul", { class: "text-left" }, [
                                          createVNode("li", null, "Dashboard Venditore")
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
                          createVNode(_component_v_col, { cols: "12" }, {
                            default: withCtx(() => [
                              createVNode(_component_v_card, { class: "pa-5" }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_card_text, { class: "text-center" }, {
                                    default: withCtx(() => [
                                      createVNode("h3", { class: "text-h5 mb-2" }, "Sezioni da implementare:"),
                                      createVNode("ul", { class: "text-left" }, [
                                        createVNode("li", null, "Dashboard Venditore")
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
                  _push3(ssrRenderComponent(_component_v_row, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_col, { class: "text-center mt-2" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<p class="text-muted" data-v-3d262486${_scopeId4}>Mercato Itinerante - Dashboard Amministrativa</p>`);
                            } else {
                              return [
                                createVNode("p", { class: "text-muted" }, "Mercato Itinerante - Dashboard Amministrativa")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_col, { class: "text-center mt-2" }, {
                            default: withCtx(() => [
                              createVNode("p", { class: "text-muted" }, "Mercato Itinerante - Dashboard Amministrativa")
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
                    createVNode("h1", { class: "text-h4 font-weight-medium mb-5" }, "Dashboard Mercato Itinerante - Amministrativa"),
                    createVNode(_component_v_row, null, {
                      default: withCtx(() => [
                        createVNode(_component_v_col, {
                          cols: "12",
                          lg: "12"
                        }, {
                          default: withCtx(() => [
                            createVNode(MonthlyOrders)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_row, null, {
                      default: withCtx(() => [
                        createVNode(_component_v_col, {
                          cols: "12",
                          lg: "12"
                        }, {
                          default: withCtx(() => [
                            createVNode(RiderDeliveries)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
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
                    }),
                    createVNode(_component_v_row, null, {
                      default: withCtx(() => [
                        createVNode(_component_v_col, {
                          cols: "12",
                          lg: "12"
                        }, {
                          default: withCtx(() => [
                            createVNode(PaymentTypes)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_row, null, {
                      default: withCtx(() => [
                        createVNode(_component_v_col, {
                          cols: "12",
                          lg: "12"
                        }, {
                          default: withCtx(() => [
                            createVNode(B2BOrders)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_row, null, {
                      default: withCtx(() => [
                        createVNode(_component_v_col, {
                          cols: "12",
                          lg: "12"
                        }, {
                          default: withCtx(() => [
                            createVNode(EnvironmentalImpact)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_row, null, {
                      default: withCtx(() => [
                        createVNode(_component_v_col, { cols: "12" }, {
                          default: withCtx(() => [
                            createVNode(_component_v_card, { class: "pa-5" }, {
                              default: withCtx(() => [
                                createVNode(_component_v_card_text, { class: "text-center" }, {
                                  default: withCtx(() => [
                                    createVNode("h3", { class: "text-h5 mb-2" }, "Sezioni da implementare:"),
                                    createVNode("ul", { class: "text-left" }, [
                                      createVNode("li", null, "Dashboard Venditore")
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
                    createVNode(_component_v_row, null, {
                      default: withCtx(() => [
                        createVNode(_component_v_col, { class: "text-center mt-2" }, {
                          default: withCtx(() => [
                            createVNode("p", { class: "text-muted" }, "Mercato Itinerante - Dashboard Amministrativa")
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
                  createVNode("h1", { class: "text-h4 font-weight-medium mb-5" }, "Dashboard Mercato Itinerante - Amministrativa"),
                  createVNode(_component_v_row, null, {
                    default: withCtx(() => [
                      createVNode(_component_v_col, {
                        cols: "12",
                        lg: "12"
                      }, {
                        default: withCtx(() => [
                          createVNode(MonthlyOrders)
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_row, null, {
                    default: withCtx(() => [
                      createVNode(_component_v_col, {
                        cols: "12",
                        lg: "12"
                      }, {
                        default: withCtx(() => [
                          createVNode(RiderDeliveries)
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
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
                  }),
                  createVNode(_component_v_row, null, {
                    default: withCtx(() => [
                      createVNode(_component_v_col, {
                        cols: "12",
                        lg: "12"
                      }, {
                        default: withCtx(() => [
                          createVNode(PaymentTypes)
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_row, null, {
                    default: withCtx(() => [
                      createVNode(_component_v_col, {
                        cols: "12",
                        lg: "12"
                      }, {
                        default: withCtx(() => [
                          createVNode(B2BOrders)
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_row, null, {
                    default: withCtx(() => [
                      createVNode(_component_v_col, {
                        cols: "12",
                        lg: "12"
                      }, {
                        default: withCtx(() => [
                          createVNode(EnvironmentalImpact)
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_row, null, {
                    default: withCtx(() => [
                      createVNode(_component_v_col, { cols: "12" }, {
                        default: withCtx(() => [
                          createVNode(_component_v_card, { class: "pa-5" }, {
                            default: withCtx(() => [
                              createVNode(_component_v_card_text, { class: "text-center" }, {
                                default: withCtx(() => [
                                  createVNode("h3", { class: "text-h5 mb-2" }, "Sezioni da implementare:"),
                                  createVNode("ul", { class: "text-left" }, [
                                    createVNode("li", null, "Dashboard Venditore")
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
                  createVNode(_component_v_row, null, {
                    default: withCtx(() => [
                      createVNode(_component_v_col, { class: "text-center mt-2" }, {
                        default: withCtx(() => [
                          createVNode("p", { class: "text-muted" }, "Mercato Itinerante - Dashboard Amministrativa")
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
//# sourceMappingURL=index.vue2.mjs.map
