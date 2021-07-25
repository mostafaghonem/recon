import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _777d7dc0 = () => interopDefault(import('..\\pages\\add-recommendation.vue' /* webpackChunkName: "pages_add-recommendation" */))
const _1b6d4aaa = () => interopDefault(import('..\\pages\\add-soldier.vue' /* webpackChunkName: "pages_add-soldier" */))
const _c509256e = () => interopDefault(import('..\\pages\\add-staff.vue' /* webpackChunkName: "pages_add-staff" */))
const _1962042b = () => interopDefault(import('..\\pages\\add-unit.vue' /* webpackChunkName: "pages_add-unit" */))
const _1af19af2 = () => interopDefault(import('..\\pages\\add-user.vue' /* webpackChunkName: "pages_add-user" */))
const _145e894b = () => interopDefault(import('..\\pages\\change-of-units.vue' /* webpackChunkName: "pages_change-of-units" */))
const _e6a055ae = () => interopDefault(import('..\\pages\\dashboard.vue' /* webpackChunkName: "pages_dashboard" */))
const _19fa112f = () => interopDefault(import('..\\pages\\icons.vue' /* webpackChunkName: "pages_icons" */))
const _0554edfe = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages_login" */))
const _1b4c4b76 = () => interopDefault(import('..\\pages\\logout.vue' /* webpackChunkName: "pages_logout" */))
const _65de2cdc = () => interopDefault(import('..\\pages\\maps.vue' /* webpackChunkName: "pages_maps" */))
const _45eaeefd = () => interopDefault(import('..\\pages\\notifications.vue' /* webpackChunkName: "pages_notifications" */))
const _044df81a = () => interopDefault(import('..\\pages\\recommendations\\index.vue' /* webpackChunkName: "pages_recommendations_index" */))
const _05f00f56 = () => interopDefault(import('..\\pages\\soldiers\\index.vue' /* webpackChunkName: "pages_soldiers_index" */))
const _3dab0dbe = () => interopDefault(import('..\\pages\\soldiers-archive.vue' /* webpackChunkName: "pages_soldiers-archive" */))
const _2f45e91e = () => interopDefault(import('..\\pages\\staff-change-of-units.vue' /* webpackChunkName: "pages_staff-change-of-units" */))
const _8e21c218 = () => interopDefault(import('..\\pages\\staffs\\index.vue' /* webpackChunkName: "pages_staffs_index" */))
const _530d30f8 = () => interopDefault(import('..\\pages\\table-list.vue' /* webpackChunkName: "pages_table-list" */))
const _bc40d42c = () => interopDefault(import('..\\pages\\typography.vue' /* webpackChunkName: "pages_typography" */))
const _19b1326f = () => interopDefault(import('..\\pages\\unauthorized.vue' /* webpackChunkName: "pages_unauthorized" */))
const _5c8dc4fe = () => interopDefault(import('..\\pages\\units\\index.vue' /* webpackChunkName: "pages_units_index" */))
const _127d29d2 = () => interopDefault(import('..\\pages\\update-soldiers-unit.vue' /* webpackChunkName: "pages_update-soldiers-unit" */))
const _0ec20a96 = () => interopDefault(import('..\\pages\\update-staffs-unit.vue' /* webpackChunkName: "pages_update-staffs-unit" */))
const _e62ab4bc = () => interopDefault(import('..\\pages\\user-profile.vue' /* webpackChunkName: "pages_user-profile" */))
const _fdd1b5c6 = () => interopDefault(import('..\\pages\\users.vue' /* webpackChunkName: "pages_users" */))
const _2f9fc7db = () => interopDefault(import('..\\pages\\account\\reset-password.vue' /* webpackChunkName: "pages_account_reset-password" */))
const _28260e7f = () => interopDefault(import('..\\pages\\clearances\\add.vue' /* webpackChunkName: "pages_clearances_add" */))
const _702c6fb7 = () => interopDefault(import('..\\pages\\clearances\\view.vue' /* webpackChunkName: "pages_clearances_view" */))
const _0323e54a = () => interopDefault(import('..\\pages\\inbox\\follow-mails.vue' /* webpackChunkName: "pages_inbox_follow-mails" */))
const _395d0951 = () => interopDefault(import('..\\pages\\inbox\\mails.vue' /* webpackChunkName: "pages_inbox_mails" */))
const _5c923f36 = () => interopDefault(import('..\\pages\\inbox\\seen-mails.vue' /* webpackChunkName: "pages_inbox_seen-mails" */))
const _0ac18b04 = () => interopDefault(import('..\\pages\\inbox\\unseen-mails.vue' /* webpackChunkName: "pages_inbox_unseen-mails" */))
const _1a3fe918 = () => interopDefault(import('..\\pages\\influences\\add.vue' /* webpackChunkName: "pages_influences_add" */))
const _7d642f84 = () => interopDefault(import('..\\pages\\influences\\view.vue' /* webpackChunkName: "pages_influences_view" */))
const _238bca54 = () => interopDefault(import('..\\pages\\outbox\\mails.vue' /* webpackChunkName: "pages_outbox_mails" */))
const _0ae85542 = () => interopDefault(import('..\\pages\\followup\\codes\\add.vue' /* webpackChunkName: "pages_followup_codes_add" */))
const _11277dab = () => interopDefault(import('..\\pages\\followup\\codes\\add-branches.vue' /* webpackChunkName: "pages_followup_codes_add-branches" */))
const _38942737 = () => interopDefault(import('..\\pages\\followup\\codes\\add-categories.vue' /* webpackChunkName: "pages_followup_codes_add-categories" */))
const _392dadef = () => interopDefault(import('..\\pages\\followup\\codes\\add-directions.vue' /* webpackChunkName: "pages_followup_codes_add-directions" */))
const _cc1802ec = () => interopDefault(import('..\\pages\\followup\\codes\\add-word-mules.vue' /* webpackChunkName: "pages_followup_codes_add-word-mules" */))
const _eb8c94a8 = () => interopDefault(import('..\\pages\\followup\\codes\\show.vue' /* webpackChunkName: "pages_followup_codes_show" */))
const _22da223c = () => interopDefault(import('..\\pages\\followup\\inbox\\add.vue' /* webpackChunkName: "pages_followup_inbox_add" */))
const _61d265e2 = () => interopDefault(import('..\\pages\\followup\\inbox\\follow-mails.vue' /* webpackChunkName: "pages_followup_inbox_follow-mails" */))
const _79b467c6 = () => interopDefault(import('..\\pages\\followup\\inbox\\mails.vue' /* webpackChunkName: "pages_followup_inbox_mails" */))
const _2c5d2332 = () => interopDefault(import('..\\pages\\followup\\inbox\\pending-mails.vue' /* webpackChunkName: "pages_followup_inbox_pending-mails" */))
const _65eec28d = () => interopDefault(import('..\\pages\\followup\\outbox\\add.vue' /* webpackChunkName: "pages_followup_outbox_add" */))
const _5a493df0 = () => interopDefault(import('..\\pages\\followup\\outbox\\mails.vue' /* webpackChunkName: "pages_followup_outbox_mails" */))
const _1f84e852 = () => interopDefault(import('..\\pages\\followup\\outbox\\pending-mails.vue' /* webpackChunkName: "pages_followup_outbox_pending-mails" */))
const _dfddd338 = () => interopDefault(import('..\\pages\\individuals\\codes\\show.vue' /* webpackChunkName: "pages_individuals_codes_show" */))
const _30d3196c = () => interopDefault(import('..\\pages\\followup\\inbox\\edit\\_index.vue' /* webpackChunkName: "pages_followup_inbox_edit__index" */))
const _f5b993be = () => interopDefault(import('..\\pages\\followup\\outbox\\edit\\_index.vue' /* webpackChunkName: "pages_followup_outbox_edit__index" */))
const _0c3479cc = () => interopDefault(import('..\\pages\\recommendations\\edit\\_index.vue' /* webpackChunkName: "pages_recommendations_edit__index" */))
const _35812dee = () => interopDefault(import('..\\pages\\soldiers\\edit\\_index.vue' /* webpackChunkName: "pages_soldiers_edit__index" */))
const _1809a8aa = () => interopDefault(import('..\\pages\\staffs\\edit\\_index.vue' /* webpackChunkName: "pages_staffs_edit__index" */))
const _96fcf33e = () => interopDefault(import('..\\pages\\units\\edit\\_index.vue' /* webpackChunkName: "pages_units_edit__index" */))
const _447b8e63 = () => interopDefault(import('..\\pages\\uploads\\_id.vue' /* webpackChunkName: "pages_uploads__id" */))
const _3bad4ae7 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

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
      path: "/add-recommendation",
      component: _777d7dc0,
      name: "add-recommendation___ar"
    }, {
      path: "/add-soldier",
      component: _1b6d4aaa,
      name: "add-soldier___ar"
    }, {
      path: "/add-staff",
      component: _c509256e,
      name: "add-staff___ar"
    }, {
      path: "/add-unit",
      component: _1962042b,
      name: "add-unit___ar"
    }, {
      path: "/add-user",
      component: _1af19af2,
      name: "add-user___ar"
    }, {
      path: "/change-of-units",
      component: _145e894b,
      name: "change-of-units___ar"
    }, {
      path: "/dashboard",
      component: _e6a055ae,
      name: "dashboard___ar"
    }, {
      path: "/icons",
      component: _19fa112f,
      name: "icons___ar"
    }, {
      path: "/login",
      component: _0554edfe,
      name: "login___ar"
    }, {
      path: "/logout",
      component: _1b4c4b76,
      name: "logout___ar"
    }, {
      path: "/maps",
      component: _65de2cdc,
      name: "maps___ar"
    }, {
      path: "/notifications",
      component: _45eaeefd,
      name: "notifications___ar"
    }, {
      path: "/recommendations",
      component: _044df81a,
      name: "recommendations___ar"
    }, {
      path: "/soldiers",
      component: _05f00f56,
      name: "soldiers___ar"
    }, {
      path: "/soldiers-archive",
      component: _3dab0dbe,
      name: "soldiers-archive___ar"
    }, {
      path: "/staff-change-of-units",
      component: _2f45e91e,
      name: "staff-change-of-units___ar"
    }, {
      path: "/staffs",
      component: _8e21c218,
      name: "staffs___ar"
    }, {
      path: "/table-list",
      component: _530d30f8,
      name: "table-list___ar"
    }, {
      path: "/typography",
      component: _bc40d42c,
      name: "typography___ar"
    }, {
      path: "/unauthorized",
      component: _19b1326f,
      name: "unauthorized___ar"
    }, {
      path: "/units",
      component: _5c8dc4fe,
      name: "units___ar"
    }, {
      path: "/update-soldiers-unit",
      component: _127d29d2,
      name: "update-soldiers-unit___ar"
    }, {
      path: "/update-staffs-unit",
      component: _0ec20a96,
      name: "update-staffs-unit___ar"
    }, {
      path: "/user-profile",
      component: _e62ab4bc,
      name: "user-profile___ar"
    }, {
      path: "/users",
      component: _fdd1b5c6,
      name: "users___ar"
    }, {
      path: "/account/reset-password",
      component: _2f9fc7db,
      name: "account-reset-password___ar"
    }, {
      path: "/clearances/add",
      component: _28260e7f,
      name: "clearances-add___ar"
    }, {
      path: "/clearances/view",
      component: _702c6fb7,
      name: "clearances-view___ar"
    }, {
      path: "/inbox/follow-mails",
      component: _0323e54a,
      name: "inbox-follow-mails___ar"
    }, {
      path: "/inbox/mails",
      component: _395d0951,
      name: "inbox-mails___ar"
    }, {
      path: "/inbox/seen-mails",
      component: _5c923f36,
      name: "inbox-seen-mails___ar"
    }, {
      path: "/inbox/unseen-mails",
      component: _0ac18b04,
      name: "inbox-unseen-mails___ar"
    }, {
      path: "/influences/add",
      component: _1a3fe918,
      name: "influences-add___ar"
    }, {
      path: "/influences/view",
      component: _7d642f84,
      name: "influences-view___ar"
    }, {
      path: "/outbox/mails",
      component: _238bca54,
      name: "outbox-mails___ar"
    }, {
      path: "/followup/codes/add",
      component: _0ae85542,
      name: "followup-codes-add___ar"
    }, {
      path: "/followup/codes/add-branches",
      component: _11277dab,
      name: "followup-codes-add-branches___ar"
    }, {
      path: "/followup/codes/add-categories",
      component: _38942737,
      name: "followup-codes-add-categories___ar"
    }, {
      path: "/followup/codes/add-directions",
      component: _392dadef,
      name: "followup-codes-add-directions___ar"
    }, {
      path: "/followup/codes/add-word-mules",
      component: _cc1802ec,
      name: "followup-codes-add-word-mules___ar"
    }, {
      path: "/followup/codes/show",
      component: _eb8c94a8,
      name: "followup-codes-show___ar"
    }, {
      path: "/followup/inbox/add",
      component: _22da223c,
      name: "followup-inbox-add___ar"
    }, {
      path: "/followup/inbox/follow-mails",
      component: _61d265e2,
      name: "followup-inbox-follow-mails___ar"
    }, {
      path: "/followup/inbox/mails",
      component: _79b467c6,
      name: "followup-inbox-mails___ar"
    }, {
      path: "/followup/inbox/pending-mails",
      component: _2c5d2332,
      name: "followup-inbox-pending-mails___ar"
    }, {
      path: "/followup/outbox/add",
      component: _65eec28d,
      name: "followup-outbox-add___ar"
    }, {
      path: "/followup/outbox/mails",
      component: _5a493df0,
      name: "followup-outbox-mails___ar"
    }, {
      path: "/followup/outbox/pending-mails",
      component: _1f84e852,
      name: "followup-outbox-pending-mails___ar"
    }, {
      path: "/individuals/codes/show",
      component: _dfddd338,
      name: "individuals-codes-show___ar"
    }, {
      path: "/followup/inbox/edit/:index",
      component: _30d3196c,
      name: "followup-inbox-edit___ar"
    }, {
      path: "/followup/outbox/edit/:index",
      component: _f5b993be,
      name: "followup-outbox-edit___ar"
    }, {
      path: "/recommendations/edit/:index",
      component: _0c3479cc,
      name: "recommendations-edit___ar"
    }, {
      path: "/soldiers/edit/:index",
      component: _35812dee,
      name: "soldiers-edit___ar"
    }, {
      path: "/staffs/edit/:index",
      component: _1809a8aa,
      name: "staffs-edit___ar"
    }, {
      path: "/units/edit/:index",
      component: _96fcf33e,
      name: "units-edit___ar"
    }, {
      path: "/uploads/:id?",
      component: _447b8e63,
      name: "uploads-id___ar"
    }, {
      path: "/",
      component: _3bad4ae7,
      name: "index___ar"
    }],

    fallback: false
  })
}
