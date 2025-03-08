import { App } from "vue";
import vuetify from "../plugins/vuetify";
import { BaseButton } from "..";

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