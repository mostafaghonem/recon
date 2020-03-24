import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _45fa077f = () => interopDefault(import('../pages/dashboard.vue' /* webpackChunkName: "pages/dashboard" */))
const _e4fed870 = () => interopDefault(import('../pages/enterNewPassword.vue' /* webpackChunkName: "pages/enterNewPassword" */))
const _5d1949cd = () => interopDefault(import('../pages/forgetPassword.vue' /* webpackChunkName: "pages/forgetPassword" */))
const _679b2362 = () => interopDefault(import('../pages/hotel/index.vue' /* webpackChunkName: "pages/hotel/index" */))
const _638936d4 = () => interopDefault(import('../pages/hotelDetails/index.vue' /* webpackChunkName: "pages/hotelDetails/index" */))
const _48837716 = () => interopDefault(import('../pages/hotelGroups/index.vue' /* webpackChunkName: "pages/hotelGroups/index" */))
const _d00aff32 = () => interopDefault(import('../pages/hotels/index.vue' /* webpackChunkName: "pages/hotels/index" */))
const _a1dc8958 = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _81cd46e6 = () => interopDefault(import('../pages/passwordCode.vue' /* webpackChunkName: "pages/passwordCode" */))
const _2cbd0cd4 = () => interopDefault(import('../pages/profile.vue' /* webpackChunkName: "pages/profile" */))
const _71fa04c4 = () => interopDefault(import('../pages/registration.vue' /* webpackChunkName: "pages/registration" */))
const _62305e2b = () => interopDefault(import('../pages/registrationCode.vue' /* webpackChunkName: "pages/registrationCode" */))
const _49bbfd80 = () => interopDefault(import('../pages/registrationDone.vue' /* webpackChunkName: "pages/registrationDone" */))
const _c1901076 = () => interopDefault(import('../pages/rents.vue' /* webpackChunkName: "pages/rents" */))
const _31672676 = () => interopDefault(import('../pages/search-results.vue' /* webpackChunkName: "pages/search-results" */))
const _437a5c9e = () => interopDefault(import('../pages/hotel/add.vue' /* webpackChunkName: "pages/hotel/add" */))
const _4ea96a01 = () => interopDefault(import('../pages/hotel/addGroup/index.vue' /* webpackChunkName: "pages/hotel/addGroup/index" */))
const _5099aaad = () => interopDefault(import('../pages/hotel/edit/index.vue' /* webpackChunkName: "pages/hotel/edit/index" */))
const _131465e3 = () => interopDefault(import('../pages/hotels/search.vue' /* webpackChunkName: "pages/hotels/search" */))
const _5bebcb0a = () => interopDefault(import('../pages/unit/add.vue' /* webpackChunkName: "pages/unit/add" */))
const _f3726fe2 = () => interopDefault(import('../pages/hotel/requests/_id.vue' /* webpackChunkName: "pages/hotel/requests/_id" */))
const _4c23c285 = () => interopDefault(import('../pages/unit/requests/_id.vue' /* webpackChunkName: "pages/unit/requests/_id" */))
const _4d2cf3fa = () => interopDefault(import('../pages/checkouts/_id.vue' /* webpackChunkName: "pages/checkouts/_id" */))
const _3c0ab474 = () => interopDefault(import('../pages/unitDetails/_id.vue' /* webpackChunkName: "pages/unitDetails/_id" */))
const _352bcf86 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/dashboard",
    component: _45fa077f,
    name: "dashboard"
  }, {
    path: "/enterNewPassword",
    component: _e4fed870,
    name: "enterNewPassword"
  }, {
    path: "/forgetPassword",
    component: _5d1949cd,
    name: "forgetPassword"
  }, {
    path: "/hotel",
    component: _679b2362,
    name: "hotel"
  }, {
    path: "/hotelDetails",
    component: _638936d4,
    name: "hotelDetails"
  }, {
    path: "/hotelGroups",
    component: _48837716,
    name: "hotelGroups"
  }, {
    path: "/hotels",
    component: _d00aff32,
    name: "hotels"
  }, {
    path: "/login",
    component: _a1dc8958,
    name: "login"
  }, {
    path: "/passwordCode",
    component: _81cd46e6,
    name: "passwordCode"
  }, {
    path: "/profile",
    component: _2cbd0cd4,
    name: "profile"
  }, {
    path: "/registration",
    component: _71fa04c4,
    name: "registration"
  }, {
    path: "/registrationCode",
    component: _62305e2b,
    name: "registrationCode"
  }, {
    path: "/registrationDone",
    component: _49bbfd80,
    name: "registrationDone"
  }, {
    path: "/rents",
    component: _c1901076,
    name: "rents"
  }, {
    path: "/search-results",
    component: _31672676,
    name: "search-results"
  }, {
    path: "/hotel/add",
    component: _437a5c9e,
    name: "hotel-add"
  }, {
    path: "/hotel/addGroup",
    component: _4ea96a01,
    name: "hotel-addGroup"
  }, {
    path: "/hotel/edit",
    component: _5099aaad,
    name: "hotel-edit"
  }, {
    path: "/hotels/search",
    component: _131465e3,
    name: "hotels-search"
  }, {
    path: "/unit/add",
    component: _5bebcb0a,
    name: "unit-add"
  }, {
    path: "/hotel/requests/:id?",
    component: _f3726fe2,
    name: "hotel-requests-id"
  }, {
    path: "/unit/requests/:id?",
    component: _4c23c285,
    name: "unit-requests-id"
  }, {
    path: "/checkouts/:id?",
    component: _4d2cf3fa,
    name: "checkouts-id"
  }, {
    path: "/unitDetails/:id?",
    component: _3c0ab474,
    name: "unitDetails-id"
  }, {
    path: "/",
    component: _352bcf86,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
