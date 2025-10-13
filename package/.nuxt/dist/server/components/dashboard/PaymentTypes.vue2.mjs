import { defineComponent, ref, computed, resolveComponent, withCtx, createTextVNode, createVNode, mergeProps, toDisplayString } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderStyle } from "vue/server-renderer";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "PaymentTypes",
  __ssrInlineRender: true,
  setup(__props) {
    const isLoading = ref(true);
    const search = ref("");
    const paymentData = ref([]);
    const selectedDate = ref(null);
    const lastUpdate = ref("");
    const headers = [
      { title: "Tipo Pagamento", key: "type", align: "start" },
      { title: "N. Transazioni", key: "count", align: "center" },
      { title: "% Transazioni", key: "countPercentage", align: "start", sortable: false },
      { title: "Importo Totale", key: "amount", align: "end" },
      { title: "% Importo", key: "amountPercentage", align: "start", sortable: false }
    ];
    const availableDates = computed(() => {
      return paymentData.value.map((day) => {
        const date = new Date(day.date);
        return {
          value: day.date,
          title: date.toLocaleDateString("it-IT", { weekday: "long", day: "numeric", month: "long" })
        };
      }).reverse();
    });
    const dailyTotals = computed(() => {
      const dayData = paymentData.value.find((day) => day.date === selectedDate.value);
      if (!dayData) return { totalCount: 0, totalAmount: 0 };
      return dayData.payments.reduce((acc, payment) => {
        acc.totalCount += payment.count;
        acc.totalAmount += payment.amount;
        return acc;
      }, { totalCount: 0, totalAmount: 0 });
    });
    const tableData = computed(() => {
      const dayData = paymentData.value.find((day) => day.date === selectedDate.value);
      if (!dayData) return [];
      const { totalCount, totalAmount } = dailyTotals.value;
      if (totalCount === 0 || totalAmount === 0) return [];
      return dayData.payments.map((payment) => ({
        ...payment,
        countPercentage: payment.count / totalCount * 100,
        amountPercentage: payment.amount / totalAmount * 100
      })).sort((a, b) => b.amount - a.amount);
    });
    const getPaymentIcon = (type) => {
      const icons = {
        "Carta di Credito": "mdi-credit-card-outline",
        "PayPal": "mdi-paypal",
        "Bonifico": "mdi-bank-outline",
        "Contanti": "mdi-cash-multiple",
        "Satispay": "mdi-cellphone"
      };
      return icons[type] || "mdi-help-circle-outline";
    };
    const formatCurrency = (value) => {
      return new Intl.NumberFormat("it-IT", { style: "currency", currency: "EUR" }).format(value);
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
      const _component_v_menu = resolveComponent("v-menu");
      const _component_v_btn = resolveComponent("v-btn");
      const _component_v_list = resolveComponent("v-list");
      const _component_v_list_item = resolveComponent("v-list-item");
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      const _component_v_divider = resolveComponent("v-divider");
      const _component_v_text_field = resolveComponent("v-text-field");
      const _component_v_data_table = resolveComponent("v-data-table");
      const _component_v_skeleton_loader = resolveComponent("v-skeleton-loader");
      const _component_v_icon = resolveComponent("v-icon");
      const _component_v_progress_linear = resolveComponent("v-progress-linear");
      _push(ssrRenderComponent(_component_v_card, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_card_item, { class: "pa-4 pa-md-6" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="d-flex flex-wrap align-center gap-4" data-v-e2547530${_scopeId2}><div data-v-e2547530${_scopeId2}><h2 class="text-h5" data-v-e2547530${_scopeId2}>Statistiche Metodi di Pagamento</h2><p class="text-subtitle-1 text-medium-emphasis" data-v-e2547530${_scopeId2}>Dati aggregati per giorno</p></div>`);
                  _push3(ssrRenderComponent(_component_v_spacer, null, null, _parent3, _scopeId2));
                  _push3(`<div class="d-flex flex-wrap align-center gap-2" data-v-e2547530${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_v_select, {
                    modelValue: selectedDate.value,
                    "onUpdate:modelValue": ($event) => selectedDate.value = $event,
                    items: availableDates.value,
                    label: "Seleziona Giorno",
                    density: "compact",
                    variant: "outlined",
                    "hide-details": "",
                    style: { "min-width": "240px" }
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_menu, null, {
                    activator: withCtx(({ props }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_btn, mergeProps({ icon: "mdi-dots-vertical" }, props, { title: "Altre azioni" }), null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_btn, mergeProps({ icon: "mdi-dots-vertical" }, props, { title: "Altre azioni" }), null, 16)
                        ];
                      }
                    }),
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_list, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_list_item, {
                                onClick: refreshData,
                                "prepend-icon": "mdi-refresh"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Aggiorna`);
                                  } else {
                                    return [
                                      createTextVNode("Aggiorna")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
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
                                  onClick: refreshData,
                                  "prepend-icon": "mdi-refresh"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Aggiorna")
                                  ]),
                                  _: 1
                                }),
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
                                onClick: refreshData,
                                "prepend-icon": "mdi-refresh"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Aggiorna")
                                ]),
                                _: 1
                              }),
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
                          sm: "6"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_card, {
                                variant: "tonal",
                                class: "pa-4 text-center h-100"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<div class="text-overline" data-v-e2547530${_scopeId5}>Totale Transazioni</div><div class="text-h3 font-weight-bold" data-v-e2547530${_scopeId5}>${ssrInterpolate(dailyTotals.value.totalCount)}</div>`);
                                  } else {
                                    return [
                                      createVNode("div", { class: "text-overline" }, "Totale Transazioni"),
                                      createVNode("div", { class: "text-h3 font-weight-bold" }, toDisplayString(dailyTotals.value.totalCount), 1)
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_card, {
                                  variant: "tonal",
                                  class: "pa-4 text-center h-100"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "text-overline" }, "Totale Transazioni"),
                                    createVNode("div", { class: "text-h3 font-weight-bold" }, toDisplayString(dailyTotals.value.totalCount), 1)
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
                          sm: "6"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_card, {
                                variant: "tonal",
                                color: "success",
                                class: "pa-4 text-center h-100"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<div class="text-overline" data-v-e2547530${_scopeId5}>Importo Totale Incassato</div><div class="text-h3 font-weight-bold" data-v-e2547530${_scopeId5}>${ssrInterpolate(formatCurrency(dailyTotals.value.totalAmount))}</div>`);
                                  } else {
                                    return [
                                      createVNode("div", { class: "text-overline" }, "Importo Totale Incassato"),
                                      createVNode("div", { class: "text-h3 font-weight-bold" }, toDisplayString(formatCurrency(dailyTotals.value.totalAmount)), 1)
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
                                  class: "pa-4 text-center h-100"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "text-overline" }, "Importo Totale Incassato"),
                                    createVNode("div", { class: "text-h3 font-weight-bold" }, toDisplayString(formatCurrency(dailyTotals.value.totalAmount)), 1)
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
                            sm: "6"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_card, {
                                variant: "tonal",
                                class: "pa-4 text-center h-100"
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "text-overline" }, "Totale Transazioni"),
                                  createVNode("div", { class: "text-h3 font-weight-bold" }, toDisplayString(dailyTotals.value.totalCount), 1)
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, {
                            cols: "12",
                            sm: "6"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_card, {
                                variant: "tonal",
                                color: "success",
                                class: "pa-4 text-center h-100"
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "text-overline" }, "Importo Totale Incassato"),
                                  createVNode("div", { class: "text-h3 font-weight-bold" }, toDisplayString(formatCurrency(dailyTotals.value.totalAmount)), 1)
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
                        createVNode("h2", { class: "text-h5" }, "Statistiche Metodi di Pagamento"),
                        createVNode("p", { class: "text-subtitle-1 text-medium-emphasis" }, "Dati aggregati per giorno")
                      ]),
                      createVNode(_component_v_spacer),
                      createVNode("div", { class: "d-flex flex-wrap align-center gap-2" }, [
                        createVNode(_component_v_select, {
                          modelValue: selectedDate.value,
                          "onUpdate:modelValue": ($event) => selectedDate.value = $event,
                          items: availableDates.value,
                          label: "Seleziona Giorno",
                          density: "compact",
                          variant: "outlined",
                          "hide-details": "",
                          style: { "min-width": "240px" }
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                        createVNode(_component_v_menu, null, {
                          activator: withCtx(({ props }) => [
                            createVNode(_component_v_btn, mergeProps({ icon: "mdi-dots-vertical" }, props, { title: "Altre azioni" }), null, 16)
                          ]),
                          default: withCtx(() => [
                            createVNode(_component_v_list, null, {
                              default: withCtx(() => [
                                createVNode(_component_v_list_item, {
                                  onClick: refreshData,
                                  "prepend-icon": "mdi-refresh"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Aggiorna")
                                  ]),
                                  _: 1
                                }),
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
                          sm: "6"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_card, {
                              variant: "tonal",
                              class: "pa-4 text-center h-100"
                            }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "text-overline" }, "Totale Transazioni"),
                                createVNode("div", { class: "text-h3 font-weight-bold" }, toDisplayString(dailyTotals.value.totalCount), 1)
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_col, {
                          cols: "12",
                          sm: "6"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_card, {
                              variant: "tonal",
                              color: "success",
                              class: "pa-4 text-center h-100"
                            }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "text-overline" }, "Importo Totale Incassato"),
                                createVNode("div", { class: "text-h3 font-weight-bold" }, toDisplayString(formatCurrency(dailyTotals.value.totalAmount)), 1)
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
              label: "Cerca metodo di pagamento...",
              "prepend-inner-icon": "mdi-magnify",
              variant: "solo-filled",
              flat: "",
              "hide-details": "",
              "single-line": ""
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_data_table, {
              headers,
              items: tableData.value,
              search: search.value,
              loading: isLoading.value,
              "item-value": "type",
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
              "item.type": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="d-flex align-center font-weight-bold py-2" data-v-e2547530${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_v_icon, {
                    icon: getPaymentIcon(item.type),
                    class: "me-3",
                    size: "24"
                  }, null, _parent3, _scopeId2));
                  _push3(`<span data-v-e2547530${_scopeId2}>${ssrInterpolate(item.type)}</span></div>`);
                } else {
                  return [
                    createVNode("div", { class: "d-flex align-center font-weight-bold py-2" }, [
                      createVNode(_component_v_icon, {
                        icon: getPaymentIcon(item.type),
                        class: "me-3",
                        size: "24"
                      }, null, 8, ["icon"]),
                      createVNode("span", null, toDisplayString(item.type), 1)
                    ])
                  ];
                }
              }),
              "item.countPercentage": withCtx(({ value }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div style="${ssrRenderStyle({ "min-width": "120px" })}" data-v-e2547530${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_v_progress_linear, {
                    "model-value": value,
                    color: "primary",
                    height: "8",
                    rounded: ""
                  }, null, _parent3, _scopeId2));
                  _push3(`<span class="text-caption text-medium-emphasis" data-v-e2547530${_scopeId2}>${ssrInterpolate(value.toFixed(1))}%</span></div>`);
                } else {
                  return [
                    createVNode("div", { style: { "min-width": "120px" } }, [
                      createVNode(_component_v_progress_linear, {
                        "model-value": value,
                        color: "primary",
                        height: "8",
                        rounded: ""
                      }, null, 8, ["model-value"]),
                      createVNode("span", { class: "text-caption text-medium-emphasis" }, toDisplayString(value.toFixed(1)) + "%", 1)
                    ])
                  ];
                }
              }),
              "item.amount": withCtx(({ value }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="font-weight-bold" data-v-e2547530${_scopeId2}>${ssrInterpolate(formatCurrency(value))}</span>`);
                } else {
                  return [
                    createVNode("span", { class: "font-weight-bold" }, toDisplayString(formatCurrency(value)), 1)
                  ];
                }
              }),
              "item.amountPercentage": withCtx(({ value }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div style="${ssrRenderStyle({ "min-width": "120px" })}" data-v-e2547530${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_v_progress_linear, {
                    "model-value": value,
                    color: "success",
                    height: "8",
                    rounded: ""
                  }, null, _parent3, _scopeId2));
                  _push3(`<span class="text-caption text-medium-emphasis" data-v-e2547530${_scopeId2}>${ssrInterpolate(value.toFixed(1))}%</span></div>`);
                } else {
                  return [
                    createVNode("div", { style: { "min-width": "120px" } }, [
                      createVNode(_component_v_progress_linear, {
                        "model-value": value,
                        color: "success",
                        height: "8",
                        rounded: ""
                      }, null, 8, ["model-value"]),
                      createVNode("span", { class: "text-caption text-medium-emphasis" }, toDisplayString(value.toFixed(1)) + "%", 1)
                    ])
                  ];
                }
              }),
              "no-data": withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="pa-4 text-center" data-v-e2547530${_scopeId2}>Nessun dato trovato per la data selezionata.</div>`);
                } else {
                  return [
                    createVNode("div", { class: "pa-4 text-center" }, "Nessun dato trovato per la data selezionata.")
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
                      createVNode("h2", { class: "text-h5" }, "Statistiche Metodi di Pagamento"),
                      createVNode("p", { class: "text-subtitle-1 text-medium-emphasis" }, "Dati aggregati per giorno")
                    ]),
                    createVNode(_component_v_spacer),
                    createVNode("div", { class: "d-flex flex-wrap align-center gap-2" }, [
                      createVNode(_component_v_select, {
                        modelValue: selectedDate.value,
                        "onUpdate:modelValue": ($event) => selectedDate.value = $event,
                        items: availableDates.value,
                        label: "Seleziona Giorno",
                        density: "compact",
                        variant: "outlined",
                        "hide-details": "",
                        style: { "min-width": "240px" }
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                      createVNode(_component_v_menu, null, {
                        activator: withCtx(({ props }) => [
                          createVNode(_component_v_btn, mergeProps({ icon: "mdi-dots-vertical" }, props, { title: "Altre azioni" }), null, 16)
                        ]),
                        default: withCtx(() => [
                          createVNode(_component_v_list, null, {
                            default: withCtx(() => [
                              createVNode(_component_v_list_item, {
                                onClick: refreshData,
                                "prepend-icon": "mdi-refresh"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Aggiorna")
                                ]),
                                _: 1
                              }),
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
                        sm: "6"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_card, {
                            variant: "tonal",
                            class: "pa-4 text-center h-100"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "text-overline" }, "Totale Transazioni"),
                              createVNode("div", { class: "text-h3 font-weight-bold" }, toDisplayString(dailyTotals.value.totalCount), 1)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_col, {
                        cols: "12",
                        sm: "6"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_card, {
                            variant: "tonal",
                            color: "success",
                            class: "pa-4 text-center h-100"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "text-overline" }, "Importo Totale Incassato"),
                              createVNode("div", { class: "text-h3 font-weight-bold" }, toDisplayString(formatCurrency(dailyTotals.value.totalAmount)), 1)
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
                label: "Cerca metodo di pagamento...",
                "prepend-inner-icon": "mdi-magnify",
                variant: "solo-filled",
                flat: "",
                "hide-details": "",
                "single-line": ""
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode(_component_v_data_table, {
                headers,
                items: tableData.value,
                search: search.value,
                loading: isLoading.value,
                "item-value": "type",
                class: "elevation-0"
              }, {
                loading: withCtx(() => [
                  createVNode(_component_v_skeleton_loader, { type: "table-row@5" })
                ]),
                "item.type": withCtx(({ item }) => [
                  createVNode("div", { class: "d-flex align-center font-weight-bold py-2" }, [
                    createVNode(_component_v_icon, {
                      icon: getPaymentIcon(item.type),
                      class: "me-3",
                      size: "24"
                    }, null, 8, ["icon"]),
                    createVNode("span", null, toDisplayString(item.type), 1)
                  ])
                ]),
                "item.countPercentage": withCtx(({ value }) => [
                  createVNode("div", { style: { "min-width": "120px" } }, [
                    createVNode(_component_v_progress_linear, {
                      "model-value": value,
                      color: "primary",
                      height: "8",
                      rounded: ""
                    }, null, 8, ["model-value"]),
                    createVNode("span", { class: "text-caption text-medium-emphasis" }, toDisplayString(value.toFixed(1)) + "%", 1)
                  ])
                ]),
                "item.amount": withCtx(({ value }) => [
                  createVNode("span", { class: "font-weight-bold" }, toDisplayString(formatCurrency(value)), 1)
                ]),
                "item.amountPercentage": withCtx(({ value }) => [
                  createVNode("div", { style: { "min-width": "120px" } }, [
                    createVNode(_component_v_progress_linear, {
                      "model-value": value,
                      color: "success",
                      height: "8",
                      rounded: ""
                    }, null, 8, ["model-value"]),
                    createVNode("span", { class: "text-caption text-medium-emphasis" }, toDisplayString(value.toFixed(1)) + "%", 1)
                  ])
                ]),
                "no-data": withCtx(() => [
                  createVNode("div", { class: "pa-4 text-center" }, "Nessun dato trovato per la data selezionata.")
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
export {
  _sfc_main as default
};
//# sourceMappingURL=PaymentTypes.vue2.mjs.map
