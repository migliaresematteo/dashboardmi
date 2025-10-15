import { createVuetify } from "../node_modules/vuetify/lib/framework.mjs";
/* empty css                                                     */
import * as index$1 from "../node_modules/vuetify/lib/components/index.mjs";
import * as index from "../node_modules/vuetify/lib/directives/index.mjs";
/* empty css                  */
import { PurpleTheme } from "../theme/LightTheme.mjs";
import { defineNuxtPlugin } from "../node_modules/nuxt/dist/app/nuxt.mjs";
const vuetify_hjFy4UiBVKu2U8_BW9ggkFzfvErKr3wFgTHpa6TF5Ds = defineNuxtPlugin(async (nuxtApp) => {
  const vuetify = createVuetify({
    components: index$1,
    directives: index,
    theme: {
      defaultTheme: "PurpleTheme",
      themes: {
        PurpleTheme
      }
    }
  });
  nuxtApp.vueApp.use(vuetify);
});
export {
  vuetify_hjFy4UiBVKu2U8_BW9ggkFzfvErKr3wFgTHpa6TF5Ds as default
};
//# sourceMappingURL=vuetify.mjs.map
