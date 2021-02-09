import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _68fb8a65 = () => interopDefault(import('..\\pages\\add-soldier.vue' /* webpackChunkName: "pages_add-soldier" */))
const _3bf21578 = () => interopDefault(import('..\\pages\\add-user.vue' /* webpackChunkName: "pages_add-user" */))
const _fac367f6 = () => interopDefault(import('..\\pages\\change-of-units.vue' /* webpackChunkName: "pages_change-of-units" */))
const _e882a93a = () => interopDefault(import('..\\pages\\dashboard.vue' /* webpackChunkName: "pages_dashboard" */))
const _4f111469 = () => interopDefault(import('..\\pages\\icons.vue' /* webpackChunkName: "pages_icons" */))
const _3a6bf138 = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages_login" */))
const _60233e4b = () => interopDefault(import('..\\pages\\logout.vue' /* webpackChunkName: "pages_logout" */))
const _2060d1d0 = () => interopDefault(import('..\\pages\\maps.vue' /* webpackChunkName: "pages_maps" */))
const _4e5fcf92 = () => interopDefault(import('..\\pages\\notifications.vue' /* webpackChunkName: "pages_notifications" */))
const _074af39c = () => interopDefault(import('..\\pages\\soldiers.vue' /* webpackChunkName: "pages_soldiers" */))
const _35d921fe = () => interopDefault(import('..\\pages\\table-list.vue' /* webpackChunkName: "pages_table-list" */))
const _f6a8f220 = () => interopDefault(import('..\\pages\\typography.vue' /* webpackChunkName: "pages_typography" */))
const _7944f9f5 = () => interopDefault(import('..\\pages\\unauthorized.vue' /* webpackChunkName: "pages_unauthorized" */))
const _270325b0 = () => interopDefault(import('..\\pages\\user-profile.vue' /* webpackChunkName: "pages_user-profile" */))
const _93a3af52 = () => interopDefault(import('..\\pages\\users.vue' /* webpackChunkName: "pages_users" */))
const _f6939ed6 = () => interopDefault(import('..\\pages\\account\\reset-password.vue' /* webpackChunkName: "pages_account_reset-password" */))
const _258c39d6 = () => interopDefault(import('..\\pages\\inbox\\follow-mails.vue' /* webpackChunkName: "pages_inbox_follow-mails" */))
const _ce1e5e52 = () => interopDefault(import('..\\pages\\inbox\\mails.vue' /* webpackChunkName: "pages_inbox_mails" */))
const _a1de46c2 = () => interopDefault(import('..\\pages\\inbox\\seen-mails.vue' /* webpackChunkName: "pages_inbox_seen-mails" */))
const _2d29df90 = () => interopDefault(import('..\\pages\\inbox\\unseen-mails.vue' /* webpackChunkName: "pages_inbox_unseen-mails" */))
const _931e18e4 = () => interopDefault(import('..\\pages\\outbox\\mails.vue' /* webpackChunkName: "pages_outbox_mails" */))
const _14d19270 = () => interopDefault(import('..\\pages\\followup\\codes\\add.vue' /* webpackChunkName: "pages_followup_codes_add" */))
const _95d21a36 = () => interopDefault(import('..\\pages\\followup\\codes\\add-branches.vue' /* webpackChunkName: "pages_followup_codes_add-branches" */))
const _c309941e = () => interopDefault(import('..\\pages\\followup\\codes\\add-categories.vue' /* webpackChunkName: "pages_followup_codes_add-categories" */))
const _c1d686ae = () => interopDefault(import('..\\pages\\followup\\codes\\add-directions.vue' /* webpackChunkName: "pages_followup_codes_add-directions" */))
const _0049e578 = () => interopDefault(import('..\\pages\\followup\\codes\\add-word-mules.vue' /* webpackChunkName: "pages_followup_codes_add-word-mules" */))
const _4d7c5f30 = () => interopDefault(import('..\\pages\\followup\\inbox\\add.vue' /* webpackChunkName: "pages_followup_inbox_add" */))
const _73064249 = () => interopDefault(import('..\\pages\\followup\\inbox\\follow-mails.vue' /* webpackChunkName: "pages_followup_inbox_follow-mails" */))
const _84bb37ba = () => interopDefault(import('..\\pages\\followup\\inbox\\mails.vue' /* webpackChunkName: "pages_followup_inbox_mails" */))
const _785ebf26 = () => interopDefault(import('..\\pages\\followup\\inbox\\pending-mails.vue' /* webpackChunkName: "pages_followup_inbox_pending-mails" */))
const _5dc7dc72 = () => interopDefault(import('..\\pages\\followup\\outbox\\add.vue' /* webpackChunkName: "pages_followup_outbox_add" */))
const _27f1c9c2 = () => interopDefault(import('..\\pages\\followup\\outbox\\mails.vue' /* webpackChunkName: "pages_followup_outbox_mails" */))
const _f52811e8 = () => interopDefault(import('..\\pages\\followup\\outbox\\pending-mails.vue' /* webpackChunkName: "pages_followup_outbox_pending-mails" */))
const _567ae2b4 = () => interopDefault(import('..\\pages\\followup\\inbox\\edit\\_index.vue' /* webpackChunkName: "pages_followup_inbox_edit__index" */))
const _5f226827 = () => interopDefault(import('..\\pages\\followup\\outbox\\edit\\_index.vue' /* webpackChunkName: "pages_followup_outbox_edit__index" */))
const _b7e1542e = () => interopDefault(import('..\\pages\\uploads\\_id.vue' /* webpackChunkName: "pages_uploads__id" */))
const _70c44e21 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

