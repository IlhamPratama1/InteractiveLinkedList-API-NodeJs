const controller = require('../controllers/quiz.controller');
const { authJwt } = require('../middleware');
const router = require('express').Router();

router.post('/answer/create', controller.createAnswer);
router.delete('/answer/delete/:id', controller.deleteAnswer);
router.put('/answer/update/:id', controller.updateAnswer);
router.get('/question/all', controller.getQuestion);
router.post('/question/create', controller.createQuestion);
router.delete('/question/delete/:id', controller.deleteQuestion);
router.put('/question/update/:id', controller.updateQuestion);
router.get('/all', controller.getAllUserQuiz);
router.post('/create', [ authJwt.verifyToken, authJwt.isUser], controller.createUserQuiz);
router.post('/raw-create', controller.createRawUserQuiz);
router.delete('/delete/:id', controller.deleteUserQuiz);

module.exports = router;