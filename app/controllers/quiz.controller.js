const db = require('../models');
const Answer = db.answers;
const Question = db.questions;
const UserQuiz = db.userQuizzes;

exports.createAnswer = async (req, res) => {
    try {
        const answer = await Answer.create({
            answer: req.body.answer
        });
        return res.status(200).send(answer);
    } catch (err) {
        return res.status(400).send({ 'message': `error create answer: ${err}` });
    }
}

exports.deleteAnswer = async (req, res) => {
    try {
        await Answer.destroy({
            where: {
                id: req.params.id
            }
        });
        return res.status(200).send({ 'message': `answer deleted` });
    } catch (err) {
        return res.status(400).send({ 'message': `error delete answer: ${err}` });
    }
}

exports.updateAnswer = async (req, res) => {
    try {
        const answer = await Answer.findByPk(req.params.id);
        if (!answer) return res.status(400).send({ 'message': `error get question:` });
        answer.answer = req.body.answer;
        await answer.save();
        return res.status(200).send(answer);
    } catch (err) {
        return res.status(400).send({ 'message': `error create question: ${err}` });        
    }
}

exports.getQuestion = async (req, res) => {
    try {
        const questions = await Question.findAll({
            include: [
                { 
                    model: db.answers,
                    through: { attributes: [] }
                }
            ]
        });
        return res.status(200).send(questions);
    } catch (err) {
        return res.status(400).send({ 'message': `error get question: ${err}` });
    }
}

exports.createQuestion = async (req, res) => {
    try {
        const question = await Question.create({
            question: req.body.question,
            isCorrectId: req.body.isCorrectId
        });
        question.setAnswers(req.body.answers);
        return res.status(200).send(question);
    } catch (err) {
        return res.status(400).send({ 'message': `error create question: ${err}` });
    }
}

exports.deleteQuestion = async (req, res) => {
    try {
        await Answer.destroy({
            where: {
                id: req.params.id
            }
        });
        return res.status(200).send({ 'message': `question deleted` });
    } catch (err) {
        return res.status(400).send({ 'message': `error question answer: ${err}` });
    }
}

exports.updateQuestion = async (req, res) => {
    try {
        const question = await Question.findByPk(req.params.id);
        if (!question) return res.status(400).send({ 'message': `error get question:` });
        question.isCorrectId = req.body.isCorrectId;
        await question.save();
        return res.status(200).send(question);
    } catch (err) {
        return res.status(400).send({ 'message': `error create question: ${err}` });        
    }
}

exports.createUserQuiz = async (req, res) => {
    try {
        let result = 0;
        let answers = req.body.answersId;
        const questions = await Question.findAll();
        for (let i = 0; i < questions.length; i++) {
            if (questions[i].isCorrectId === answers[i]) {
                result += 1;
            }
        }
        const userQuiz = await UserQuiz.create({
            result: Math.ceil(result * 100 / questions.length),
            userId: req.userId
        });
        return res.status(200).send(userQuiz);
    } catch (err) {
        return res.status(400).send({ 'message': `error create user quiz: ${err}` });
    }
}

exports.getUserQuiz = async (req, res) => {
    try {
        const userQuizzes = await UserQuiz.findAll({
            where: {
                userId: req.userId
            }
        });
        return res.status(200).send(userQuizzes);
    } catch (err) {
        return res.status(400).send({ 'message': `error get user quiz: ${err}` });
    }
}