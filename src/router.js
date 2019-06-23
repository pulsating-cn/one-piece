import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import onePiece from './views/one-piece.vue'
import me from './views/me.vue'
import appearance from './views/appearance.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/appearance',
      name: 'appearance',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: appearance
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
