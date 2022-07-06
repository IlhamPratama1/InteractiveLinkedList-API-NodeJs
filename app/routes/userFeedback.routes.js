const controller = require('../controllers/userFeedback.controller');
const { authJwt } = require('../middleware');
const router = require('express').Router();

router.get('/all-user', controller.getAllUserFeedback);
router.get('/all',[ authJwt.verifyToken, authJwt.isUser ], controller.getMyFeedback);
router.post('/create-update', [ authJwt.verifyToken, authJwt.isUser ], controller.bulkUserFeedback);
router.get('/filter/:id', controller.filterUserFeedback);

module.exports = router;