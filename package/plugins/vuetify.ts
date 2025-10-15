
import { createVuetify } from 'vuetify';
import '@mdi/font/css/materialdesignicons.css';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
// import PerfectScrollbar from 'vue3-perfect-scrollbar';
// import VueApexCharts from 'vue3-apexcharts';
// import VueTablerIcons from 'vue-tabler-icons';
import '@/scss/style.scss';
import { PurpleTheme } from '@/theme/LightTheme';

export default defineNuxtPlugin(async (nuxtApp) => {
  const vuetify = createVuetify({
    components,
    directives,
    theme: {
      defaultTheme: 'PurpleTheme',
      themes: {
        PurpleTheme,
      },
    },
  });
  nuxtApp.vueApp.use(vuetify);

  if (process.client) {
    const PerfectScrollbar = await import('vue3-perfect-scrollbar');
    const VueApexCharts = await import('vue3-apexcharts');
    const VueTablerIcons = await import('vue-tabler-icons');

    nuxtApp.vueApp.use(PerfectScrollbar.default);
    nuxtApp.vueApp.use(VueApexCharts.default);
    nuxtApp.vueApp.use(VueTablerIcons.default);
  }
});

