import { createApp } from 'vue';
import { Button } from 'vant';
import App from '@/App.vue';
import router from '../router';

const app = createApp(App);

app.use(router).use(Button);

app.mount('#app');
