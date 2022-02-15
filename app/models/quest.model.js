module.exports = (sequelize, Sequelize) => {
    const Quest = sequelize.define("quests", {
        title: {
            type: Sequelize.string,
            allowNull: false
        },
        type: {
            type: Sequelize.string,
            allowNull: false
        }
    });

    return Quest;
}