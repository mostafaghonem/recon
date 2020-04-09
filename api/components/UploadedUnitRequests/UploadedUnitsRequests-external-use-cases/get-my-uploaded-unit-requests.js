// db.uploadedunitsrequests.aggregate(
//     [
//       { $sort: { updatedAt: -1 } },
//       {
//         $group:
//           {
//             _id: "$unitId",
//             type: { $first: "$type" },
//             note: { $first: "$note" },
//             updatedAt: { $first: "$updatedAt" },
//             status: { $first: "$status" },
//             update: { $first: "$update" },
//             requestId: { $first: "$_id" }
//           }
//       }, {
//         $sort:
//           {
//            updatedAt: -1
//           }
//       },  {
//         $match: {
//             updatedAt: {
//                 '$lt': ISODate("2020-04-08T19:24:06+02:00")
//             }
//         }
//       },  {
//         $limit: 6
//       }
//     ]
//  )
const model = require('../models');
// should have no implementation for any specific orm
module.exports = ({ ApplicationError }) => async ({
  userId,
  limit,
  rest,
  sortObj
}) => {
  const { requests, hasNext } = await model.getMyRequests(
    userId,
    limit,
    rest,
    sortObj
  );

  if (!requests) {
    throw new ApplicationError('Unable to get user own units requests');
  }

  if (requests && requests.length !== 0) {
    return { data: requests, hasNext };
  }
  return { data: [], hasNext: false };
};
