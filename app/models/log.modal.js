module.exports = (sequelize, Sequelize) => {
    const Log = sequelize.define("logs", {
        data: {
            type: Sequelize.STRING,
            allowNull: true
        }
    });

    return Log;
}