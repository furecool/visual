import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
          light: {
            // primary: "#aaa",
            // secondary: '#dd8a00',
            // accent: '#3f51b5',
            // error: '#b71c1c',
          },
        },
      },
      breakpoint: {
        mobileBreakpoint: 'xl'
      },  
});
