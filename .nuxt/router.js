import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _69914ea0 = () => interopDefault(import('..\\pages\\dashboard.vue' /* webpackChunkName: "pages_dashboard" */))
const _59823587 = () => interopDefault(import('..\\pages\\enterNewPassword.vue' /* webpackChunkName: "pages_enterNewPassword" */))
const _40464f4c = () => interopDefault(import('..\\pages\\forgetPassword.vue' /* webpackChunkName: "pages_forgetPassword" */))
const _2c94a67c = () => interopDefault(import('..\\pages\\hotel\\index.vue' /* webpackChunkName: "pages_hotel_index" */))
const _07a4cab0 = () => interopDefault(import('..\\pages\\hotelDetails\\index.vue' /* webpackChunkName: "pages_hotelDetails_index" */))
const _3699a44e = () => interopDefault(import('..\\pages\\hotelGroups\\index.vue' /* webpackChunkName: "pages_hotelGroups_index" */))
const _6e5065bf = () => interopDefault(import('..\\pages\\hotels\\index.vue' /* webpackChunkName: "pages_hotels_index" */))
const _10e3baf5 = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages_login" */))
const _ff109468 = () => interopDefault(import('..\\pages\\passwordCode.vue' /* webpackChunkName: "pages_passwordCode" */))
const _620da835 = () => interopDefault(import('..\\pages\\profile.vue' /* webpackChunkName: "pages_profile" */))
const _ef3d5246 = () => interopDefault(import('..\\pages\\registration.vue' /* webpackChunkName: "pages_registration" */))
const _2e31ffea = () => interopDefault(import('..\\pages\\registrationCode.vue' /* webpackChunkName: "pages_registrationCode" */))
const _b1b8ba02 = () => interopDefault(import('..\\pages\\registrationDone.vue' /* webpackChunkName: "pages_registrationDone" */))
const _0109f766 = () => interopDefault(import('..\\pages\\rents.vue' /* webpackChunkName: "pages_rents" */))
const _14942bf5 = () => interopDefault(import('..\\pages\\search-results.vue' /* webpackChunkName: "pages_search-results" */))
const _7f43c427 = () => interopDefault(import('..\\pages\\units\\index.vue' /* webpackChunkName: "pages_units_index" */))
const _b39f99de = () => interopDefault(import('..\\pages\\hotel\\add.vue' /* webpackChunkName: "pages_hotel_add" */))
const _f3cf9bb8 = () => interopDefault(import('..\\pages\\hotel\\addGroup\\index.vue' /* webpackChunkName: "pages_hotel_addGroup_index" */))
const _71cfb6f8 = () => interopDefault(import('..\\pages\\hotel\\edit\\index.vue' /* webpackChunkName: "pages_hotel_edit_index" */))
const _71d4c7dd = () => interopDefault(import('..\\pages\\hotel\\editGroup\\index.vue' /* webpackChunkName: "pages_hotel_editGroup_index" */))
const _06432b81 = () => interopDefault(import('..\\pages\\hotel\\vs-upload.vue' /* webpackChunkName: "pages_hotel_vs-upload" */))
const _077b2b8b = () => interopDefault(import('..\\pages\\hotels\\search.vue' /* webpackChunkName: "pages_hotels_search" */))
const _00d0a4ae = () => interopDefault(import('..\\pages\\unit\\add.vue' /* webpackChunkName: "pages_unit_add" */))
const _7fd7f076 = () => interopDefault(import('..\\pages\\unitDetails\\reservationForm.vue' /* webpackChunkName: "pages_unitDetails_reservationForm" */))
const _14f39a23 = () => interopDefault(import('..\\pages\\units\\search.vue' /* webpackChunkName: "pages_units_search" */))
const _16838ae6 = () => interopDefault(import('..\\pages\\hotel\\requests\\_id.vue' /* webpackChunkName: "pages_hotel_requests__id" */))
const _2b338010 = () => interopDefault(import('..\\pages\\unit\\edit\\_id.vue' /* webpackChunkName: "pages_unit_edit__id" */))
const _ffb6b104 = () => interopDefault(import('..\\pages\\unit\\requests\\_id.vue' /* webpackChunkName: "pages_unit_requests__id" */))
const _09ba6791 = () => interopDefault(import('..\\pages\\checkouts\\_id.vue' /* webpackChunkName: "pages_checkouts__id" */))
const _37d8b900 = () => interopDefault(import('..\\pages\\unitDetails\\_id.vue' /* webpackChunkName: "pages_unitDetails__id" */))
const _3d1ab762 = () => interopDefault(import('..\\pages\\units\\_id.vue' /* webpackChunkName: "pages_units__id" */))
const _473c17de = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

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
    component: _69914ea0,
    name: "dashboard"
  }, {
    path: "/enterNewPassword",
    component: _59823587,
    name: "enterNewPassword"
  }, {
    path: "/forgetPassword",
    component: _40464f4c,
    name: "forgetPassword"
  }, {
    path: "/hotel",
    component: _2c94a67c,
    name: "hotel"
  }, {
    path: "/hotelDetails",
    component: _07a4cab0,
    name: "hotelDetails"
  }, {
    path: "/hotelGroups",
    component: _3699a44e,
    name: "hotelGroups"
  }, {
    path: "/hotels",
    component: _6e5065bf,
    name: "hotels"
  }, {
    path: "/login",
    component: _10e3baf5,
    name: "login"
  }, {
    path: "/passwordCode",
    component: _ff109468,
    name: "passwordCode"
  }, {
    path: "/profile",
    component: _620da835,
    name: "profile"
  }, {
    path: "/registration",
    component: _ef3d5246,
    name: "registration"
  }, {
    path: "/registrationCode",
    component: _2e31ffea,
    name: "registrationCode"
  }, {
    path: "/registrationDone",
    component: _b1b8ba02,
    name: "registrationDone"
  }, {
    path: "/rents",
    component: _0109f766,
    name: "rents"
  }, {
    path: "/search-results",
    component: _14942bf5,
    name: "search-results"
  }, {
    path: "/units",
    component: _7f43c427,
    name: "units"
  }, {
    path: "/hotel/add",
    component: _b39f99de,
    name: "hotel-add"
  }, {
    path: "/hotel/addGroup",
    component: _f3cf9bb8,
    name: "hotel-addGroup"
  }, {
    path: "/hotel/edit",
    component: _71cfb6f8,
    name: "hotel-edit"
  }, {
    path: "/hotel/editGroup",
    component: _71d4c7dd,
    name: "hotel-editGroup"
  }, {
    path: "/hotel/vs-upload",
    component: _06432b81,
    name: "hotel-vs-upload"
  }, {
    path: "/hotels/search",
    component: _077b2b8b,
    name: "hotels-search"
  }, {
    path: "/unit/add",
    component: _00d0a4ae,
    name: "unit-add"
  }, {
    path: "/unitDetails/reservationForm",
    component: _7fd7f076,
    name: "unitDetails-reservationForm"
  }, {
    path: "/units/search",
    component: _14f39a23,
    name: "units-search"
  }, {
    path: "/hotel/requests/:id?",
    component: _16838ae6,
    name: "hotel-requests-id"
  }, {
    path: "/unit/edit/:id?",
    component: _2b338010,
    name: "unit-edit-id"
  }, {
    path: "/unit/requests/:id?",
    component: _ffb6b104,
    name: "unit-requests-id"
  }, {
    path: "/checkouts/:id?",
    component: _09ba6791,
    name: "checkouts-id"
  }, {
    path: "/unitDetails/:id?",
    component: _37d8b900,
    name: "unitDetails-id"
  }, {
    path: "/units/:id",
    component: _3d1ab762,
    name: "units-id"
  }, {
    path: "/",
    component: _473c17de,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
