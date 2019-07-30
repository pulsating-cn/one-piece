import Vue from 'vue'
import Router from 'vue-router'
import home from './views/home.vue'
import onePiece from './views/one-piece.vue'
import me from './views/me.vue'
import appearance from './views/appearance.vue'
import poster from './views/poster.vue'
Vue.use(Router)

export default new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [{
			path: '/',
			name: 'home',
			component: home
		},
		{
			path: '/appearance',
			name: 'appearance',
			component: appearance
		},
		{
			path: '/poster',
			name: 'poster',
			component: poster
		},
		{
			path: '/me',
			name: 'me',
			component: me
		},
		{
			path: '/one-piece',
			name: 'one-piece',
			component: onePiece
		}
	]
})
