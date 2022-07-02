module.exports = (sequelize, Sequelize) => {
    const UserQuiz = sequelize.define("user_quizzes", {
        result: {
            type: Sequelize.INTEGER,
            allowNull: true
        }
    });

    return UserQuiz;
}