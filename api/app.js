const express = require('express');

const app = express();

require('dotenv').config({ path: `${process.env.NODE_ENV}.env` });

require('./startup/db').connect();
require('./startup/handleErrors')();
require('./startup/middlewares')(app);
require('./startup/routes')(app);

module.exports = app;

// ! example and will be removed
// const { UserEntity } = require('./components/User/Entity');
// setTimeout(async () => {
//   try {
//     const newUser = new UserEntity({
//       fullName: 'Mohamed gamal',
//       birthDateTs: new Date('9/4/1996').getTime(),
//       email: 'mohmeds.aaa@gmail.cm',
//       gender: 'male',
//       government: 'Damietta',
//       image: 'sample image',
//       phone: '+25455588',
//       job: { type: 'employee', description: 'work at 04' }
//     });

//     newUser.setPassword('12451245');

//     await newUser.save();
//     console.log('ddddddddddddddddddddddd', newUser.toJson());
//   } catch (error) {
//     console.log('eeeeeeeeeeeeee', error);
//   }
// }, 500);
// const e = await UserEntity.loadEntityFromDbById('507f191e810c19729de860ea');
