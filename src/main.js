import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import Axios from 'axios';

// Fontawesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
	faUserCircle,
	faUnlockAlt,
	faSignInAlt,
	faEnvelope,
	faSignOutAlt,
} from '@fortawesome/free-solid-svg-icons';

// Pages
import Login from './pages/login.vue';
import Registration from './pages/registration.vue';
import Trips from './pages/trips.vue';

// Components
import Dashboard from './pages/dashboard.vue';
import App from './app.vue';
import Button from './components/ui/button';

import { isAuthenticated } from './services/auth';

library.add([faUserCircle, faUnlockAlt, faSignInAlt, faEnvelope, faSignOutAlt]);

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/dashboard',
			component: Dashboard,
			children: [{ path: '', name: 'Dashboard', component: Trips }],
		},
		{ path: '/login', name: 'Login', component: Login },
		{
			path: '/registration',
			name: 'Registration',
			component: Registration,
		},
		{ path: '', redirect: { name: 'Dashboard' } },
		{ path: '/:catchAll(.*)', redirect: { name: 'Dashboard' } },
	],
});

router.beforeEach((to, from, next) => {
	// TODO: load auth state
	const sessionExist = isAuthenticated();

	if (to.name !== 'Login' && to.name !== 'Registration' && !sessionExist) {
		next({ name: 'Login' });
	} else next();
});

const app = createApp(App);

app.use(router);
app.config.globalProperties.$http = Axios;

router.isReady().then(() => {
	app.mount('#app');
});

// Components
app.component('font-awesome-icon', FontAwesomeIcon);
app.component('the-button', Button);
