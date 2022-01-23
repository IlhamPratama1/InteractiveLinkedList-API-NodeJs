const db = require('../models');
const Log = db.logs;

exports.getByCodeId = async (req, res) => {
    try {
        const logs = await Log.findAll({ 
            where: {
                codeId: req.params.id
            }
        });
        if (!logs)
            return res.status(400).send({ 'message': `logs not found` });
        return res.status(200).send(logs);
    } catch (err) {
        return res.status(400).send({ 'message': `error get log data: ${err}` });
    }
}

exports.createLog = async (req, res) => {
    try {
        const log = await Log.create({
            data: req.body.data,
            codeId: req.body.codeId
        });
        return res.status(200).send({
            'message': "create log success",
            'data': log
        });
    } catch (err) {
        return res.status(400).send({ 'message': `error creating log: ${err}`});
    }
}