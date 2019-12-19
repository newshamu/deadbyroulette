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
        primary: '#170626',
        secondary: '#260615',
        accent: '#274343',
        error: colors.red.accent3,
        background: '#261706'
      }
    }
  }
});
