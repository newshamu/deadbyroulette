import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: true,
    themes: {
      light: {
        primary: colors.blueGrey.base,
        secondary: colors.blueGrey.lighten4,
        accent: colors.cyan.darken2,
        error: colors.red.accent3
      },
      dark: {
        background: '#70481a',
        secondary: '#1a6d70',
        accent: '#1a701d',
        error: colors.red.accent3,
        primary: '#701d1a',
      }
    }
  }
});
