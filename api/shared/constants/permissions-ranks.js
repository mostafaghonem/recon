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
      ar: 'سكرتارية ومتابعة'
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
      value: 'staff_seargent',
      ar: 'صف ضابط'
    },
    {
      value: 'officer',
      ar: 'ضابط'
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
      icon: 'mdi-view-dashboard',
      title: DRAWER.Dashboard,
      items: [
        {
          to: '/dashboard',
          icon: 'mdi-newspaper',
          text: DRAWER.News
        }
      ]
    },
    {
      actions: 'user',
      icon: 'mdi-account',
      title: DRAWER.Users,
      items: [
        {
          to: '/add-user',
          icon: 'mdi-account-plus',
          text: DRAWER.Add_User,
          permissions: ['admin', 'branch_head']
        },
        {
          to: '/users',
          icon: 'mdi-account',
          text: DRAWER.List_Users,
          permissions: ['admin', 'branch_head']
        }
      ],
      permissions: ['admin', 'branch_head']
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
          branches: ['recon_force_people']
        },
        {
          to: '/soldiers',
          icon: 'mdi-clipboard-outline',
          text: DRAWER.List_Soldier,
          branches: ['recon_force_people']
        },
        {
          to: '/change-of-units',
          icon: 'mdi-clipboard-outline',
          text: DRAWER.List_Change_Of_Units,
          branches: ['recon_force_people']
        }
      ],
      branches: ['recon_force_people']
    },
    {
      actions: 'mdi-inbox-arrow-down',
      icon: 'mdi-human',
      title: DRAWER.Inbox,
      items: [
        {
          to: '/followup/inbox/add',
          icon: 'mdi-human-male',
          text: DRAWER.Add_Inbox
        },
        {
          to: '/followup/inbox/pending-mails',
          icon: 'mdi-human-male',
          text: DRAWER.Show_Undistributed_Inbox
        }
      ],
      branches: ['followup']
    },
    {
      actions: 'mdi-loyalty',
      icon: 'mdi-human',
      title: DRAWER.Outbox,
      items: [
        {
          to: '/followup/outbox/add',
          icon: 'mdi-human-male',
          text: DRAWER.Add_Outbox
        },
        {
          to: '/followup/outbox/pending-mails',
          icon: 'mdi-human-male',
          text: DRAWER.Show_Undistributed_Outbox
        }
      ],
      branches: ['followup']
    },
    {
      actions: 'mdi-inbox-arrow-down',
      icon: 'mdi-human',
      title: DRAWER.Add_Followup_Codes,
      items: [
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
        }
      ],
      branches: ['followup']
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
