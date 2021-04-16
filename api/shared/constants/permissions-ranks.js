const { DRAWER } = require('./texts');

module.exports = {
  Ranks: [
    {
      value: 'soldier',
      ar: 'مجند'
    },
    {
      ar: 'عريف',
      value: 'corporal'
    },
    {
      ar: 'رقيب',
      value: 'seargent'
    },
    {
      ar: 'رقيب أول',
      value: 'staff_sergeant'
    },
    {
      ar: 'مساعد',
      value: 'sergeant_major'
    },
    {
      ar: 'مساعد أول',
      value: 'senior_warrant_officer'
    },
    {
      ar: 'ملازم',
      value: 'second_lieutenant'
    },
    {
      ar: 'ملازم أول',
      value: 'lieutenant'
    },
    {
      ar: 'نقيب',
      value: 'captain'
    },
    {
      ar: 'رائد',
      value: 'major'
    },
    {
      ar: 'مقدم',
      value: 'lieutenant_colonel'
    },
    {
      ar: 'عقيد',
      value: 'Colonel'
    },
    {
      ar: 'عميد',
      value: 'Brigadier'
    },
    {
      ar: 'لواء',
      value: 'major_general'
    }
    // ,
    // {
    //   ar: 'لواء أح',
    //   value: 'staff_of_war_major_general'
    // }
  ],
  StaffRanks: [
    {
      ar: 'ملاحظ',
      value: 'noticed'
    },
    {
      ar: 'صانع دقيق',
      value: 'accurate_creator'
    },
    {
      ar: 'صانع ماهر',
      value: 'skilled_creator'
    },
    {
      ar: 'صانع',
      value: 'creator'
    },
    {
      ar: 'عريف',
      value: 'corporal'
    },
    {
      ar: 'رقيب',
      value: 'seargent'
    },
    {
      ar: 'رقيب أول',
      value: 'staff_sergeant'
    },
    {
      ar: 'مساعد',
      value: 'sergeant_major'
    },
    {
      ar: 'مساعد أول',
      value: 'senior_warrant_officer'
    }
  ],
  Branches: [
    {
      value: 'operations',
      ar: 'العمليات'
    },
    {
      value: 'training',
      ar: 'التدريب'
    },
    {
      value: 'officer_affairs',
      ar: 'شئون ضباط'
    },
    {
      value: 'recon_force_people',
      ar: 'أفراد الجهاز'
    },
    {
      value: 'Research',
      ar: 'بحوث'
    },
    {
      value: 'signal_corps',
      ar: 'الإشارة'
    },
    {
      value: 'secretary',
      ar: 'سكرتارية وإدارة محلية'
    },
    {
      value: 'information_systems',
      ar: 'نظم المعلومات'
    },
    {
      value: 'vehicles',
      ar: 'المركبات'
    },
    {
      value: 'financial',
      ar: 'ماليات'
    },
    {
      value: 'private-financial',
      ar: 'مالى خاص'
    },
    {
      value: 'followup',
      ar: 'الارشيف العام'
    },
    {
      value: 'safety',
      ar: 'امن'
    }
  ],
  Permissions: [
    {
      value: 'soldier',
      ar: 'مجند'
    },
    {
      value: 'recon_people_creator',
      ar: 'مضيف للمجندين'
    },
    {
      value: 'recon_people_editor',
      ar: 'معدل ومدير للمجندين'
    },
    {
      value: 'recon_influences_creator',
      ar: 'مضيف للمؤثرات'
    },
    {
      value: 'recon_influences_editor',
      ar: 'معدل ومضيف للمؤثرات'
    },
    {
      value: 'recon_clearance_creator',
      ar: 'مضيف للمسح الأمنى'
    },
    {
      value: 'recon_clearance_editor',
      ar: 'معدل ومضيف للمسح الأمنى'
    },
    {
      value: 'branch_head',
      ar: 'رئيس فرع'
    },
    {
      value: 'master_head',
      ar: 'رئيس الجهاز'
    },
    {
      value: 'admin',
      ar: 'مدير المنظومة'
    }
  ],
  Links: [
    {
      actions: 'user',
      icon: 'mdi-account',
      title: DRAWER.My_Account,
      items: [
        {
          to: '/account/reset-password',
          icon: 'mdi-account-plus',
          text: DRAWER.Reset_Password
        }
      ]
    },
    // {
    //   icon: 'mdi-view-dashboard',
    //   title: DRAWER.Dashboard,
    //   items: [
    //     {
    //       to: '/dashboard',
    //       icon: 'mdi-newspaper',
    //       text: DRAWER.News
    //     }
    //   ]
    // },
    {
      actions: 'user',
      icon: 'mdi-account',
      title: DRAWER.Users,
      items: [
        {
          to: '/add-user',
          icon: 'mdi-account-plus',
          text: DRAWER.Add_User,
          permissions: ['admin']
        },
        {
          to: '/users',
          icon: 'mdi-account',
          text: DRAWER.List_Users,
          permissions: ['admin']
        }
      ],
      permissions: ['admin']
    },
    {
      actions: 'mdi-loyalty',
      icon: 'mdi-human',
      title: DRAWER.Soldiers,
      items: [
        {
          to: '/add-soldier',
          icon: 'mdi-human-male',
          text: DRAWER.Add_Soldier,
          branches: ['recon_force_people'],
          permissions: ['recon_people_creator']
        },
        {
          to: '/soldiers/',
          icon: 'mdi-clipboard-outline',
          text: DRAWER.List_Soldier,
          branches: ['recon_force_people']
        },
        {
          to: '/update-soldiers-unit/',
          icon: 'mdi-clipboard-outline',
          text: DRAWER.Soldiers_Update_Unit,
          branches: ['recon_force_people'],
          permissions: ['recon_people_creator']
        },
        {
          to: '/change-of-units',
          icon: 'mdi-clipboard-outline',
          text: DRAWER.List_Change_Of_Units,
          branches: ['recon_force_people'],
          permissions: ['recon_people_creator']
        }
      ],
      branches: ['recon_force_people']
    },
    {
      actions: 'mdi-loyalty',
      icon: 'mdi-human',
      title: DRAWER.Staff,
      items: [
        {
          to: '/add-staff',
          icon: 'mdi-human-male',
          text: DRAWER.Add_Staff,
          branches: ['recon_force_people'],
          permissions: ['recon_staff_creator']
        },
        {
          to: '/staffs',
          icon: 'mdi-clipboard-outline',
          text: DRAWER.List_Staff,
          branches: ['recon_force_people']
        },
        {
          to: '/update-staffs-unit/',
          icon: 'mdi-clipboard-outline',
          text: DRAWER.Staff_Update_Unit,
          branches: ['recon_force_people'],
          permissions: ['recon_staff_creator']
        },
        {
          to: '/staff-change-of-units',
          icon: 'mdi-clipboard-outline',
          text: DRAWER.List__Staff_Change_Of_Units,
          branches: ['recon_force_people'],
          permissions: ['recon_staff_creator']
        }
      ],
      branches: ['recon_force_people']
    },
    {
      actions: 'mdi-loyalty',
      icon: 'mdi-map',
      title: DRAWER.Units,
      items: [
        {
          to: '/add-unit',
          icon: 'mdi-map-marker-plus',
          text: DRAWER.Add_Unit,
          branches: ['recon_force_people'],
          permissions: ['recon_people_creator']
        },
        {
          to: '/units',
          icon: 'mdi-map-search',
          text: DRAWER.List_Units,
          branches: ['recon_force_people'],
          permissions: ['recon_people_creator']
        }
      ],
      branches: ['recon_force_people']
    },
    {
      actions: 'mdi-loyalty',
      icon: 'mdi-chart-line',
      title: DRAWER.Influences,
      items: [
        {
          to: '/influences/add',
          icon: 'mdi-shape-plus',
          text: DRAWER.Add_Influences,
          branches: ['recon_force_people'],
          permissions: ['recon_influences_creator']
        },
        {
          to: '/influences/view',
          icon: 'mdi-format-list-bulleted-type',
          text: DRAWER.Show_Influences,
          branches: ['recon_force_people'],
          permissions: ['recon_influences_creator', 'recon_influences_editor']
        }
      ],
      branches: ['recon_force_people'],
      permissions: ['recon_influences_creator', 'recon_influences_editor']
    },
    {
      actions: 'mdi-loyalty',
      icon: 'mdi-security',
      title: DRAWER.Clearnces,
      items: [
        {
          to: '/clearances/add',
          icon: 'mdi-lock-plus',
          text: DRAWER.Add_Clearances,
          branches: ['recon_force_people'],
          permissions: ['recon_clearance_creator']
        },
        {
          to: '/clearances/view',
          icon: 'mdi-format-list-bulleted-type',
          text: DRAWER.Show_Clearances,
          branches: ['recon_force_people'],
          permissions: ['recon_clearance_creator', 'recon_clearance_editor']
        }
      ],
      branches: ['recon_force_people'],
      permissions: ['recon_clearance_creator', 'recon_clearance_editor']
    },
    {
      actions: 'mdi-inbox-arrow-down',
      icon: 'mdi-email-box',
      title: DRAWER.Inbox,
      items: [
        {
          to: '/followup/inbox/add',
          icon: 'mdi-email-edit-outline',
          text: DRAWER.Add_Inbox
        },
        {
          to: '/followup/inbox/pending-mails',
          icon: 'mdi-email-multiple-outline',
          text: DRAWER.Show_Undistributed_Inbox
        },
        {
          to: '/followup/inbox/mails',
          icon: 'mdi-email-open-multiple-outline',
          text: DRAWER.Show_Distributed_Inbox
        },
        {
          to: '/followup/inbox/follow-mails?follow=true',
          icon: 'mdi-email-alert',
          text: DRAWER.Show_Followup_Inbox
        }
      ],
      branches: ['followup']
    },
    {
      actions: 'mdi-loyalty',
      icon: 'mdi-email-outline',
      title: DRAWER.Outbox,
      items: [
        {
          to: '/followup/outbox/add',
          icon: 'mdi-email-edit-outline',
          text: DRAWER.Add_Outbox
        },
        {
          to: '/followup/outbox/mails',
          icon: 'mdi-email-open-multiple-outline',
          text: DRAWER.Show_Distributed_Outbox
        }
      ],
      branches: ['followup']
    },
    {
      actions: 'mdi-inbox-arrow-down',
      icon: 'mdi-assistant',
      title: DRAWER.Add_Followup_Codes,
      items: [
        {
          to: '/followup/codes/show',
          icon: 'mdi-human-male',
          text: DRAWER.Show_Codes
        },
        {
          to: '/followup/codes/add-directions',
          icon: 'mdi-human-male',
          text: DRAWER.Add_Directions
        },
        {
          to: '/followup/codes/add-word-mules',
          icon: 'mdi-human-male',
          text: DRAWER.Add_Word_Mules
        },
        {
          to: '/followup/codes/add-branches',
          icon: 'mdi-human-male',
          text: DRAWER.Add_Branches
        },
        {
          to: '/followup/codes/add-categories',
          icon: 'mdi-human-male',
          text: DRAWER.Add_Categories
        }
      ],
      branches: ['followup']
    },
    {
      actions: 'mdi-inbox',
      icon: 'mdi-inbox-arrow-down',
      title: DRAWER.Inbox_Only,
      items: [
        {
          to: '/inbox/unseen-mails',
          icon: 'mdi-new-box',
          text: DRAWER.Show_New_Inbox
        },
        {
          to: '/inbox/seen-mails',
          icon: 'mdi-comment-eye',
          text: DRAWER.Show_Seen_Inbox
        },
        {
          to: '/inbox/follow-mails?follow=true',
          icon: 'mdi-email-alert',
          text: DRAWER.Show_Followup_Inbox
        }
      ],
      followup: true
    },
    {
      actions: 'mdi-loyalty',
      icon: 'mdi-arrow-up-bold-box-outline',
      title: DRAWER.Outbox_Only,
      items: [
        {
          to: '/outbox/mails',
          icon: 'mdi-email-variant',
          text: DRAWER.Show_Outbox
        }
      ],
      followup: true
    },
    {
      actions: 'mdi-inbox-arrow-down',
      icon: 'mdi-assistant',
      title: DRAWER.Add_Followup_Codes,
      items: [
        {
          to: '/individuals/codes/show',
          icon: 'mdi-human-male',
          text: DRAWER.Show_Codes
        }
      ],
      branches: ['recon_force_people']
    },
    {
      actions: 'mdi-inbox-arrow-down',
      icon: 'mdi-human',
      title: DRAWER.Addd_Admin_Codes,
      items: [],
      permissions: ['admin']
    }
  ],
  Directions: [{ ar: 'قيادة المنطقة المركزية العسكرية', value: 'c.m.c' }]
};
