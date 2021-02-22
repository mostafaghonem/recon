const middleware = {}

middleware['auth'] = require('..\\middleware\\auth.js');
middleware['auth'] = middleware['auth'].default || middleware['auth']

middleware['authentication'] = require('..\\middleware\\authentication.js');
middleware['authentication'] = middleware['authentication'].default || middleware['authentication']

middleware['isAdmin'] = require('..\\middleware\\isAdmin.js');
middleware['isAdmin'] = middleware['isAdmin'].default || middleware['isAdmin']

middleware['isAuthorized'] = require('..\\middleware\\isAuthorized.js');
middleware['isAuthorized'] = middleware['isAuthorized'].default || middleware['isAuthorized']

middleware['isLoggedIn'] = require('..\\middleware\\isLoggedIn.js');
middleware['isLoggedIn'] = middleware['isLoggedIn'].default || middleware['isLoggedIn']

middleware['isNotLoggedIn'] = require('..\\middleware\\isNotLoggedIn.js');
middleware['isNotLoggedIn'] = middleware['isNotLoggedIn'].default || middleware['isNotLoggedIn']

middleware['redirectToHome'] = require('..\\middleware\\redirectToHome.js');
middleware['redirectToHome'] = middleware['redirectToHome'].default || middleware['redirectToHome']

export default middleware
