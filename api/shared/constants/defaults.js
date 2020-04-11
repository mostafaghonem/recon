module.exports = {
  ObjectIdPattern: /^[0-9a-fA-F]{24}$/,
  PAGINATION: {
    LIMIT: 10,
    LAST_ID: '000000000000'
  },
  PERMISSIONS: {
    RENTER: 'renter',
    HOUSE_OWNER: 'houseOwner',
    SALES: 'sales',
    ADMIN: 'admin'
  },
  GENDER_TYPES: {
    MALE: 'male',
    FEMALE: 'female'
  },
  JOB_TYPES: {
    STUDENT: 'student',
    EMPLOYEE: 'employee',
    RENTER: 'renter'
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
  SMS: {
    USERNAME: 'skn@epusheg.com',
    PASSWORD: '2020skn',
    ID: 'SKN'
  },
  UnitReservationState: {
    SEND: 'send',
    ACCEPT_BY_ADMIN: 'accept_by_admin',
    ACCEPT_BY_OWNER: 'accept_by_owner',
    PENDING: 'pending',
    PAYED: 'payed',
    RECEIVED: 'received',
    REFUSED: 'refused'
  },
  UNIT_TYPES: {
    BED: 'bed',
    ROOM: 'room',
    APPARTEMENT: 'appartement'
  },
  UNIT_SERVICES: {
    BUTANE: 'butane',
    HEATER: 'heater',
    TV: 'tv',
    AIR_CONDITIONING: 'air_conditioning',
    FRIDGE: 'fridge',
    BED: 'bed',
    BATHTUB: 'bathtub',
    COFFE_MACHINE: 'coffe_machine',
    DESK: 'desk',
    DISHWASHER: 'dishwasher',
    CLOSET: 'closet',
    MICROWAVE: 'microwave',
    GARAGE: 'garage',
    WASHING_MACHINE: 'washing_machine',
    WIFI: 'wifi'
  },
  FREESERVICES: {
    FREE_AIRPORT_TRANSFERS: 'free_airport_transfers',
    FREE_PARKING: 'free_parking',
    LUGGAGE_STORAGE: 'luggage_storage',
    FREE_CITY_MAPS: 'free_city_maps',
    FREE_WIFI: 'free_wifi',
    TOWELS_INCLUDED: 'towels_included',
    FREE_CITY_TOUR: 'free_city_tour',
    FREE_INTERNET_ACCESS: 'free_internet_access',
    LOCKERS: 'lockers'
  },
  GENERALSERVICES: {
    AIRPORT_TRANSFERS: 'airport_transfers',
    BEAUTY_SALON: 'beauty_salon',
    DIRECT_DIAL_TELEPHONE: 'direct_dial_telephone',
    GYM: 'gym',
    INTERNET_CAFE: 'internet_cafe',
    LAUNDRY_FACILITIES: 'laundry_facilities',
    DISHWASHER: 'dishwasher',
    HAIRDRYERS: 'hairdryers',
    ADAPTORS: 'adaptors',
    BAR: 'bar',
    FREE_CITY_TOUR: 'free_city_tour',
    FRIDGE_FREEZER: 'fridge_freezer',
    AIR_CONDITIONING: 'air_conditioning',
    DRYER: 'dryer'
  },
  HOSTELSERVICES: {
    AIRPORT_TRANSFERS: 'airport_transfers',
    BREAKFAST_INCLUDED: 'breakfast_included',
    CAFE: 'cafe',
    DIRECT_DIAL_TELEPHONE: 'direct_dial_telephone',
    DVDS: 'dvds',
    GYM: 'gym',
    INTERNET_CAFE: 'internet_cafe',
    ATM: 'atm',
    ELEVATOR: 'elevator',
    BAR: 'bar',
    BICYCLE_PARKING: 'bicycle_parking',
    FREE_CITY_TOUR: 'free_city_tour',
    HAIRDRYERS_FOR_HIRE: 'hairdryers_for_hire',
    CURRENCY_EXCHANGE: 'currency_exchange',
    FAX_SERVICE: 'fax_service',
    LAUNDRY_FACILITIES: 'laundry_facilities',
    LUGGAGE_STORAGE: 'luggage_storage',
    MINI_SUPERMARKET: 'mini_supermarket',
    PARKING: 'parking',
    RECEPTION_LIMITED_HOURS: 'reception_limited_hours',
    SAFE_DEPOSIT_BOX: 'safe_deposit_box',
    MEALS_AVAILABLE: 'meals_available',
    POOL_TABLE: 'pool_table',
    TOWELS_INCLUDED: 'towels_included'
  },
  ENTERTAINMENTSERVICES: {
    BOARD_GAMES: 'board_games',
    GAMES_ROOM: 'games_room',
    DVDS: 'dvds',
    POOL_TABLE: 'pool_table'
  },
  FOODSERVICES: {
    BREAKFAST: 'breakfast',
    LAUNCH: 'launch',
    DINNER: 'dinner',
    ALL_INCLUSIVE: 'all_inclusive',
    TEA_COFFEE: 'tea_coffee',
    ALL_NOT_INCLUDED: 'all_not_included'
  },
  TOILET_TYPES: {
    INTERNAL: 'internal',
    EXTERNAL: 'external'
  },
  ROOMS_TYPES: {
    SINGLE: 'single',
    DOUBLE: 'double',
    TRIPLE: 'triple'
  },
  PRICE_PER: {
    DAY: 'day',
    MONTH: 'month'
  },
  CURRENCIES: {
    LE: 'le',
    USD: 'usd'
  },
  ROOMS_STATUS: {
    AVAILABLE: 'available',
    BOOKED: 'booked'
  },
  RENTERS_TYPES: {
    BOYS: 'boys',
    GIRLS: 'girls',
    FAMILY: 'family'
  },
  ADMIN_EVENT_TYPES: {
    ADMIN_NOTIFICATIONS_COUNT: 'admin_notifications_count',
    UNITS_REQUEST_ADD_UNIT: 'units_request_add_unit',
    UNITS_REQUEST_EDIT_UNIT: 'units_request_edit_unit',
    HOSTELS_REQUEST_ADD_HOSTEL: 'hostels_request_add_hostel',
    HOSTELS_REQUEST_EDIT_HOSTEL: 'hostels_request_edit_hostel'
  },
  EVENTS_TYPES: {
    ADMIN_NOTIFICATIONS_COUNT: 'admin_notifications_count',
    USER_NOTIFICATIONS_COUNT: 'renter_notifications_count',
    UNITS_REQUEST_ADD_UNIT: 'units_request_add_unit',
    UNITS_REQUEST_EDIT_UNIT: 'units_request_edit_unit',
    UNITS_REQUEST_ADD_UNIT_ACCEPTED: 'units_request_add_unit_accepted',
    UNITS_REQUEST_ADD_UNIT_REJECTED: 'units_request_add_unit_rejected',
    UNITS_REQUEST_EDIT_UNIT_ACCEPTED: 'units_request_edit_unit_accepted',
    UNITS_REQUEST_EDIT_UNIT_REJECTED: 'units_request_edit_unit_rejected',
    HOSTELS_REQUEST_ADD_HOSTEL: 'hostels_request_add_hostel',
    HOSTELS_REQUEST_EDIT_HOSTEL: 'hostels_request_edit_hostel',
    HOSTELS_REQUEST_ADD_HOSTEL_ACCEPTED: 'hostels_request_add_hostel_accepted',
    HOSTELS_REQUEST_ADD_HOSTEL_REJECTED: 'hostels_request_add_hostel_rejected',
    HOSTELS_REQUEST_EDIT_HOSTEL_ACCEPTED:
      'hostels_request_edit_hostel_accepted',
    HOSTELS_REQUEST_EDIT_HOSTEL_REJECTED: 'hostels_request_edit_hostel_rejected'
  },
  OBJECTS_TYPES: {
    UNIT: 'unit',
    HOTEL: 'hotel',
    HOSTEL: 'hostel',
    UNIT_REQUEST: 'unit_request',
    HOTEL_REQUEST: 'hotel_request',
    HOSTEL_REQUEST: 'hostel_request'
  },
  SORT_KEYS: {
    UPDATED_AT: 'updatedAt',
    CREATED_AT: 'createdAt',
    _ID: '_id'
  },
  SORT_VALUES: {
    ASC: 1,
    DESC: -1
  }
};
