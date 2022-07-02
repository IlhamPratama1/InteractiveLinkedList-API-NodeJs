const db = require('../models');
const UserFeedback = db.userFeedbacks;

exports.getMyFeedback = async (req, res) => {
    try {
        const userFeedbacks = await UserFeedback.findAll({
            where: {
                userId: req.userId
            }
        });
        return res.status(200).send(userFeedbacks);
    } catch (err) {
        return res.status(400).send({ 'message': `error get myFeedback: ${err}` });
    }
}

exports.bulkUserFeedback = async (req, res) => {
    try {
        const bulkFeedback = await UserFeedback.bulkCreate(req.body.data
        ,{
            updateOnDuplicate: ["answer", "userId", "feedbackId"],
        });
        return res.status(200).send(bulkFeedback);
    } catch (err) {
        return res.status(400).send({ 'message': `error create bulk myFeedback: ${err}` });
    }
}

