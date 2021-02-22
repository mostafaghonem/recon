const FORCES_LIST = require('./forces');
const {
  Permissions,
  Ranks,
  Branches,
  Directions
} = require('./permissions-ranks');

module.exports = {
  PERMISSIONS: Permissions,
  RANKS: Ranks,
  BRANCHES: Branches,
  DIRECTIONS: Directions,
  ObjectIdPattern: /^[0-9a-fA-F]{24}$/,
  PAGINATION: {
    LIMIT: 10,
    LAST_ID: '000000000000'
  },
  REQUEST_STATUS: {
    PENDING: 'pending',
    ACCEPTED: 'accepted',
    REJECTED: 'rejected'
  },
  REQUEST_RESPONSE: {
    ACCEPTED: 'accepted',
    REJECTED: 'rejected'
  },
  REQUEST_TYPES: {
    EDIT: 'edit',
    ADD: 'add'
  },
  ADMIN_EVENT_TYPES: {},
  EVENTS_TYPES: {
    ADMIN_NOTIFICATIONS_COUNT: 'admin_notifications_count',
    USER_NOTIFICATIONS_COUNT: 'renter_notifications_count'
  },
  SORT_KEYS: {
    UPDATED_AT: 'updatedAt',
    CREATED_AT: 'createdAt',
    _ID: '_id'
  },
  SORT_VALUES: {
    ASC: 1,
    DESC: -1
  },
  EDUCATION_RANKS_KEYS: {
    NORMAL: 'normal',
    AVERAGE: 'average',
    ABOVE_AVERAGE: 'above_average',
    HIGH: 'high'
  },
  PERMISSIONS_KEYS: {
    SOLDIER: 'sodlier',
    STAFF_SEARGENT: 'staff_seargent',
    OFFICER: 'officer',
    BRANCH_HEAD: 'branch_head',
    MASTER_HEAD: 'master_head',
    ADMIN: 'admin'
  },
  RECRUITMENT_LEVELS_KEYS: {
    FIRST: 'first',
    SECOND: 'second',
    THIRD: 'third',
    FOURTH: 'fourth'
  },
  FORCES_LIST_KEYS: {
    INTELLIGENCE_AND_RECON: 'intelligence_and_recon',
    RECON: 'recon',
    AIR_DEFENCE: 'air_defence'
  },
  ARMY_LIST_KEYS: {
    General_Headquarter: 'general_headquarter',
    Republican_Guard: 'republican_guard',
    Central_District: 'central_district',
    Northern_District: 'northern_district',
    Southern_District: 'southern_district',
    Western_District: 'western_district',
    Second_Field_Army: 'second_field_army',
    Third_Field_Army: 'third_field_army',
    Millitary_College: 'millitary_colleg',
    SWAT: 'swat'
  },
  MAIL_ACTIONS_KEYS: {
    execution: 'execution',
    show: 'show',
    knowledge: 'knowledge',
    answer: 'answer'
  },
  SITUATIONS_KEYS: {
    INT_TRANSFERRED: 'int_transferred',
    PHYSICAL: 'physical',
    REMOVED: 'removed'
  },
  TREATMENTS_KEYS: {
    WITHOUT_EXTRA_YEAR: 'without_extra_uear',
    WITH_EXTRA_YEAR_APPLICABLE_FOR_REMOVAL:
      'with_extra_year_applicable_for_removal',
    WITH_EXTRA_YEAR_NOT_APPLICABLE_FOR_REMOVAL:
      'with_extra_year_not_applicable_for_removal'
  },
  DIVISION_TYPES: {
    DIVISION: 'division',
    BRIGADE: 'brigade',
    BATTALION: 'battalion',
    COMPANY: 'company'
  },
  MAILTYPES: [
    { value: 'mail', ar: 'بريد' },
    { value: 'email', ar: 'تراسل' },
    { value: 'fax', ar: 'فاكس' }
  ],
  Influence_TYPES: [{}],
  CONSTANT_TYPES: ['branches', 'directions', 'word_mules', 'categories'],
  MAIL_ACTIONS: [
    {
      ar: 'تنفيذ',
      value: 'execution'
    },
    {
      ar: 'عرض',
      value: 'show'
    },
    {
      ar: 'للعلم',
      value: 'knowledge'
    },
    {
      ar: 'واجب الرد',
      value: 'answer'
    }
  ],
  RECRUITMENT_LEVELS: [
    {
      value: 'first',
      ar: 'الأولى'
    },
    {
      value: 'second',
      ar: 'الثانية'
    },
    {
      value: 'third',
      ar: 'الثالثة'
    },
    {
      value: 'fourth',
      ar: 'الرابعة'
    }
  ],
  FORCES_LIST,
  ARMY_LIST: [
    {
      ar: 'الرئاسة العامة',
      value: 'general_headquarter'
    },
    {
      ar: 'الحرس الجمهورى',
      value: 'republican_guard'
    },
    {
      ar: 'المنطقة المركزية',
      value: 'central_district'
    },
    {
      ar: 'الجيش الثانى الميدانى',
      value: 'second_field_army'
    },
    {
      ar: 'الجيش الثالث الميدانى',
      value: 'third_field_army'
    },
    {
      ar: 'المنطقة الغربية',
      value: 'western_district'
    },
    {
      ar: 'المنطقة الشمالية',
      value: 'northern_district'
    },
    {
      ar: 'المنطقة الجنوبية',
      value: 'southern_district'
    },
    {
      ar: 'الكلية الحربية',
      value: 'millitary_colleg'
    },
    {
      ar: 'التدخل السريع',
      value: 'swat'
    },
    {
      ar: 'قيادة قوات شرق القناه',
      value: 'eastern_of_channel_forces'
    }
  ],
  SITUATIONS: [
    {
      value: 'without',
      ar: 'بدون'
    },
    {
      value: 'int_transferred',
      ar: 'محول مخ'
    },
    {
      value: 'physical',
      ar: 'طبى'
    },
    {
      ar: 'شطب',
      value: 'removed'
    },
    {
      ar: 'خارج السلاح',
      value: 'outside_of_force'
    }
  ],
  EDUCATION_RANKS: [
    {
      value: 'high',
      ar: 'عليا',
      code: '2'
    },

    {
      value: 'above_average',
      ar: 'فوق متوسطة',
      code: '8'
    },
    {
      value: 'average',
      ar: 'متوسطة',
      code: '1'
    },
    {
      value: 'normal',
      ar: 'عادة',
      code: '0'
    }
  ],
  EDUCATION_RANKS_ALL: [
    {
      value: 'normal',
      ar: 'عادة',
      code: '0'
    },
    {
      value: 'average',
      ar: 'متوسطة',
      code: '1'
    },
    {
      value: 'above_average',
      ar: 'فوق متوسطة',
      code: '8'
    },
    {
      value: 'high',
      ar: 'عليا',
      code: '2'
    },
    {
      value: 'volunteer',
      ar: 'متطوع',
      code: '3'
    },
    {
      value: 'volunteer',
      ar: 'متطوع',
      code: '3'
    },
    {
      value: 'volunteer',
      ar: 'متطوع',
      code: '3'
    },
    {
      value: 'female',
      ar: 'خ.ط/إناث',
      code: '4'
    },
    {
      value: 'female',
      ar: 'سائقين',
      code: '5'
    },
    {
      value: 'female',
      ar: 'مكلف',
      code: '6'
    },
    {
      value: 'female',
      ar: 'ض/إحتياط',
      code: '7'
    }
  ],
  TREATMENTS: [
    {
      value: 'without_extra_year',
      ar: 'بدون سنة زيادة'
    },
    {
      value: 'with_extra_year_applicable_for_removal',
      ar: 'بسنة زيادة قابلة للرفع'
    },
    {
      value: 'with_extra_year_not_applicable_for_removal',
      ar: 'بسنة زيادة غير قابلة للرفع'
    }
  ],
  INFLUENCES_CATEGORIES: [
    {
      ar: 'ترقي / عزل',
      value: 'ranking'
    },
    {
      ar: 'التأهيل',
      value: 'training'
    },
    {
      ar: 'السفر والمأموريات',
      value: 'travelling'
    },
    {
      ar: 'رخصة السواقة',
      value: 'drivers_license',
      vehiclesOnly: true
    },
    {
      ar: 'إخطار عودة / هروب',
      value: 'fugitives'
    },
    {
      ar: 'التعليم',
      value: 'literacy'
    }
  ],
  INFLUENCES_TYPES: [
    {
      ar: 'ترقي',
      value: 'promotion',
      category: 'ranking'
    },
    {
      ar: 'إلغاء ترقي',
      value: 'demotion',
      category: 'ranking'
    },
    {
      ar: 'عزل',
      value: 'executiton',
      category: 'ranking'
    },
    {
      ar: 'ترقي إستثنائى',
      value: 'executiton',
      category: 'ranking'
    },
    {
      ar: 'التأهيل',
      value: 'training',
      category: 'training'
    },
    {
      ar: 'السفر',
      value: 'travelling',
      category: 'travelling'
    },
    {
      ar: 'رخصة السواقة',
      value: 'drivers_license',
      category: 'drivers_license',
      vehiclesOnly: true
    },
    {
      ar: 'إخطار هروب',
      value: 'flee',
      category: 'fugitives'
    },
    {
      ar: 'إخطار عودة',
      value: 'comeback',
      category: 'fugitives'
    },
    {
      ar: 'إخطار عودة',
      value: 'comeback',
      category: 'fugitives'
    },
    {
      ar: 'عقوبات',
      value: 'punishments',
      category: 'punishments'
    },
    {
      ar: 'التعليم',
      value: 'literacy',
      category: 'literacy'
    }
  ]
};
