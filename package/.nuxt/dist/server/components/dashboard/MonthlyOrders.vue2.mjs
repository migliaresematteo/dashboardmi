import { defineComponent, ref, watch, resolveComponent, mergeProps, withCtx, createTextVNode, toDisplayString, createVNode, createBlock, createCommentVNode, openBlock } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderStyle } from "vue/server-renderer";
import "./OrderDetailsModal.vue.mjs";
import { api } from "../../services/api.mjs";
import _sfc_main$1 from "./OrderDetailsModal.vue2.mjs";
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
export {
  _sfc_main as default
};
//# sourceMappingURL=MonthlyOrders.vue2.mjs.map
