import { createApp } from 'vue';
import App from './App.vue';
import store from '../src/components/store'
import 'font-awesome/css/font-awesome.min.css';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
library.add(faUserSecret)
const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(store);
app.mount('#app');