const middleware = {}

middleware['auth'] = require('../middleware/auth.js')
middleware['auth'] = middleware['auth'].default || middleware['auth']

middleware['cart'] = require('../middleware/cart.js')
middleware['cart'] = middleware['cart'].default || middleware['cart']

middleware['isAdmin'] = require('../middleware/isAdmin.js')
middleware['isAdmin'] = middleware['isAdmin'].default || middleware['isAdmin']

middleware['isHouseOwner'] = require('../middleware/isHouseOwner.js')
middleware['isHouseOwner'] = middleware['isHouseOwner'].default || middleware['isHouseOwner']

middleware['isLoggedIn'] = require('../middleware/isLoggedIn.js')
middleware['isLoggedIn'] = middleware['isLoggedIn'].default || middleware['isLoggedIn']

middleware['isNotLoggedIn'] = require('../middleware/isNotLoggedIn.js')
middleware['isNotLoggedIn'] = middleware['isNotLoggedIn'].default || middleware['isNotLoggedIn']

export default middleware
