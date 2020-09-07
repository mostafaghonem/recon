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
      value: 'information_systems',
      ar: 'نظم المعلومات'
    },
    {
      value: 'recon_force_people',
      ar: 'أفراد الجهاز'
    },
    {
      value: 'officer_affairs',
      ar: 'شئون ضباط'
    },
    {
      value: 'operations',
      ar: 'العمليات'
    },
    {
      value: 'training',
      ar: 'التدريب'
    },
    {
      value: 'signal_corps',
      ar: 'الإشارة'
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
    }
  ]
};
