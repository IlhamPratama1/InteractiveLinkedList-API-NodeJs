module.exports = (sequelize, Sequelize) => {
    const SserFeedback = sequelize.define('user_feedbacks', {
        answer: {
            type: Sequelize.STRING,
            allowNull: true
        }
    });

    return SserFeedback;
}