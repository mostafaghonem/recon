import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _272329bc = () => interopDefault(import('../pages/dashboard.vue' /* webpackChunkName: "pages/dashboard" */))
const _95733a76 = () => interopDefault(import('../pages/enterNewPassword.vue' /* webpackChunkName: "pages/enterNewPassword" */))
const _b5de97ec = () => interopDefault(import('../pages/forgetPassword.vue' /* webpackChunkName: "pages/forgetPassword" */))
const _42852a45 = () => interopDefault(import('../pages/hotel/index.vue' /* webpackChunkName: "pages/hotel/index" */))
const _1bc96853 = () => interopDefault(import('../pages/hotelDetails/index.vue' /* webpackChunkName: "pages/hotelDetails/index" */))
const _197787b9 = () => interopDefault(import('../pages/hotelGroups/index.vue' /* webpackChunkName: "pages/hotelGroups/index" */))
const _1a5155e4 = () => interopDefault(import('../pages/hotels/index.vue' /* webpackChunkName: "pages/hotels/index" */))
const _2f912f12 = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _4170320a = () => interopDefault(import('../pages/passwordCode.vue' /* webpackChunkName: "pages/passwordCode" */))
const _99a80592 = () => interopDefault(import('../pages/profile.vue' /* webpackChunkName: "pages/profile" */))
const _4959d31b = () => interopDefault(import('../pages/registration.vue' /* webpackChunkName: "pages/registration" */))
const _ec13a5b0 = () => interopDefault(import('../pages/registrationCode.vue' /* webpackChunkName: "pages/registrationCode" */))
const _02e7d03d = () => interopDefault(import('../pages/registrationDone.vue' /* webpackChunkName: "pages/registrationDone" */))
const _4f44b630 = () => interopDefault(import('../pages/rents.vue' /* webpackChunkName: "pages/rents" */))
const _795e90b3 = () => interopDefault(import('../pages/search-results.vue' /* webpackChunkName: "pages/search-results" */))
const _36d41240 = () => interopDefault(import('../pages/units/index.vue' /* webpackChunkName: "pages/units/index" */))
const _f6919558 = () => interopDefault(import('../pages/hotel/add.vue' /* webpackChunkName: "pages/hotel/add" */))
const _70c5727e = () => interopDefault(import('../pages/hotel/addGroup/index.vue' /* webpackChunkName: "pages/hotel/addGroup/index" */))
const _785f79aa = () => interopDefault(import('../pages/hotel/edit/index.vue' /* webpackChunkName: "pages/hotel/edit/index" */))
const _f9a11cea = () => interopDefault(import('../pages/hotel/editGroup/index.vue' /* webpackChunkName: "pages/hotel/editGroup/index" */))
const _48422f84 = () => interopDefault(import('../pages/hotel/vs-upload.vue' /* webpackChunkName: "pages/hotel/vs-upload" */))
const _48cf7ff4 = () => interopDefault(import('../pages/hotels/search.vue' /* webpackChunkName: "pages/hotels/search" */))
const _19793678 = () => interopDefault(import('../pages/unit/add.vue' /* webpackChunkName: "pages/unit/add" */))
const _6b57144d = () => interopDefault(import('../pages/unitDetails/reservationForm.vue' /* webpackChunkName: "pages/unitDetails/reservationForm" */))
const _4f6d0f2a = () => interopDefault(import('../pages/units/search.vue' /* webpackChunkName: "pages/units/search" */))
const _58566868 = () => interopDefault(import('../pages/hotel/requests/_id.vue' /* webpackChunkName: "pages/hotel/requests/_id" */))
const _068e1824 = () => interopDefault(import('../pages/unit/edit/_id.vue' /* webpackChunkName: "pages/unit/edit/_id" */))
const _1d17d328 = () => interopDefault(import('../pages/unit/requests/_id.vue' /* webpackChunkName: "pages/unit/requests/_id" */))
const _bc253fb4 = () => interopDefault(import('../pages/checkouts/_id.vue' /* webpackChunkName: "pages/checkouts/_id" */))
const _19fedc52 = () => interopDefault(import('../pages/unitDetails/_id.vue' /* webpackChunkName: "pages/unitDetails/_id" */))
const _30c1a4a8 = () => interopDefault(import('../pages/units/_id.vue' /* webpackChunkName: "pages/units/_id" */))
const _1e8fc560 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _272329bc,
    name: "dashboard"
  }, {
    path: "/enterNewPassword",
    component: _95733a76,
    name: "enterNewPassword"
  }, {
    path: "/forgetPassword",
    component: _b5de97ec,
    name: "forgetPassword"
  }, {
    path: "/hotel",
    component: _42852a45,
    name: "hotel"
  }, {
    path: "/hotelDetails",
    component: _1bc96853,
    name: "hotelDetails"
  }, {
    path: "/hotelGroups",
    component: _197787b9,
    name: "hotelGroups"
  }, {
    path: "/hotels",
    component: _1a5155e4,
    name: "hotels"
  }, {
    path: "/login",
    component: _2f912f12,
    name: "login"
  }, {
    path: "/passwordCode",
    component: _4170320a,
    name: "passwordCode"
  }, {
    path: "/profile",
    component: _99a80592,
    name: "profile"
  }, {
    path: "/registration",
    component: _4959d31b,
    name: "registration"
  }, {
    path: "/registrationCode",
    component: _ec13a5b0,
    name: "registrationCode"
  }, {
    path: "/registrationDone",
    component: _02e7d03d,
    name: "registrationDone"
  }, {
    path: "/rents",
    component: _4f44b630,
    name: "rents"
  }, {
    path: "/search-results",
    component: _795e90b3,
    name: "search-results"
  }, {
    path: "/units",
    component: _36d41240,
    name: "units"
  }, {
    path: "/hotel/add",
    component: _f6919558,
    name: "hotel-add"
  }, {
    path: "/hotel/addGroup",
    component: _70c5727e,
    name: "hotel-addGroup"
  }, {
    path: "/hotel/edit",
    component: _785f79aa,
    name: "hotel-edit"
  }, {
    path: "/hotel/editGroup",
    component: _f9a11cea,
    name: "hotel-editGroup"
  }, {
    path: "/hotel/vs-upload",
    component: _48422f84,
    name: "hotel-vs-upload"
  }, {
    path: "/hotels/search",
    component: _48cf7ff4,
    name: "hotels-search"
  }, {
    path: "/unit/add",
    component: _19793678,
    name: "unit-add"
  }, {
    path: "/unitDetails/reservationForm",
    component: _6b57144d,
    name: "unitDetails-reservationForm"
  }, {
    path: "/units/search",
    component: _4f6d0f2a,
    name: "units-search"
  }, {
    path: "/hotel/requests/:id?",
    component: _58566868,
    name: "hotel-requests-id"
  }, {
    path: "/unit/edit/:id?",
    component: _068e1824,
    name: "unit-edit-id"
  }, {
    path: "/unit/requests/:id?",
    component: _1d17d328,
    name: "unit-requests-id"
  }, {
    path: "/checkouts/:id?",
    component: _bc253fb4,
    name: "checkouts-id"
  }, {
    path: "/unitDetails/:id?",
    component: _19fedc52,
    name: "unitDetails-id"
  }, {
    path: "/units/:id",
    component: _30c1a4a8,
    name: "units-id"
  }, {
    path: "/",
    component: _1e8fc560,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
