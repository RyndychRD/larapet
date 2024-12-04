import './bootstrap';

import {createApp} from 'vue';
import IncrementCounter from './components/IncrementCounter.vue';

const app = createApp({})
app.component("increment-counter", IncrementCounter)
app.mount('#app')
