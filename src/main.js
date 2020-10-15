import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import Home from './pages/home.vue';
import Login from './pages/login.vue';
import Registration from './pages/registration.vue';

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{ path: '/', component: Home },
		{ path: '/login', component: Login },
		{ path: '/registration', component: Registration },
	],
});
const app = createApp(App);

app.use(router);

router.isReady().then(() => {
	app.mount('#app');
});
