import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

function loadPage(pagePath) {
	return () => import(`@/${pagePath}`);
}

const router = new VueRouter({
	mode: 'history',
	linkActiveClass: 'active',
	routes: [
		{
			name: 'home',
			path: '/',
			component: loadPage('pages/home.vue'),
		},
	],
});

export default router;
