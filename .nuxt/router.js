import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _f5c3fb00 = () => interopDefault(import('..\\pages\\add-recommendation.vue' /* webpackChunkName: "pages_add-recommendation" */))
const _d42d356a = () => interopDefault(import('..\\pages\\add-soldier.vue' /* webpackChunkName: "pages_add-soldier" */))
const _de44c02e = () => interopDefault(import('..\\pages\\add-staff.vue' /* webpackChunkName: "pages_add-staff" */))
const _a4c204ea = () => interopDefault(import('..\\pages\\add-unit.vue' /* webpackChunkName: "pages_add-unit" */))
const _a1a2d75c = () => interopDefault(import('..\\pages\\add-user.vue' /* webpackChunkName: "pages_add-user" */))
const _7db843eb = () => interopDefault(import('..\\pages\\change-of-units.vue' /* webpackChunkName: "pages_change-of-units" */))
const _ffdbf06e = () => interopDefault(import('..\\pages\\dashboard.vue' /* webpackChunkName: "pages_dashboard" */))
const _62c2d862 = () => interopDefault(import('..\\pages\\icons.vue' /* webpackChunkName: "pages_icons" */))
const _8c0d1ec4 = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages_login" */))
const _5b74a8b6 = () => interopDefault(import('..\\pages\\logout.vue' /* webpackChunkName: "pages_logout" */))
const _468192f2 = () => interopDefault(import('..\\pages\\maps.vue' /* webpackChunkName: "pages_maps" */))
const _fc9a5cc6 = () => interopDefault(import('..\\pages\\notifications.vue' /* webpackChunkName: "pages_notifications" */))
const _d493d55a = () => interopDefault(import('..\\pages\\recommendations\\index.vue' /* webpackChunkName: "pages_recommendations_index" */))
const _6f49c9f6 = () => interopDefault(import('..\\pages\\soldiers\\index.vue' /* webpackChunkName: "pages_soldiers_index" */))
const _b9efdafe = () => interopDefault(import('..\\pages\\soldiers-archive.vue' /* webpackChunkName: "pages_soldiers-archive" */))
const _6e5da884 = () => interopDefault(import('..\\pages\\staff-change-of-units.vue' /* webpackChunkName: "pages_staff-change-of-units" */))
const _1691fcd8 = () => interopDefault(import('..\\pages\\staffs\\index.vue' /* webpackChunkName: "pages_staffs_index" */))
const _681d5b50 = () => interopDefault(import('..\\pages\\table-list.vue' /* webpackChunkName: "pages_table-list" */))
const _1ac3b74a = () => interopDefault(import('..\\pages\\typography.vue' /* webpackChunkName: "pages_typography" */))
const _2bdb0862 = () => interopDefault(import('..\\pages\\unauthorized.vue' /* webpackChunkName: "pages_unauthorized" */))
const _2cef0e5e = () => interopDefault(import('..\\pages\\units\\index.vue' /* webpackChunkName: "pages_units_index" */))
const _19195712 = () => interopDefault(import('..\\pages\\update-soldiers-unit.vue' /* webpackChunkName: "pages_update-soldiers-unit" */))
const _8d0887d6 = () => interopDefault(import('..\\pages\\update-staffs-unit.vue' /* webpackChunkName: "pages_update-staffs-unit" */))
const _5d4bef02 = () => interopDefault(import('..\\pages\\user-profile.vue' /* webpackChunkName: "pages_user-profile" */))
const _35bba7bd = () => interopDefault(import('..\\pages\\users.vue' /* webpackChunkName: "pages_users" */))
const _d9363b0a = () => interopDefault(import('..\\pages\\account\\reset-password.vue' /* webpackChunkName: "pages_account_reset-password" */))
const _dd006dc2 = () => interopDefault(import('..\\pages\\clearances\\add.vue' /* webpackChunkName: "pages_clearances_add" */))
const _320a0917 = () => interopDefault(import('..\\pages\\clearances\\view.vue' /* webpackChunkName: "pages_clearances_view" */))
const _592977fb = () => interopDefault(import('..\\pages\\inbox\\follow-mails.vue' /* webpackChunkName: "pages_inbox_follow-mails" */))
const _6d00c390 = () => interopDefault(import('..\\pages\\inbox\\mail_presidents.vue' /* webpackChunkName: "pages_inbox_mail_presidents" */))
const _09be52b1 = () => interopDefault(import('..\\pages\\inbox\\mails.vue' /* webpackChunkName: "pages_inbox_mails" */))
const _4b8c7305 = () => interopDefault(import('..\\pages\\inbox\\seen-mails.vue' /* webpackChunkName: "pages_inbox_seen-mails" */))
const _555aa51e = () => interopDefault(import('..\\pages\\inbox\\unseen-mails.vue' /* webpackChunkName: "pages_inbox_unseen-mails" */))
const _f8ccb890 = () => interopDefault(import('..\\pages\\influences\\add.vue' /* webpackChunkName: "pages_influences_add" */))
const _f9a8fcc4 = () => interopDefault(import('..\\pages\\influences\\view.vue' /* webpackChunkName: "pages_influences_view" */))
const _29ef33da = () => interopDefault(import('..\\pages\\outbox\\mail_presidents.vue' /* webpackChunkName: "pages_outbox_mail_presidents" */))
const _5f53acf4 = () => interopDefault(import('..\\pages\\outbox\\mails.vue' /* webpackChunkName: "pages_outbox_mails" */))
const _079a3ea2 = () => interopDefault(import('..\\pages\\followup\\codes\\add.vue' /* webpackChunkName: "pages_followup_codes_add" */))
const _3f16204b = () => interopDefault(import('..\\pages\\followup\\codes\\add-branches.vue' /* webpackChunkName: "pages_followup_codes_add-branches" */))
const _b536bc52 = () => interopDefault(import('..\\pages\\followup\\codes\\add-categories.vue' /* webpackChunkName: "pages_followup_codes_add-categories" */))
const _b403aee2 = () => interopDefault(import('..\\pages\\followup\\codes\\add-directions.vue' /* webpackChunkName: "pages_followup_codes_add-directions" */))
const _06c4792a = () => interopDefault(import('..\\pages\\followup\\codes\\add-word-mules.vue' /* webpackChunkName: "pages_followup_codes_add-word-mules" */))
const _23c4f84c = () => interopDefault(import('..\\pages\\followup\\codes\\show.vue' /* webpackChunkName: "pages_followup_codes_show" */))
const _29764f7c = () => interopDefault(import('..\\pages\\followup\\inbox\\add.vue' /* webpackChunkName: "pages_followup_inbox_add" */))
const _05f520a2 = () => interopDefault(import('..\\pages\\followup\\inbox\\follow-mails.vue' /* webpackChunkName: "pages_followup_inbox_follow-mails" */))
const _5b02dd7d = () => interopDefault(import('..\\pages\\followup\\inbox\\mails.vue' /* webpackChunkName: "pages_followup_inbox_mails" */))
const _79b71fc7 = () => interopDefault(import('..\\pages\\followup\\inbox\\pending-mails.vue' /* webpackChunkName: "pages_followup_inbox_pending-mails" */))
const _33288304 = () => interopDefault(import('..\\pages\\followup\\inbox\\president_mails.vue' /* webpackChunkName: "pages_followup_inbox_president_mails" */))
const _010bf5a6 = () => interopDefault(import('..\\pages\\followup\\outbox\\add.vue' /* webpackChunkName: "pages_followup_outbox_add" */))
const _36a07ba8 = () => interopDefault(import('..\\pages\\followup\\outbox\\mails.vue' /* webpackChunkName: "pages_followup_outbox_mails" */))
const _e7553a1c = () => interopDefault(import('..\\pages\\followup\\outbox\\pending-mails.vue' /* webpackChunkName: "pages_followup_outbox_pending-mails" */))
const _6af43a2e = () => interopDefault(import('..\\pages\\followup\\outbox\\president_mails.vue' /* webpackChunkName: "pages_followup_outbox_president_mails" */))
const _b6216078 = () => interopDefault(import('..\\pages\\individuals\\codes\\show.vue' /* webpackChunkName: "pages_individuals_codes_show" */))
const _5ec1bc0c = () => interopDefault(import('..\\pages\\followup\\inbox\\edit\\_index.vue' /* webpackChunkName: "pages_followup_inbox_edit__index" */))
const _1508e781 = () => interopDefault(import('..\\pages\\followup\\outbox\\edit\\_index.vue' /* webpackChunkName: "pages_followup_outbox_edit__index" */))
const _3a231c6c = () => interopDefault(import('..\\pages\\recommendations\\edit\\_index.vue' /* webpackChunkName: "pages_recommendations_edit__index" */))
const _7d1c7a69 = () => interopDefault(import('..\\pages\\soldiers\\edit\\_index.vue' /* webpackChunkName: "pages_soldiers_edit__index" */))
const _1ea5d5ea = () => interopDefault(import('..\\pages\\staffs\\edit\\_index.vue' /* webpackChunkName: "pages_staffs_edit__index" */))
const _0f3cf101 = () => interopDefault(import('..\\pages\\units\\edit\\_index.vue' /* webpackChunkName: "pages_units_edit__index" */))
const _14dcd7c3 = () => interopDefault(import('..\\pages\\uploads\\_id.vue' /* webpackChunkName: "pages_uploads__id" */))
const _1f5c64f2 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

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
      component: _f5c3fb00,
      name: "add-recommendation___ar"
    }, {
      path: "/add-soldier",
      component: _d42d356a,
      name: "add-soldier___ar"
    }, {
      path: "/add-staff",
      component: _de44c02e,
      name: "add-staff___ar"
    }, {
      path: "/add-unit",
      component: _a4c204ea,
      name: "add-unit___ar"
    }, {
      path: "/add-user",
      component: _a1a2d75c,
      name: "add-user___ar"
    }, {
      path: "/change-of-units",
      component: _7db843eb,
      name: "change-of-units___ar"
    }, {
      path: "/dashboard",
      component: _ffdbf06e,
      name: "dashboard___ar"
    }, {
      path: "/icons",
      component: _62c2d862,
      name: "icons___ar"
    }, {
      path: "/login",
      component: _8c0d1ec4,
      name: "login___ar"
    }, {
      path: "/logout",
      component: _5b74a8b6,
      name: "logout___ar"
    }, {
      path: "/maps",
      component: _468192f2,
      name: "maps___ar"
    }, {
      path: "/notifications",
      component: _fc9a5cc6,
      name: "notifications___ar"
    }, {
      path: "/recommendations",
      component: _d493d55a,
      name: "recommendations___ar"
    }, {
      path: "/soldiers",
      component: _6f49c9f6,
      name: "soldiers___ar"
    }, {
      path: "/soldiers-archive",
      component: _b9efdafe,
      name: "soldiers-archive___ar"
    }, {
      path: "/staff-change-of-units",
      component: _6e5da884,
      name: "staff-change-of-units___ar"
    }, {
      path: "/staffs",
      component: _1691fcd8,
      name: "staffs___ar"
    }, {
      path: "/table-list",
      component: _681d5b50,
      name: "table-list___ar"
    }, {
      path: "/typography",
      component: _1ac3b74a,
      name: "typography___ar"
    }, {
      path: "/unauthorized",
      component: _2bdb0862,
      name: "unauthorized___ar"
    }, {
      path: "/units",
      component: _2cef0e5e,
      name: "units___ar"
    }, {
      path: "/update-soldiers-unit",
      component: _19195712,
      name: "update-soldiers-unit___ar"
    }, {
      path: "/update-staffs-unit",
      component: _8d0887d6,
      name: "update-staffs-unit___ar"
    }, {
      path: "/user-profile",
      component: _5d4bef02,
      name: "user-profile___ar"
    }, {
      path: "/users",
      component: _35bba7bd,
      name: "users___ar"
    }, {
      path: "/account/reset-password",
      component: _d9363b0a,
      name: "account-reset-password___ar"
    }, {
      path: "/clearances/add",
      component: _dd006dc2,
      name: "clearances-add___ar"
    }, {
      path: "/clearances/view",
      component: _320a0917,
      name: "clearances-view___ar"
    }, {
      path: "/inbox/follow-mails",
      component: _592977fb,
      name: "inbox-follow-mails___ar"
    }, {
      path: "/inbox/mail_presidents",
      component: _6d00c390,
      name: "inbox-mail_presidents___ar"
    }, {
      path: "/inbox/mails",
      component: _09be52b1,
      name: "inbox-mails___ar"
    }, {
      path: "/inbox/seen-mails",
      component: _4b8c7305,
      name: "inbox-seen-mails___ar"
    }, {
      path: "/inbox/unseen-mails",
      component: _555aa51e,
      name: "inbox-unseen-mails___ar"
    }, {
      path: "/influences/add",
      component: _f8ccb890,
      name: "influences-add___ar"
    }, {
      path: "/influences/view",
      component: _f9a8fcc4,
      name: "influences-view___ar"
    }, {
      path: "/outbox/mail_presidents",
      component: _29ef33da,
      name: "outbox-mail_presidents___ar"
    }, {
      path: "/outbox/mails",
      component: _5f53acf4,
      name: "outbox-mails___ar"
    }, {
      path: "/followup/codes/add",
      component: _079a3ea2,
      name: "followup-codes-add___ar"
    }, {
      path: "/followup/codes/add-branches",
      component: _3f16204b,
      name: "followup-codes-add-branches___ar"
    }, {
      path: "/followup/codes/add-categories",
      component: _b536bc52,
      name: "followup-codes-add-categories___ar"
    }, {
      path: "/followup/codes/add-directions",
      component: _b403aee2,
      name: "followup-codes-add-directions___ar"
    }, {
      path: "/followup/codes/add-word-mules",
      component: _06c4792a,
      name: "followup-codes-add-word-mules___ar"
    }, {
      path: "/followup/codes/show",
      component: _23c4f84c,
      name: "followup-codes-show___ar"
    }, {
      path: "/followup/inbox/add",
      component: _29764f7c,
      name: "followup-inbox-add___ar"
    }, {
      path: "/followup/inbox/follow-mails",
      component: _05f520a2,
      name: "followup-inbox-follow-mails___ar"
    }, {
      path: "/followup/inbox/mails",
      component: _5b02dd7d,
      name: "followup-inbox-mails___ar"
    }, {
      path: "/followup/inbox/pending-mails",
      component: _79b71fc7,
      name: "followup-inbox-pending-mails___ar"
    }, {
      path: "/followup/inbox/president_mails",
      component: _33288304,
      name: "followup-inbox-president_mails___ar"
    }, {
      path: "/followup/outbox/add",
      component: _010bf5a6,
      name: "followup-outbox-add___ar"
    }, {
      path: "/followup/outbox/mails",
      component: _36a07ba8,
      name: "followup-outbox-mails___ar"
    }, {
      path: "/followup/outbox/pending-mails",
      component: _e7553a1c,
      name: "followup-outbox-pending-mails___ar"
    }, {
      path: "/followup/outbox/president_mails",
      component: _6af43a2e,
      name: "followup-outbox-president_mails___ar"
    }, {
      path: "/individuals/codes/show",
      component: _b6216078,
      name: "individuals-codes-show___ar"
    }, {
      path: "/followup/inbox/edit/:index",
      component: _5ec1bc0c,
      name: "followup-inbox-edit___ar"
    }, {
      path: "/followup/outbox/edit/:index",
      component: _1508e781,
      name: "followup-outbox-edit___ar"
    }, {
      path: "/recommendations/edit/:index",
      component: _3a231c6c,
      name: "recommendations-edit___ar"
    }, {
      path: "/soldiers/edit/:index",
      component: _7d1c7a69,
      name: "soldiers-edit___ar"
    }, {
      path: "/staffs/edit/:index",
      component: _1ea5d5ea,
      name: "staffs-edit___ar"
    }, {
      path: "/units/edit/:index",
      component: _0f3cf101,
      name: "units-edit___ar"
    }, {
      path: "/uploads/:id?",
      component: _14dcd7c3,
      name: "uploads-id___ar"
    }, {
      path: "/",
      component: _1f5c64f2,
      name: "index___ar"
    }],

    fallback: false
  })
}
