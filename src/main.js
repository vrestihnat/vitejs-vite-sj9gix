import { createApp } from 'vue';
import App from './App.vue';
//import './index.css'
import WaveUI from 'wave-ui/src/wave-ui';

const app = createApp(App);

new WaveUI(app, {
  // Some Wave UI options.
});

app.mount('#app');
