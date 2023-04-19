import { createApp } from 'vue'
import App from './App.vue'

import './assets/main.css'

//PrimeVue
import PrimeVue from 'primevue/config';
//import "primevue/resources/themes/lara-light-indigo/theme.css"; //theme
//import "primevue/resources/themes/arya-orange/theme.css";
import "primevue/resources/themes/bootstrap4-light-blue/theme.css"
import "primevue/resources/primevue.min.css"; //core
import "primeicons/primeicons.css"; //icons
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import Checkbox from 'primevue/checkbox';
import  i18n from '../src/locales/i18n'
import router from './router'


const app = createApp(App);
//inyectamos
app.component('pv-button', Button);
app.component('pv-input-text', InputText);
app.component('pv-check-box',Checkbox)
app.use(PrimeVue);
app.use(i18n);
app.use(router);

app.mount('#app');
