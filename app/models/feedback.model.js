module.exports = (sequelize, Sequelize) => {
    const Feedback = sequelize.define('feedbacks', {
        question: {
            type: Sequelize.STRING,
            allowNull: false
        },
        type: {
            type: Sequelize.STRING,
            allowNull: false
        }
    });

    return Feedback;
}