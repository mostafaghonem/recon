const recruitmentAreas = [
  {
    value: 'cairo',
    ar: 'القاهرة',
    code: '1'
  },
  {
    value: 'giza',
    ar: 'الجيزة',
    code: '2'
  },
  {
    value: 'alex',
    ar: 'الاسكندرية',
    code: '3'
  },
  {
    value: 'zakazik',
    ar: 'الزقازيق',
    code: '4'
  },
  {
    value: 'asiut',
    ar: 'اسيوط',
    code: '5'
  },
  {
    value: 'tanta',
    ar: 'طنطا',
    code: '6'
  },
  {
    value: 'qena',
    ar: 'قنا',
    code: '7'
  },
  {
    value: 'mansura',
    ar: 'المنصورة',
    code: '8'
  },
  {
    value: 'minya',
    ar: 'المنيا',
    code: '9'
  }
];

const governates = [
  {
    recruitment_area: recruitmentAreas.find(o => o.value === 'alex'),
    value: 'alex',
    ar: 'الإسكندرية',
    code: '02'
  },
  {
    recruitment_area: recruitmentAreas.find(o => o.value === 'qena'),
    value: 'aswan',
    ar: 'أسوان',
    code: '03'
  },
  {
    recruitment_area: recruitmentAreas.find(o => o.value === 'asiut'),
    value: 'asiut',
    ar: 'أسيوط',
    code: '25'
  },
  {
    recruitment_area: recruitmentAreas.find(o => o.value === 'alex'),
    value: 'albuhayra',
    ar: 'البحيرة',
    code: '18'
  },
  {
    recruitment_area: recruitmentAreas.find(o => o.value === 'minya'),
    value: 'beni suef',
    ar: 'بني سويف',
    code: '22'
  },
  {
    recruitment_area: recruitmentAreas.find(o => o.value === 'cairo'),
    value: 'cairo',
    ar: 'القاهرة',
    code: '01'
  },
  {
    recruitment_area: recruitmentAreas.find(o => o.value === 'cairo'),
    value: 'hilwan',
    ar: 'حلوان',
    code: '05'
  },
  {
    recruitment_area: recruitmentAreas.find(o => o.value === 'mansura'),
    value: 'dakahlia',
    ar: 'الدقهلية',
    code: '12'
  },
  {
    recruitment_area: recruitmentAreas.find(o => o.value === 'mansura'),
    value: 'damietta',
    ar: 'دمياط',
    code: '11'
  },
  {
    recruitment_area: recruitmentAreas.find(o => o.value === 'giza'),
    value: 'faiyum',
    ar: 'الفيوم',
    code: '23'
  },
  {
    recruitment_area: recruitmentAreas.find(o => o.value === 'tanta'),
    value: 'gharbia',
    ar: 'الغربية',
    code: '16'
  },
  {
    recruitment_area: recruitmentAreas.find(o => o.value === 'giza'),
    value: 'giza',
    ar: 'الجيزة',
    code: '21'
  },
  {
    recruitment_area: recruitmentAreas.find(o => o.value === 'zakazik'),
    value: 'ismailia',
    ar: 'الإسماعيلية',
    code: '19'
  },
  {
    recruitment_area: recruitmentAreas.find(o => o.value === 'mansura'),
    value: 'kafr_el_sheikh',
    ar: 'كفر الشيخ',
    code: '15'
  },
  {
    recruitment_area: recruitmentAreas.find(o => o.value === 'alex'),
    value: 'matrouh',
    ar: 'مطروح',
    code: '33'
  },
  {
    recruitment_area: recruitmentAreas.find(o => o.value === 'minya'),
    value: 'minya',
    ar: 'المنيا',
    code: '24'
  },
  {
    recruitment_area: recruitmentAreas.find(o => o.value === 'tanta'),
    value: 'menofia',
    ar: 'المنوفية',
    code: '17'
  },
  {
    recruitment_area: recruitmentAreas.find(o => o.value === 'asiut'),
    value: 'new_valley',
    ar: 'الوادي الجديد',
    code: '32'
  },
  {
    recruitment_area: recruitmentAreas.find(o => o.value === 'zakazik'),
    value: 'north_sinai',
    ar: 'شمال سيناء',
    code: '34'
  },
  {
    recruitment_area: recruitmentAreas.find(o => o.value === 'zakazik'),
    value: 'port_said',
    ar: 'بورسعيد',
    code: '03'
  },
  {
    recruitment_area: recruitmentAreas.find(o => o.value === 'cairo'),
    value: 'al_qalyubia',
    ar: 'القليوبية',
    code: '14'
  },
  {
    recruitment_area: recruitmentAreas.find(o => o.value === 'qena'),
    value: 'qena',
    ar: 'قنا',
    code: '27'
  },
  {
    recruitment_area: recruitmentAreas.find(o => o.value === 'qena'),
    value: 'red_sea',
    ar: 'البحر الأحمر',
    code: '31'
  },
  {
    recruitment_area: recruitmentAreas.find(o => o.value === 'zakazik'),
    value: 'ash_sharqia',
    ar: 'الشرقية',
    code: '13'
  },
  {
    recruitment_area: recruitmentAreas.find(o => o.value === 'asiut'),
    value: 'sohag',
    ar: 'سوهاج',
    code: '26'
  },
  {
    recruitment_area: recruitmentAreas.find(o => o.value === 'zakazik'),
    value: 'south sinai',
    ar: 'جنوب سيناء',
    code: '35'
  },
  {
    recruitment_area: recruitmentAreas.find(o => o.value === 'zakazik'),
    value: 'suez',
    ar: 'السويس',
    code: '04'
  },
  {
    recruitment_area: recruitmentAreas.find(o => o.value === 'qena'),
    value: 'luxor',
    ar: 'الأقصر',
    code: '29'
  },
  {
    recruitment_area: recruitmentAreas,
    value: 'outside_egypt',
    ar: 'خارج الجمهورية',
    code: '88'
  }
];

module.exports = {
  governates,
  recruitmentAreas
};
