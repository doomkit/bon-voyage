import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserCircle, faUnlockAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import App from './app.vue';
import Dashboard from './pages/dashboard.vue';
import Login from './pages/login.vue';
import Registration from './pages/registration.vue';
import Trips from './pages/trips.vue';

library.add([faUserCircle, faUnlockAlt]);

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/dashboard',
			name: 'dashboard',
			component: Dashboard,
			children: [{ path: '/', component: Trips }],
		},
		{ path: '/login', component: Login },
		{ path: '/registration', component: Registration },
		{ path: '', redirect: { name: 'dashboard' } },
		{ path: '/:catchAll(.*)', redirect: { name: 'dashboard' } },
	],
});
const app = createApp(App);

app.use(router);
app.component('font-awesome-icon', FontAwesomeIcon);

router.isReady().then(() => {
	app.mount('#app');
});
