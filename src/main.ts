import { App } from 'vue';
import { createVuetify } from 'vuetify'; // Remove VuetifyPlugin
import 'vuetify/styles'; // Import Vuetify styles
import '@mdi/font/css/materialdesignicons.css'; // Import Material Design Icons
import BaseButton from './components/BaseButton.vue'; // Import your component


const vuetify = createVuetify();

// Define your library plugin
const myComponentLibrary = {
  install(app: App) {
    app.use(vuetify); 
    app.component('MyButton', BaseButton); 
  },
};

// Export Vuetify instance and components
export { vuetify, BaseButton as MyButton };

// Export the library plugin as default
export default myComponentLibrary;