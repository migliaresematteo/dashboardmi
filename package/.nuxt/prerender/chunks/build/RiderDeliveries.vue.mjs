import { defineComponent, ref, computed, resolveComponent, withCtx, createTextVNode, createVNode, mergeProps, toDisplayString, useSSRContext } from 'file://C:/Users/matte/OneDrive/Desktop/mi-dashboardamm/Modernize-nuxtjs-free/package/node_modules/vue/index.mjs';
import { ssrRenderComponent, ssrInterpolate } from 'file://C:/Users/matte/OneDrive/Desktop/mi-dashboardamm/Modernize-nuxtjs-free/package/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from './server.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "RiderDeliveries",
  __ssrInlineRender: true,
  setup(__props) {
    const isLoading = ref(true);
    const riders = ref([]);
    const search = ref("");
    const lastUpdate = ref("");
    const selectedMonth = ref("Ottobre");
    const months = ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"];
    const headers = [
      { title: "Rider", key: "name", align: "start" },
      { title: "Consegne", key: "monthlyDeliveries.count", align: "center" },
      { title: "Puntualità", key: "onTimePercentage", align: "center" },
      { title: "Rating", key: "rating", align: "center", class: "d-none d-md-table-cell" },
      { title: "Veicolo", key: "vehicle", class: "d-none d-lg-table-cell" },
      { title: "Zona", key: "zone", class: "d-none d-lg-table-cell" }
    ];
    const filteredData = computed(() => {
      return riders.value.map((rider) => {
        const monthData = rider.deliveries.find((d) => d.month === selectedMonth.value) || { month: selectedMonth.value, count: 0, onTime: 0, late: 0 };
        const onTimePercentage = monthData.count > 0 ? monthData.onTime / monthData.count * 100 : 0;
        return {
          ...rider,
          monthlyDeliveries: monthData,
          onTimePercentage
        };
      }).sort((a, b) => b.monthlyDeliveries.count - a.monthlyDeliveries.count);
    });
    const monthlyTotals = computed(() => {
      return filteredData.value.reduce((acc, rider) => {
        acc.totalDeliveries += rider.monthlyDeliveries.count;
        acc.onTime += rider.monthlyDeliveries.onTime;
        acc.late += rider.monthlyDeliveries.late;
        return acc;
      }, { totalDeliveries: 0, onTime: 0, late: 0 });
    });
    const overallOnTimePercentage = computed(() => {
      if (monthlyTotals.value.totalDeliveries === 0) return 0;
      return monthlyTotals.value.onTime / monthlyTotals.value.totalDeliveries * 100;
    });
    const getPunctualityColor = (percentage) => {
      if (percentage >= 95) return "success";
      if (percentage >= 90) return "primary";
      return "warning";
    };
    const getProgressBarColor = (percentage) => {
      if (percentage > 90) return "success";
      if (percentage > 75) return "warning";
      return "error";
    };
    const exportToCSV = () => {
    };
    const exportToPDF = () => alert("Funzionalità PDF in sviluppo");
    const refreshData = () => {
      lastUpdate.value = (/* @__PURE__ */ new Date()).toLocaleString("it-IT");
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_card = resolveComponent("v-card");
      const _component_v_card_item = resolveComponent("v-card-item");
      const _component_v_spacer = resolveComponent("v-spacer");
      const _component_v_select = resolveComponent("v-select");
      const _component_v_btn = resolveComponent("v-btn");
      const _component_v_menu = resolveComponent("v-menu");
      const _component_v_list = resolveComponent("v-list");
      const _component_v_list_item = resolveComponent("v-list-item");
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      const _component_v_progress_linear = resolveComponent("v-progress-linear");
      const _component_v_divider = resolveComponent("v-divider");
      const _component_v_text_field = resolveComponent("v-text-field");
      const _component_v_data_table = resolveComponent("v-data-table");
      const _component_v_skeleton_loader = resolveComponent("v-skeleton-loader");
      const _component_v_avatar = resolveComponent("v-avatar");
      const _component_v_chip = resolveComponent("v-chip");
      const _component_v_rating = resolveComponent("v-rating");
      _push(ssrRenderComponent(_component_v_card, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_card_item, { class: "pa-4 pa-md-6" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="d-flex flex-wrap align-center gap-4" data-v-2b9807c9${_scopeId2}><div data-v-2b9807c9${_scopeId2}><h2 class="text-h5" data-v-2b9807c9${_scopeId2}>Performance Rider</h2><p class="text-subtitle-1 text-medium-emphasis" data-v-2b9807c9${_scopeId2}>Statistiche mensili delle consegne</p></div>`);
                  _push3(ssrRenderComponent(_component_v_spacer, null, null, _parent3, _scopeId2));
                  _push3(`<div class="d-flex flex-wrap align-center gap-2" data-v-2b9807c9${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_v_select, {
                    modelValue: selectedMonth.value,
                    "onUpdate:modelValue": ($event) => selectedMonth.value = $event,
                    items: months,
                    label: "Mese",
                    density: "compact",
                    variant: "outlined",
                    "hide-details": "",
                    style: { "min-width": "140px" }
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_btn, {
                    icon: "mdi-refresh",
                    onClick: refreshData,
                    title: "Aggiorna"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_menu, null, {
                    activator: withCtx(({ props }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_btn, mergeProps({ icon: "mdi-export-variant" }, props, { title: "Esporta" }), null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_btn, mergeProps({ icon: "mdi-export-variant" }, props, { title: "Esporta" }), null, 16)
                        ];
                      }
                    }),
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_list, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_list_item, {
                                onClick: exportToCSV,
                                "prepend-icon": "mdi-file-delimited"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Esporta CSV`);
                                  } else {
                                    return [
                                      createTextVNode("Esporta CSV")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_list_item, {
                                onClick: exportToPDF,
                                "prepend-icon": "mdi-file-pdf-box"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Esporta PDF`);
                                  } else {
                                    return [
                                      createTextVNode("Esporta PDF")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_list_item, {
                                  onClick: exportToCSV,
                                  "prepend-icon": "mdi-file-delimited"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Esporta CSV")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_list_item, {
                                  onClick: exportToPDF,
                                  "prepend-icon": "mdi-file-pdf-box"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Esporta PDF")
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
                              createVNode(_component_v_list_item, {
                                onClick: exportToCSV,
                                "prepend-icon": "mdi-file-delimited"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Esporta CSV")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_list_item, {
                                onClick: exportToPDF,
                                "prepend-icon": "mdi-file-pdf-box"
                              }, {
                                default: withCtx(() => [
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
                  }, _parent3, _scopeId2));
                  _push3(`</div></div>`);
                  _push3(ssrRenderComponent(_component_v_row, { class: "mt-4" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_col, {
                          cols: "12",
                          sm: "4"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_card, {
                                variant: "tonal",
                                class: "d-flex flex-column pa-4 text-center h-100"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_spacer, null, null, _parent6, _scopeId5));
                                    _push6(`<div class="text-h4 font-weight-bold" data-v-2b9807c9${_scopeId5}>${ssrInterpolate(monthlyTotals.value.totalDeliveries)}</div><div class="text-body-1" data-v-2b9807c9${_scopeId5}>Consegne Totali</div>`);
                                    _push6(ssrRenderComponent(_component_v_spacer, null, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_spacer),
                                      createVNode("div", { class: "text-h4 font-weight-bold" }, toDisplayString(monthlyTotals.value.totalDeliveries), 1),
                                      createVNode("div", { class: "text-body-1" }, "Consegne Totali"),
                                      createVNode(_component_v_spacer)
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_card, {
                                  variant: "tonal",
                                  class: "d-flex flex-column pa-4 text-center h-100"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_spacer),
                                    createVNode("div", { class: "text-h4 font-weight-bold" }, toDisplayString(monthlyTotals.value.totalDeliveries), 1),
                                    createVNode("div", { class: "text-body-1" }, "Consegne Totali"),
                                    createVNode(_component_v_spacer)
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_col, {
                          cols: "12",
                          sm: "4"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_card, {
                                variant: "tonal",
                                color: "success",
                                class: "d-flex flex-column pa-4 text-center h-100"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_spacer, null, null, _parent6, _scopeId5));
                                    _push6(`<div class="text-h4 font-weight-bold" data-v-2b9807c9${_scopeId5}>${ssrInterpolate(monthlyTotals.value.onTime)}</div><div class="text-body-1" data-v-2b9807c9${_scopeId5}>Puntuali</div>`);
                                    _push6(ssrRenderComponent(_component_v_spacer, null, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_spacer),
                                      createVNode("div", { class: "text-h4 font-weight-bold" }, toDisplayString(monthlyTotals.value.onTime), 1),
                                      createVNode("div", { class: "text-body-1" }, "Puntuali"),
                                      createVNode(_component_v_spacer)
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_card, {
                                  variant: "tonal",
                                  color: "success",
                                  class: "d-flex flex-column pa-4 text-center h-100"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_spacer),
                                    createVNode("div", { class: "text-h4 font-weight-bold" }, toDisplayString(monthlyTotals.value.onTime), 1),
                                    createVNode("div", { class: "text-body-1" }, "Puntuali"),
                                    createVNode(_component_v_spacer)
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_col, {
                          cols: "12",
                          sm: "4"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_card, {
                                variant: "tonal",
                                class: "d-flex flex-column pa-4 text-center h-100"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<div class="text-h4 font-weight-bold" data-v-2b9807c9${_scopeId5}>${ssrInterpolate(overallOnTimePercentage.value.toFixed(1))}%</div><div class="text-body-1 mb-2" data-v-2b9807c9${_scopeId5}>Puntualità Globale</div>`);
                                    _push6(ssrRenderComponent(_component_v_spacer, null, null, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_v_progress_linear, {
                                      "model-value": overallOnTimePercentage.value,
                                      color: getProgressBarColor(overallOnTimePercentage.value),
                                      height: "8",
                                      rounded: "",
                                      class: "mt-auto"
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode("div", { class: "text-h4 font-weight-bold" }, toDisplayString(overallOnTimePercentage.value.toFixed(1)) + "%", 1),
                                      createVNode("div", { class: "text-body-1 mb-2" }, "Puntualità Globale"),
                                      createVNode(_component_v_spacer),
                                      createVNode(_component_v_progress_linear, {
                                        "model-value": overallOnTimePercentage.value,
                                        color: getProgressBarColor(overallOnTimePercentage.value),
                                        height: "8",
                                        rounded: "",
                                        class: "mt-auto"
                                      }, null, 8, ["model-value", "color"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_card, {
                                  variant: "tonal",
                                  class: "d-flex flex-column pa-4 text-center h-100"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "text-h4 font-weight-bold" }, toDisplayString(overallOnTimePercentage.value.toFixed(1)) + "%", 1),
                                    createVNode("div", { class: "text-body-1 mb-2" }, "Puntualità Globale"),
                                    createVNode(_component_v_spacer),
                                    createVNode(_component_v_progress_linear, {
                                      "model-value": overallOnTimePercentage.value,
                                      color: getProgressBarColor(overallOnTimePercentage.value),
                                      height: "8",
                                      rounded: "",
                                      class: "mt-auto"
                                    }, null, 8, ["model-value", "color"])
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
                          createVNode(_component_v_col, {
                            cols: "12",
                            sm: "4"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_card, {
                                variant: "tonal",
                                class: "d-flex flex-column pa-4 text-center h-100"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_spacer),
                                  createVNode("div", { class: "text-h4 font-weight-bold" }, toDisplayString(monthlyTotals.value.totalDeliveries), 1),
                                  createVNode("div", { class: "text-body-1" }, "Consegne Totali"),
                                  createVNode(_component_v_spacer)
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, {
                            cols: "12",
                            sm: "4"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_card, {
                                variant: "tonal",
                                color: "success",
                                class: "d-flex flex-column pa-4 text-center h-100"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_spacer),
                                  createVNode("div", { class: "text-h4 font-weight-bold" }, toDisplayString(monthlyTotals.value.onTime), 1),
                                  createVNode("div", { class: "text-body-1" }, "Puntuali"),
                                  createVNode(_component_v_spacer)
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, {
                            cols: "12",
                            sm: "4"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_card, {
                                variant: "tonal",
                                class: "d-flex flex-column pa-4 text-center h-100"
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "text-h4 font-weight-bold" }, toDisplayString(overallOnTimePercentage.value.toFixed(1)) + "%", 1),
                                  createVNode("div", { class: "text-body-1 mb-2" }, "Puntualità Globale"),
                                  createVNode(_component_v_spacer),
                                  createVNode(_component_v_progress_linear, {
                                    "model-value": overallOnTimePercentage.value,
                                    color: getProgressBarColor(overallOnTimePercentage.value),
                                    height: "8",
                                    rounded: "",
                                    class: "mt-auto"
                                  }, null, 8, ["model-value", "color"])
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
                    createVNode("div", { class: "d-flex flex-wrap align-center gap-4" }, [
                      createVNode("div", null, [
                        createVNode("h2", { class: "text-h5" }, "Performance Rider"),
                        createVNode("p", { class: "text-subtitle-1 text-medium-emphasis" }, "Statistiche mensili delle consegne")
                      ]),
                      createVNode(_component_v_spacer),
                      createVNode("div", { class: "d-flex flex-wrap align-center gap-2" }, [
                        createVNode(_component_v_select, {
                          modelValue: selectedMonth.value,
                          "onUpdate:modelValue": ($event) => selectedMonth.value = $event,
                          items: months,
                          label: "Mese",
                          density: "compact",
                          variant: "outlined",
                          "hide-details": "",
                          style: { "min-width": "140px" }
                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                        createVNode(_component_v_btn, {
                          icon: "mdi-refresh",
                          onClick: refreshData,
                          title: "Aggiorna"
                        }),
                        createVNode(_component_v_menu, null, {
                          activator: withCtx(({ props }) => [
                            createVNode(_component_v_btn, mergeProps({ icon: "mdi-export-variant" }, props, { title: "Esporta" }), null, 16)
                          ]),
                          default: withCtx(() => [
                            createVNode(_component_v_list, null, {
                              default: withCtx(() => [
                                createVNode(_component_v_list_item, {
                                  onClick: exportToCSV,
                                  "prepend-icon": "mdi-file-delimited"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Esporta CSV")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_list_item, {
                                  onClick: exportToPDF,
                                  "prepend-icon": "mdi-file-pdf-box"
                                }, {
                                  default: withCtx(() => [
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
                      ])
                    ]),
                    createVNode(_component_v_row, { class: "mt-4" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_col, {
                          cols: "12",
                          sm: "4"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_card, {
                              variant: "tonal",
                              class: "d-flex flex-column pa-4 text-center h-100"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_spacer),
                                createVNode("div", { class: "text-h4 font-weight-bold" }, toDisplayString(monthlyTotals.value.totalDeliveries), 1),
                                createVNode("div", { class: "text-body-1" }, "Consegne Totali"),
                                createVNode(_component_v_spacer)
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_col, {
                          cols: "12",
                          sm: "4"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_card, {
                              variant: "tonal",
                              color: "success",
                              class: "d-flex flex-column pa-4 text-center h-100"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_spacer),
                                createVNode("div", { class: "text-h4 font-weight-bold" }, toDisplayString(monthlyTotals.value.onTime), 1),
                                createVNode("div", { class: "text-body-1" }, "Puntuali"),
                                createVNode(_component_v_spacer)
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_col, {
                          cols: "12",
                          sm: "4"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_card, {
                              variant: "tonal",
                              class: "d-flex flex-column pa-4 text-center h-100"
                            }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "text-h4 font-weight-bold" }, toDisplayString(overallOnTimePercentage.value.toFixed(1)) + "%", 1),
                                createVNode("div", { class: "text-body-1 mb-2" }, "Puntualità Globale"),
                                createVNode(_component_v_spacer),
                                createVNode(_component_v_progress_linear, {
                                  "model-value": overallOnTimePercentage.value,
                                  color: getProgressBarColor(overallOnTimePercentage.value),
                                  height: "8",
                                  rounded: "",
                                  class: "mt-auto"
                                }, null, 8, ["model-value", "color"])
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
            _push2(ssrRenderComponent(_component_v_divider, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_text_field, {
              modelValue: search.value,
              "onUpdate:modelValue": ($event) => search.value = $event,
              label: "Cerca rider per nome, veicolo o zona...",
              "prepend-inner-icon": "mdi-magnify",
              variant: "solo-filled",
              flat: "",
              "hide-details": "",
              "single-line": ""
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_data_table, {
              headers,
              items: filteredData.value,
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
              "item.name": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="d-flex align-center pa-2" data-v-2b9807c9${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_v_avatar, {
                    image: item.avatar,
                    size: "40",
                    class: "me-3"
                  }, null, _parent3, _scopeId2));
                  _push3(`<div data-v-2b9807c9${_scopeId2}><div class="font-weight-bold" data-v-2b9807c9${_scopeId2}>${ssrInterpolate(item.name)}</div><div class="text-caption" data-v-2b9807c9${_scopeId2}>${ssrInterpolate(item.id)}</div></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "d-flex align-center pa-2" }, [
                      createVNode(_component_v_avatar, {
                        image: item.avatar,
                        size: "40",
                        class: "me-3"
                      }, null, 8, ["image"]),
                      createVNode("div", null, [
                        createVNode("div", { class: "font-weight-bold" }, toDisplayString(item.name), 1),
                        createVNode("div", { class: "text-caption" }, toDisplayString(item.id), 1)
                      ])
                    ])
                  ];
                }
              }),
              "item.onTimePercentage": withCtx(({ value }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_chip, {
                    color: getPunctualityColor(value),
                    size: "small",
                    class: "font-weight-bold"
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(value.toFixed(1))}% `);
                      } else {
                        return [
                          createTextVNode(toDisplayString(value.toFixed(1)) + "% ", 1)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_chip, {
                      color: getPunctualityColor(value),
                      size: "small",
                      class: "font-weight-bold"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(value.toFixed(1)) + "% ", 1)
                      ]),
                      _: 2
                    }, 1032, ["color"])
                  ];
                }
              }),
              "item.rating": withCtx(({ value }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_rating, {
                    "model-value": value,
                    color: "amber",
                    density: "compact",
                    size: "small",
                    readonly: "",
                    "half-increments": ""
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_rating, {
                      "model-value": value,
                      color: "amber",
                      density: "compact",
                      size: "small",
                      readonly: "",
                      "half-increments": ""
                    }, null, 8, ["model-value"])
                  ];
                }
              }),
              "no-data": withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="pa-4 text-center" data-v-2b9807c9${_scopeId2}>Nessun dato disponibile per il mese selezionato.</div>`);
                } else {
                  return [
                    createVNode("div", { class: "pa-4 text-center" }, "Nessun dato disponibile per il mese selezionato.")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_card_item, { class: "pa-4 pa-md-6" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "d-flex flex-wrap align-center gap-4" }, [
                    createVNode("div", null, [
                      createVNode("h2", { class: "text-h5" }, "Performance Rider"),
                      createVNode("p", { class: "text-subtitle-1 text-medium-emphasis" }, "Statistiche mensili delle consegne")
                    ]),
                    createVNode(_component_v_spacer),
                    createVNode("div", { class: "d-flex flex-wrap align-center gap-2" }, [
                      createVNode(_component_v_select, {
                        modelValue: selectedMonth.value,
                        "onUpdate:modelValue": ($event) => selectedMonth.value = $event,
                        items: months,
                        label: "Mese",
                        density: "compact",
                        variant: "outlined",
                        "hide-details": "",
                        style: { "min-width": "140px" }
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode(_component_v_btn, {
                        icon: "mdi-refresh",
                        onClick: refreshData,
                        title: "Aggiorna"
                      }),
                      createVNode(_component_v_menu, null, {
                        activator: withCtx(({ props }) => [
                          createVNode(_component_v_btn, mergeProps({ icon: "mdi-export-variant" }, props, { title: "Esporta" }), null, 16)
                        ]),
                        default: withCtx(() => [
                          createVNode(_component_v_list, null, {
                            default: withCtx(() => [
                              createVNode(_component_v_list_item, {
                                onClick: exportToCSV,
                                "prepend-icon": "mdi-file-delimited"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Esporta CSV")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_list_item, {
                                onClick: exportToPDF,
                                "prepend-icon": "mdi-file-pdf-box"
                              }, {
                                default: withCtx(() => [
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
                    ])
                  ]),
                  createVNode(_component_v_row, { class: "mt-4" }, {
                    default: withCtx(() => [
                      createVNode(_component_v_col, {
                        cols: "12",
                        sm: "4"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_card, {
                            variant: "tonal",
                            class: "d-flex flex-column pa-4 text-center h-100"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_spacer),
                              createVNode("div", { class: "text-h4 font-weight-bold" }, toDisplayString(monthlyTotals.value.totalDeliveries), 1),
                              createVNode("div", { class: "text-body-1" }, "Consegne Totali"),
                              createVNode(_component_v_spacer)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_col, {
                        cols: "12",
                        sm: "4"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_card, {
                            variant: "tonal",
                            color: "success",
                            class: "d-flex flex-column pa-4 text-center h-100"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_spacer),
                              createVNode("div", { class: "text-h4 font-weight-bold" }, toDisplayString(monthlyTotals.value.onTime), 1),
                              createVNode("div", { class: "text-body-1" }, "Puntuali"),
                              createVNode(_component_v_spacer)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_col, {
                        cols: "12",
                        sm: "4"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_card, {
                            variant: "tonal",
                            class: "d-flex flex-column pa-4 text-center h-100"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "text-h4 font-weight-bold" }, toDisplayString(overallOnTimePercentage.value.toFixed(1)) + "%", 1),
                              createVNode("div", { class: "text-body-1 mb-2" }, "Puntualità Globale"),
                              createVNode(_component_v_spacer),
                              createVNode(_component_v_progress_linear, {
                                "model-value": overallOnTimePercentage.value,
                                color: getProgressBarColor(overallOnTimePercentage.value),
                                height: "8",
                                rounded: "",
                                class: "mt-auto"
                              }, null, 8, ["model-value", "color"])
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
              createVNode(_component_v_divider),
              createVNode(_component_v_text_field, {
                modelValue: search.value,
                "onUpdate:modelValue": ($event) => search.value = $event,
                label: "Cerca rider per nome, veicolo o zona...",
                "prepend-inner-icon": "mdi-magnify",
                variant: "solo-filled",
                flat: "",
                "hide-details": "",
                "single-line": ""
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode(_component_v_data_table, {
                headers,
                items: filteredData.value,
                search: search.value,
                loading: isLoading.value,
                "item-value": "id",
                class: "elevation-0"
              }, {
                loading: withCtx(() => [
                  createVNode(_component_v_skeleton_loader, { type: "table-row@5" })
                ]),
                "item.name": withCtx(({ item }) => [
                  createVNode("div", { class: "d-flex align-center pa-2" }, [
                    createVNode(_component_v_avatar, {
                      image: item.avatar,
                      size: "40",
                      class: "me-3"
                    }, null, 8, ["image"]),
                    createVNode("div", null, [
                      createVNode("div", { class: "font-weight-bold" }, toDisplayString(item.name), 1),
                      createVNode("div", { class: "text-caption" }, toDisplayString(item.id), 1)
                    ])
                  ])
                ]),
                "item.onTimePercentage": withCtx(({ value }) => [
                  createVNode(_component_v_chip, {
                    color: getPunctualityColor(value),
                    size: "small",
                    class: "font-weight-bold"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(value.toFixed(1)) + "% ", 1)
                    ]),
                    _: 2
                  }, 1032, ["color"])
                ]),
                "item.rating": withCtx(({ value }) => [
                  createVNode(_component_v_rating, {
                    "model-value": value,
                    color: "amber",
                    density: "compact",
                    size: "small",
                    readonly: "",
                    "half-increments": ""
                  }, null, 8, ["model-value"])
                ]),
                "no-data": withCtx(() => [
                  createVNode("div", { class: "pa-4 text-center" }, "Nessun dato disponibile per il mese selezionato.")
                ]),
                _: 1
              }, 8, ["items", "search", "loading"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dashboard/RiderDeliveries.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const RiderDeliveries = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-2b9807c9"]]);

export { RiderDeliveries as R };
//# sourceMappingURL=RiderDeliveries.vue.mjs.map
