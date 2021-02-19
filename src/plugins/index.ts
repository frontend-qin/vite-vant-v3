import { createApp } from 'vue';
import { Button } from 'vant';
import App from '@/App.vue';

const app = createApp(App);
app.use(Button);
app.mount('#app');
