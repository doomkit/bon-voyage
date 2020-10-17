import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import Axios from 'axios';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
	faUserCircle,
	faUnlockAlt,
	faSignInAlt,
	faEnvelope,
} from '@fortawesome/free-solid-svg-icons';

import App from './app.vue';
import Dashboard from './pages/dashboard.vue';
import Login from './pages/login.vue';
import Registration from './pages/registration.vue';
import Trips from './pages/trips.vue';

library.add([faUserCircle, faUnlockAlt, faSignInAlt, faEnvelope]);

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/dashboard',
			name: 'dashboard',
			component: Dashboard,
			children: [{ path: '/', component: Trips }],
		},
		{ path: '/login', name: 'Login', component: Login },
		{ path: '/registration', name: 'Registration', component: Registration },
		{ path: '', redirect: { name: 'dashboard' } },
		{ path: '/:catchAll(.*)', redirect: { name: 'dashboard' } },
	],
});

router.beforeEach((to, from, next) => {
	// TODO: load auth state
	let isAuthenticated = true;

	if ((to.name !== 'Login' || to.name !== 'Registration') && !isAuthenticated)
		next({ name: 'Login' });
	else next();
});

const app = createApp(App);

app.use(router);
app.component('font-awesome-icon', FontAwesomeIcon);
app.config.globalProperties.$http = Axios;

router.isReady().then(() => {
	app.mount('#app');
});
