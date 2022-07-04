const controller = require('../controllers/quiz.controller');
const { authJwt } = require('../middleware');
const router = require('express').Router();

router.post('/answer/create', controller.createAnswer);
router.delete('/answer/delete', controller.deleteAnswer);
router.get('/question/all', controller.getQuestion);
router.post('/question/create', controller.createQuestion);
router.delete('/question/delete', controller.deleteQuestion);
router.post('/create', [ authJwt.verifyToken, authJwt.isUser], controller.createUserQuiz);
router.get('/all', [ authJwt.verifyToken, authJwt.isUser], controller.getUserQuiz);

module.exports = router;