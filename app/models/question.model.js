module.exports = (sequelize, Sequelize) => {
    const Question = sequelize.define("questions", {
        question: {
            type: Sequelize.TEXT,
            allowNull: false
        },
        isCorrectId: {
            type: Sequelize.INTEGER,
            allowNull: true
        }
    });

    return Question;
}