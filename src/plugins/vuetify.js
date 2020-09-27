import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#00000',
        secondary: '#b0bec5',
        accent: '#8c9eff',
        error: '#b71c1c',
      },
      dark: {
        primary: '#1b1d2a',
        secondary: '#ffffff',
        accent: '#8c9eff',
        error: '#b71c1c',
        background: '#1b1d2a'
      },
    },
  },
});
