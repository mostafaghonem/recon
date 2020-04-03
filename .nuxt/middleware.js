const middleware = {}

middleware['auth'] = require('../middleware/auth.js')
middleware['auth'] = middleware['auth'].default || middleware['auth']

middleware['isAdmin'] = require('../middleware/isAdmin.js')
middleware['isAdmin'] = middleware['isAdmin'].default || middleware['isAdmin']

middleware['isHouseOwner'] = require('../middleware/isHouseOwner.js')
middleware['isHouseOwner'] = middleware['isHouseOwner'].default || middleware['isHouseOwner']

export default middleware
