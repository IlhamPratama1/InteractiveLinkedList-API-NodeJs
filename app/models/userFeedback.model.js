module.exports = (sequelize, Sequelize) => {
    const SserFeedback = sequelize.define('user_feedbacks', {
        answer: {
            type: Sequelize.TEXT,
            allowNull: true
        }
    });

    return SserFeedback;
}