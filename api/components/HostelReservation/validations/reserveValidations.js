const { Builder: ___, ValidatorHelper: __ } = require('validation-helpers');

module.exports = ({ _, Builder = ___, ValidatorHelper = __ }) => ({ body }) => {
  const error = {};

  const start = new Date();
  start.setHours(0, 0, 0, 0);

  const scheme = {
    hostelId: {
      value: body.hostelId,
      rules: new Builder().required().isMongoObjectId().rules
    },
    fromts: {
      value: body.fromts,
      rules: new Builder()
        .required()
        .isNumber()
        .min(start.getTime() - 1).rules
    },
    tots: {
      value: body.tots,
      rules: new Builder()
        .required()
        .isNumber()
        .min(body.fromts ? +body.fromts + 86399900 : 1).rules
    },
    totalPrice: {
      value: body.totalPrice,
      rules: new Builder()
        .required()
        .isNumber()
        .min(1).rules
    },
    shouldPayPrice: {
      value: body.shouldPayPrice,
      rules: new Builder()
        .required()
        .isNumber()
        .min(1).rules
    },
    totalReservedCount: {
      value: body.totalReservedCount,
      rules: new Builder()
        .required()
        .isNumber()
        .min(1).rules
    },

    rooms: {
      value: body.rooms,
      rules: new Builder().required().isArray(1, 50000).rules
    }
  };

  if (body.rooms && Array.isArray(body.rooms)) {
    body.rooms.forEach((room, idx) => {
      scheme[`rooms.${idx}.groupId`] = {
        value: room.groupId,
        rules: new Builder().required().isMongoObjectId().rules
      };
      scheme[`rooms.${idx}.roomType`] = {
        value: room.roomType,
        rules: new Builder().required().rules
      };
      scheme[`rooms.${idx}.roomName`] = {
        value: room.roomName,
        rules: new Builder().required().rules
      };
      scheme[`rooms.${idx}.pricePerRoom`] = {
        value: room.pricePerRoom,
        rules: new Builder()
          .required()
          .isNumber()
          .min(1).rules
      };
      scheme[`rooms.${idx}.totalReservedCount`] = {
        value: room.totalReservedCount,
        rules: new Builder()
          .required()
          .isNumber()
          .min(1).rules
      };
      scheme[`rooms.${idx}.totalPrice`] = {
        value: room.totalPrice,
        rules: new Builder()
          .required()
          .isNumber()
          .min(1).rules
      };
    });
  }

  Object.keys(scheme).forEach(key => {
    const ele = scheme[key];
    const { errors, isValid } = ValidatorHelper(ele.value, ele.rules);
    if (!isValid) {
      error[key] = errors;
    }
  });

  return { error: _.isEmpty(error) ? undefined : error };
};
