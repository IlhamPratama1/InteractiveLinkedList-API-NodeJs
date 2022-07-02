const controller = require('../controllers/userFeedback.controller');
const { authJwt } = require('../middleware');
const router = require('express').Router();

router.get('/all',[ authJwt.verifyToken, authJwt.isUser ], controller.getMyFeedback);
router.post('/create-update', [ authJwt.verifyToken, authJwt.isUser ], controller.bulkUserFeedback);

module.exports = router;