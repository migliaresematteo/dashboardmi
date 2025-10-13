import { defineComponent, ref, computed, resolveComponent, withCtx, createTextVNode, createVNode, mergeProps, createBlock, createCommentVNode, toDisplayString, openBlock, Fragment, renderList } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "PostalCodeDeliveries",
  __ssrInlineRender: true,
  setup(__props) {
    const isLoading = ref(true);
    const search = ref("");
    const postalCodeDeliveries = ref([]);
    const lastUpdate = ref("");
    const selectedTimeSlot = ref("Tutte");
    const timeSlots = ["08:00-10:00", "10:00-12:00", "12:00-14:00", "14:00-16:00", "16:00-18:00", "18:00-20:00"];
    const isAllTimeSlots = computed(() => selectedTimeSlot.value === "Tutte");
    const filteredData = computed(() => {
      if (isAllTimeSlots.value) {
        return postalCodeDeliveries.value.map((pc) => {
          const totalOnTime = pc.deliveries.reduce((sum, slot) => sum + slot.onTime, 0);
          return {
            postalCode: pc.postalCode,
            zone: pc.zone,
            deliveryCount: pc.totalDeliveries,
            onTimeCount: totalOnTime,
            onTimePercentage: pc.totalDeliveries > 0 ? totalOnTime / pc.totalDeliveries * 100 : 0,
            averageTime: pc.averageTime
          };
        }).sort((a, b) => b.deliveryCount - a.deliveryCount);
      } else {
        return postalCodeDeliveries.value.map((pc) => {
          const slotData = pc.deliveries.find((d) => d.timeSlot === selectedTimeSlot.value) || { count: 0, onTime: 0 };
          return {
            postalCode: pc.postalCode,
            zone: pc.zone,
            deliveryCount: slotData.count,
            onTimeCount: slotData.onTime,
            onTimePercentage: slotData.count > 0 ? slotData.onTime / slotData.count * 100 : 0,
            averageTime: pc.averageTime,
            timeSlot: selectedTimeSlot.value
          };
        }).sort((a, b) => b.deliveryCount - a.deliveryCount);
      }
    });
    const slotTotals = computed(() => {
      const totals = filteredData.value.reduce((acc, item) => {
        acc.totalDeliveries += item.deliveryCount;
        acc.onTime += item.onTimeCount;
        return acc;
      }, { totalDeliveries: 0, onTime: 0 });
      const averageTime = postalCodeDeliveries.value.length > 0 ? Math.round(postalCodeDeliveries.value.reduce((acc, pc) => acc + pc.averageTime, 0) / postalCodeDeliveries.value.length) : 0;
      return {
        totalDeliveries: totals.totalDeliveries,
        onTime: totals.onTime,
        late: totals.totalDeliveries - totals.onTime,
        averageTime,
        onTimePercentage: totals.totalDeliveries > 0 ? totals.onTime / totals.totalDeliveries * 100 : 0
      };
    });
    const dynamicHeaders = computed(() => {
      const baseHeaders = [
        { title: "CAP", key: "postalCode", align: "start" },
        { title: "Zona", key: "zone" }
      ];
      if (isAllTimeSlots.value) {
        return [
          ...baseHeaders,
          { title: "Totale Consegne", key: "deliveryCount", align: "center" },
          { title: "Puntualità", key: "onTimePercentage", align: "center" },
          { title: "Tempo Medio", key: "averageTime", align: "end", class: "d-none d-md-table-cell" }
        ];
      }
      return [
        ...baseHeaders,
        { title: "Fascia Oraria", key: "timeSlot", class: "d-none d-sm-table-cell" },
        { title: "Consegne", key: "deliveryCount", align: "center" },
        { title: "Puntualità", key: "onTimePercentage", align: "center" },
        { title: "Tempo Medio", key: "averageTime", align: "end", class: "d-none d-md-table-cell" }
      ];
    });
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
      const _component_v_menu = resolveComponent("v-menu");
      const _component_v_btn = resolveComponent("v-btn");
      const _component_v_list = resolveComponent("v-list");
      const _component_v_list_item = resolveComponent("v-list-item");
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      const _component_v_progress_linear = resolveComponent("v-progress-linear");
      const _component_v_divider = resolveComponent("v-divider");
      const _component_v_text_field = resolveComponent("v-text-field");
      const _component_v_data_table = resolveComponent("v-data-table");
      const _component_v_skeleton_loader = resolveComponent("v-skeleton-loader");
      const _component_v_chip = resolveComponent("v-chip");
      _push(ssrRenderComponent(_component_v_card, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_card_item, { class: "pa-4 pa-md-6" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="d-flex flex-wrap align-center gap-4" data-v-780abc11${_scopeId2}><div data-v-780abc11${_scopeId2}><h2 class="text-h5" data-v-780abc11${_scopeId2}>Analisi Consegne per CAP</h2><p class="text-subtitle-1 text-medium-emphasis" data-v-780abc11${_scopeId2}>Dati aggregati per codice postale e fasce orarie</p></div>`);
                  _push3(ssrRenderComponent(_component_v_spacer, null, null, _parent3, _scopeId2));
                  _push3(`<div class="d-flex flex-wrap align-center gap-2" data-v-780abc11${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_v_select, {
                    modelValue: selectedTimeSlot.value,
                    "onUpdate:modelValue": ($event) => selectedTimeSlot.value = $event,
                    items: ["Tutte", ...timeSlots],
                    label: "Fascia Oraria",
                    density: "compact",
                    variant: "outlined",
                    "hide-details": "",
                    style: { "min-width": "160px" }
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
                        _push4(`<!--[-->`);
                        ssrRenderList([
                          { label: "Totale Consegne", value: slotTotals.value.totalDeliveries, color: "primary" },
                          { label: "Puntuali", value: slotTotals.value.onTime, color: "success" },
                          { label: "In Ritardo", value: slotTotals.value.late, color: "error" },
                          { label: "Puntualità %", value: slotTotals.value.onTimePercentage, isPercentage: true }
                        ], (item, i) => {
                          _push4(ssrRenderComponent(_component_v_col, {
                            key: i,
                            cols: "12",
                            sm: "6",
                            md: "3"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_v_card, {
                                  variant: "tonal",
                                  color: item.color,
                                  class: "d-flex flex-column pa-4 text-center h-100"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`<div class="text-h4 font-weight-bold" data-v-780abc11${_scopeId5}>${ssrInterpolate(item.isPercentage ? `${item.value.toFixed(1)}%` : item.value)}</div><div class="text-body-1" data-v-780abc11${_scopeId5}>${ssrInterpolate(item.label)}</div>`);
                                      if (item.isPercentage) {
                                        _push6(`<!--[-->`);
                                        _push6(ssrRenderComponent(_component_v_spacer, null, null, _parent6, _scopeId5));
                                        _push6(ssrRenderComponent(_component_v_progress_linear, {
                                          "model-value": item.value,
                                          color: getProgressBarColor(item.value),
                                          height: "6",
                                          rounded: "",
                                          class: "mt-2"
                                        }, null, _parent6, _scopeId5));
                                        _push6(`<!--]-->`);
                                      } else {
                                        _push6(`<!---->`);
                                      }
                                    } else {
                                      return [
                                        createVNode("div", { class: "text-h4 font-weight-bold" }, toDisplayString(item.isPercentage ? `${item.value.toFixed(1)}%` : item.value), 1),
                                        createVNode("div", { class: "text-body-1" }, toDisplayString(item.label), 1),
                                        item.isPercentage ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                                          createVNode(_component_v_spacer),
                                          createVNode(_component_v_progress_linear, {
                                            "model-value": item.value,
                                            color: getProgressBarColor(item.value),
                                            height: "6",
                                            rounded: "",
                                            class: "mt-2"
                                          }, null, 8, ["model-value", "color"])
                                        ], 64)) : createCommentVNode("", true)
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
                                    class: "d-flex flex-column pa-4 text-center h-100"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "text-h4 font-weight-bold" }, toDisplayString(item.isPercentage ? `${item.value.toFixed(1)}%` : item.value), 1),
                                      createVNode("div", { class: "text-body-1" }, toDisplayString(item.label), 1),
                                      item.isPercentage ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                                        createVNode(_component_v_spacer),
                                        createVNode(_component_v_progress_linear, {
                                          "model-value": item.value,
                                          color: getProgressBarColor(item.value),
                                          height: "6",
                                          rounded: "",
                                          class: "mt-2"
                                        }, null, 8, ["model-value", "color"])
                                      ], 64)) : createCommentVNode("", true)
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
                            { label: "Totale Consegne", value: slotTotals.value.totalDeliveries, color: "primary" },
                            { label: "Puntuali", value: slotTotals.value.onTime, color: "success" },
                            { label: "In Ritardo", value: slotTotals.value.late, color: "error" },
                            { label: "Puntualità %", value: slotTotals.value.onTimePercentage, isPercentage: true }
                          ], (item, i) => {
                            return openBlock(), createBlock(_component_v_col, {
                              key: i,
                              cols: "12",
                              sm: "6",
                              md: "3"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_card, {
                                  variant: "tonal",
                                  color: item.color,
                                  class: "d-flex flex-column pa-4 text-center h-100"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "text-h4 font-weight-bold" }, toDisplayString(item.isPercentage ? `${item.value.toFixed(1)}%` : item.value), 1),
                                    createVNode("div", { class: "text-body-1" }, toDisplayString(item.label), 1),
                                    item.isPercentage ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                                      createVNode(_component_v_spacer),
                                      createVNode(_component_v_progress_linear, {
                                        "model-value": item.value,
                                        color: getProgressBarColor(item.value),
                                        height: "6",
                                        rounded: "",
                                        class: "mt-2"
                                      }, null, 8, ["model-value", "color"])
                                    ], 64)) : createCommentVNode("", true)
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
                        createVNode("h2", { class: "text-h5" }, "Analisi Consegne per CAP"),
                        createVNode("p", { class: "text-subtitle-1 text-medium-emphasis" }, "Dati aggregati per codice postale e fasce orarie")
                      ]),
                      createVNode(_component_v_spacer),
                      createVNode("div", { class: "d-flex flex-wrap align-center gap-2" }, [
                        createVNode(_component_v_select, {
                          modelValue: selectedTimeSlot.value,
                          "onUpdate:modelValue": ($event) => selectedTimeSlot.value = $event,
                          items: ["Tutte", ...timeSlots],
                          label: "Fascia Oraria",
                          density: "compact",
                          variant: "outlined",
                          "hide-details": "",
                          style: { "min-width": "160px" }
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
                        (openBlock(true), createBlock(Fragment, null, renderList([
                          { label: "Totale Consegne", value: slotTotals.value.totalDeliveries, color: "primary" },
                          { label: "Puntuali", value: slotTotals.value.onTime, color: "success" },
                          { label: "In Ritardo", value: slotTotals.value.late, color: "error" },
                          { label: "Puntualità %", value: slotTotals.value.onTimePercentage, isPercentage: true }
                        ], (item, i) => {
                          return openBlock(), createBlock(_component_v_col, {
                            key: i,
                            cols: "12",
                            sm: "6",
                            md: "3"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_card, {
                                variant: "tonal",
                                color: item.color,
                                class: "d-flex flex-column pa-4 text-center h-100"
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "text-h4 font-weight-bold" }, toDisplayString(item.isPercentage ? `${item.value.toFixed(1)}%` : item.value), 1),
                                  createVNode("div", { class: "text-body-1" }, toDisplayString(item.label), 1),
                                  item.isPercentage ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                                    createVNode(_component_v_spacer),
                                    createVNode(_component_v_progress_linear, {
                                      "model-value": item.value,
                                      color: getProgressBarColor(item.value),
                                      height: "6",
                                      rounded: "",
                                      class: "mt-2"
                                    }, null, 8, ["model-value", "color"])
                                  ], 64)) : createCommentVNode("", true)
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
              label: "Cerca per CAP o zona...",
              "prepend-inner-icon": "mdi-magnify",
              variant: "solo-filled",
              flat: "",
              "hide-details": "",
              "single-line": ""
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_data_table, {
              headers: dynamicHeaders.value,
              items: filteredData.value,
              search: search.value,
              loading: isLoading.value,
              "item-value": "postalCode",
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
              "item.onTimePercentage": withCtx(({ value }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_chip, {
                    color: getProgressBarColor(value),
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
                      color: getProgressBarColor(value),
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
              "item.averageTime": withCtx(({ value }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(value)} min `);
                } else {
                  return [
                    createTextVNode(toDisplayString(value) + " min ", 1)
                  ];
                }
              }),
              "no-data": withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="pa-4 text-center" data-v-780abc11${_scopeId2}>Nessun dato trovato.</div>`);
                } else {
                  return [
                    createVNode("div", { class: "pa-4 text-center" }, "Nessun dato trovato.")
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
                      createVNode("h2", { class: "text-h5" }, "Analisi Consegne per CAP"),
                      createVNode("p", { class: "text-subtitle-1 text-medium-emphasis" }, "Dati aggregati per codice postale e fasce orarie")
                    ]),
                    createVNode(_component_v_spacer),
                    createVNode("div", { class: "d-flex flex-wrap align-center gap-2" }, [
                      createVNode(_component_v_select, {
                        modelValue: selectedTimeSlot.value,
                        "onUpdate:modelValue": ($event) => selectedTimeSlot.value = $event,
                        items: ["Tutte", ...timeSlots],
                        label: "Fascia Oraria",
                        density: "compact",
                        variant: "outlined",
                        "hide-details": "",
                        style: { "min-width": "160px" }
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
                      (openBlock(true), createBlock(Fragment, null, renderList([
                        { label: "Totale Consegne", value: slotTotals.value.totalDeliveries, color: "primary" },
                        { label: "Puntuali", value: slotTotals.value.onTime, color: "success" },
                        { label: "In Ritardo", value: slotTotals.value.late, color: "error" },
                        { label: "Puntualità %", value: slotTotals.value.onTimePercentage, isPercentage: true }
                      ], (item, i) => {
                        return openBlock(), createBlock(_component_v_col, {
                          key: i,
                          cols: "12",
                          sm: "6",
                          md: "3"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_card, {
                              variant: "tonal",
                              color: item.color,
                              class: "d-flex flex-column pa-4 text-center h-100"
                            }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "text-h4 font-weight-bold" }, toDisplayString(item.isPercentage ? `${item.value.toFixed(1)}%` : item.value), 1),
                                createVNode("div", { class: "text-body-1" }, toDisplayString(item.label), 1),
                                item.isPercentage ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                                  createVNode(_component_v_spacer),
                                  createVNode(_component_v_progress_linear, {
                                    "model-value": item.value,
                                    color: getProgressBarColor(item.value),
                                    height: "6",
                                    rounded: "",
                                    class: "mt-2"
                                  }, null, 8, ["model-value", "color"])
                                ], 64)) : createCommentVNode("", true)
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
                label: "Cerca per CAP o zona...",
                "prepend-inner-icon": "mdi-magnify",
                variant: "solo-filled",
                flat: "",
                "hide-details": "",
                "single-line": ""
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode(_component_v_data_table, {
                headers: dynamicHeaders.value,
                items: filteredData.value,
                search: search.value,
                loading: isLoading.value,
                "item-value": "postalCode",
                class: "elevation-0"
              }, {
                loading: withCtx(() => [
                  createVNode(_component_v_skeleton_loader, { type: "table-row@5" })
                ]),
                "item.onTimePercentage": withCtx(({ value }) => [
                  createVNode(_component_v_chip, {
                    color: getProgressBarColor(value),
                    size: "small",
                    class: "font-weight-bold"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(value.toFixed(1)) + "% ", 1)
                    ]),
                    _: 2
                  }, 1032, ["color"])
                ]),
                "item.averageTime": withCtx(({ value }) => [
                  createTextVNode(toDisplayString(value) + " min ", 1)
                ]),
                "no-data": withCtx(() => [
                  createVNode("div", { class: "pa-4 text-center" }, "Nessun dato trovato.")
                ]),
                _: 1
              }, 8, ["headers", "items", "search", "loading"])
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
//# sourceMappingURL=PostalCodeDeliveries.vue2.mjs.map
