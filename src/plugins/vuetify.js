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
        background: '#3d2f2f',
        primary: '#701d1a',
        secondary: '#8d3228',
        accent: '#4f000a',
        error: colors.red.accent3,
        activebtn: '#4f000a'
      }
    }
  }
});
