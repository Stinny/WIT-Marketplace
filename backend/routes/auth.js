const router = require('express').Router();
const auth = require('../controllers/auth');

//this is where authentication routes will be defined
router.post('/register', auth.register);
router.post('/login', auth.login);

module.exports = router;
