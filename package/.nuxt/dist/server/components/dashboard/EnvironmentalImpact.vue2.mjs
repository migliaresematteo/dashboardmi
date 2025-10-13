import { defineComponent, ref, computed, resolveComponent, withCtx, createTextVNode, createVNode, mergeProps, toDisplayString, createBlock, openBlock, Fragment, renderList } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "EnvironmentalImpact",
  __ssrInlineRender: true,
  setup(__props) {
    const isLoading = ref(true);
    const search = ref("");
    const environmentalData = ref([]);
    const lastUpdate = ref("");
    const years = computed(() => [...new Set(environmentalData.value.map((d) => d.year))]);
    const selectedYear = ref((/* @__PURE__ */ new Date()).getFullYear());
    const filteredData = computed(
      () => environmentalData.value.filter((d) => d.year === selectedYear.value)
    );
    const kpiConfig = [
      { key: "co2Saved", label: "CO2 Risparmiata", unit: "kg", icon: "mdi-molecule-co2", color: "success", type: "sum" },
      { key: "plasticSaved", label: "Plastica Risparmiata", unit: "kg", icon: "mdi-recycle-variant", color: "info", type: "sum" },
      { key: "waterSaved", label: "Acqua Risparmiata", unit: "L", icon: "mdi-water-outline", color: "primary", type: "sum" },
      { key: "localProducts", label: "Prodotti Locali", unit: "%", icon: "mdi-map-marker-outline", color: "teal", type: "avg" },
      { key: "organicProducts", label: "Prodotti Biologici", unit: "%", icon: "mdi-leaf-outline", color: "green", type: "avg" },
      { key: "deliveryDistance", label: "Distanza Consegne", unit: "km", icon: "mdi-truck-outline", color: "warning", type: "sum" },
      { key: "deliveryEmissions", label: "Emissioni Consegne", unit: "kg CO₂", icon: "mdi-factory", color: "error", type: "sum" }
    ];
    const kpiTotals = computed(() => {
      const data = environmentalData.value;
      if (data.length === 0) return [];
      return kpiConfig.map((kpi) => {
        let value = 0;
        if (kpi.type === "sum") {
          value = data.reduce((acc, item) => acc + item[kpi.key], 0);
        } else if (kpi.type === "avg") {
          value = data.reduce((acc, item) => acc + item[kpi.key], 0) / data.length;
        }
        return { ...kpi, value };
      });
    });
    const headers = [
      { title: "Mese", key: "month", align: "start" },
      { title: "CO₂ Risparm. (kg)", key: "co2Saved", align: "end" },
      { title: "Plastica (kg)", key: "plasticSaved", align: "end" },
      { title: "Acqua (L)", key: "waterSaved", align: "end" },
      { title: "Prod. Locali (%)", key: "localProducts", align: "end" },
      { title: "Prod. Bio (%)", key: "organicProducts", align: "end", class: "d-none d-sm-table-cell" },
      { title: "Distanza (km)", key: "deliveryDistance", align: "end", class: "d-none d-md-table-cell" },
      { title: "Emissioni (kg CO₂)", key: "deliveryEmissions", align: "end", class: "d-none d-md-table-cell" }
    ];
    const formatMetric = (value, unit) => `${unit === "%" ? value.toFixed(1) : value.toLocaleString("it-IT")} ${unit}`;
    const exportToCSV = () => {
    };
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
      const _component_v_avatar = resolveComponent("v-avatar");
      const _component_v_divider = resolveComponent("v-divider");
      const _component_v_card_title = resolveComponent("v-card-title");
      const _component_v_text_field = resolveComponent("v-text-field");
      const _component_v_data_table = resolveComponent("v-data-table");
      const _component_v_skeleton_loader = resolveComponent("v-skeleton-loader");
      _push(ssrRenderComponent(_component_v_card, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_card_item, { class: "pa-4 pa-md-6" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="d-flex flex-wrap align-center gap-4" data-v-2096c103${_scopeId2}><div data-v-2096c103${_scopeId2}><h2 class="text-h5" data-v-2096c103${_scopeId2}>Dashboard Impatto Ambientale</h2><p class="text-subtitle-1 text-medium-emphasis" data-v-2096c103${_scopeId2}>Metriche di sostenibilità aggregate e mensili</p></div>`);
                  _push3(ssrRenderComponent(_component_v_spacer, null, null, _parent3, _scopeId2));
                  _push3(`<div class="d-flex flex-wrap align-center gap-2" data-v-2096c103${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_v_select, {
                    modelValue: selectedYear.value,
                    "onUpdate:modelValue": ($event) => selectedYear.value = $event,
                    items: years.value,
                    label: "Anno",
                    density: "compact",
                    variant: "outlined",
                    "hide-details": "",
                    style: { "min-width": "120px" }
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
                        ssrRenderList(kpiTotals.value, (kpi) => {
                          _push4(ssrRenderComponent(_component_v_col, {
                            key: kpi.key,
                            cols: "12",
                            sm: "6",
                            md: "4",
                            lg: "3"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_v_card, {
                                  variant: "tonal",
                                  color: kpi.color,
                                  class: "pa-3 h-100"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`<div class="d-flex align-center" data-v-2096c103${_scopeId5}>`);
                                      _push6(ssrRenderComponent(_component_v_avatar, {
                                        icon: kpi.icon,
                                        color: kpi.color,
                                        variant: "tonal",
                                        size: "40",
                                        class: "me-3"
                                      }, null, _parent6, _scopeId5));
                                      _push6(`<div data-v-2096c103${_scopeId5}><div class="text-overline" data-v-2096c103${_scopeId5}>${ssrInterpolate(kpi.label)}</div><div class="text-h5 font-weight-bold" data-v-2096c103${_scopeId5}>${ssrInterpolate(formatMetric(kpi.value, kpi.unit))}</div></div></div>`);
                                    } else {
                                      return [
                                        createVNode("div", { class: "d-flex align-center" }, [
                                          createVNode(_component_v_avatar, {
                                            icon: kpi.icon,
                                            color: kpi.color,
                                            variant: "tonal",
                                            size: "40",
                                            class: "me-3"
                                          }, null, 8, ["icon", "color"]),
                                          createVNode("div", null, [
                                            createVNode("div", { class: "text-overline" }, toDisplayString(kpi.label), 1),
                                            createVNode("div", { class: "text-h5 font-weight-bold" }, toDisplayString(formatMetric(kpi.value, kpi.unit)), 1)
                                          ])
                                        ])
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_v_card, {
                                    variant: "tonal",
                                    color: kpi.color,
                                    class: "pa-3 h-100"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "d-flex align-center" }, [
                                        createVNode(_component_v_avatar, {
                                          icon: kpi.icon,
                                          color: kpi.color,
                                          variant: "tonal",
                                          size: "40",
                                          class: "me-3"
                                        }, null, 8, ["icon", "color"]),
                                        createVNode("div", null, [
                                          createVNode("div", { class: "text-overline" }, toDisplayString(kpi.label), 1),
                                          createVNode("div", { class: "text-h5 font-weight-bold" }, toDisplayString(formatMetric(kpi.value, kpi.unit)), 1)
                                        ])
                                      ])
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
                          (openBlock(true), createBlock(Fragment, null, renderList(kpiTotals.value, (kpi) => {
                            return openBlock(), createBlock(_component_v_col, {
                              key: kpi.key,
                              cols: "12",
                              sm: "6",
                              md: "4",
                              lg: "3"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_card, {
                                  variant: "tonal",
                                  color: kpi.color,
                                  class: "pa-3 h-100"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "d-flex align-center" }, [
                                      createVNode(_component_v_avatar, {
                                        icon: kpi.icon,
                                        color: kpi.color,
                                        variant: "tonal",
                                        size: "40",
                                        class: "me-3"
                                      }, null, 8, ["icon", "color"]),
                                      createVNode("div", null, [
                                        createVNode("div", { class: "text-overline" }, toDisplayString(kpi.label), 1),
                                        createVNode("div", { class: "text-h5 font-weight-bold" }, toDisplayString(formatMetric(kpi.value, kpi.unit)), 1)
                                      ])
                                    ])
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
                        createVNode("h2", { class: "text-h5" }, "Dashboard Impatto Ambientale"),
                        createVNode("p", { class: "text-subtitle-1 text-medium-emphasis" }, "Metriche di sostenibilità aggregate e mensili")
                      ]),
                      createVNode(_component_v_spacer),
                      createVNode("div", { class: "d-flex flex-wrap align-center gap-2" }, [
                        createVNode(_component_v_select, {
                          modelValue: selectedYear.value,
                          "onUpdate:modelValue": ($event) => selectedYear.value = $event,
                          items: years.value,
                          label: "Anno",
                          density: "compact",
                          variant: "outlined",
                          "hide-details": "",
                          style: { "min-width": "120px" }
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
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
                        (openBlock(true), createBlock(Fragment, null, renderList(kpiTotals.value, (kpi) => {
                          return openBlock(), createBlock(_component_v_col, {
                            key: kpi.key,
                            cols: "12",
                            sm: "6",
                            md: "4",
                            lg: "3"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_card, {
                                variant: "tonal",
                                color: kpi.color,
                                class: "pa-3 h-100"
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "d-flex align-center" }, [
                                    createVNode(_component_v_avatar, {
                                      icon: kpi.icon,
                                      color: kpi.color,
                                      variant: "tonal",
                                      size: "40",
                                      class: "me-3"
                                    }, null, 8, ["icon", "color"]),
                                    createVNode("div", null, [
                                      createVNode("div", { class: "text-overline" }, toDisplayString(kpi.label), 1),
                                      createVNode("div", { class: "text-h5 font-weight-bold" }, toDisplayString(formatMetric(kpi.value, kpi.unit)), 1)
                                    ])
                                  ])
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
            _push2(ssrRenderComponent(_component_v_card_title, { class: "d-flex align-center" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<h3 class="text-h6" data-v-2096c103${_scopeId2}>Dettaglio Mensile per l&#39;anno ${ssrInterpolate(selectedYear.value)}</h3>`);
                  _push3(ssrRenderComponent(_component_v_spacer, null, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_text_field, {
                    modelValue: search.value,
                    "onUpdate:modelValue": ($event) => search.value = $event,
                    label: "Cerca mese...",
                    "prepend-inner-icon": "mdi-magnify",
                    variant: "outlined",
                    density: "compact",
                    "hide-details": "",
                    style: { "max-width": "250px" }
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode("h3", { class: "text-h6" }, "Dettaglio Mensile per l'anno " + toDisplayString(selectedYear.value), 1),
                    createVNode(_component_v_spacer),
                    createVNode(_component_v_text_field, {
                      modelValue: search.value,
                      "onUpdate:modelValue": ($event) => search.value = $event,
                      label: "Cerca mese...",
                      "prepend-inner-icon": "mdi-magnify",
                      variant: "outlined",
                      density: "compact",
                      "hide-details": "",
                      style: { "max-width": "250px" }
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_data_table, {
              headers,
              items: filteredData.value,
              search: search.value,
              loading: isLoading.value,
              "item-value": "month",
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
              "item.co2Saved": withCtx(({ value }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(value.toLocaleString("it-IT"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(value.toLocaleString("it-IT")), 1)
                  ];
                }
              }),
              "item.plasticSaved": withCtx(({ value }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(value.toLocaleString("it-IT"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(value.toLocaleString("it-IT")), 1)
                  ];
                }
              }),
              "item.waterSaved": withCtx(({ value }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(value.toLocaleString("it-IT"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(value.toLocaleString("it-IT")), 1)
                  ];
                }
              }),
              "item.localProducts": withCtx(({ value }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(value)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(value), 1)
                  ];
                }
              }),
              "item.organicProducts": withCtx(({ value }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(value)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(value), 1)
                  ];
                }
              }),
              "item.deliveryDistance": withCtx(({ value }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(value.toLocaleString("it-IT"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(value.toLocaleString("it-IT")), 1)
                  ];
                }
              }),
              "item.deliveryEmissions": withCtx(({ value }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(value.toLocaleString("it-IT"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(value.toLocaleString("it-IT")), 1)
                  ];
                }
              }),
              "no-data": withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="pa-4 text-center" data-v-2096c103${_scopeId2}>Nessun dato trovato per l&#39;anno selezionato.</div>`);
                } else {
                  return [
                    createVNode("div", { class: "pa-4 text-center" }, "Nessun dato trovato per l'anno selezionato.")
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
                      createVNode("h2", { class: "text-h5" }, "Dashboard Impatto Ambientale"),
                      createVNode("p", { class: "text-subtitle-1 text-medium-emphasis" }, "Metriche di sostenibilità aggregate e mensili")
                    ]),
                    createVNode(_component_v_spacer),
                    createVNode("div", { class: "d-flex flex-wrap align-center gap-2" }, [
                      createVNode(_component_v_select, {
                        modelValue: selectedYear.value,
                        "onUpdate:modelValue": ($event) => selectedYear.value = $event,
                        items: years.value,
                        label: "Anno",
                        density: "compact",
                        variant: "outlined",
                        "hide-details": "",
                        style: { "min-width": "120px" }
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
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
                      (openBlock(true), createBlock(Fragment, null, renderList(kpiTotals.value, (kpi) => {
                        return openBlock(), createBlock(_component_v_col, {
                          key: kpi.key,
                          cols: "12",
                          sm: "6",
                          md: "4",
                          lg: "3"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_card, {
                              variant: "tonal",
                              color: kpi.color,
                              class: "pa-3 h-100"
                            }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "d-flex align-center" }, [
                                  createVNode(_component_v_avatar, {
                                    icon: kpi.icon,
                                    color: kpi.color,
                                    variant: "tonal",
                                    size: "40",
                                    class: "me-3"
                                  }, null, 8, ["icon", "color"]),
                                  createVNode("div", null, [
                                    createVNode("div", { class: "text-overline" }, toDisplayString(kpi.label), 1),
                                    createVNode("div", { class: "text-h5 font-weight-bold" }, toDisplayString(formatMetric(kpi.value, kpi.unit)), 1)
                                  ])
                                ])
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
              createVNode(_component_v_card_title, { class: "d-flex align-center" }, {
                default: withCtx(() => [
                  createVNode("h3", { class: "text-h6" }, "Dettaglio Mensile per l'anno " + toDisplayString(selectedYear.value), 1),
                  createVNode(_component_v_spacer),
                  createVNode(_component_v_text_field, {
                    modelValue: search.value,
                    "onUpdate:modelValue": ($event) => search.value = $event,
                    label: "Cerca mese...",
                    "prepend-inner-icon": "mdi-magnify",
                    variant: "outlined",
                    density: "compact",
                    "hide-details": "",
                    style: { "max-width": "250px" }
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              createVNode(_component_v_data_table, {
                headers,
                items: filteredData.value,
                search: search.value,
                loading: isLoading.value,
                "item-value": "month",
                class: "elevation-0"
              }, {
                loading: withCtx(() => [
                  createVNode(_component_v_skeleton_loader, { type: "table-row@5" })
                ]),
                "item.co2Saved": withCtx(({ value }) => [
                  createTextVNode(toDisplayString(value.toLocaleString("it-IT")), 1)
                ]),
                "item.plasticSaved": withCtx(({ value }) => [
                  createTextVNode(toDisplayString(value.toLocaleString("it-IT")), 1)
                ]),
                "item.waterSaved": withCtx(({ value }) => [
                  createTextVNode(toDisplayString(value.toLocaleString("it-IT")), 1)
                ]),
                "item.localProducts": withCtx(({ value }) => [
                  createTextVNode(toDisplayString(value), 1)
                ]),
                "item.organicProducts": withCtx(({ value }) => [
                  createTextVNode(toDisplayString(value), 1)
                ]),
                "item.deliveryDistance": withCtx(({ value }) => [
                  createTextVNode(toDisplayString(value.toLocaleString("it-IT")), 1)
                ]),
                "item.deliveryEmissions": withCtx(({ value }) => [
                  createTextVNode(toDisplayString(value.toLocaleString("it-IT")), 1)
                ]),
                "no-data": withCtx(() => [
                  createVNode("div", { class: "pa-4 text-center" }, "Nessun dato trovato per l'anno selezionato.")
                ]),
                _: 2
              }, 1032, ["items", "search", "loading"])
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
//# sourceMappingURL=EnvironmentalImpact.vue2.mjs.map
