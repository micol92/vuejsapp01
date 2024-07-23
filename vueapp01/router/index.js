import {
	createRouter,
	// createWebHashHistory,
	createWebHistory,
} from 'vue-router';
import MasterView from '@/src/pages/MasterPage.vue';
import AboutView from '@/src/pages/AboutView.vue';

const routes = [
	{
		path: '/',
		name: 'home',
		component: MasterView,
	},
	{
		path: '/about',
		name: 'about',
		component: AboutView,
	}    
];

const router = createRouter({
	history: createWebHistory('/'),
	// history: createWebHashHistory(),
	routes,
});

// router.beforeEach((to, from) => {
// 	console.log(`to:`, to);
// 	console.log(`from:`, from);
// 	if (to.name === 'MyPage') {
// 		return { name: 'home' };
// 	}
// });

export default router;