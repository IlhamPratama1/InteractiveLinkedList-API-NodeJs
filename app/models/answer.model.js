module.exports = (sequelize, Sequelize) => {
    const Answer = sequelize.define("answers", {
        answer: {
            type: Sequelize.STRING,
            allowNull: false
        }
    });

    return Answer;
}