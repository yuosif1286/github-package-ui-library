import { createApp } from 'vue';
import App from './App.vue';
import { createVuetify } from 'vuetify';
import 'vuetify/styles'; // Import Vuetify styles
import '@mdi/font/css/materialdesignicons.css'; // Import Material Design Icons
import {BaseButton} from './index';

const vuetify = createVuetify();
const myComponentLibrary= {
    install:(app:any)=>{
        app.component('MyButton',BaseButton)
    }
}

export {vuetify,BaseButton as MyButton}
// createApp(App).use(vuetify).mount('#app');
