import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _0f49230d = () => import('../pages/webker.vue' /* webpackChunkName: "pages/webker" */).then(m => m.default || m)
const _6627e2e0 = () => import('../pages/site.vue' /* webpackChunkName: "pages/site" */).then(m => m.default || m)
const _b9407b22 = () => import('../pages/notifications.vue' /* webpackChunkName: "pages/notifications" */).then(m => m.default || m)
const _be3eb8c8 = () => import('../pages/mem.vue' /* webpackChunkName: "pages/mem" */).then(m => m.default || m)
const _5a45dcc4 = () => import('../pages/pub.vue' /* webpackChunkName: "pages/pub" */).then(m => m.default || m)
const _6052d65b = () => import('../pages/test.vue' /* webpackChunkName: "pages/test" */).then(m => m.default || m)
const _79b4490a = () => import('../pages/news/_id/index.vue' /* webpackChunkName: "pages/news/_id/index" */).then(m => m.default || m)
const _383f125e = () => import('../pages/news/_id/screenshot.vue' /* webpackChunkName: "pages/news/_id/screenshot" */).then(m => m.default || m)
const _4b8a2197 = () => import('../pages/news/_id/share.vue' /* webpackChunkName: "pages/news/_id/share" */).then(m => m.default || m)
const _7a449f4e = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)



const scrollBehavior = function (to, from, savedPosition) {
      return { x: 0, y: 0 }
    }


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/webker",
			component: _0f49230d,
			name: "webker"
		},
		{
			path: "/site",
			component: _6627e2e0,
			name: "site"
		},
		{
			path: "/notifications",
			component: _b9407b22,
			name: "notifications"
		},
		{
			path: "/mem",
			component: _be3eb8c8,
			name: "mem"
		},
		{
			path: "/pub",
			component: _5a45dcc4,
			name: "pub"
		},
		{
			path: "/test",
			component: _6052d65b,
			name: "test"
		},
		{
			path: "/news/:id?",
			component: _79b4490a,
			name: "news-id"
		},
		{
			path: "/news/:id?/screenshot",
			component: _383f125e,
			name: "news-id-screenshot"
		},
		{
			path: "/news/:id?/share",
			component: _4b8a2197,
			name: "news-id-share"
		},
		{
			path: "/",
			component: _7a449f4e,
			name: "index"
		}
    ],
    
    
    fallback: false
  })
}
