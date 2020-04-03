import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _245b3a5a = () => interopDefault(import('../pages/dashboard.vue' /* webpackChunkName: "pages/dashboard" */))
const _037e91f4 = () => interopDefault(import('../pages/enterNewPassword.vue' /* webpackChunkName: "pages/enterNewPassword" */))
const _96ce3a0e = () => interopDefault(import('../pages/forgetPassword.vue' /* webpackChunkName: "pages/forgetPassword" */))
const _7ac9f9b6 = () => interopDefault(import('../pages/hotel/index.vue' /* webpackChunkName: "pages/hotel/index" */))
const _869af07c = () => interopDefault(import('../pages/hotelDetails/index.vue' /* webpackChunkName: "pages/hotelDetails/index" */))
const _db75832c = () => interopDefault(import('../pages/hotelGroups/index.vue' /* webpackChunkName: "pages/hotelGroups/index" */))
const _2ab316da = () => interopDefault(import('../pages/hotels/index.vue' /* webpackChunkName: "pages/hotels/index" */))
const _2a64e0a8 = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _11c550b9 = () => interopDefault(import('../pages/passwordCode.vue' /* webpackChunkName: "pages/passwordCode" */))
const _1fdc2d28 = () => interopDefault(import('../pages/profile.vue' /* webpackChunkName: "pages/profile" */))
const _19aef1ca = () => interopDefault(import('../pages/registration.vue' /* webpackChunkName: "pages/registration" */))
const _4fa34752 = () => interopDefault(import('../pages/registrationCode.vue' /* webpackChunkName: "pages/registrationCode" */))
const _511fff6c = () => interopDefault(import('../pages/registrationDone.vue' /* webpackChunkName: "pages/registrationDone" */))
const _1a8b1d19 = () => interopDefault(import('../pages/rents.vue' /* webpackChunkName: "pages/rents" */))
const _ee3280bc = () => interopDefault(import('../pages/search-results.vue' /* webpackChunkName: "pages/search-results" */))
const _f3c9a5f6 = () => interopDefault(import('../pages/hotel/add.vue' /* webpackChunkName: "pages/hotel/add" */))
const _7be4722d = () => interopDefault(import('../pages/hotel/addGroup/index.vue' /* webpackChunkName: "pages/hotel/addGroup/index" */))
const _72d0ae4e = () => interopDefault(import('../pages/hotel/edit/index.vue' /* webpackChunkName: "pages/hotel/edit/index" */))
const _481f3088 = () => interopDefault(import('../pages/hotel/editGroup/index.vue' /* webpackChunkName: "pages/hotel/editGroup/index" */))
const _29bfde75 = () => interopDefault(import('../pages/hotel/vs-upload.vue' /* webpackChunkName: "pages/hotel/vs-upload" */))
const _15e6f737 = () => interopDefault(import('../pages/hotels/search.vue' /* webpackChunkName: "pages/hotels/search" */))
const _42cf04a7 = () => interopDefault(import('../pages/unit/add.vue' /* webpackChunkName: "pages/unit/add" */))
const _ddce3c84 = () => interopDefault(import('../pages/unitDetails/reservationForm.vue' /* webpackChunkName: "pages/unitDetails/reservationForm" */))
const _1fc22dd9 = () => interopDefault(import('../pages/units/search.vue' /* webpackChunkName: "pages/units/search" */))
const _74bdeb3b = () => interopDefault(import('../pages/hotel/requests/_id.vue' /* webpackChunkName: "pages/hotel/requests/_id" */))
const _3707ab1f = () => interopDefault(import('../pages/unit/edit/_id.vue' /* webpackChunkName: "pages/unit/edit/_id" */))
const _d434ec4e = () => interopDefault(import('../pages/unit/requests/_id.vue' /* webpackChunkName: "pages/unit/requests/_id" */))
const _4787d152 = () => interopDefault(import('../pages/checkouts/_id.vue' /* webpackChunkName: "pages/checkouts/_id" */))
const _57037e70 = () => interopDefault(import('../pages/unitDetails/_id.vue' /* webpackChunkName: "pages/unitDetails/_id" */))
const _32259c59 = () => interopDefault(import('../pages/units/_id.vue' /* webpackChunkName: "pages/units/_id" */))
const _60bd3d91 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _245b3a5a,
    name: "dashboard"
  }, {
    path: "/enterNewPassword",
    component: _037e91f4,
    name: "enterNewPassword"
  }, {
    path: "/forgetPassword",
    component: _96ce3a0e,
    name: "forgetPassword"
  }, {
    path: "/hotel",
    component: _7ac9f9b6,
    name: "hotel"
  }, {
    path: "/hotelDetails",
    component: _869af07c,
    name: "hotelDetails"
  }, {
    path: "/hotelGroups",
    component: _db75832c,
    name: "hotelGroups"
  }, {
    path: "/hotels",
    component: _2ab316da,
    name: "hotels"
  }, {
    path: "/login",
    component: _2a64e0a8,
    name: "login"
  }, {
    path: "/passwordCode",
    component: _11c550b9,
    name: "passwordCode"
  }, {
    path: "/profile",
    component: _1fdc2d28,
    name: "profile"
  }, {
    path: "/registration",
    component: _19aef1ca,
    name: "registration"
  }, {
    path: "/registrationCode",
    component: _4fa34752,
    name: "registrationCode"
  }, {
    path: "/registrationDone",
    component: _511fff6c,
    name: "registrationDone"
  }, {
    path: "/rents",
    component: _1a8b1d19,
    name: "rents"
  }, {
    path: "/search-results",
    component: _ee3280bc,
    name: "search-results"
  }, {
    path: "/hotel/add",
    component: _f3c9a5f6,
    name: "hotel-add"
  }, {
    path: "/hotel/addGroup",
    component: _7be4722d,
    name: "hotel-addGroup"
  }, {
    path: "/hotel/edit",
    component: _72d0ae4e,
    name: "hotel-edit"
  }, {
    path: "/hotel/editGroup",
    component: _481f3088,
    name: "hotel-editGroup"
  }, {
    path: "/hotel/vs-upload",
    component: _29bfde75,
    name: "hotel-vs-upload"
  }, {
    path: "/hotels/search",
    component: _15e6f737,
    name: "hotels-search"
  }, {
    path: "/unit/add",
    component: _42cf04a7,
    name: "unit-add"
  }, {
    path: "/unitDetails/reservationForm",
    component: _ddce3c84,
    name: "unitDetails-reservationForm"
  }, {
    path: "/units/search",
    component: _1fc22dd9,
    name: "units-search"
  }, {
    path: "/hotel/requests/:id?",
    component: _74bdeb3b,
    name: "hotel-requests-id"
  }, {
    path: "/unit/edit/:id?",
    component: _3707ab1f,
    name: "unit-edit-id"
  }, {
    path: "/unit/requests/:id?",
    component: _d434ec4e,
    name: "unit-requests-id"
  }, {
    path: "/checkouts/:id?",
    component: _4787d152,
    name: "checkouts-id"
  }, {
    path: "/unitDetails/:id?",
    component: _57037e70,
    name: "unitDetails-id"
  }, {
    path: "/units/:id?",
    component: _32259c59,
    name: "units-id"
  }, {
    path: "/",
    component: _60bd3d91,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
