const db = require('../models');
const Feedback = db.feedbacks;
const UserFeedback = db.userFeedbacks;

exports.getAllFeedback = async (req, res) => {
    try {
        const feedbacks = await Feedback.findAll();
        return res.status(200).send(feedbacks);
    } catch (err) {
        return res.status(400).send({ 'message': `error get feedback: ${err}` });
    }
}

exports.getFeedbackWithResponse = async (req, res) => {
    try {
        const feedbacks = await Feedback.findAll({
            include: [
                { 
                    model: UserFeedback
                }
            ]
        });
        return res.status(200).send(feedbacks);
    } catch (err) {
        return res.status(400).send({ 'message': `error get myFeedback: ${err}` });
    }
}

exports.createFeedback = async (req, res) => {
    try {
        const feedback = await Feedback.create({
            question: req.body.question,
            type: req.body.type
        });
        return res.status(200).send(feedback);
    } catch (err) {
        return res.status(400).send({ 'message': `error creating feedback: ${err}` });
    }
}

exports.updateById = async (req, res) => {
    try {
        const feedback = await Feedback.findOne({
            where: {
                id: req.params.id
            }
        });
        if (!feedback)
            return res.status(400).send({ 'message': 'feedback not found' });
        await feedback.update({
            question: req.body.question,
            type: req.body.type
        });
        return res.status(200).send({
            'message': 'feedback updated',
            'data': feedback
        });
    } catch (err) {
        return res.status(400).send({ 'message': `error update feedback: ${err}` });
    }
}

exports.deleteById = async (req, res) => {
    try {
        await Feedback.destroy({
            where: {
                id: req.params.id
            }
        });
        return res.status(200).send({ 'message': `quest deleted` });
    } catch (err) {
        return res.status(400).send({ 'message': `error creating feedback: ${err}` });
    }
}