Vue.use(Router)

if (process.client) {
  if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual'

    // reset scrollRestoration to auto when leaving page, allowing page reload
    // and back-navigation from other pages to use the browser to restore the
    // scrolling position.
    window.addEventListener('beforeunload', () => {
      window.history.scrollRestoration = 'auto'
    })

    // Setting scrollRestoration to manual again when returning to this page.
    window.addEventListener('load', () => {
      window.history.scrollRestoration = 'manual'
    })
  }
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected and scrollToTop is not explicitly disabled
  if (
    to.matched.length < 2 &&
    to.matched.every(r => r.components.default.options.scrollToTop !== false)
  ) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some(r => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise((resolve) => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}

export function createRouter() {
  return new Router({
    mode: 'history',
    base: decodeURI('/'),
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,

    routes: [{
      path: "/add-soldier",
      component: _68fb8a65,
      name: "add-soldier___ar"
    }, {
      path: "/add-user",
      component: _3bf21578,
      name: "add-user___ar"
    }, {
      path: "/change-of-units",
      component: _fac367f6,
      name: "change-of-units___ar"
    }, {
      path: "/dashboard",
      component: _e882a93a,
      name: "dashboard___ar"
    }, {
      path: "/icons",
      component: _4f111469,
      name: "icons___ar"
    }, {
      path: "/login",
      component: _3a6bf138,
      name: "login___ar"
    }, {
      path: "/logout",
      component: _60233e4b,
      name: "logout___ar"
    }, {
      path: "/maps",
      component: _2060d1d0,
      name: "maps___ar"
    }, {
      path: "/notifications",
      component: _4e5fcf92,
      name: "notifications___ar"
    }, {
      path: "/soldiers",
      component: _074af39c,
      name: "soldiers___ar"
    }, {
      path: "/table-list",
      component: _35d921fe,
      name: "table-list___ar"
    }, {
      path: "/typography",
      component: _f6a8f220,
      name: "typography___ar"
    }, {
      path: "/unauthorized",
      component: _7944f9f5,
      name: "unauthorized___ar"
    }, {
      path: "/user-profile",
      component: _270325b0,
      name: "user-profile___ar"
    }, {
      path: "/users",
      component: _93a3af52,
      name: "users___ar"
    }, {
      path: "/account/reset-password",
      component: _f6939ed6,
      name: "account-reset-password___ar"
    }, {
      path: "/inbox/follow-mails",
      component: _258c39d6,
      name: "inbox-follow-mails___ar"
    }, {
      path: "/inbox/mails",
      component: _ce1e5e52,
      name: "inbox-mails___ar"
    }, {
      path: "/inbox/seen-mails",
      component: _a1de46c2,
      name: "inbox-seen-mails___ar"
    }, {
      path: "/inbox/unseen-mails",
      component: _2d29df90,
      name: "inbox-unseen-mails___ar"
    }, {
      path: "/outbox/mails",
      component: _931e18e4,
      name: "outbox-mails___ar"
    }, {
      path: "/followup/codes/add",
      component: _14d19270,
      name: "followup-codes-add___ar"
    }, {
      path: "/followup/codes/add-branches",
      component: _95d21a36,
      name: "followup-codes-add-branches___ar"
    }, {
      path: "/followup/codes/add-categories",
      component: _c309941e,
      name: "followup-codes-add-categories___ar"
    }, {
      path: "/followup/codes/add-directions",
      component: _c1d686ae,
      name: "followup-codes-add-directions___ar"
    }, {
      path: "/followup/codes/add-word-mules",
      component: _0049e578,
      name: "followup-codes-add-word-mules___ar"
    }, {
      path: "/followup/inbox/add",
      component: _4d7c5f30,
      name: "followup-inbox-add___ar"
    }, {
      path: "/followup/inbox/follow-mails",
      component: _73064249,
      name: "followup-inbox-follow-mails___ar"
    }, {
      path: "/followup/inbox/mails",
      component: _84bb37ba,
      name: "followup-inbox-mails___ar"
    }, {
      path: "/followup/inbox/pending-mails",
      component: _785ebf26,
      name: "followup-inbox-pending-mails___ar"
    }, {
      path: "/followup/outbox/add",
      component: _5dc7dc72,
      name: "followup-outbox-add___ar"
    }, {
      path: "/followup/outbox/mails",
      component: _27f1c9c2,
      name: "followup-outbox-mails___ar"
    }, {
      path: "/followup/outbox/pending-mails",
      component: _f52811e8,
      name: "followup-outbox-pending-mails___ar"
    }, {
      path: "/followup/inbox/edit/:index",
      component: _567ae2b4,
      name: "followup-inbox-edit___ar"
    }, {
      path: "/followup/outbox/edit/:index",
      component: _5f226827,
      name: "followup-outbox-edit___ar"
    }, {
      path: "/uploads/:id?",
      component: _b7e1542e,
      name: "uploads-id___ar"
    }, {
      path: "/",
      component: _70c44e21,
      name: "index___ar"
    }],

    fallback: false
  })
}
