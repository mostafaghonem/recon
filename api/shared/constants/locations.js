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
    ar: 'الإسكندرية'
  },
  {
    recruitment_area: recruitmentAreas.find(o => o.value === 'qena'),
    value: 'aswan',
    ar: 'أسوان'
  },
  {
    recruitment_area: recruitmentAreas.find(o => o.value === 'asiut'),
    value: 'asiut',
    ar: 'أسيوط'
  },
  {
    recruitment_area: recruitmentAreas.find(o => o.value === 'alex'),
    value: 'albuhayra',
    ar: 'البحيرة'
  },
  {
    recruitment_area: recruitmentAreas.find(o => o.value === 'minya'),
    value: 'beni suef',
    ar: 'بني سويف'
  },
  {
    recruitment_area: recruitmentAreas.find(o => o.value === 'cairo'),
    value: 'cairo',
    ar: 'القاهرة'
  },
  {
    recruitment_area: recruitmentAreas.find(o => o.value === 'cairo'),
    value: 'hilwan',
    ar: 'حلوان'
  },
  {
    recruitment_area: recruitmentAreas.find(o => o.value === 'mansura'),
    value: 'dakahlia',
    ar: 'الدقهلية'
  },
  {
    recruitment_area: recruitmentAreas.find(o => o.value === 'mansura'),
    value: 'damietta',
    ar: 'دمياط'
  },
  {
    recruitment_area: recruitmentAreas.find(o => o.value === 'giza'),
    value: 'faiyum',
    ar: 'الفيوم'
  },
  {
    recruitment_area: 'tanta',
    value: 'gharbia',
    ar: 'الغربية'
  },
  {
    recruitment_area: recruitmentAreas.find(o => o.value === 'giza'),
    value: 'giza',
    ar: 'الجيزة'
  },
  {
    value: 'ismailia',
    ar: 'الإسماعيلية'
  },
  {
    recruitment_area: recruitmentAreas.find(o => o.value === 'mansura'),
    value: 'kafr_el_sheikh',
    ar: 'كفر الشيخ'
  },
  {
    recruitment_area: recruitmentAreas.find(o => o.value === 'alex'),
    value: 'matrouh',
    ar: 'مطروح'
  },
  {
    recruitment_area: recruitmentAreas.find(o => o.value === 'minya'),
    value: 'minya',
    ar: 'المنيا'
  },
  {
    recruitment_area: recruitmentAreas.find(o => o.value === 'tanta'),
    value: 'menofia',
    ar: 'المنوفية'
  },
  {
    recruitment_area: recruitmentAreas.find(o => o.value === 'asiut'),
    value: 'new_valley',
    ar: 'الوادي الجديد'
  },
  {
    recruitment_area: recruitmentAreas.find(o => o.value === 'zakazik'),
    value: 'north_sinai',
    ar: 'شمال سيناء'
  },
  {
    recruitment_area: recruitmentAreas.find(o => o.value === 'zakazik'),
    value: 'port_said',
    ar: 'بورسعيد'
  },
  {
    recruitment_area: recruitmentAreas.find(o => o.value === 'cairo'),
    value: 'al_qalyubia',
    ar: 'القليوبية'
  },
  {
    recruitment_area: recruitmentAreas.find(o => o.value === 'qena'),
    value: 'qena',
    ar: 'قنا'
  },
  {
    recruitment_area: recruitmentAreas.find(o => o.value === 'qena'),
    value: 'red_sea',
    ar: 'البحر الأحمر'
  },
  {
    recruitment_area: recruitmentAreas.find(o => o.value === 'zakazik'),
    value: 'ash_sharqia',
    ar: 'الشرقية'
  },
  {
    recruitment_area: recruitmentAreas.find(o => o.value === 'asiut'),
    value: 'sohag',
    ar: 'سوهاج'
  },
  {
    recruitment_area: recruitmentAreas.find(o => o.value === 'zakazik'),
    value: 'south sinai',
    ar: 'جنوب سيناء'
  },
  {
    recruitment_area: recruitmentAreas.find(o => o.value === 'zakazik'),
    value: 'suez',
    ar: 'السويس'
  },
  {
    recruitment_area: recruitmentAreas.find(o => o.value === 'qena'),
    value: 'luxor',
    ar: 'الأقصر'
  }
];

module.exports = {
  governates,
  recruitmentAreas
};
