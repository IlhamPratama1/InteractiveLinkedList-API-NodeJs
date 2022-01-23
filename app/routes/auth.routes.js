const controller = require('../controllers/auth.controller');
const { authValidation } = require('../middleware/index');
const router = require('express').Router()

router.post('/signup', [ authValidation.checkUsernameAndEmail, authValidation.checkRolesExisted ], controller.signup);
router.post('/signin', controller.signin);

module.exports = router;