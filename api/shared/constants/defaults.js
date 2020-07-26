module.exports = {
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
  EDUCATION_RANKS: {
    NORMAL: 'normal',
    AVERAGE: 'average',
    ABOVE_AVERAGE: 'above_average',
    HIGH: 'high'
  },
  PERMISSIONS: {
    SOLDIER: 'renter',
    STAFF_SEARGENT: 'staff_seargent',
    OFFICER: 'officer',
    BRANCH_HEAD: 'branch_head',
    MASTER_HEAD: 'master_head',
    ADMIN: 'admin'
  },
  RECRUITMENT_LEVELS: {
    FIRST: 'first',
    SECOND: 'second',
    THIRD: 'third',
    FOURTH: 'fourth'
  },
  FORCES: {
    INTELLIGENCE_AND_RECON: 'intelligence_and_recon',
    RECON: 'recon'
  },
  SITUATIONS: {
    // eslint-disable-next-line no-undef
    INT_TRANSFERRED: 'int_transferred',
    PHYSICAL: 'physical',
    REMOVED: 'removed'
  }
};
