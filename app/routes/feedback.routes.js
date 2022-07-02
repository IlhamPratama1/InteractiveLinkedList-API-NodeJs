const controller = require('../controllers/feedback.controller');
const { authJwt } = require('../middleware');
const router = require('express').Router();

router.get('/all', controller.getAllFeedback);
router.post('/create',controller.createFeedback);
router.put('/update/:id', controller.updateById);
router.delete('/delete/:id', controller.deleteById);

module.exports = router;