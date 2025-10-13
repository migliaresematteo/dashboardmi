import { defineComponent, ref, computed, resolveComponent, withCtx, createTextVNode, createVNode, mergeProps, toDisplayString, createBlock, openBlock, Fragment, renderList, createCommentVNode } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "B2BOrders",
  __ssrInlineRender: true,
  setup(__props) {
    const isLoading = ref(true);
    const search = ref("");
    const b2bOrders = ref([]);
    const lastUpdate = ref("");
    const vendorTypes = ["Tutti", "Ristorante", "Trattoria", "Hotel", "Pizzeria", "Catering"];
    const orderStatuses = ["Tutti", "Completed", "Processing", "Pending"];
    const selectedVendorType = ref("Tutti");
    const selectedStatus = ref("Tutti");
    const selectedOrder = ref(null);
    const showOrderDetails = ref(false);
    const mainHeaders = [
      { title: "Venditore", key: "vendorName", align: "start" },
      { title: "Data Ordine", key: "date", class: "d-none d-md-table-cell" },
      { title: "Totale", key: "total", align: "end" },
      { title: "Stato Ordine", key: "status", align: "center" },
      { title: "Stato Pagamento", key: "paymentStatus", align: "center" },
      { title: "Ricorrente", key: "recurring", align: "center", class: "d-none d-lg-table-cell" },
      { title: "Azioni", key: "actions", align: "center", sortable: false }
    ];
    const modalItemsHeaders = [
      { title: "Prodotto", key: "product", align: "start" },
      { title: "Quantità", key: "quantity", align: "end" },
      { title: "Prezzo Unitario", key: "price", align: "end" },
      { title: "Totale Riga", key: "total", align: "end" }
    ];
    const filteredData = computed(() => {
      return b2bOrders.value.filter((order) => {
        const matchesVendorType = selectedVendorType.value === "Tutti" || order.vendorType === selectedVendorType.value;
        const matchesStatus = selectedStatus.value === "Tutti" || order.status === selectedStatus.value;
        return matchesVendorType && matchesStatus;
      });
    });
    const filteredTotals = computed(() => {
      return filteredData.value.reduce((acc, order) => {
        acc.totalOrders += 1;
        acc.totalAmount += order.total;
        if (order.paymentStatus === "Paid") acc.paidAmount += order.total;
        else acc.pendingAmount += order.total;
        return acc;
      }, { totalOrders: 0, totalAmount: 0, paidAmount: 0, pendingAmount: 0 });
    });
    const getOrderStatusColor = (status) => ({ Completed: "success", Processing: "primary", Pending: "warning" })[status];
    const getPaymentStatusColor = (status) => ({ Paid: "success", Pending: "warning", "Not Paid": "error" })[status];
    const formatCurrency = (value) => new Intl.NumberFormat("it-IT", { style: "currency", currency: "EUR" }).format(value);
    const formatDate = (dateString) => new Date(dateString).toLocaleDateString("it-IT");
    const viewOrderDetails = (order) => {
      selectedOrder.value = order;
      showOrderDetails.value = true;
    };
    const closeOrderDetails = () => showOrderDetails.value = false;
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
      const _component_v_chip = resolveComponent("v-chip");
      const _component_v_icon = resolveComponent("v-icon");
      const _component_v_dialog = resolveComponent("v-dialog");
      const _component_v_card_title = resolveComponent("v-card-title");
      const _component_v_card_text = resolveComponent("v-card-text");
      const _component_v_card_actions = resolveComponent("v-card-actions");
      _push(ssrRenderComponent(_component_v_card, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_card_item, { class: "pa-4 pa-md-6" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="d-flex flex-wrap align-center gap-4" data-v-11dcbab5${_scopeId2}><div data-v-11dcbab5${_scopeId2}><h2 class="text-h5" data-v-11dcbab5${_scopeId2}>Gestione Ordini B2B</h2><p class="text-subtitle-1 text-medium-emphasis" data-v-11dcbab5${_scopeId2}>Filtra e analizza gli ordini business</p></div>`);
                  _push3(ssrRenderComponent(_component_v_spacer, null, null, _parent3, _scopeId2));
                  _push3(`<div class="d-flex flex-wrap align-center gap-2" data-v-11dcbab5${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_v_select, {
                    modelValue: selectedVendorType.value,
                    "onUpdate:modelValue": ($event) => selectedVendorType.value = $event,
                    items: vendorTypes,
                    label: "Tipo Venditore",
                    density: "compact",
                    variant: "outlined",
                    "hide-details": "",
                    style: { "min-width": "150px" }
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_select, {
                    modelValue: selectedStatus.value,
                    "onUpdate:modelValue": ($event) => selectedStatus.value = $event,
                    items: orderStatuses,
                    label: "Stato Ordine",
                    density: "compact",
                    variant: "outlined",
                    "hide-details": "",
                    style: { "min-width": "150px" }
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_menu, null, {
                    activator: withCtx(({ props }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_btn, mergeProps({ icon: "mdi-dots-vertical" }, props), null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_btn, mergeProps({ icon: "mdi-dots-vertical" }, props), null, 16)
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
                        _push4(`<!--[-->`);
                        ssrRenderList([
                          { label: "Ordini Filtrati", value: filteredTotals.value.totalOrders, format: (v) => v },
                          { label: "Importo Totale", value: filteredTotals.value.totalAmount, format: formatCurrency, color: "primary" },
                          { label: "Importo Pagato", value: filteredTotals.value.paidAmount, format: formatCurrency, color: "success" },
                          { label: "Importo In Attesa", value: filteredTotals.value.pendingAmount, format: formatCurrency, color: "warning" }
                        ], (item) => {
                          _push4(ssrRenderComponent(_component_v_col, {
                            key: item.label,
                            cols: "12",
                            sm: "6",
                            md: "3"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_v_card, {
                                  variant: "tonal",
                                  color: item.color,
                                  class: "pa-4 text-center h-100"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`<div class="text-overline" data-v-11dcbab5${_scopeId5}>${ssrInterpolate(item.label)}</div><div class="text-h4 font-weight-bold" data-v-11dcbab5${_scopeId5}>${ssrInterpolate(item.format(item.value))}</div>`);
                                    } else {
                                      return [
                                        createVNode("div", { class: "text-overline" }, toDisplayString(item.label), 1),
                                        createVNode("div", { class: "text-h4 font-weight-bold" }, toDisplayString(item.format(item.value)), 1)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_v_card, {
                                    variant: "tonal",
                                    color: item.color,
                                    class: "pa-4 text-center h-100"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "text-overline" }, toDisplayString(item.label), 1),
                                      createVNode("div", { class: "text-h4 font-weight-bold" }, toDisplayString(item.format(item.value)), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["color"])
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        });
                        _push4(`<!--]-->`);
                      } else {
                        return [
                          (openBlock(true), createBlock(Fragment, null, renderList([
                            { label: "Ordini Filtrati", value: filteredTotals.value.totalOrders, format: (v) => v },
                            { label: "Importo Totale", value: filteredTotals.value.totalAmount, format: formatCurrency, color: "primary" },
                            { label: "Importo Pagato", value: filteredTotals.value.paidAmount, format: formatCurrency, color: "success" },
                            { label: "Importo In Attesa", value: filteredTotals.value.pendingAmount, format: formatCurrency, color: "warning" }
                          ], (item) => {
                            return openBlock(), createBlock(_component_v_col, {
                              key: item.label,
                              cols: "12",
                              sm: "6",
                              md: "3"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_card, {
                                  variant: "tonal",
                                  color: item.color,
                                  class: "pa-4 text-center h-100"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "text-overline" }, toDisplayString(item.label), 1),
                                    createVNode("div", { class: "text-h4 font-weight-bold" }, toDisplayString(item.format(item.value)), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["color"])
                              ]),
                              _: 2
                            }, 1024);
                          }), 128))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode("div", { class: "d-flex flex-wrap align-center gap-4" }, [
                      createVNode("div", null, [
                        createVNode("h2", { class: "text-h5" }, "Gestione Ordini B2B"),
                        createVNode("p", { class: "text-subtitle-1 text-medium-emphasis" }, "Filtra e analizza gli ordini business")
                      ]),
                      createVNode(_component_v_spacer),
                      createVNode("div", { class: "d-flex flex-wrap align-center gap-2" }, [
                        createVNode(_component_v_select, {
                          modelValue: selectedVendorType.value,
                          "onUpdate:modelValue": ($event) => selectedVendorType.value = $event,
                          items: vendorTypes,
                          label: "Tipo Venditore",
                          density: "compact",
                          variant: "outlined",
                          "hide-details": "",
                          style: { "min-width": "150px" }
                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                        createVNode(_component_v_select, {
                          modelValue: selectedStatus.value,
                          "onUpdate:modelValue": ($event) => selectedStatus.value = $event,
                          items: orderStatuses,
                          label: "Stato Ordine",
                          density: "compact",
                          variant: "outlined",
                          "hide-details": "",
                          style: { "min-width": "150px" }
                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                        createVNode(_component_v_menu, null, {
                          activator: withCtx(({ props }) => [
                            createVNode(_component_v_btn, mergeProps({ icon: "mdi-dots-vertical" }, props), null, 16)
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
                        (openBlock(true), createBlock(Fragment, null, renderList([
                          { label: "Ordini Filtrati", value: filteredTotals.value.totalOrders, format: (v) => v },
                          { label: "Importo Totale", value: filteredTotals.value.totalAmount, format: formatCurrency, color: "primary" },
                          { label: "Importo Pagato", value: filteredTotals.value.paidAmount, format: formatCurrency, color: "success" },
                          { label: "Importo In Attesa", value: filteredTotals.value.pendingAmount, format: formatCurrency, color: "warning" }
                        ], (item) => {
                          return openBlock(), createBlock(_component_v_col, {
                            key: item.label,
                            cols: "12",
                            sm: "6",
                            md: "3"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_card, {
                                variant: "tonal",
                                color: item.color,
                                class: "pa-4 text-center h-100"
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "text-overline" }, toDisplayString(item.label), 1),
                                  createVNode("div", { class: "text-h4 font-weight-bold" }, toDisplayString(item.format(item.value)), 1)
                                ]),
                                _: 2
                              }, 1032, ["color"])
                            ]),
                            _: 2
                          }, 1024);
                        }), 128))
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
              label: "Cerca per nome venditore o ID...",
              "prepend-inner-icon": "mdi-magnify",
              variant: "solo-filled",
              flat: "",
              "hide-details": "",
              "single-line": ""
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_data_table, {
              headers: mainHeaders,
              items: filteredData.value,
              search: search.value,
              loading: isLoading.value,
              "item-value": "id",
              class: "elevation-0",
              "sort-by": [{ key: "date", order: "desc" }]
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
              "item.vendorName": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="font-weight-bold" data-v-11dcbab5${_scopeId2}>${ssrInterpolate(item.vendorName)}</div><div class="text-caption" data-v-11dcbab5${_scopeId2}>${ssrInterpolate(item.vendorType)}</div>`);
                } else {
                  return [
                    createVNode("div", { class: "font-weight-bold" }, toDisplayString(item.vendorName), 1),
                    createVNode("div", { class: "text-caption" }, toDisplayString(item.vendorType), 1)
                  ];
                }
              }),
              "item.total": withCtx(({ value }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="font-weight-bold" data-v-11dcbab5${_scopeId2}>${ssrInterpolate(formatCurrency(value))}</span>`);
                } else {
                  return [
                    createVNode("span", { class: "font-weight-bold" }, toDisplayString(formatCurrency(value)), 1)
                  ];
                }
              }),
              "item.status": withCtx(({ value }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_chip, {
                    color: getOrderStatusColor(value),
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
                      color: getOrderStatusColor(value),
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
              "item.paymentStatus": withCtx(({ value }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_chip, {
                    color: getPaymentStatusColor(value),
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
                      color: getPaymentStatusColor(value),
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
              "item.recurring": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_icon, {
                    color: item.recurring ? "success" : "grey-lighten-1"
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(item.recurring ? "mdi-check-circle" : "mdi-close-circle")}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(item.recurring ? "mdi-check-circle" : "mdi-close-circle"), 1)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(`<span class="ms-1 text-caption" data-v-11dcbab5${_scopeId2}>${ssrInterpolate(item.frequency)}</span>`);
                } else {
                  return [
                    createVNode(_component_v_icon, {
                      color: item.recurring ? "success" : "grey-lighten-1"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(item.recurring ? "mdi-check-circle" : "mdi-close-circle"), 1)
                      ]),
                      _: 2
                    }, 1032, ["color"]),
                    createVNode("span", { class: "ms-1 text-caption" }, toDisplayString(item.frequency), 1)
                  ];
                }
              }),
              "item.actions": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_btn, {
                    icon: "mdi-eye-outline",
                    variant: "text",
                    size: "small",
                    onClick: ($event) => viewOrderDetails(item)
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_btn, {
                      icon: "mdi-eye-outline",
                      variant: "text",
                      size: "small",
                      onClick: ($event) => viewOrderDetails(item)
                    }, null, 8, ["onClick"])
                  ];
                }
              }),
              "no-data": withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="pa-4 text-center" data-v-11dcbab5${_scopeId2}>Nessun ordine trovato con i filtri attuali.</div>`);
                } else {
                  return [
                    createVNode("div", { class: "pa-4 text-center" }, "Nessun ordine trovato con i filtri attuali.")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_dialog, {
              modelValue: showOrderDetails.value,
              "onUpdate:modelValue": ($event) => showOrderDetails.value = $event,
              "max-width": "900px",
              scrollable: ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (selectedOrder.value) {
                    _push3(ssrRenderComponent(_component_v_card, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_v_card_title, { class: "d-flex align-center pa-4" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<span class="text-h5" data-v-11dcbab5${_scopeId4}>Dettaglio Ordine ${ssrInterpolate(selectedOrder.value.id)}</span>`);
                                _push5(ssrRenderComponent(_component_v_spacer, null, null, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(_component_v_btn, {
                                  icon: "mdi-close",
                                  variant: "text",
                                  onClick: closeOrderDetails
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode("span", { class: "text-h5" }, "Dettaglio Ordine " + toDisplayString(selectedOrder.value.id), 1),
                                  createVNode(_component_v_spacer),
                                  createVNode(_component_v_btn, {
                                    icon: "mdi-close",
                                    variant: "text",
                                    onClick: closeOrderDetails
                                  })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_v_divider, null, null, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_v_card_text, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_v_row, null, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_v_col, {
                                        cols: "12",
                                        md: "6"
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`<div class="text-overline" data-v-11dcbab5${_scopeId6}>Informazioni Ordine</div>`);
                                            _push7(ssrRenderComponent(_component_v_list_item, {
                                              title: selectedOrder.value.id,
                                              subtitle: "ID Ordine",
                                              "prepend-icon": "mdi-identifier"
                                            }, null, _parent7, _scopeId6));
                                            _push7(ssrRenderComponent(_component_v_list_item, {
                                              title: formatDate(selectedOrder.value.date),
                                              subtitle: "Data Ordine",
                                              "prepend-icon": "mdi-calendar-start"
                                            }, null, _parent7, _scopeId6));
                                            _push7(ssrRenderComponent(_component_v_list_item, {
                                              title: formatDate(selectedOrder.value.deliveryDate),
                                              subtitle: "Data Consegna",
                                              "prepend-icon": "mdi-truck-delivery"
                                            }, null, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode("div", { class: "text-overline" }, "Informazioni Ordine"),
                                              createVNode(_component_v_list_item, {
                                                title: selectedOrder.value.id,
                                                subtitle: "ID Ordine",
                                                "prepend-icon": "mdi-identifier"
                                              }, null, 8, ["title"]),
                                              createVNode(_component_v_list_item, {
                                                title: formatDate(selectedOrder.value.date),
                                                subtitle: "Data Ordine",
                                                "prepend-icon": "mdi-calendar-start"
                                              }, null, 8, ["title"]),
                                              createVNode(_component_v_list_item, {
                                                title: formatDate(selectedOrder.value.deliveryDate),
                                                subtitle: "Data Consegna",
                                                "prepend-icon": "mdi-truck-delivery"
                                              }, null, 8, ["title"])
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(_component_v_col, {
                                        cols: "12",
                                        md: "6"
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`<div class="text-overline" data-v-11dcbab5${_scopeId6}>Informazioni Venditore</div>`);
                                            _push7(ssrRenderComponent(_component_v_list_item, {
                                              title: selectedOrder.value.vendorName,
                                              subtitle: selectedOrder.value.vendorId,
                                              "prepend-icon": "mdi-storefront-outline"
                                            }, null, _parent7, _scopeId6));
                                            _push7(ssrRenderComponent(_component_v_list_item, {
                                              title: selectedOrder.value.vendorType,
                                              subtitle: "Tipo Venditore",
                                              "prepend-icon": "mdi-tag-outline"
                                            }, null, _parent7, _scopeId6));
                                            _push7(ssrRenderComponent(_component_v_list_item, {
                                              title: selectedOrder.value.frequency,
                                              subtitle: `Ordine ${selectedOrder.value.recurring ? "ricorrente" : "singolo"}`,
                                              "prepend-icon": "mdi-sync"
                                            }, null, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode("div", { class: "text-overline" }, "Informazioni Venditore"),
                                              createVNode(_component_v_list_item, {
                                                title: selectedOrder.value.vendorName,
                                                subtitle: selectedOrder.value.vendorId,
                                                "prepend-icon": "mdi-storefront-outline"
                                              }, null, 8, ["title", "subtitle"]),
                                              createVNode(_component_v_list_item, {
                                                title: selectedOrder.value.vendorType,
                                                subtitle: "Tipo Venditore",
                                                "prepend-icon": "mdi-tag-outline"
                                              }, null, 8, ["title"]),
                                              createVNode(_component_v_list_item, {
                                                title: selectedOrder.value.frequency,
                                                subtitle: `Ordine ${selectedOrder.value.recurring ? "ricorrente" : "singolo"}`,
                                                "prepend-icon": "mdi-sync"
                                              }, null, 8, ["title", "subtitle"])
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_component_v_col, {
                                          cols: "12",
                                          md: "6"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode("div", { class: "text-overline" }, "Informazioni Ordine"),
                                            createVNode(_component_v_list_item, {
                                              title: selectedOrder.value.id,
                                              subtitle: "ID Ordine",
                                              "prepend-icon": "mdi-identifier"
                                            }, null, 8, ["title"]),
                                            createVNode(_component_v_list_item, {
                                              title: formatDate(selectedOrder.value.date),
                                              subtitle: "Data Ordine",
                                              "prepend-icon": "mdi-calendar-start"
                                            }, null, 8, ["title"]),
                                            createVNode(_component_v_list_item, {
                                              title: formatDate(selectedOrder.value.deliveryDate),
                                              subtitle: "Data Consegna",
                                              "prepend-icon": "mdi-truck-delivery"
                                            }, null, 8, ["title"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_col, {
                                          cols: "12",
                                          md: "6"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode("div", { class: "text-overline" }, "Informazioni Venditore"),
                                            createVNode(_component_v_list_item, {
                                              title: selectedOrder.value.vendorName,
                                              subtitle: selectedOrder.value.vendorId,
                                              "prepend-icon": "mdi-storefront-outline"
                                            }, null, 8, ["title", "subtitle"]),
                                            createVNode(_component_v_list_item, {
                                              title: selectedOrder.value.vendorType,
                                              subtitle: "Tipo Venditore",
                                              "prepend-icon": "mdi-tag-outline"
                                            }, null, 8, ["title"]),
                                            createVNode(_component_v_list_item, {
                                              title: selectedOrder.value.frequency,
                                              subtitle: `Ordine ${selectedOrder.value.recurring ? "ricorrente" : "singolo"}`,
                                              "prepend-icon": "mdi-sync"
                                            }, null, 8, ["title", "subtitle"])
                                          ]),
                                          _: 1
                                        })
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(_component_v_divider, { class: "my-4" }, null, _parent5, _scopeId4));
                                _push5(`<h3 class="text-h6 mb-2" data-v-11dcbab5${_scopeId4}>Prodotti Ordinati</h3>`);
                                _push5(ssrRenderComponent(_component_v_data_table, {
                                  headers: modalItemsHeaders,
                                  items: selectedOrder.value.items,
                                  density: "compact",
                                  class: "border rounded"
                                }, {
                                  "item.price": withCtx(({ value }, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`${ssrInterpolate(formatCurrency(value))}`);
                                    } else {
                                      return [
                                        createTextVNode(toDisplayString(formatCurrency(value)), 1)
                                      ];
                                    }
                                  }),
                                  "item.total": withCtx(({ value }, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`${ssrInterpolate(formatCurrency(value))}`);
                                    } else {
                                      return [
                                        createTextVNode(toDisplayString(formatCurrency(value)), 1)
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_v_row, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_col, {
                                        cols: "12",
                                        md: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "text-overline" }, "Informazioni Ordine"),
                                          createVNode(_component_v_list_item, {
                                            title: selectedOrder.value.id,
                                            subtitle: "ID Ordine",
                                            "prepend-icon": "mdi-identifier"
                                          }, null, 8, ["title"]),
                                          createVNode(_component_v_list_item, {
                                            title: formatDate(selectedOrder.value.date),
                                            subtitle: "Data Ordine",
                                            "prepend-icon": "mdi-calendar-start"
                                          }, null, 8, ["title"]),
                                          createVNode(_component_v_list_item, {
                                            title: formatDate(selectedOrder.value.deliveryDate),
                                            subtitle: "Data Consegna",
                                            "prepend-icon": "mdi-truck-delivery"
                                          }, null, 8, ["title"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_col, {
                                        cols: "12",
                                        md: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "text-overline" }, "Informazioni Venditore"),
                                          createVNode(_component_v_list_item, {
                                            title: selectedOrder.value.vendorName,
                                            subtitle: selectedOrder.value.vendorId,
                                            "prepend-icon": "mdi-storefront-outline"
                                          }, null, 8, ["title", "subtitle"]),
                                          createVNode(_component_v_list_item, {
                                            title: selectedOrder.value.vendorType,
                                            subtitle: "Tipo Venditore",
                                            "prepend-icon": "mdi-tag-outline"
                                          }, null, 8, ["title"]),
                                          createVNode(_component_v_list_item, {
                                            title: selectedOrder.value.frequency,
                                            subtitle: `Ordine ${selectedOrder.value.recurring ? "ricorrente" : "singolo"}`,
                                            "prepend-icon": "mdi-sync"
                                          }, null, 8, ["title", "subtitle"])
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_divider, { class: "my-4" }),
                                  createVNode("h3", { class: "text-h6 mb-2" }, "Prodotti Ordinati"),
                                  createVNode(_component_v_data_table, {
                                    headers: modalItemsHeaders,
                                    items: selectedOrder.value.items,
                                    density: "compact",
                                    class: "border rounded"
                                  }, {
                                    "item.price": withCtx(({ value }) => [
                                      createTextVNode(toDisplayString(formatCurrency(value)), 1)
                                    ]),
                                    "item.total": withCtx(({ value }) => [
                                      createTextVNode(toDisplayString(formatCurrency(value)), 1)
                                    ]),
                                    _: 1
                                  }, 8, ["items"])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_v_divider, null, null, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_v_card_actions, { class: "pa-4" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<div class="text-h6" data-v-11dcbab5${_scopeId4}>Totale: <span class="font-weight-bold" data-v-11dcbab5${_scopeId4}>${ssrInterpolate(formatCurrency(selectedOrder.value.total))}</span></div>`);
                                _push5(ssrRenderComponent(_component_v_spacer, null, null, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(_component_v_btn, {
                                  color: "primary",
                                  variant: "tonal",
                                  onClick: closeOrderDetails
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`Chiudi`);
                                    } else {
                                      return [
                                        createTextVNode("Chiudi")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode("div", { class: "text-h6" }, [
                                    createTextVNode("Totale: "),
                                    createVNode("span", { class: "font-weight-bold" }, toDisplayString(formatCurrency(selectedOrder.value.total)), 1)
                                  ]),
                                  createVNode(_component_v_spacer),
                                  createVNode(_component_v_btn, {
                                    color: "primary",
                                    variant: "tonal",
                                    onClick: closeOrderDetails
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("Chiudi")
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
                            createVNode(_component_v_card_title, { class: "d-flex align-center pa-4" }, {
                              default: withCtx(() => [
                                createVNode("span", { class: "text-h5" }, "Dettaglio Ordine " + toDisplayString(selectedOrder.value.id), 1),
                                createVNode(_component_v_spacer),
                                createVNode(_component_v_btn, {
                                  icon: "mdi-close",
                                  variant: "text",
                                  onClick: closeOrderDetails
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_divider),
                            createVNode(_component_v_card_text, null, {
                              default: withCtx(() => [
                                createVNode(_component_v_row, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_col, {
                                      cols: "12",
                                      md: "6"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "text-overline" }, "Informazioni Ordine"),
                                        createVNode(_component_v_list_item, {
                                          title: selectedOrder.value.id,
                                          subtitle: "ID Ordine",
                                          "prepend-icon": "mdi-identifier"
                                        }, null, 8, ["title"]),
                                        createVNode(_component_v_list_item, {
                                          title: formatDate(selectedOrder.value.date),
                                          subtitle: "Data Ordine",
                                          "prepend-icon": "mdi-calendar-start"
                                        }, null, 8, ["title"]),
                                        createVNode(_component_v_list_item, {
                                          title: formatDate(selectedOrder.value.deliveryDate),
                                          subtitle: "Data Consegna",
                                          "prepend-icon": "mdi-truck-delivery"
                                        }, null, 8, ["title"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_col, {
                                      cols: "12",
                                      md: "6"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "text-overline" }, "Informazioni Venditore"),
                                        createVNode(_component_v_list_item, {
                                          title: selectedOrder.value.vendorName,
                                          subtitle: selectedOrder.value.vendorId,
                                          "prepend-icon": "mdi-storefront-outline"
                                        }, null, 8, ["title", "subtitle"]),
                                        createVNode(_component_v_list_item, {
                                          title: selectedOrder.value.vendorType,
                                          subtitle: "Tipo Venditore",
                                          "prepend-icon": "mdi-tag-outline"
                                        }, null, 8, ["title"]),
                                        createVNode(_component_v_list_item, {
                                          title: selectedOrder.value.frequency,
                                          subtitle: `Ordine ${selectedOrder.value.recurring ? "ricorrente" : "singolo"}`,
                                          "prepend-icon": "mdi-sync"
                                        }, null, 8, ["title", "subtitle"])
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_divider, { class: "my-4" }),
                                createVNode("h3", { class: "text-h6 mb-2" }, "Prodotti Ordinati"),
                                createVNode(_component_v_data_table, {
                                  headers: modalItemsHeaders,
                                  items: selectedOrder.value.items,
                                  density: "compact",
                                  class: "border rounded"
                                }, {
                                  "item.price": withCtx(({ value }) => [
                                    createTextVNode(toDisplayString(formatCurrency(value)), 1)
                                  ]),
                                  "item.total": withCtx(({ value }) => [
                                    createTextVNode(toDisplayString(formatCurrency(value)), 1)
                                  ]),
                                  _: 1
                                }, 8, ["items"])
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_divider),
                            createVNode(_component_v_card_actions, { class: "pa-4" }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "text-h6" }, [
                                  createTextVNode("Totale: "),
                                  createVNode("span", { class: "font-weight-bold" }, toDisplayString(formatCurrency(selectedOrder.value.total)), 1)
                                ]),
                                createVNode(_component_v_spacer),
                                createVNode(_component_v_btn, {
                                  color: "primary",
                                  variant: "tonal",
                                  onClick: closeOrderDetails
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Chiudi")
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
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    selectedOrder.value ? (openBlock(), createBlock(_component_v_card, { key: 0 }, {
                      default: withCtx(() => [
                        createVNode(_component_v_card_title, { class: "d-flex align-center pa-4" }, {
                          default: withCtx(() => [
                            createVNode("span", { class: "text-h5" }, "Dettaglio Ordine " + toDisplayString(selectedOrder.value.id), 1),
                            createVNode(_component_v_spacer),
                            createVNode(_component_v_btn, {
                              icon: "mdi-close",
                              variant: "text",
                              onClick: closeOrderDetails
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_divider),
                        createVNode(_component_v_card_text, null, {
                          default: withCtx(() => [
                            createVNode(_component_v_row, null, {
                              default: withCtx(() => [
                                createVNode(_component_v_col, {
                                  cols: "12",
                                  md: "6"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "text-overline" }, "Informazioni Ordine"),
                                    createVNode(_component_v_list_item, {
                                      title: selectedOrder.value.id,
                                      subtitle: "ID Ordine",
                                      "prepend-icon": "mdi-identifier"
                                    }, null, 8, ["title"]),
                                    createVNode(_component_v_list_item, {
                                      title: formatDate(selectedOrder.value.date),
                                      subtitle: "Data Ordine",
                                      "prepend-icon": "mdi-calendar-start"
                                    }, null, 8, ["title"]),
                                    createVNode(_component_v_list_item, {
                                      title: formatDate(selectedOrder.value.deliveryDate),
                                      subtitle: "Data Consegna",
                                      "prepend-icon": "mdi-truck-delivery"
                                    }, null, 8, ["title"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_col, {
                                  cols: "12",
                                  md: "6"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "text-overline" }, "Informazioni Venditore"),
                                    createVNode(_component_v_list_item, {
                                      title: selectedOrder.value.vendorName,
                                      subtitle: selectedOrder.value.vendorId,
                                      "prepend-icon": "mdi-storefront-outline"
                                    }, null, 8, ["title", "subtitle"]),
                                    createVNode(_component_v_list_item, {
                                      title: selectedOrder.value.vendorType,
                                      subtitle: "Tipo Venditore",
                                      "prepend-icon": "mdi-tag-outline"
                                    }, null, 8, ["title"]),
                                    createVNode(_component_v_list_item, {
                                      title: selectedOrder.value.frequency,
                                      subtitle: `Ordine ${selectedOrder.value.recurring ? "ricorrente" : "singolo"}`,
                                      "prepend-icon": "mdi-sync"
                                    }, null, 8, ["title", "subtitle"])
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_divider, { class: "my-4" }),
                            createVNode("h3", { class: "text-h6 mb-2" }, "Prodotti Ordinati"),
                            createVNode(_component_v_data_table, {
                              headers: modalItemsHeaders,
                              items: selectedOrder.value.items,
                              density: "compact",
                              class: "border rounded"
                            }, {
                              "item.price": withCtx(({ value }) => [
                                createTextVNode(toDisplayString(formatCurrency(value)), 1)
                              ]),
                              "item.total": withCtx(({ value }) => [
                                createTextVNode(toDisplayString(formatCurrency(value)), 1)
                              ]),
                              _: 1
                            }, 8, ["items"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_divider),
                        createVNode(_component_v_card_actions, { class: "pa-4" }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "text-h6" }, [
                              createTextVNode("Totale: "),
                              createVNode("span", { class: "font-weight-bold" }, toDisplayString(formatCurrency(selectedOrder.value.total)), 1)
                            ]),
                            createVNode(_component_v_spacer),
                            createVNode(_component_v_btn, {
                              color: "primary",
                              variant: "tonal",
                              onClick: closeOrderDetails
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Chiudi")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })) : createCommentVNode("", true)
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
                      createVNode("h2", { class: "text-h5" }, "Gestione Ordini B2B"),
                      createVNode("p", { class: "text-subtitle-1 text-medium-emphasis" }, "Filtra e analizza gli ordini business")
                    ]),
                    createVNode(_component_v_spacer),
                    createVNode("div", { class: "d-flex flex-wrap align-center gap-2" }, [
                      createVNode(_component_v_select, {
                        modelValue: selectedVendorType.value,
                        "onUpdate:modelValue": ($event) => selectedVendorType.value = $event,
                        items: vendorTypes,
                        label: "Tipo Venditore",
                        density: "compact",
                        variant: "outlined",
                        "hide-details": "",
                        style: { "min-width": "150px" }
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode(_component_v_select, {
                        modelValue: selectedStatus.value,
                        "onUpdate:modelValue": ($event) => selectedStatus.value = $event,
                        items: orderStatuses,
                        label: "Stato Ordine",
                        density: "compact",
                        variant: "outlined",
                        "hide-details": "",
                        style: { "min-width": "150px" }
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode(_component_v_menu, null, {
                        activator: withCtx(({ props }) => [
                          createVNode(_component_v_btn, mergeProps({ icon: "mdi-dots-vertical" }, props), null, 16)
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
                      (openBlock(true), createBlock(Fragment, null, renderList([
                        { label: "Ordini Filtrati", value: filteredTotals.value.totalOrders, format: (v) => v },
                        { label: "Importo Totale", value: filteredTotals.value.totalAmount, format: formatCurrency, color: "primary" },
                        { label: "Importo Pagato", value: filteredTotals.value.paidAmount, format: formatCurrency, color: "success" },
                        { label: "Importo In Attesa", value: filteredTotals.value.pendingAmount, format: formatCurrency, color: "warning" }
                      ], (item) => {
                        return openBlock(), createBlock(_component_v_col, {
                          key: item.label,
                          cols: "12",
                          sm: "6",
                          md: "3"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_card, {
                              variant: "tonal",
                              color: item.color,
                              class: "pa-4 text-center h-100"
                            }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "text-overline" }, toDisplayString(item.label), 1),
                                createVNode("div", { class: "text-h4 font-weight-bold" }, toDisplayString(item.format(item.value)), 1)
                              ]),
                              _: 2
                            }, 1032, ["color"])
                          ]),
                          _: 2
                        }, 1024);
                      }), 128))
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
                label: "Cerca per nome venditore o ID...",
                "prepend-inner-icon": "mdi-magnify",
                variant: "solo-filled",
                flat: "",
                "hide-details": "",
                "single-line": ""
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode(_component_v_data_table, {
                headers: mainHeaders,
                items: filteredData.value,
                search: search.value,
                loading: isLoading.value,
                "item-value": "id",
                class: "elevation-0",
                "sort-by": [{ key: "date", order: "desc" }]
              }, {
                loading: withCtx(() => [
                  createVNode(_component_v_skeleton_loader, { type: "table-row@5" })
                ]),
                "item.vendorName": withCtx(({ item }) => [
                  createVNode("div", { class: "font-weight-bold" }, toDisplayString(item.vendorName), 1),
                  createVNode("div", { class: "text-caption" }, toDisplayString(item.vendorType), 1)
                ]),
                "item.total": withCtx(({ value }) => [
                  createVNode("span", { class: "font-weight-bold" }, toDisplayString(formatCurrency(value)), 1)
                ]),
                "item.status": withCtx(({ value }) => [
                  createVNode(_component_v_chip, {
                    color: getOrderStatusColor(value),
                    size: "small"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(value), 1)
                    ]),
                    _: 2
                  }, 1032, ["color"])
                ]),
                "item.paymentStatus": withCtx(({ value }) => [
                  createVNode(_component_v_chip, {
                    color: getPaymentStatusColor(value),
                    size: "small"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(value), 1)
                    ]),
                    _: 2
                  }, 1032, ["color"])
                ]),
                "item.recurring": withCtx(({ item }) => [
                  createVNode(_component_v_icon, {
                    color: item.recurring ? "success" : "grey-lighten-1"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(item.recurring ? "mdi-check-circle" : "mdi-close-circle"), 1)
                    ]),
                    _: 2
                  }, 1032, ["color"]),
                  createVNode("span", { class: "ms-1 text-caption" }, toDisplayString(item.frequency), 1)
                ]),
                "item.actions": withCtx(({ item }) => [
                  createVNode(_component_v_btn, {
                    icon: "mdi-eye-outline",
                    variant: "text",
                    size: "small",
                    onClick: ($event) => viewOrderDetails(item)
                  }, null, 8, ["onClick"])
                ]),
                "no-data": withCtx(() => [
                  createVNode("div", { class: "pa-4 text-center" }, "Nessun ordine trovato con i filtri attuali.")
                ]),
                _: 1
              }, 8, ["items", "search", "loading"]),
              createVNode(_component_v_dialog, {
                modelValue: showOrderDetails.value,
                "onUpdate:modelValue": ($event) => showOrderDetails.value = $event,
                "max-width": "900px",
                scrollable: ""
              }, {
                default: withCtx(() => [
                  selectedOrder.value ? (openBlock(), createBlock(_component_v_card, { key: 0 }, {
                    default: withCtx(() => [
                      createVNode(_component_v_card_title, { class: "d-flex align-center pa-4" }, {
                        default: withCtx(() => [
                          createVNode("span", { class: "text-h5" }, "Dettaglio Ordine " + toDisplayString(selectedOrder.value.id), 1),
                          createVNode(_component_v_spacer),
                          createVNode(_component_v_btn, {
                            icon: "mdi-close",
                            variant: "text",
                            onClick: closeOrderDetails
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_divider),
                      createVNode(_component_v_card_text, null, {
                        default: withCtx(() => [
                          createVNode(_component_v_row, null, {
                            default: withCtx(() => [
                              createVNode(_component_v_col, {
                                cols: "12",
                                md: "6"
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "text-overline" }, "Informazioni Ordine"),
                                  createVNode(_component_v_list_item, {
                                    title: selectedOrder.value.id,
                                    subtitle: "ID Ordine",
                                    "prepend-icon": "mdi-identifier"
                                  }, null, 8, ["title"]),
                                  createVNode(_component_v_list_item, {
                                    title: formatDate(selectedOrder.value.date),
                                    subtitle: "Data Ordine",
                                    "prepend-icon": "mdi-calendar-start"
                                  }, null, 8, ["title"]),
                                  createVNode(_component_v_list_item, {
                                    title: formatDate(selectedOrder.value.deliveryDate),
                                    subtitle: "Data Consegna",
                                    "prepend-icon": "mdi-truck-delivery"
                                  }, null, 8, ["title"])
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_col, {
                                cols: "12",
                                md: "6"
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "text-overline" }, "Informazioni Venditore"),
                                  createVNode(_component_v_list_item, {
                                    title: selectedOrder.value.vendorName,
                                    subtitle: selectedOrder.value.vendorId,
                                    "prepend-icon": "mdi-storefront-outline"
                                  }, null, 8, ["title", "subtitle"]),
                                  createVNode(_component_v_list_item, {
                                    title: selectedOrder.value.vendorType,
                                    subtitle: "Tipo Venditore",
                                    "prepend-icon": "mdi-tag-outline"
                                  }, null, 8, ["title"]),
                                  createVNode(_component_v_list_item, {
                                    title: selectedOrder.value.frequency,
                                    subtitle: `Ordine ${selectedOrder.value.recurring ? "ricorrente" : "singolo"}`,
                                    "prepend-icon": "mdi-sync"
                                  }, null, 8, ["title", "subtitle"])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_divider, { class: "my-4" }),
                          createVNode("h3", { class: "text-h6 mb-2" }, "Prodotti Ordinati"),
                          createVNode(_component_v_data_table, {
                            headers: modalItemsHeaders,
                            items: selectedOrder.value.items,
                            density: "compact",
                            class: "border rounded"
                          }, {
                            "item.price": withCtx(({ value }) => [
                              createTextVNode(toDisplayString(formatCurrency(value)), 1)
                            ]),
                            "item.total": withCtx(({ value }) => [
                              createTextVNode(toDisplayString(formatCurrency(value)), 1)
                            ]),
                            _: 1
                          }, 8, ["items"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_divider),
                      createVNode(_component_v_card_actions, { class: "pa-4" }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "text-h6" }, [
                            createTextVNode("Totale: "),
                            createVNode("span", { class: "font-weight-bold" }, toDisplayString(formatCurrency(selectedOrder.value.total)), 1)
                          ]),
                          createVNode(_component_v_spacer),
                          createVNode(_component_v_btn, {
                            color: "primary",
                            variant: "tonal",
                            onClick: closeOrderDetails
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Chiudi")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })) : createCommentVNode("", true)
                ]),
                _: 1
              }, 8, ["modelValue", "onUpdate:modelValue"])
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
//# sourceMappingURL=B2BOrders.vue2.mjs.map
