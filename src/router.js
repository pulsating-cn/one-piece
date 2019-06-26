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
