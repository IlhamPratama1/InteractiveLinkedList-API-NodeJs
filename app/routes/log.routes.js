const controller = require('../controllers/log.controller');
const { authJwt } = require('../middleware');
const router = require('express').Router();

router.get('/all/:id', [ authJwt.verifyToken, authJwt.isUser ], controller.getByCodeId);
router.post('/create', [ authJwt.verifyToken, authJwt.isUser], controller.createLog);

module.exports = router;