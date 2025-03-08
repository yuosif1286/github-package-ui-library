import { App, createApp } from 'vue';
import  vuetify  from './plugins/vuetify'; 
import 'vuetify/styles'; // Import Vuetify styles
import '@mdi/font/css/materialdesignicons.css'; // Import Material Design Icons
import BaseButton from './components/BaseButton.vue'; // Import your component
import App1 from './App.vue';



// Define your library plugin
const myComponentLibrary = {
  install(app: App) {
    app.use(vuetify); 
    app.component('MyButton', BaseButton); 
  },
};

createApp(App1).use(vuetify).use(myComponentLibrary).mount('#app');
// Export Vuetify instance and components
export { vuetify, BaseButton as MyButton };

// Export the library plugin as default
export default myComponentLibrary;

